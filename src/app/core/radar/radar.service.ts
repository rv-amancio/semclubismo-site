import { isPlatformBrowser } from '@angular/common';
import {
  DestroyRef,
  Injectable,
  PLATFORM_ID,
  computed,
  inject,
  signal,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  Observable,
  Subject,
  catchError,
  filter,
  forkJoin,
  fromEvent,
  map,
  merge,
  of,
  switchMap,
  tap,
  throwError,
  timeout,
  timer,
} from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { RADAR_FALLBACK } from './radar.fallback';
import { buildRadarPayload, RADAR_COMPETITIONS } from './radar.mapper';
import {
  RadarPayload,
  RadarProviderInput,
  RadarScoreboardInput,
  RadarState,
} from './radar.models';

interface RadarResponse {
  payload: RadarPayload;
  source: 'network' | 'direct';
}

const CACHE_KEY = 'sem-clubismo:radar:v1';
const AUTO_REFRESH_MS = 5 * 60_000;
const PROVIDER_BASE = 'https://site.api.espn.com/apis/site/v2/sports/soccer';
const STANDINGS_BASE = 'https://site.api.espn.com/apis/v2/sports/soccer';
const COMPETITION_IDS = new Set([
  'bra.1',
  'bra.copa_do_brazil',
  'conmebol.libertadores',
  'conmebol.sudamericana',
]);
const MATCH_STATUSES = new Set(['scheduled', 'live', 'finished', 'postponed']);
const NEWS_CATEGORIES = new Set(['market', 'news']);

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null;
}

function isText(value: unknown): value is string {
  return typeof value === 'string' && value.length > 0;
}

function isNullableText(value: unknown): boolean {
  return value === null || typeof value === 'string';
}

function isFiniteNumber(value: unknown): value is number {
  return typeof value === 'number' && Number.isFinite(value);
}

function isTeam(value: unknown): boolean {
  return (
    isRecord(value) &&
    isText(value['id']) &&
    isText(value['name']) &&
    isText(value['shortName']) &&
    isText(value['abbreviation']) &&
    isNullableText(value['logo'])
  );
}

function isRadarPayload(value: unknown): value is RadarPayload {
  if (!isRecord(value)) return false;

  const competitions = value['competitions'];
  const matches = value['matches'];
  const standings = value['standings'];
  const news = value['news'];

  return (
    value['version'] === 1 &&
    isText(value['generatedAt']) &&
    Number.isFinite(Date.parse(value['generatedAt'])) &&
    isText(value['expiresAt']) &&
    Number.isFinite(Date.parse(value['expiresAt'])) &&
    isFiniteNumber(value['season']) &&
    isText(value['provider']) &&
    isText(value['providerUrl']) &&
    isText(value['officialReferenceUrl']) &&
    typeof value['isPartial'] === 'boolean' &&
    Array.isArray(competitions) &&
    competitions.every(
      (item) =>
        isRecord(item) &&
        COMPETITION_IDS.has(String(item['id'])) &&
        isText(item['name']) &&
        isText(item['shortName']) &&
        isFiniteNumber(item['matchCount']) &&
        isFiniteNumber(item['liveCount']) &&
        isNullableText(item['nextMatchAt']),
    ) &&
    Array.isArray(matches) &&
    matches.every(
      (item) =>
        isRecord(item) &&
        isText(item['id']) &&
        COMPETITION_IDS.has(String(item['competitionId'])) &&
        isText(item['competitionName']) &&
        isText(item['date']) &&
        Number.isFinite(Date.parse(item['date'])) &&
        MATCH_STATUSES.has(String(item['status'])) &&
        isText(item['statusLabel']) &&
        isNullableText(item['clock']) &&
        isNullableText(item['venue']) &&
        isTeam(item['home']) &&
        isTeam(item['away']) &&
        isNullableText(item['homeScore']) &&
        isNullableText(item['awayScore']) &&
        isNullableText(item['link']),
    ) &&
    Array.isArray(standings) &&
    standings.every(
      (item) =>
        isRecord(item) &&
        isFiniteNumber(item['position']) &&
        isTeam(item['team']) &&
        ['points', 'played', 'wins', 'draws', 'losses', 'goalsFor', 'goalsAgainst', 'goalDifference'].every(
          (field) => isFiniteNumber(item[field]),
        ),
    ) &&
    Array.isArray(news) &&
    news.every(
      (item) =>
        isRecord(item) &&
        isText(item['id']) &&
        isText(item['title']) &&
        typeof item['summary'] === 'string' &&
        isText(item['url']) &&
        isText(item['publishedAt']) &&
        Number.isFinite(Date.parse(item['publishedAt'])) &&
        NEWS_CATEGORIES.has(String(item['category'])) &&
        Array.isArray(item['teams']) &&
        item['teams'].every((team) => typeof team === 'string') &&
        isNullableText(item['imageUrl']) &&
        typeof item['imageAlt'] === 'string' &&
        isNullableText(item['imageCredit']),
    )
  );
}

@Injectable({ providedIn: 'root' })
export class RadarService {
  private readonly http = inject(HttpClient);
  private readonly destroyRef = inject(DestroyRef);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly refreshRequest = new Subject<void>();
  private readonly initialSnapshot = this.readCache();

  private readonly internalState = signal<RadarState>({
    status: 'loading',
    data: this.initialSnapshot ?? RADAR_FALLBACK,
    message: null,
    source: this.initialSnapshot ? 'cache' : 'fallback',
  });

