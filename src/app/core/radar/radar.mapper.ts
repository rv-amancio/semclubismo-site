import {
  RadarCompetition,
  RadarCompetitionId,
  RadarMatch,
  RadarMatchStatus,
  RadarNewsItem,
  RadarPayload,
  RadarProviderInput,
  RadarScoreboardInput,
  RadarStanding,
  RadarTeam,
} from './radar.models';

interface ProviderTeam {
  id?: string;
  displayName?: string;
  shortDisplayName?: string;
  abbreviation?: string;
  logo?: string;
  logos?: Array<{ href?: string }>;
}

interface ProviderCompetitor {
  homeAway?: 'home' | 'away';
  score?: string;
  team?: ProviderTeam;
}

interface ProviderEvent {
  id?: string;
  date?: string;
  name?: string;
  status?: {
    displayClock?: string;
    type?: {
      name?: string;
      state?: string;
      completed?: boolean;
      description?: string;
      detail?: string;
      shortDetail?: string;
    };
  };
  venue?: { fullName?: string };
  links?: Array<{ href?: string; rel?: string[] }>;
  competitions?: Array<{
    venue?: { fullName?: string };
    competitors?: ProviderCompetitor[];
    status?: ProviderEvent['status'];
  }>;
}

interface ProviderScoreboard {
  events?: ProviderEvent[];
}

interface ProviderStandingStat {
  name?: string;
  value?: number;
  displayValue?: string;
}

interface ProviderStandingEntry {
  team?: ProviderTeam;
  stats?: ProviderStandingStat[];
}

interface ProviderStandings {
  season?: { year?: number };
  children?: Array<{
    standings?: { entries?: ProviderStandingEntry[] };
  }>;
}

interface ProviderNewsCategory {
  type?: string;
  description?: string;
  team?: { description?: string };
}

interface ProviderNewsArticle {
  id?: string | number;
  headline?: string;
  description?: string;
  published?: string;
  links?: { web?: { href?: string } };
  categories?: ProviderNewsCategory[];
  images?: Array<{
    type?: string;
    url?: string;
    alt?: string;
    caption?: string;
    credit?: string;
  }>;
}

interface ProviderNews {
  articles?: ProviderNewsArticle[];
}

const PROVIDER_URL = 'https://www.espn.com.br/futebol/';
const CBF_REFERENCE_BASE =
  'https://www.cbf.com.br/futebol-brasileiro/tabelas/campeonato-brasileiro/serie-a';

const marketPattern =
  /mercado|contrat|refor[cç]|negocia|acerto|empr[eé]st|proposta|oferta|venda|transfer|investida|renova|rescis/i;

function safeText(value: unknown, fallback = ''): string {
  return typeof value === 'string' ? value.trim() : fallback;
}

function safeUrl(value: unknown): string | null {
  if (typeof value !== 'string') return null;

  try {
    const url = new URL(value);
    const hostname = url.hostname.toLowerCase();
    const isEspnHost =
      hostname === 'espn.com' ||
      hostname.endsWith('.espn.com') ||
      hostname === 'espn.com.br' ||
      hostname.endsWith('.espn.com.br') ||
      hostname === 'espncdn.com' ||
      hostname.endsWith('.espncdn.com');

    return url.protocol === 'https:' && isEspnHost ? url.toString() : null;
  } catch {
    return null;
  }
}

function stripHtml(value: string): string {
  return value.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
}

function mapTeam(team: ProviderTeam | undefined): RadarTeam {
  const name = safeText(team?.displayName, 'Clube');
  return {
    id: safeText(team?.id, name),
    name,
    shortName: safeText(team?.shortDisplayName, name),
    abbreviation: safeText(team?.abbreviation, name.slice(0, 3).toUpperCase()),
    logo: safeUrl(team?.logo ?? team?.logos?.[0]?.href),
  };
}

