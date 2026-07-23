export type RadarCompetitionId =
  | 'bra.1'
  | 'bra.copa_do_brazil'
  | 'conmebol.libertadores'
  | 'conmebol.sudamericana';

export type RadarMatchStatus = 'scheduled' | 'live' | 'finished' | 'postponed';
export type RadarNewsCategory = 'market' | 'news';
export type RadarStateStatus = 'loading' | 'ready' | 'stale';

export interface RadarTeam {
  id: string;
  name: string;
  shortName: string;
  abbreviation: string;
  logo: string | null;
}

export interface RadarMatch {
  id: string;
  competitionId: RadarCompetitionId;
  competitionName: string;
  date: string;
  status: RadarMatchStatus;
  statusLabel: string;
  clock: string | null;
  venue: string | null;
  home: RadarTeam;
  away: RadarTeam;
  homeScore: string | null;
  awayScore: string | null;
  link: string | null;
}

export interface RadarStanding {
  position: number;
  team: RadarTeam;
  points: number;
  played: number;
  wins: number;
  draws: number;
  losses: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDifference: number;
}

export interface RadarNewsItem {
  id: string;
  title: string;
  summary: string;
  url: string;
  publishedAt: string;
  category: RadarNewsCategory;
  teams: string[];
  imageUrl: string | null;
  imageAlt: string;
  imageCredit: string | null;
}

export interface RadarCompetition {
  id: RadarCompetitionId;
  name: string;
  shortName: string;
  matchCount: number;
  liveCount: number;
  nextMatchAt: string | null;
}

export interface RadarPayload {
  version: 1;
  generatedAt: string;
  expiresAt: string;
  season: number;
  provider: string;
  providerUrl: string;
  officialReferenceUrl: string;
  isPartial: boolean;
  competitions: RadarCompetition[];
  matches: RadarMatch[];
  standings: RadarStanding[];
  news: RadarNewsItem[];
}

export interface RadarState {
  status: RadarStateStatus;
  data: RadarPayload;
  message: string | null;
  source: 'network' | 'direct' | 'cache' | 'fallback';
}

export interface RadarScoreboardInput {
  id: RadarCompetitionId;
  name: string;
  shortName: string;
  data: unknown | null;
}

export interface RadarProviderInput {
  generatedAt: string;
  standings: unknown | null;
  news: unknown | null;
  scoreboards: RadarScoreboardInput[];
}
