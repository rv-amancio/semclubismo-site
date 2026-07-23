import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  signal,
} from '@angular/core';
import { RadarService } from '../../../core/radar/radar.service';
import {
  RadarCompetitionId,
  RadarMatch,
  RadarNewsCategory,
  RadarStanding,
} from '../../../core/radar/radar.models';

type NewsFilter = 'all' | RadarNewsCategory;

@Component({
  selector: 'sc-radar',
  standalone: true,
  templateUrl: './sc-radar.component.html',
  styleUrl: './sc-radar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScRadarComponent {
  readonly radar = inject(RadarService);

  readonly selectedCompetition = signal<RadarCompetitionId>('bra.1');
  readonly newsFilter = signal<NewsFilter>('all');
  readonly showFullStandings = signal(false);

  readonly state = this.radar.state;
  readonly data = this.radar.data;
  readonly isRefreshing = this.radar.isRefreshing;

  readonly competitions = computed(() => this.data().competitions);
  readonly selectedCompetitionData = computed(() =>
    this.competitions().find(
      (competition) => competition.id === this.selectedCompetition(),
    ),
  );

  readonly selectedMatches = computed(() =>
    this.data().matches.filter(
      (match) => match.competitionId === this.selectedCompetition(),
    ),
  );

  readonly latestResults = computed(() =>
    this.selectedMatches()
      .filter((match) => match.status === 'finished')
      .sort((a, b) => this.dateValue(b.date) - this.dateValue(a.date))
      .slice(0, 6),
  );

  readonly upcomingMatches = computed(() =>
    this.selectedMatches()
      .filter(
        (match) =>
          match.status === 'live' ||
          (match.status === 'scheduled' && this.dateValue(match.date) >= Date.now()),
      )
      .sort((a, b) => {
        if (a.status === 'live' && b.status !== 'live') return -1;
        if (b.status === 'live' && a.status !== 'live') return 1;
        return this.dateValue(a.date) - this.dateValue(b.date);
      })
      .slice(0, 6),
  );

  readonly displayedStandings = computed(() =>
    this.showFullStandings()
      ? this.data().standings
      : this.data().standings.slice(0, 10),
  );

  readonly filteredNews = computed(() => {
    const filter = this.newsFilter();
    const items = this.data().news
      .slice()
      .sort((a, b) => this.dateValue(b.publishedAt) - this.dateValue(a.publishedAt));

    return (filter === 'all' ? items : items.filter((item) => item.category === filter)).slice(
      0,
      9,
    );
  });

  readonly hasSnapshot = computed(() => {
    const data = this.data();
    return Boolean(data.matches.length || data.standings.length || data.news.length);
  });

  readonly statusLabel = computed(() => {
    if (this.isRefreshing()) return 'Sincronizando agora';
    if (this.radar.hasLiveMatches()) return 'Jogos ao vivo';
    if (this.state().status === 'stale') return 'Último snapshot';
    return 'Radar sincronizado';
  });

  readonly sourceLabel = computed(() => {
    switch (this.state().source) {
      case 'network':
        return 'Servidor Sem Clubismo';
      case 'direct':
        return 'Fonte direta';
      case 'cache':
        return 'Cache local';
      default:
        return 'Aguardando dados';
    }
  });

  selectCompetition(id: RadarCompetitionId): void {
    this.selectedCompetition.set(id);
  }

  selectNewsFilter(filter: NewsFilter): void {
    this.newsFilter.set(filter);
  }

  refresh(): void {
    this.radar.refresh();
  }

  toggleStandings(): void {
    this.showFullStandings.update((current) => !current);
  }

  onCompetitionKeydown(event: KeyboardEvent, index: number): void {
    const keys = ['ArrowLeft', 'ArrowRight', 'Home', 'End'];
    if (!keys.includes(event.key)) return;

    event.preventDefault();
    const competitions = this.competitions();
    let nextIndex = index;

    if (event.key === 'ArrowLeft') {
      nextIndex = (index - 1 + competitions.length) % competitions.length;
    } else if (event.key === 'ArrowRight') {
      nextIndex = (index + 1) % competitions.length;
    } else if (event.key === 'Home') {
      nextIndex = 0;
    } else if (event.key === 'End') {
      nextIndex = competitions.length - 1;
    }

    const competition = competitions[nextIndex];
    if (!competition) return;

    this.selectCompetition(competition.id);
    const currentButton = event.currentTarget as HTMLElement | null;
    const buttons = currentButton?.parentElement?.querySelectorAll<HTMLButtonElement>(
      '[role="tab"]',
    );
    buttons?.item(nextIndex).focus();
  }

  formatMatchDate(value: string): string {
    const date = this.validDate(value);
    if (!date) return 'Data a confirmar';

    return new Intl.DateTimeFormat('pt-BR', {
      timeZone: 'America/Sao_Paulo',
      weekday: 'short',
      day: '2-digit',
      month: 'short',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    })
      .format(date)
      .replace(/\./g, '');
  }

  formatCompactDate(value: string | null): string {
    const date = value ? this.validDate(value) : null;
    if (!date) return 'Agenda a confirmar';

    return new Intl.DateTimeFormat('pt-BR', {
      timeZone: 'America/Sao_Paulo',
      day: '2-digit',
      month: 'short',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    })
      .format(date)
      .replace(/\./g, '');
  }

  formatUpdatedAt(value: string): string {
    const date = this.validDate(value);
    if (!date) return 'sem atualização registrada';

    return new Intl.DateTimeFormat('pt-BR', {
      timeZone: 'America/Sao_Paulo',
      day: '2-digit',
      month: 'short',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    })
      .format(date)
      .replace(/\./g, '');
  }

  relativePublishedAt(value: string): string {
    const date = this.validDate(value);
    if (!date) return 'Agora';

    const minutes = Math.max(0, Math.floor((Date.now() - date.getTime()) / 60_000));
    if (minutes < 1) return 'Agora';
    if (minutes < 60) return `Há ${minutes} min`;

    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `Há ${hours}h`;

    const days = Math.floor(hours / 24);
    if (days < 7) return `Há ${days} dia${days === 1 ? '' : 's'}`;

    return new Intl.DateTimeFormat('pt-BR', {
      timeZone: 'America/Sao_Paulo',
      day: '2-digit',
      month: 'short',
    })
      .format(date)
      .replace(/\./g, '');
  }

  score(match: RadarMatch, side: 'home' | 'away'): string {
    return (side === 'home' ? match.homeScore : match.awayScore) ?? '—';
  }

  twoDigits(value: number): string {
    return String(value).padStart(2, '0');
  }

  standingZone(row: RadarStanding): 'libertadores' | 'sul-americana' | 'rebaixamento' | 'none' {
    if (row.position <= 6) return 'libertadores';
    if (row.position <= 12) return 'sul-americana';
    if (row.position >= 17) return 'rebaixamento';
    return 'none';
  }

  standingZoneLabel(row: RadarStanding): string {
    switch (this.standingZone(row)) {
      case 'libertadores':
        return 'Faixa indicativa de Libertadores';
      case 'sul-americana':
        return 'Faixa indicativa de Sul-Americana';
      case 'rebaixamento':
        return 'Zona de rebaixamento';
      default:
        return 'Fora das faixas destacadas';
    }
  }

  private dateValue(value: string): number {
    const time = Date.parse(value);
    return Number.isFinite(time) ? time : 0;
  }

  private validDate(value: string): Date | null {
    const date = new Date(value);
    return Number.isNaN(date.getTime()) ? null : date;
  }
}