function mapStatus(event: ProviderEvent): {
  status: RadarMatchStatus;
  label: string;
  clock: string | null;
} {
  const eventStatus = event.competitions?.[0]?.status ?? event.status;
  const type = eventStatus?.type;
  const state = safeText(type?.state).toLowerCase();
  const name = safeText(type?.name).toLowerCase();
  const label = safeText(type?.description ?? type?.detail ?? type?.shortDetail, 'Agendado');

  const statusText = `${name} ${label}`;

  if (/postpon|adiad|cancel|suspend|abandon|interromp/i.test(statusText)) {
    return { status: 'postponed', label, clock: null };
  }
  if (type?.completed || state === 'post') {
    return { status: 'finished', label, clock: null };
  }
  if (state === 'in') {
    return {
      status: 'live',
      label,
      clock: safeText(eventStatus?.displayClock) || null,
    };
  }
  return { status: 'scheduled', label, clock: null };
}

function mapMatch(event: ProviderEvent, competition: RadarScoreboardInput): RadarMatch | null {
  const competitionData = event.competitions?.[0];
  const competitors = Array.isArray(competitionData?.competitors)
    ? competitionData.competitors
    : [];
  const home = competitors.find((item) => item.homeAway === 'home');
  const away = competitors.find((item) => item.homeAway === 'away');
  const id = safeText(event.id);
  const date = safeText(event.date);

  if (!id || !date || !home?.team || !away?.team) return null;

  const mappedStatus = mapStatus(event);
  const showScore = mappedStatus.status === 'finished' || mappedStatus.status === 'live';
  const summaryLink = event.links?.find((link) => link.rel?.includes('summary'))?.href;

  return {
    id,
    competitionId: competition.id,
    competitionName: competition.name,
    date,
    status: mappedStatus.status,
    statusLabel: mappedStatus.label,
    clock: mappedStatus.clock,
    venue: safeText(competitionData?.venue?.fullName ?? event.venue?.fullName) || null,
    home: mapTeam(home.team),
    away: mapTeam(away.team),
    homeScore: showScore ? safeText(home.score) || null : null,
    awayScore: showScore ? safeText(away.score) || null : null,
    link: safeUrl(summaryLink),
  };
}

function statValue(stats: ProviderStandingStat[] | undefined, name: string): number {
  const value = stats?.find((stat) => stat.name === name)?.value;
  return typeof value === 'number' && Number.isFinite(value) ? value : 0;
}

function mapStandings(input: unknown): { season: number; standings: RadarStanding[] } {
  const source = input as ProviderStandings | null;
  const entries = source?.children?.[0]?.standings?.entries;
  const season = source?.season?.year;

  if (!Array.isArray(entries)) {
    return { season: new Date().getUTCFullYear(), standings: [] };
  }

  const standings = entries
    .map((entry): RadarStanding | null => {
      if (!entry.team) return null;
      return {
        position: statValue(entry.stats, 'rank'),
        team: mapTeam(entry.team),
        points: statValue(entry.stats, 'points'),
        played: statValue(entry.stats, 'gamesPlayed'),
        wins: statValue(entry.stats, 'wins'),
        draws: statValue(entry.stats, 'ties'),
        losses: statValue(entry.stats, 'losses'),
        goalsFor: statValue(entry.stats, 'pointsFor'),
        goalsAgainst: statValue(entry.stats, 'pointsAgainst'),
        goalDifference: statValue(entry.stats, 'pointDifferential'),
      };
    })
    .filter((entry): entry is RadarStanding => entry !== null)
    .sort((a, b) => a.position - b.position);

  return {
    season: typeof season === 'number' ? season : new Date().getUTCFullYear(),
    standings,
  };
}

function mapNews(input: unknown): RadarNewsItem[] {
  const source = input as ProviderNews | null;
  const articles = Array.isArray(source?.articles) ? source.articles : [];

  return articles
    .map((article): RadarNewsItem | null => {
      const id = String(article.id ?? '');
      const title = stripHtml(safeText(article.headline));
      const summary = stripHtml(safeText(article.description));
      const url = safeUrl(article.links?.web?.href);
      const publishedAt = safeText(article.published);
      const headerImage = article.images?.find((image) => image.type === 'header') ?? article.images?.[0];

      if (!id || !title || !url || !publishedAt) return null;

      const teamNames = (article.categories ?? [])
        .filter((category) => category.type === 'team')
        .map((category) => safeText(category.team?.description ?? category.description))
        .filter(Boolean)
        .slice(0, 3);

      return {
        id,
        title,
        summary,
        url,
        publishedAt,
        category:
          url.includes('/mercado-da-bola/') || marketPattern.test(`${title} ${summary}`)
            ? 'market'
            : 'news',
        teams: teamNames,
        imageUrl: safeUrl(headerImage?.url),
        imageAlt: stripHtml(safeText(headerImage?.alt ?? headerImage?.caption) || title),
        imageCredit: safeText(headerImage?.credit) || null,
      };
    })
    .filter((article): article is RadarNewsItem => article !== null)
    .slice(0, 16);
}