  readonly state = this.internalState.asReadonly();
  readonly data = computed(() => this.internalState().data);
  readonly isRefreshing = signal(true);
  readonly hasLiveMatches = computed(() =>
    this.data().matches.some((match) => match.status === 'live'),
  );

  constructor() {
    if (!isPlatformBrowser(this.platformId)) return;

    const visibleAgain = fromEvent(document, 'visibilitychange').pipe(
      filter(() => document.visibilityState === 'visible'),
    );

    merge(
      timer(0, AUTO_REFRESH_MS),
      this.refreshRequest,
      fromEvent(window, 'online'),
      visibleAgain,
    )
      .pipe(
        tap(() => this.isRefreshing.set(true)),
        switchMap(() => this.loadRadar().pipe(catchError(() => of(null)))),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe((result) => {
        if (result) {
          const { payload, source } = result;
          const snapshotExpired = this.isPayloadExpired(payload);
          this.writeCache(payload);
          this.internalState.set({
            status: snapshotExpired ? 'stale' : 'ready',
            data: payload,
            message: snapshotExpired
              ? 'A fonte respondeu com um snapshot anterior. Uma nova atualização será tentada automaticamente.'
              : payload.isPartial
                ? 'Algumas fontes ou competições estão incompletas. O radar seguirá tentando automaticamente.'
                : null,
            source,
          });
          this.isRefreshing.set(false);
          return;
        }

        const cached = this.readCache();
        this.internalState.set({
          status: 'stale',
          data: cached ?? RADAR_FALLBACK,
          message:
            'A atualização ao vivo está temporariamente indisponível. Exibindo o último snapshot salvo.',
          source: cached ? 'cache' : 'fallback',
        });
        this.isRefreshing.set(false);
      });
  }

  refresh(): void {
    this.refreshRequest.next();
  }

  private loadRadar(): Observable<RadarResponse> {
    return this.http.get<unknown>('/api/radar').pipe(
      timeout(12_000),
      map((value) => ({ payload: this.validatePayload(value), source: 'network' as const })),
      catchError((error: unknown) => {
        if (!this.canUseDirectProvider()) return throwError(() => error);
        return this.loadDirectFromProvider().pipe(
          map((payload) => ({ payload, source: 'direct' as const })),
        );
      }),
    );
  }

  private loadDirectFromProvider(): Observable<RadarPayload> {
    const range = this.providerDateRange();
    const query = `region=br&lang=pt-BR&limit=100&dates=${range.start}-${range.end}`;

    const scoreboards = forkJoin(
      RADAR_COMPETITIONS.map((competition) =>
        this.http
          .get<unknown>(`${PROVIDER_BASE}/${competition.id}/scoreboard?${query}`)
          .pipe(
            timeout(10_000),
            catchError(() => of(null)),
            map(
              (data): RadarScoreboardInput => ({
                ...competition,
                data,
              }),
            ),
          ),
      ),
    );

    return forkJoin({
      scoreboards,
      standings: this.http
        .get<unknown>(`${STANDINGS_BASE}/bra.1/standings?region=br&lang=pt-BR`)
        .pipe(timeout(10_000), catchError(() => of(null))),
      news: this.http
        .get<unknown>(`${PROVIDER_BASE}/bra.1/news?region=br&lang=pt-BR&limit=50`)
        .pipe(timeout(10_000), catchError(() => of(null))),
    }).pipe(
      map(
        (response): RadarProviderInput => ({
          generatedAt: new Date().toISOString(),
          standings: response.standings,
          news: response.news,
          scoreboards: response.scoreboards,
        }),
      ),
      map((input) => buildRadarPayload(input)),
      map((payload) => {
        if (!payload.matches.length && !payload.standings.length && !payload.news.length) {
          throw new Error('O provedor não retornou dados utilizáveis.');
        }
        return payload;
      }),
      catchError((error: unknown) => throwError(() => error)),
    );
  }

  private validatePayload(value: unknown): RadarPayload {
    if (!isRadarPayload(value)) {
      throw new Error('Resposta inválida do Radar.');
    }
    return value;
  }

  private canUseDirectProvider(): boolean {
    const hostname = window.location.hostname;
    return hostname === 'localhost' || hostname === '127.0.0.1';
  }

  private isPayloadExpired(payload: RadarPayload): boolean {
    return Date.parse(payload.expiresAt) <= Date.now();
  }

  private providerDateRange(): { start: string; end: string } {
    const now = new Date();
    const start = new Date(now);
    const end = new Date(now);
    start.setUTCDate(start.getUTCDate() - 14);
    end.setUTCDate(end.getUTCDate() + 30);

    return {
      start: this.dateKey(start),
      end: this.dateKey(end),
    };
  }

  private dateKey(date: Date): string {
    return date.toISOString().slice(0, 10).replace(/-/g, '');
  }

  private readCache(): RadarPayload | null {
    if (!isPlatformBrowser(this.platformId)) return null;

    try {
      const raw = localStorage.getItem(CACHE_KEY);
      if (!raw) return null;
      return this.validatePayload(JSON.parse(raw));
    } catch {
      return null;
    }
  }

  private writeCache(payload: RadarPayload): void {
    try {
      localStorage.setItem(CACHE_KEY, JSON.stringify(payload));
    } catch {
      // A ausência de storage não impede a atualização em memória.
    }
  }
}
