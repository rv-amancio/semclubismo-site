import { RadarPayload } from './radar.models';

const snapshotAt = '2026-07-23T20:00:00.000Z';

export const RADAR_FALLBACK: RadarPayload = {
  version: 1,
  generatedAt: snapshotAt,
  expiresAt: snapshotAt,
  season: 2026,
  provider: 'Snapshot local',
  providerUrl: 'https://www.espn.com.br/futebol/',
  officialReferenceUrl:
    'https://www.cbf.com.br/futebol-brasileiro/tabelas/campeonato-brasileiro/serie-a/2026',
  isPartial: true,
  competitions: [
    {
      id: 'bra.1',
      name: 'Campeonato Brasileiro',
      shortName: 'Brasileirão',
      matchCount: 0,
      liveCount: 0,
      nextMatchAt: null,
    },
    {
      id: 'bra.copa_do_brazil',
      name: 'Copa do Brasil',
      shortName: 'Copa do Brasil',
      matchCount: 0,
      liveCount: 0,
      nextMatchAt: null,
    },
    {
      id: 'conmebol.libertadores',
      name: 'CONMEBOL Libertadores',
      shortName: 'Libertadores',
      matchCount: 0,
      liveCount: 0,
      nextMatchAt: null,
    },
    {
      id: 'conmebol.sudamericana',
      name: 'CONMEBOL Sudamericana',
      shortName: 'Sul-Americana',
      matchCount: 0,
      liveCount: 0,
      nextMatchAt: null,
    },
  ],
  matches: [],
  standings: [],
  news: [],
};