function mapScoreboards(
  scoreboards: RadarScoreboardInput[],
  serieATeamIds: Set<string>,
): { matches: RadarMatch[]; competitions: RadarCompetition[] } {
  const now = Date.now();
  const allMatches: RadarMatch[] = [];
  const competitions: RadarCompetition[] = [];

  for (const scoreboard of scoreboards) {
    const source = scoreboard.data as ProviderScoreboard | null;
    const events = Array.isArray(source?.events) ? source.events : [];
    let matches = events
      .map((event) => mapMatch(event, scoreboard))
      .filter((match): match is RadarMatch => match !== null);

    if (
      serieATeamIds.size > 0 &&
      (scoreboard.id === 'conmebol.libertadores' ||
        scoreboard.id === 'conmebol.sudamericana')
    ) {
      matches = matches.filter(
        (match) => serieATeamIds.has(match.home.id) || serieATeamIds.has(match.away.id),
      );
    }

    matches.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    allMatches.push(...matches);

    const nextMatch = matches.find(
      (match) => match.status === 'scheduled' && new Date(match.date).getTime() >= now,
    );

    competitions.push({
      id: scoreboard.id,
      name: scoreboard.name,
      shortName: scoreboard.shortName,
      matchCount: matches.length,
      liveCount: matches.filter((match) => match.status === 'live').length,
      nextMatchAt: nextMatch?.date ?? null,
    });
  }

  return {
    matches: allMatches.sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
    ),
    competitions,
  };
}

export function buildRadarPayload(input: RadarProviderInput): RadarPayload {
  const mappedStandings = mapStandings(input.standings);
  const serieATeamIds = new Set(mappedStandings.standings.map((entry) => entry.team.id));
  const mappedScoreboards = mapScoreboards(input.scoreboards, serieATeamIds);
  const news = mapNews(input.news);
  const generatedAtMs = new Date(input.generatedAt).getTime();
  const safeGeneratedAt = Number.isFinite(generatedAtMs)
    ? new Date(generatedAtMs).toISOString()
    : new Date().toISOString();

  return {
    version: 1,
    generatedAt: safeGeneratedAt,
    expiresAt: new Date(new Date(safeGeneratedAt).getTime() + 5 * 60_000).toISOString(),
    season: mappedStandings.season,
    provider: 'ESPN Brasil',
    providerUrl: PROVIDER_URL,
    officialReferenceUrl: `${CBF_REFERENCE_BASE}/${mappedStandings.season}`,
    isPartial:
      input.standings === null ||
      input.news === null ||
      input.scoreboards.some((scoreboard) => scoreboard.data === null) ||
      mappedStandings.standings.length === 0 ||
      mappedScoreboards.matches.length === 0 ||
      news.length === 0,
    competitions: mappedScoreboards.competitions,
    matches: mappedScoreboards.matches,
    standings: mappedStandings.standings,
    news,
  };
}

export const RADAR_COMPETITIONS: ReadonlyArray<{
  id: RadarCompetitionId;
  name: string;
  shortName: string;
}> = [
  { id: 'bra.1', name: 'Campeonato Brasileiro', shortName: 'Brasileirão' },
  { id: 'bra.copa_do_brazil', name: 'Copa do Brasil', shortName: 'Copa do Brasil' },
  { id: 'conmebol.libertadores', name: 'CONMEBOL Libertadores', shortName: 'Libertadores' },
  { id: 'conmebol.sudamericana', name: 'CONMEBOL Sudamericana', shortName: 'Sul-Americana' },
] as const;
