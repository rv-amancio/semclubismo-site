import { RadarPayload } from './radar.models';

export const RADAR_FALLBACK: RadarPayload = {
  "version": 1,
  "generatedAt": "2026-09-01T17:26:15.868Z",
  "expiresAt": "2026-09-05T17:26:15.868Z",
  "season": 2026,
  "provider": "Snapshot Sem Clubismo",
  "providerUrl": "https://www.espn.com.br/futebol/",
  "officialReferenceUrl": "https://www.cbf.com.br/futebol-brasileiro/tabelas/campeonato-brasileiro/serie-a/2026",
  "isPartial": false,
  "competitions": [
    {
      "id": "bra.1",
      "name": "Campeonato Brasileiro",
      "shortName": "Brasileirão",
      "matchCount": 31,
      "liveCount": 0,
      "nextMatchAt": "2026-09-02T22:30Z"
    },
    {
      "id": "bra.copa_do_brazil",
      "name": "Copa do Brasil",
      "shortName": "Copa do Brasil",
      "matchCount": 5,
      "liveCount": 0,
      "nextMatchAt": "2026-09-02T00:00Z"
    },
    {
      "id": "conmebol.libertadores",
      "name": "CONMEBOL Libertadores",
      "shortName": "Libertadores",
      "matchCount": 5,
      "liveCount": 0,
      "nextMatchAt": "2026-09-08T22:00Z"
    },
    {
      "id": "conmebol.sudamericana",
      "name": "CONMEBOL Sudamericana",
      "shortName": "Sul-Americana",
      "matchCount": 5,
      "liveCount": 0,
      "nextMatchAt": "2026-09-08T22:00Z"
    }
  ],
  "matches": [
    {
      "id": "401909064",
      "competitionId": "bra.copa_do_brazil",
      "competitionName": "Copa do Brasil",
      "date": "2026-08-27T23:00Z",
      "status": "finished",
      "statusLabel": "Final da Partida",
      "clock": null,
      "venue": "Estadio Beira-Rio",
      "home": {
        "id": "1936",
        "name": "Internacional",
        "shortName": "Internacional",
        "abbreviation": "INT",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/1936.png"
      },
      "away": {
        "id": "6273",
        "name": "Grêmio",
        "shortName": "Grêmio",
        "abbreviation": "GRE",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/6273.png"
      },
      "homeScore": "0",
      "awayScore": "0",
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401909064/gremio-internacional"
    },
    {
      "id": "401841216",
      "competitionId": "bra.1",
      "competitionName": "Campeonato Brasileiro",
      "date": "2026-08-29T21:30Z",
      "status": "finished",
      "statusLabel": "Final da Partida",
      "clock": null,
      "venue": "Arena MRV",
      "home": {
        "id": "7632",
        "name": "Atlético-MG",
        "shortName": "Atlético-MG",
        "abbreviation": "CAM",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/7632.png"
      },
      "away": {
        "id": "3457",
        "name": "Vitória",
        "shortName": "Vitória",
        "abbreviation": "VIT",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/3457.png"
      },
      "homeScore": "2",
      "awayScore": "1",
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401841216/vitoria-atletico-mg"
    },
    {
      "id": "401841209",
      "competitionId": "bra.1",
      "competitionName": "Campeonato Brasileiro",
      "date": "2026-08-29T23:00Z",
      "status": "finished",
      "statusLabel": "Final da Partida",
      "clock": null,
      "venue": "Estádio Cícero Pompeu de Toledo",
      "home": {
        "id": "2026",
        "name": "São Paulo",
        "shortName": "São Paulo",
        "abbreviation": "SAO",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/2026.png"
      },
      "away": {
        "id": "6079",
        "name": "Red Bull Bragantino",
        "shortName": "Bragantino",
        "abbreviation": "BRA",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/6079.png"
      },
      "homeScore": "2",
      "awayScore": "1",
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401841209/red-bull-bragantino-sao-paulo"
    },
    {
      "id": "401841212",
      "competitionId": "bra.1",
      "competitionName": "Campeonato Brasileiro",
      "date": "2026-08-30T00:20Z",
      "status": "finished",
      "statusLabel": "Final da Partida",
      "clock": null,
      "venue": "Estádio São Januário",
      "home": {
        "id": "3454",
        "name": "Vasco da Gama",
        "shortName": "Vasco",
        "abbreviation": "VAS",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/3454.png"
      },
      "away": {
        "id": "2022",
        "name": "Cruzeiro",
        "shortName": "Cruzeiro",
        "abbreviation": "CRU",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/2022.png"
      },
      "homeScore": "3",
      "awayScore": "1",
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401841212/cruzeiro-vasco-da-gama"
    },
    {
      "id": "401841208",
      "competitionId": "bra.1",
      "competitionName": "Campeonato Brasileiro",
      "date": "2026-08-30T14:00Z",
      "status": "finished",
      "statusLabel": "Final da Partida",
      "clock": null,
      "venue": "Arena da Baixada",
      "home": {
        "id": "3458",
        "name": "Athletico Paranaense",
        "shortName": "Athletico-PR",
        "abbreviation": "CAP",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/3458.png"
      },
      "away": {
        "id": "3445",
        "name": "Fluminense",
        "shortName": "Fluminense",
        "abbreviation": "FLU",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/3445.png"
      },
      "homeScore": "3",
      "awayScore": "3",
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401841208/fluminense-athletico-paranaense"
    },
    {
      "id": "401841214",
      "competitionId": "bra.1",
      "competitionName": "Campeonato Brasileiro",
      "date": "2026-08-30T19:00Z",
      "status": "finished",
      "statusLabel": "Final da Partida",
      "clock": null,
      "venue": "Neo Química Arena",
      "home": {
        "id": "874",
        "name": "Corinthians",
        "shortName": "Corinthians",
        "abbreviation": "COR",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/874.png"
      },
      "away": {
        "id": "2674",
        "name": "Santos",
        "shortName": "Santos",
        "abbreviation": "SAN",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/2674.png"
      },
      "homeScore": "0",
      "awayScore": "1",
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401841214/santos-corinthians"
    },
    {
      "id": "401841213",
      "competitionId": "bra.1",
      "competitionName": "Campeonato Brasileiro",
      "date": "2026-08-30T19:00Z",
      "status": "finished",
      "statusLabel": "Final da Partida",
      "clock": null,
      "venue": "Estadio do Maracana",
      "home": {
        "id": "819",
        "name": "Flamengo",
        "shortName": "Flamengo",
        "abbreviation": "FLA",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/819.png"
      },
      "away": {
        "id": "6086",
        "name": "Botafogo",
        "shortName": "Botafogo",
        "abbreviation": "BOT",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/6086.png"
      },
      "homeScore": "3",
      "awayScore": "0",
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401841213/botafogo-flamengo"
    },
    {
      "id": "401841217",
      "competitionId": "bra.1",
      "competitionName": "Campeonato Brasileiro",
      "date": "2026-08-30T21:30Z",
      "status": "finished",
      "statusLabel": "Final da Partida",
      "clock": null,
      "venue": "Arena do Grêmio",
      "home": {
        "id": "6273",
        "name": "Grêmio",
        "shortName": "Grêmio",
        "abbreviation": "GRE",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/6273.png"
      },
      "away": {
        "id": "9318",
        "name": "Chapecoense",
        "shortName": "Chapecoense",
        "abbreviation": "CHA",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/9318.png"
      },
      "homeScore": "3",
      "awayScore": "1",
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401841217/chapecoense-gremio"
    },
    {
      "id": "401841211",
      "competitionId": "bra.1",
      "competitionName": "Campeonato Brasileiro",
      "date": "2026-08-30T21:30Z",
      "status": "finished",
      "statusLabel": "Final da Partida",
      "clock": null,
      "venue": "Estadio Municipal José Maria de Campos Maia",
      "home": {
        "id": "9169",
        "name": "Mirassol",
        "shortName": "Mirassol",
        "abbreviation": "MIR",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/9169.png"
      },
      "away": {
        "id": "2029",
        "name": "Palmeiras",
        "shortName": "Palmeiras",
        "abbreviation": "PAL",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/2029.png"
      },
      "homeScore": "1",
      "awayScore": "1",
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401841211/palmeiras-mirassol"
    },
    {
      "id": "401841215",
      "competitionId": "bra.1",
      "competitionName": "Campeonato Brasileiro",
      "date": "2026-08-30T22:30Z",
      "status": "finished",
      "statusLabel": "Final da Partida",
      "clock": null,
      "venue": "Arena Fonte Nova",
      "home": {
        "id": "9967",
        "name": "Bahia",
        "shortName": "Bahia",
        "abbreviation": "BAH",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/9967.png"
      },
      "away": {
        "id": "1936",
        "name": "Internacional",
        "shortName": "Internacional",
        "abbreviation": "INT",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/1936.png"
      },
      "homeScore": "3",
      "awayScore": "2",
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401841215/internacional-bahia"
    },
    {
      "id": "401841210",
      "competitionId": "bra.1",
      "competitionName": "Campeonato Brasileiro",
      "date": "2026-08-31T23:00Z",
      "status": "finished",
      "statusLabel": "Final da Partida",
      "clock": null,
      "venue": "Mangueirão",
      "home": {
        "id": "4936",
        "name": "Remo",
        "shortName": "Remo",
        "abbreviation": "REMO",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/4936.png"
      },
      "away": {
        "id": "3456",
        "name": "Coritiba",
        "shortName": "Coritiba",
        "abbreviation": "CFC",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/3456.png"
      },
      "homeScore": "2",
      "awayScore": "3",
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401841210/coritiba-remo"
    },
    {
      "id": "401909112",
      "competitionId": "bra.copa_do_brazil",
      "competitionName": "Copa do Brasil",
      "date": "2026-09-02T00:00Z",
      "status": "scheduled",
      "statusLabel": "Agendado",
      "clock": null,
      "venue": "Arena MRV",
      "home": {
        "id": "7632",
        "name": "Atlético-MG",
        "shortName": "Atlético-MG",
        "abbreviation": "CAM",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/7632.png"
      },
      "away": {
        "id": "2022",
        "name": "Cruzeiro",
        "shortName": "Cruzeiro",
        "abbreviation": "CRU",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/2022.png"
      },
      "homeScore": null,
      "awayScore": null,
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401909112/cruzeiro-atletico-mg"
    },
    {
      "id": "401913077",
      "competitionId": "bra.1",
      "competitionName": "Campeonato Brasileiro",
      "date": "2026-09-02T22:30Z",
      "status": "scheduled",
      "statusLabel": "Agendado",
      "clock": null,
      "venue": "Estadio do Maracana",
      "home": {
        "id": "819",
        "name": "Flamengo",
        "shortName": "Flamengo",
        "abbreviation": "FLA",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/819.png"
      },
      "away": {
        "id": "9169",
        "name": "Mirassol",
        "shortName": "Mirassol",
        "abbreviation": "MIR",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/9169.png"
      },
      "homeScore": null,
      "awayScore": null,
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401913077/mirassol-flamengo"
    },
    {
      "id": "401909110",
      "competitionId": "bra.copa_do_brazil",
      "competitionName": "Copa do Brasil",
      "date": "2026-09-03T00:30Z",
      "status": "scheduled",
      "statusLabel": "Agendado",
      "clock": null,
      "venue": "Estádio Vila Belmiro (Urbano Caldeira)",
      "home": {
        "id": "2674",
        "name": "Santos",
        "shortName": "Santos",
        "abbreviation": "SAN",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/2674.png"
      },
      "away": {
        "id": "2029",
        "name": "Palmeiras",
        "shortName": "Palmeiras",
        "abbreviation": "PAL",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/2029.png"
      },
      "homeScore": null,
      "awayScore": null,
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401909110/palmeiras-santos"
    },
    {
      "id": "401909111",
      "competitionId": "bra.copa_do_brazil",
      "competitionName": "Copa do Brasil",
      "date": "2026-09-03T00:30Z",
      "status": "scheduled",
      "statusLabel": "Agendado",
      "clock": null,
      "venue": "Estadio Manoel Barradas",
      "home": {
        "id": "3457",
        "name": "Vitória",
        "shortName": "Vitória",
        "abbreviation": "VIT",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/3457.png"
      },
      "away": {
        "id": "3454",
        "name": "Vasco da Gama",
        "shortName": "Vasco",
        "abbreviation": "VAS",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/3454.png"
      },
      "homeScore": null,
      "awayScore": null,
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401909111/vasco-da-gama-vitoria"
    },
    {
      "id": "401909114",
      "competitionId": "bra.copa_do_brazil",
      "competitionName": "Copa do Brasil",
      "date": "2026-09-03T23:00Z",
      "status": "scheduled",
      "statusLabel": "Agendado",
      "clock": null,
      "venue": "Arena do Grêmio",
      "home": {
        "id": "6273",
        "name": "Grêmio",
        "shortName": "Grêmio",
        "abbreviation": "GRE",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/6273.png"
      },
      "away": {
        "id": "1936",
        "name": "Internacional",
        "shortName": "Internacional",
        "abbreviation": "INT",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/1936.png"
      },
      "homeScore": null,
      "awayScore": null,
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401909114/internacional-gremio"
    },
    {
      "id": "401841224",
      "competitionId": "bra.1",
      "competitionName": "Campeonato Brasileiro",
      "date": "2026-09-05T19:00Z",
      "status": "scheduled",
      "statusLabel": "Agendado",
      "clock": null,
      "venue": "Estádio Municipal Cicero de Souza Marques",
      "home": {
        "id": "6079",
        "name": "Red Bull Bragantino",
        "shortName": "Bragantino",
        "abbreviation": "BRA",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/6079.png"
      },
      "away": {
        "id": "9967",
        "name": "Bahia",
        "shortName": "Bahia",
        "abbreviation": "BAH",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/9967.png"
      },
      "homeScore": null,
      "awayScore": null,
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401841224/bahia-red-bull-bragantino"
    },
    {
      "id": "401841226",
      "competitionId": "bra.1",
      "competitionName": "Campeonato Brasileiro",
      "date": "2026-09-05T21:30Z",
      "status": "scheduled",
      "statusLabel": "Agendado",
      "clock": null,
      "venue": "Estádio Cícero Pompeu de Toledo",
      "home": {
        "id": "2026",
        "name": "São Paulo",
        "shortName": "São Paulo",
        "abbreviation": "SAO",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/2026.png"
      },
      "away": {
        "id": "7632",
        "name": "Atlético-MG",
        "shortName": "Atlético-MG",
        "abbreviation": "CAM",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/7632.png"
      },
      "homeScore": null,
      "awayScore": null,
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401841226/atletico-mg-sao-paulo"
    },
    {
      "id": "401841227",
      "competitionId": "bra.1",
      "competitionName": "Campeonato Brasileiro",
      "date": "2026-09-06T00:00Z",
      "status": "scheduled",
      "statusLabel": "Agendado",
      "clock": null,
      "venue": "Estadio do Maracana",
      "home": {
        "id": "3445",
        "name": "Fluminense",
        "shortName": "Fluminense",
        "abbreviation": "FLU",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/3445.png"
      },
      "away": {
        "id": "3454",
        "name": "Vasco da Gama",
        "shortName": "Vasco",
        "abbreviation": "VAS",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/3454.png"
      },
      "homeScore": null,
      "awayScore": null,
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401841227/vasco-da-gama-fluminense"
    },
    {
      "id": "401841219",
      "competitionId": "bra.1",
      "competitionName": "Campeonato Brasileiro",
      "date": "2026-09-06T14:00Z",
      "status": "scheduled",
      "statusLabel": "Agendado",
      "clock": null,
      "venue": "Couto Pereira",
      "home": {
        "id": "3456",
        "name": "Coritiba",
        "shortName": "Coritiba",
        "abbreviation": "CFC",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/3456.png"
      },
      "away": {
        "id": "9169",
        "name": "Mirassol",
        "shortName": "Mirassol",
        "abbreviation": "MIR",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/9169.png"
      },
      "homeScore": null,
      "awayScore": null,
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401841219/mirassol-coritiba"
    },
    {
      "id": "401841218",
      "competitionId": "bra.1",
      "competitionName": "Campeonato Brasileiro",
      "date": "2026-09-06T19:00Z",
      "status": "scheduled",
      "statusLabel": "Agendado",
      "clock": null,
      "venue": "Estadio Mineirão",
      "home": {
        "id": "2022",
        "name": "Cruzeiro",
        "shortName": "Cruzeiro",
        "abbreviation": "CRU",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/2022.png"
      },
      "away": {
        "id": "3458",
        "name": "Athletico Paranaense",
        "shortName": "Athletico-PR",
        "abbreviation": "CAP",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/3458.png"
      },
      "homeScore": null,
      "awayScore": null,
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401841218/athletico-paranaense-cruzeiro"
    },
    {
      "id": "401841223",
      "competitionId": "bra.1",
      "competitionName": "Campeonato Brasileiro",
      "date": "2026-09-06T19:00Z",
      "status": "scheduled",
      "statusLabel": "Agendado",
      "clock": null,
      "venue": "Estadio Beira-Rio",
      "home": {
        "id": "1936",
        "name": "Internacional",
        "shortName": "Internacional",
        "abbreviation": "INT",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/1936.png"
      },
      "away": {
        "id": "2674",
        "name": "Santos",
        "shortName": "Santos",
        "abbreviation": "SAN",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/2674.png"
      },
      "homeScore": null,
      "awayScore": null,
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401841223/santos-internacional"
    },
    {
      "id": "401841225",
      "competitionId": "bra.1",
      "competitionName": "Campeonato Brasileiro",
      "date": "2026-09-06T19:00Z",
      "status": "scheduled",
      "statusLabel": "Agendado",
      "clock": null,
      "venue": "Mangueirão",
      "home": {
        "id": "4936",
        "name": "Remo",
        "shortName": "Remo",
        "abbreviation": "REMO",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/4936.png"
      },
      "away": {
        "id": "819",
        "name": "Flamengo",
        "shortName": "Flamengo",
        "abbreviation": "FLA",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/819.png"
      },
      "homeScore": null,
      "awayScore": null,
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401841225/flamengo-remo"
    },
    {
      "id": "401841221",
      "competitionId": "bra.1",
      "competitionName": "Campeonato Brasileiro",
      "date": "2026-09-06T21:30Z",
      "status": "scheduled",
      "statusLabel": "Agendado",
      "clock": null,
      "venue": "Joao Havelange Stadium",
      "home": {
        "id": "6086",
        "name": "Botafogo",
        "shortName": "Botafogo",
        "abbreviation": "BOT",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/6086.png"
      },
      "away": {
        "id": "2029",
        "name": "Palmeiras",
        "shortName": "Palmeiras",
        "abbreviation": "PAL",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/2029.png"
      },
      "homeScore": null,
      "awayScore": null,
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401841221/palmeiras-botafogo"
    },
    {
      "id": "401841220",
      "competitionId": "bra.1",
      "competitionName": "Campeonato Brasileiro",
      "date": "2026-09-06T22:30Z",
      "status": "scheduled",
      "statusLabel": "Agendado",
      "clock": null,
      "venue": "Neo Química Arena",
      "home": {
        "id": "874",
        "name": "Corinthians",
        "shortName": "Corinthians",
        "abbreviation": "COR",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/874.png"
      },
      "away": {
        "id": "9318",
        "name": "Chapecoense",
        "shortName": "Chapecoense",
        "abbreviation": "CHA",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/9318.png"
      },
      "homeScore": null,
      "awayScore": null,
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401841220/chapecoense-corinthians"
    },
    {
      "id": "401841222",
      "competitionId": "bra.1",
      "competitionName": "Campeonato Brasileiro",
      "date": "2026-09-07T23:00Z",
      "status": "scheduled",
      "statusLabel": "Agendado",
      "clock": null,
      "venue": "Estadio Manoel Barradas",
      "home": {
        "id": "3457",
        "name": "Vitória",
        "shortName": "Vitória",
        "abbreviation": "VIT",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/3457.png"
      },
      "away": {
        "id": "6273",
        "name": "Grêmio",
        "shortName": "Grêmio",
        "abbreviation": "GRE",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/6273.png"
      },
      "homeScore": null,
      "awayScore": null,
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401841222/gremio-vitoria"
    },
    {
      "id": "401912518",
      "competitionId": "conmebol.libertadores",
      "competitionName": "CONMEBOL Libertadores",
      "date": "2026-09-08T22:00Z",
      "status": "scheduled",
      "statusLabel": "Agendado",
      "clock": null,
      "venue": "Estadio do Maracana",
      "home": {
        "id": "3445",
        "name": "Fluminense",
        "shortName": "Fluminense",
        "abbreviation": "FLU",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/3445.png"
      },
      "away": {
        "id": "7764",
        "name": "Platense",
        "shortName": "Platense",
        "abbreviation": "PLA",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/7764.png"
      },
      "homeScore": null,
      "awayScore": null,
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401912518/platense-fluminense"
    },
    {
      "id": "401913960",
      "competitionId": "conmebol.sudamericana",
      "competitionName": "CONMEBOL Sudamericana",
      "date": "2026-09-08T22:00Z",
      "status": "scheduled",
      "statusLabel": "Agendado",
      "clock": null,
      "venue": "Estadio Nemesio Camacho El Campín",
      "home": {
        "id": "5488",
        "name": "Independiente Santa Fe",
        "shortName": "Santa Fe",
        "abbreviation": "SFE",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/5488.png"
      },
      "away": {
        "id": "3454",
        "name": "Vasco da Gama",
        "shortName": "Vasco",
        "abbreviation": "VAS",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/3454.png"
      },
      "homeScore": null,
      "awayScore": null,
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401913960/vasco-da-gama-independiente-santa-fe"
    },
    {
      "id": "401912542",
      "competitionId": "conmebol.sudamericana",
      "competitionName": "CONMEBOL Sudamericana",
      "date": "2026-09-09T00:30Z",
      "status": "scheduled",
      "statusLabel": "Agendado",
      "clock": null,
      "venue": "Alberto José Armando (La Bombonera)",
      "home": {
        "id": "5",
        "name": "Boca Juniors",
        "shortName": "Boca",
        "abbreviation": "CABJ",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/5.png"
      },
      "away": {
        "id": "2026",
        "name": "São Paulo",
        "shortName": "São Paulo",
        "abbreviation": "SAO",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/2026.png"
      },
      "homeScore": null,
      "awayScore": null,
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401912542/sao-paulo-boca-juniors"
    },
    {
      "id": "401912527",
      "competitionId": "conmebol.libertadores",
      "competitionName": "CONMEBOL Libertadores",
      "date": "2026-09-09T22:00Z",
      "status": "scheduled",
      "statusLabel": "Agendado",
      "clock": null,
      "venue": "Allianz Parque",
      "home": {
        "id": "2029",
        "name": "Palmeiras",
        "shortName": "Palmeiras",
        "abbreviation": "PAL",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/2029.png"
      },
      "away": {
        "id": "4816",
        "name": "Liga de Quito",
        "shortName": "LDU",
        "abbreviation": "LDU",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/4816.png"
      },
      "homeScore": null,
      "awayScore": null,
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401912527/liga-de-quito-palmeiras"
    },
    {
      "id": "401913073",
      "competitionId": "conmebol.sudamericana",
      "competitionName": "CONMEBOL Sudamericana",
      "date": "2026-09-09T22:00Z",
      "status": "scheduled",
      "statusLabel": "Agendado",
      "clock": null,
      "venue": "Estádio Vila Belmiro (Urbano Caldeira)",
      "home": {
        "id": "2674",
        "name": "Santos",
        "shortName": "Santos",
        "abbreviation": "SAN",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/2674.png"
      },
      "away": {
        "id": "7632",
        "name": "Atlético-MG",
        "shortName": "Atlético-MG",
        "abbreviation": "CAM",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/7632.png"
      },
      "homeScore": null,
      "awayScore": null,
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401913073/atletico-mg-santos"
    },
    {
      "id": "401912541",
      "competitionId": "conmebol.libertadores",
      "competitionName": "CONMEBOL Libertadores",
      "date": "2026-09-10T00:30Z",
      "status": "scheduled",
      "statusLabel": "Agendado",
      "clock": null,
      "venue": "Estadio Jorge Luis Hirschi",
      "home": {
        "id": "8",
        "name": "Estudiantes de La Plata",
        "shortName": "Estudiantes",
        "abbreviation": "EST",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/8.png"
      },
      "away": {
        "id": "874",
        "name": "Corinthians",
        "shortName": "Corinthians",
        "abbreviation": "COR",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/874.png"
      },
      "homeScore": null,
      "awayScore": null,
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401912541/corinthians-estudiantes-de-la-plata"
    },
    {
      "id": "401912543",
      "competitionId": "conmebol.libertadores",
      "competitionName": "CONMEBOL Libertadores",
      "date": "2026-09-11T00:30Z",
      "status": "scheduled",
      "statusLabel": "Agendado",
      "clock": null,
      "venue": "Estadio Olímpico Atahualpa",
      "home": {
        "id": "17086",
        "name": "Independiente del Valle",
        "shortName": "Ind. del Valle",
        "abbreviation": "IDV",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/17086.png"
      },
      "away": {
        "id": "819",
        "name": "Flamengo",
        "shortName": "Flamengo",
        "abbreviation": "FLA",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/819.png"
      },
      "homeScore": null,
      "awayScore": null,
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401912543/flamengo-independiente-del-valle"
    },
    {
      "id": "401841232",
      "competitionId": "bra.1",
      "competitionName": "Campeonato Brasileiro",
      "date": "2026-09-12T00:00Z",
      "status": "scheduled",
      "statusLabel": "Agendado",
      "clock": null,
      "venue": "Couto Pereira",
      "home": {
        "id": "3456",
        "name": "Coritiba",
        "shortName": "Coritiba",
        "abbreviation": "CFC",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/3456.png"
      },
      "away": {
        "id": "3458",
        "name": "Athletico Paranaense",
        "shortName": "Athletico-PR",
        "abbreviation": "CAP",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/3458.png"
      },
      "homeScore": null,
      "awayScore": null,
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401841232/athletico-paranaense-coritiba"
    },
    {
      "id": "401841231",
      "competitionId": "bra.1",
      "competitionName": "Campeonato Brasileiro",
      "date": "2026-09-12T19:00Z",
      "status": "scheduled",
      "statusLabel": "Agendado",
      "clock": null,
      "venue": "Arena MRV",
      "home": {
        "id": "7632",
        "name": "Atlético-MG",
        "shortName": "Atlético-MG",
        "abbreviation": "CAM",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/7632.png"
      },
      "away": {
        "id": "3445",
        "name": "Fluminense",
        "shortName": "Fluminense",
        "abbreviation": "FLU",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/3445.png"
      },
      "homeScore": null,
      "awayScore": null,
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401841231/fluminense-atletico-mg"
    },
    {
      "id": "401841236",
      "competitionId": "bra.1",
      "competitionName": "Campeonato Brasileiro",
      "date": "2026-09-12T19:00Z",
      "status": "scheduled",
      "statusLabel": "Agendado",
      "clock": null,
      "venue": "Arena do Grêmio",
      "home": {
        "id": "6273",
        "name": "Grêmio",
        "shortName": "Grêmio",
        "abbreviation": "GRE",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/6273.png"
      },
      "away": {
        "id": "3454",
        "name": "Vasco da Gama",
        "shortName": "Vasco",
        "abbreviation": "VAS",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/3454.png"
      },
      "homeScore": null,
      "awayScore": null,
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401841236/vasco-da-gama-gremio"
    },
    {
      "id": "401841228",
      "competitionId": "bra.1",
      "competitionName": "Campeonato Brasileiro",
      "date": "2026-09-12T20:00Z",
      "status": "scheduled",
      "statusLabel": "Agendado",
      "clock": null,
      "venue": "Arena Condá",
      "home": {
        "id": "9318",
        "name": "Chapecoense",
        "shortName": "Chapecoense",
        "abbreviation": "CHA",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/9318.png"
      },
      "away": {
        "id": "1936",
        "name": "Internacional",
        "shortName": "Internacional",
        "abbreviation": "INT",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/1936.png"
      },
      "homeScore": null,
      "awayScore": null,
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401841228/internacional-chapecoense"
    },
    {
      "id": "401841234",
      "competitionId": "bra.1",
      "competitionName": "Campeonato Brasileiro",
      "date": "2026-09-12T21:30Z",
      "status": "scheduled",
      "statusLabel": "Agendado",
      "clock": null,
      "venue": "Allianz Parque",
      "home": {
        "id": "2029",
        "name": "Palmeiras",
        "shortName": "Palmeiras",
        "abbreviation": "PAL",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/2029.png"
      },
      "away": {
        "id": "2026",
        "name": "São Paulo",
        "shortName": "São Paulo",
        "abbreviation": "SAO",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/2026.png"
      },
      "homeScore": null,
      "awayScore": null,
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401841234/sao-paulo-palmeiras"
    },
    {
      "id": "401841229",
      "competitionId": "bra.1",
      "competitionName": "Campeonato Brasileiro",
      "date": "2026-09-12T23:30Z",
      "status": "scheduled",
      "statusLabel": "Agendado",
      "clock": null,
      "venue": "Joao Havelange Stadium",
      "home": {
        "id": "6086",
        "name": "Botafogo",
        "shortName": "Botafogo",
        "abbreviation": "BOT",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/6086.png"
      },
      "away": {
        "id": "6079",
        "name": "Red Bull Bragantino",
        "shortName": "Bragantino",
        "abbreviation": "BRA",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/6079.png"
      },
      "homeScore": null,
      "awayScore": null,
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401841229/red-bull-bragantino-botafogo"
    },
    {
      "id": "401841233",
      "competitionId": "bra.1",
      "competitionName": "Campeonato Brasileiro",
      "date": "2026-09-13T00:00Z",
      "status": "scheduled",
      "statusLabel": "Agendado",
      "clock": null,
      "venue": "Estádio Vila Belmiro (Urbano Caldeira)",
      "home": {
        "id": "2674",
        "name": "Santos",
        "shortName": "Santos",
        "abbreviation": "SAN",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/2674.png"
      },
      "away": {
        "id": "2022",
        "name": "Cruzeiro",
        "shortName": "Cruzeiro",
        "abbreviation": "CRU",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/2022.png"
      },
      "homeScore": null,
      "awayScore": null,
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401841233/cruzeiro-santos"
    },
    {
      "id": "401841235",
      "competitionId": "bra.1",
      "competitionName": "Campeonato Brasileiro",
      "date": "2026-09-13T19:00Z",
      "status": "scheduled",
      "statusLabel": "Agendado",
      "clock": null,
      "venue": "Estadio Municipal José Maria de Campos Maia",
      "home": {
        "id": "9169",
        "name": "Mirassol",
        "shortName": "Mirassol",
        "abbreviation": "MIR",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/9169.png"
      },
      "away": {
        "id": "3457",
        "name": "Vitória",
        "shortName": "Vitória",
        "abbreviation": "VIT",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/3457.png"
      },
      "homeScore": null,
      "awayScore": null,
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401841235/vitoria-mirassol"
    },
    {
      "id": "401841237",
      "competitionId": "bra.1",
      "competitionName": "Campeonato Brasileiro",
      "date": "2026-09-13T20:30Z",
      "status": "scheduled",
      "statusLabel": "Agendado",
      "clock": null,
      "venue": "Estadio do Maracana",
      "home": {
        "id": "819",
        "name": "Flamengo",
        "shortName": "Flamengo",
        "abbreviation": "FLA",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/819.png"
      },
      "away": {
        "id": "874",
        "name": "Corinthians",
        "shortName": "Corinthians",
        "abbreviation": "COR",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/874.png"
      },
      "homeScore": null,
      "awayScore": null,
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401841237/corinthians-flamengo"
    },
    {
      "id": "401841230",
      "competitionId": "bra.1",
      "competitionName": "Campeonato Brasileiro",
      "date": "2026-09-14T23:00Z",
      "status": "scheduled",
      "statusLabel": "Agendado",
      "clock": null,
      "venue": "Arena Fonte Nova",
      "home": {
        "id": "9967",
        "name": "Bahia",
        "shortName": "Bahia",
        "abbreviation": "BAH",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/9967.png"
      },
      "away": {
        "id": "4936",
        "name": "Remo",
        "shortName": "Remo",
        "abbreviation": "REMO",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/4936.png"
      },
      "homeScore": null,
      "awayScore": null,
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401841230/remo-bahia"
    },
    {
      "id": "401912517",
      "competitionId": "conmebol.libertadores",
      "competitionName": "CONMEBOL Libertadores",
      "date": "2026-09-15T22:00Z",
      "status": "scheduled",
      "statusLabel": "Agendado",
      "clock": null,
      "venue": "Ciudad de Vicente López",
      "home": {
        "id": "7764",
        "name": "Platense",
        "shortName": "Platense",
        "abbreviation": "PLA",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/7764.png"
      },
      "away": {
        "id": "3445",
        "name": "Fluminense",
        "shortName": "Fluminense",
        "abbreviation": "FLU",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/3445.png"
      },
      "homeScore": null,
      "awayScore": null,
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401912517/fluminense-platense"
    },
    {
      "id": "401913959",
      "competitionId": "conmebol.sudamericana",
      "competitionName": "CONMEBOL Sudamericana",
      "date": "2026-09-15T22:00Z",
      "status": "scheduled",
      "statusLabel": "Agendado",
      "clock": null,
      "venue": "Estádio São Januário",
      "home": {
        "id": "3454",
        "name": "Vasco da Gama",
        "shortName": "Vasco",
        "abbreviation": "VAS",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/3454.png"
      },
      "away": {
        "id": "5488",
        "name": "Independiente Santa Fe",
        "shortName": "Santa Fe",
        "abbreviation": "SFE",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/5488.png"
      },
      "homeScore": null,
      "awayScore": null,
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401913959/independiente-santa-fe-vasco-da-gama"
    },
    {
      "id": "401912524",
      "competitionId": "conmebol.sudamericana",
      "competitionName": "CONMEBOL Sudamericana",
      "date": "2026-09-16T00:30Z",
      "status": "scheduled",
      "statusLabel": "Agendado",
      "clock": null,
      "venue": "Estádio Cícero Pompeu de Toledo",
      "home": {
        "id": "2026",
        "name": "São Paulo",
        "shortName": "São Paulo",
        "abbreviation": "SAO",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/2026.png"
      },
      "away": {
        "id": "5",
        "name": "Boca Juniors",
        "shortName": "Boca",
        "abbreviation": "CABJ",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/5.png"
      },
      "homeScore": null,
      "awayScore": null,
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401912524/boca-juniors-sao-paulo"
    }
  ],
  "standings": [
    {
      "position": 1,
      "team": {
        "id": "2029",
        "name": "Palmeiras",
        "shortName": "Palmeiras",
        "abbreviation": "PAL",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/2029.png"
      },
      "points": 52,
      "played": 25,
      "wins": 15,
      "draws": 7,
      "losses": 3,
      "goalsFor": 45,
      "goalsAgainst": 21,
      "goalDifference": 24
    },
    {
      "position": 2,
      "team": {
        "id": "819",
        "name": "Flamengo",
        "shortName": "Flamengo",
        "abbreviation": "FLA",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/819.png"
      },
      "points": 48,
      "played": 24,
      "wins": 14,
      "draws": 6,
      "losses": 4,
      "goalsFor": 48,
      "goalsAgainst": 21,
      "goalDifference": 27
    },
    {
      "position": 3,
      "team": {
        "id": "3458",
        "name": "Athletico Paranaense",
        "shortName": "Athletico-PR",
        "abbreviation": "CAP",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/3458.png"
      },
      "points": 45,
      "played": 25,
      "wins": 13,
      "draws": 6,
      "losses": 6,
      "goalsFor": 37,
      "goalsAgainst": 25,
      "goalDifference": 12
    },
    {
      "position": 4,
      "team": {
        "id": "3445",
        "name": "Fluminense",
        "shortName": "Fluminense",
        "abbreviation": "FLU",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/3445.png"
      },
      "points": 42,
      "played": 25,
      "wins": 11,
      "draws": 9,
      "losses": 5,
      "goalsFor": 39,
      "goalsAgainst": 32,
      "goalDifference": 7
    },
    {
      "position": 5,
      "team": {
        "id": "9967",
        "name": "Bahia",
        "shortName": "Bahia",
        "abbreviation": "BAH",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/9967.png"
      },
      "points": 40,
      "played": 25,
      "wins": 10,
      "draws": 10,
      "losses": 5,
      "goalsFor": 37,
      "goalsAgainst": 30,
      "goalDifference": 7
    },
    {
      "position": 6,
      "team": {
        "id": "2022",
        "name": "Cruzeiro",
        "shortName": "Cruzeiro",
        "abbreviation": "CRU",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/2022.png"
      },
      "points": 39,
      "played": 25,
      "wins": 11,
      "draws": 6,
      "losses": 8,
      "goalsFor": 35,
      "goalsAgainst": 36,
      "goalDifference": -1
    },
    {
      "position": 7,
      "team": {
        "id": "3456",
        "name": "Coritiba",
        "shortName": "Coritiba",
        "abbreviation": "CFC",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/3456.png"
      },
      "points": 37,
      "played": 25,
      "wins": 10,
      "draws": 7,
      "losses": 8,
      "goalsFor": 33,
      "goalsAgainst": 33,
      "goalDifference": 0
    },
    {
      "position": 8,
      "team": {
        "id": "7632",
        "name": "Atlético-MG",
        "shortName": "Atlético-MG",
        "abbreviation": "CAM",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/7632.png"
      },
      "points": 36,
      "played": 24,
      "wins": 10,
      "draws": 6,
      "losses": 8,
      "goalsFor": 32,
      "goalsAgainst": 28,
      "goalDifference": 4
    },
    {
      "position": 9,
      "team": {
        "id": "6079",
        "name": "Red Bull Bragantino",
        "shortName": "Bragantino",
        "abbreviation": "BRA",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/6079.png"
      },
      "points": 35,
      "played": 24,
      "wins": 10,
      "draws": 5,
      "losses": 9,
      "goalsFor": 29,
      "goalsAgainst": 25,
      "goalDifference": 4
    },
    {
      "position": 10,
      "team": {
        "id": "874",
        "name": "Corinthians",
        "shortName": "Corinthians",
        "abbreviation": "COR",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/874.png"
      },
      "points": 32,
      "played": 25,
      "wins": 8,
      "draws": 8,
      "losses": 9,
      "goalsFor": 26,
      "goalsAgainst": 25,
      "goalDifference": 1
    },
    {
      "position": 11,
      "team": {
        "id": "2026",
        "name": "São Paulo",
        "shortName": "São Paulo",
        "abbreviation": "SAO",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/2026.png"
      },
      "points": 30,
      "played": 24,
      "wins": 8,
      "draws": 6,
      "losses": 10,
      "goalsFor": 29,
      "goalsAgainst": 28,
      "goalDifference": 1
    },
    {
      "position": 12,
      "team": {
        "id": "6086",
        "name": "Botafogo",
        "shortName": "Botafogo",
        "abbreviation": "BOT",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/6086.png"
      },
      "points": 30,
      "played": 24,
      "wins": 8,
      "draws": 6,
      "losses": 10,
      "goalsFor": 37,
      "goalsAgainst": 40,
      "goalDifference": -3
    },
    {
      "position": 13,
      "team": {
        "id": "3457",
        "name": "Vitória",
        "shortName": "Vitória",
        "abbreviation": "VIT",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/3457.png"
      },
      "points": 29,
      "played": 25,
      "wins": 8,
      "draws": 5,
      "losses": 12,
      "goalsFor": 24,
      "goalsAgainst": 37,
      "goalDifference": -13
    },
    {
      "position": 14,
      "team": {
        "id": "2674",
        "name": "Santos",
        "shortName": "Santos",
        "abbreviation": "SAN",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/2674.png"
      },
      "points": 29,
      "played": 24,
      "wins": 7,
      "draws": 8,
      "losses": 9,
      "goalsFor": 34,
      "goalsAgainst": 36,
      "goalDifference": -2
    },
    {
      "position": 15,
      "team": {
        "id": "6273",
        "name": "Grêmio",
        "shortName": "Grêmio",
        "abbreviation": "GRE",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/6273.png"
      },
      "points": 28,
      "played": 24,
      "wins": 7,
      "draws": 7,
      "losses": 10,
      "goalsFor": 27,
      "goalsAgainst": 32,
      "goalDifference": -5
    },
    {
      "position": 16,
      "team": {
        "id": "9169",
        "name": "Mirassol",
        "shortName": "Mirassol",
        "abbreviation": "MIR",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/9169.png"
      },
      "points": 25,
      "played": 24,
      "wins": 6,
      "draws": 7,
      "losses": 11,
      "goalsFor": 27,
      "goalsAgainst": 37,
      "goalDifference": -10
    },
    {
      "position": 17,
      "team": {
        "id": "3454",
        "name": "Vasco da Gama",
        "shortName": "Vasco",
        "abbreviation": "VAS",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/3454.png"
      },
      "points": 25,
      "played": 24,
      "wins": 6,
      "draws": 7,
      "losses": 11,
      "goalsFor": 27,
      "goalsAgainst": 39,
      "goalDifference": -12
    },
    {
      "position": 18,
      "team": {
        "id": "1936",
        "name": "Internacional",
        "shortName": "Internacional",
        "abbreviation": "INT",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/1936.png"
      },
      "points": 25,
      "played": 25,
      "wins": 5,
      "draws": 10,
      "losses": 10,
      "goalsFor": 26,
      "goalsAgainst": 31,
      "goalDifference": -5
    },
    {
      "position": 19,
      "team": {
        "id": "4936",
        "name": "Remo",
        "shortName": "Remo",
        "abbreviation": "REMO",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/4936.png"
      },
      "points": 23,
      "played": 25,
      "wins": 5,
      "draws": 8,
      "losses": 12,
      "goalsFor": 30,
      "goalsAgainst": 42,
      "goalDifference": -12
    },
    {
      "position": 20,
      "team": {
        "id": "9318",
        "name": "Chapecoense",
        "shortName": "Chapecoense",
        "abbreviation": "CHA",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/9318.png"
      },
      "points": 14,
      "played": 24,
      "wins": 2,
      "draws": 8,
      "losses": 14,
      "goalsFor": 25,
      "goalsAgainst": 49,
      "goalDifference": -24
    }
  ],
  "news": [
    {
      "id": "17196959",
      "title": "Abel, do Palmeiras, é denunciado ao STJD por chute em microfone e pode pegar mais um gancho pesado",
      "summary": "Abel Ferreira foi denunciado nesta terça-feira (1º) ao STJD por chute em microfone durante Mirassol x Palmeiras",
      "url": "https://www.espn.com.br/futebol/palmeiras/artigo/_/id/17196959/abel-ferreira-palmeiras-denunciado-stjd-chute-microfone-pode-pegar-mais-gancho-pesado",
      "publishedAt": "2026-09-01T17:10:16Z",
      "category": "news",
      "teams": [
        "Palmeiras"
      ],
      "imageUrl": "https://a.espncdn.com/photo/2026/0901/r1710015_1296x729_16-9.jpg",
      "imageAlt": "Abel Ferreira durante jogo entre Palmeiras e Mirassol, pelo Brasileirão",
      "imageCredit": "Rapha Marques/Sports Press Photo/Getty Images"
    },
    {
      "id": "17196891",
      "title": "Bastidores da renovação de Flaco López com Palmeiras até 2030: multa de R$ 600 milhões e valorização salarial",
      "summary": "Palmeiras anunciou nesta terça-feira (1º) a renovaçã de contrato de Flaco López até 2030",
      "url": "https://www.espn.com.br/futebol/palmeiras/artigo/_/id/17196891/bastidores-renovacao-flaco-lopez-palmeiras-2030-multa-r-600-milhoes-valorizacao-salarial",
      "publishedAt": "2026-09-01T16:46:35Z",
      "category": "market",
      "teams": [
        "Palmeiras"
      ],
      "imageUrl": "https://a.espncdn.com/photo/2026/0901/r1709975_1280x720_16-9.jpg",
      "imageAlt": "Flaco López comemora a renovação de contrato até 2030 com o Palmeiras",
      "imageCredit": "Cesar Greco/Palmeiras/by Canon"
    },
    {
      "id": "17196796",
      "title": "SAFiel rebate Stabile, critica resistência de conselheiros do Corinthians e garante: 'Ninguém quer ter ganho financeiro com isso'",
      "summary": "Eduardo Salusse, um dos representantes da SAFiel, participou do Fala A Fonte desta terça-feira (1º)",
      "url": "https://www.espn.com.br/futebol/corinthians/artigo/_/id/17196796/safiel-rebate-stabile-critica-resistencia-conselheiros-corinthians-garante-ninguem-quer-ter-ganho-financeiro-com-isso",
      "publishedAt": "2026-09-01T16:06:54Z",
      "category": "news",
      "teams": [
        "Corinthians"
      ],
      "imageUrl": "https://a.espncdn.com/photo/2026/0831/r1709468_475x267_16-9.jpg",
      "imageAlt": "Corinthians e membros da SAFiel se reúnem no Parque São Jorge",
      "imageCredit": "Reprodução"
    },
    {
      "id": "17196193",
      "title": "Palmeiras anuncia renovação de contrato com Flaco López até 2030",
      "summary": "Argentino tinha vínculo com o clube até dezembro de 2029",
      "url": "https://www.espn.com.br/futebol/palmeiras/artigo/_/id/17196193/palmeiras-anuncia-renovacao-de-contrato-com-flaco-lopez-ate-2030",
      "publishedAt": "2026-09-01T16:39:00Z",
      "category": "market",
      "teams": [
        "Palmeiras"
      ],
      "imageUrl": "https://a.espncdn.com/photo/2026/0901/r1709932_1022x575_16-9.png",
      "imageAlt": "Palmeiras renovou com Flaco López até 2030",
      "imageCredit": "Cesar Greco/Palmeiras"
    },
    {
      "id": "17184817",
      "title": "Santos x Palmeiras: onde assistir ao vivo, horário, palpite e escalações do jogo da Copa do Brasil",
      "summary": "Equipes se enfrentam na Vila Belmiro às 21h30 (de Brasília) desta quarta-feira (2), pela volta das quartas de final da Copa do Brasil",
      "url": "https://www.espn.com.br/futebol/copa-do-brasil/artigo/_/id/17184817/santos-palmeiras-onde-assistir-ao-vivo-horario-palpite-escalacoes-jogo-copa-do-brasil",
      "publishedAt": "2026-09-01T12:37:37Z",
      "category": "news",
      "teams": [
        "Santos",
        "Palmeiras"
      ],
      "imageUrl": "https://a.espncdn.com/photo/2026/0712/r1688431_1296x729_16-9.jpg",
      "imageAlt": "Vila Belmiro, estádio do Santos",
      "imageCredit": "Getty Images"
    },
    {
      "id": "17195877",
      "title": "Flamengo anuncia novo reforço para substituir Plata e prepara duas novidades em lista da Libertadores",
      "summary": "Flamengo anunciou reforço equatoriano para a sequência da temporada",
      "url": "https://www.espn.com.br/futebol/flamengo/artigo/_/id/17195877/flamengo-anuncia-novo-reforco-substituir-plata-prepara-duas-novidades-lista-libertadores",
      "publishedAt": "2026-09-01T12:20:12Z",
      "category": "market",
      "teams": [
        "Flamengo"
      ],
      "imageUrl": "https://a.espncdn.com/photo/2026/0712/r1688481_1296x729_16-9.jpg",
      "imageAlt": "José Boto em jogo do Flamengo",
      "imageCredit": "Jorge Rodrigues/AGIF"
    },
    {
      "id": "17195451",
      "title": "Pedro Rocha decide, e Coritiba vence Remo no último lance em jogo de cinco gols; VEJA como foi",
      "summary": "Equipes se enfrentaram pela 25ª rodada do Brasileirão",
      "url": "https://www.espn.com.br/video/clip/_/id/17195451",
      "publishedAt": "2026-09-01T03:55:00Z",
      "category": "news",
      "teams": [
        "Coritiba",
        "Remo"
      ],
      "imageUrl": null,
      "imageAlt": "Pedro Rocha decide, e Coritiba vence Remo no último lance em jogo de cinco gols; VEJA como foi",
      "imageCredit": null
    },
    {
      "id": "17195240",
      "title": "Neymar em 'nova versão'? Resenha da Rodada elogia momento de astro no Santos: 'Ele é um absurdo'",
      "summary": "Momento de Neymar com a camisa do Santos foi elogiado durante o Resenha da Rodada",
      "url": "https://www.espn.com.br/futebol/santos/artigo/_/id/17195240/neymar-em-nova-versao-resenha-da-rodada-elogia-momento-de-astro-santos-ele-e-um-absurdo",
      "publishedAt": "2026-09-01T02:31:09Z",
      "category": "news",
      "teams": [
        "Santos"
      ],
      "imageUrl": "https://a.espncdn.com/photo/2026/0901/r1709804_1296x729_16-9.jpg",
      "imageAlt": "Meia-atacante brasileiro Neymar aquecendo no gramado antes de clássico do Santos contra o Corinthians, na Neo Química Arena, em Itaquera (SP), pela rodada 25 do Brasileirão de 2026",
      "imageCredit": "Raul Baretta/ Santos FC"
    },
    {
      "id": "17194977",
      "title": "Em jogo com duas viradas, Coritiba é 'salvo' por gol de Pedro Rocha no fim e afunda Remo no Z-4 do Brasileirão",
      "summary": "No Mangueirão, o Coritiba venceu o Remo por 3 a 2 em jogo com duas viradas pelo Brasileirão",
      "url": "https://www.espn.com.br/futebol/brasileirao/artigo/_/id/17194977/brasileirao-coritiba-salvo-por-gol-pedro-rocha-no-fim-afunda-remo-z4-jogo-com-duas-viradas",
      "publishedAt": "2026-09-01T03:56:05Z",
      "category": "news",
      "teams": [
        "Remo",
        "Coritiba"
      ],
      "imageUrl": "https://a.espncdn.com/photo/2026/0901/r1709772_1296x729_16-9.jpg",
      "imageAlt": "Atacante brasileiro Pedro Rocha comemorando gol do Coritiba sobre o Remo, no Mangueirão, em Belém (PA), pela rodada 25 do Brasileirão de 2026",
      "imageCredit": "Fernando Torres/AGIF"
    },
    {
      "id": "17194875",
      "title": "Bastidores de Corinthians x Santos têm 'piada' de Gabigol sobre gripe de Neymar e discurso efusivo do camisa 10: 'Nosso time é bom para c***'",
      "summary": "Neymar fez discurso efusivo nos vestiários da Neo Química Arena após vitória do Santos em clássico contra o Corinthians",
      "url": "https://www.espn.com.br/futebol/santos/artigo/_/id/17194875/bastidores-corinthians-x-santos-piada-gabigol-gripe-neymar-discurso-camisa-10-nosso-time-e-bom-para-c",
      "publishedAt": "2026-09-01T00:14:48Z",
      "category": "news",
      "teams": [
        "Santos"
      ],
      "imageUrl": "https://a.espncdn.com/photo/2026/0901/r1709762_1296x729_16-9.jpg",
      "imageAlt": "Meia-atacante brasileiro Neymar em clássico do Santos contra o Corinthians, na Neo Química Arena, em Itaquera (SP), pela rodada 25 do Brasileirão 2026",
      "imageCredit": "Raul Baretta/ Santos FC"
    },
    {
      "id": "17194449",
      "title": "Sport recusa proposta milionária do Fluminense por 'sensação' da base; veja os detalhes",
      "summary": "Primeira oferta do Fluminense por Arthur Maron não agradou a diretoria do Sport",
      "url": "https://www.espn.com.br/futebol/fluminense/artigo/_/id/17194449/sport-recusa-proposta-milionaria-fluminense-por-arthur-maron-sensacao-da-base",
      "publishedAt": "2026-08-31T22:26:14Z",
      "category": "market",
      "teams": [
        "Fluminense",
        "Sport"
      ],
      "imageUrl": "https://a.espncdn.com/photo/2026/0831/r1709720_1296x729_16-9.jpg",
      "imageAlt": "Arthur Maron é destaque na categoria de base do Sport",
      "imageCredit": "Igor Cysneiros/Sport"
    },
    {
      "id": "17184873",
      "title": "Vitória x Vasco: onde assistir ao vivo, horário, palpite e escalações do jogo da Copa do Brasil",
      "summary": "Equipes se enfrentam no Barradão às 21h30 (de Brasília) desta quarta-feira (02), pela volta das quartas de final da Copa do Brasil",
      "url": "https://www.espn.com.br/futebol/copa-do-brasil/artigo/_/id/17184873/vitoria-x-vasco-onde-assistir-ao-vivo-horario-palpite-escalacoes-jogo-copa-do-brasil",
      "publishedAt": "2026-08-31T20:50:18Z",
      "category": "news",
      "teams": [
        "Vasco da Gama",
        "Vitória"
      ],
      "imageUrl": "https://a.espncdn.com/photo/2026/0512/r1657362_1296x729_16-9.jpg",
      "imageAlt": "Vista geral do Estádio Manoel Barradas, o Barradão, casa do Vitória",
      "imageCredit": "Márcio José/AGIF"
    },
    {
      "id": "17184776",
      "title": "Flamengo x Mirassol: onde assistir ao vivo, horário, palpite e escalações do jogo do Brasileirão",
      "summary": "Equipes se enfrentam no Maracanã às 19h30 (de Brasília) desta quarta-feira (02), pela quarta rodada atrasada do torneio",
      "url": "https://www.espn.com.br/futebol/brasileirao/artigo/_/id/17184776/flamengo-mirassol-onde-assistir-ao-vivo-horario-palpite-provaveis-escalacoes-jogo-brasileirao",
      "publishedAt": "2026-08-31T22:49:20Z",
      "category": "news",
      "teams": [
        "Mirassol",
        "Flamengo"
      ],
      "imageUrl": "https://a.espncdn.com/photo/2026/0515/r1658742_1296x729_16-9.jpg",
      "imageAlt": "Vista geral do Maracanã",
      "imageCredit": "Getty Images"
    },
    {
      "id": "17193225",
      "title": "Palmeiras: Barboza, Piquerez e Arias treinam e podem ser reforços contra o Santos",
      "summary": "Verdão ainda conta com outros nomes do elenco no DM",
      "url": "https://www.espn.com.br/futebol/palmeiras/artigo/_/id/17193225/palmeiras-barboza-piquerez-e-arias-treinam-e-podem-ser-reforcos-contra-o-santos",
      "publishedAt": "2026-08-31T18:25:00Z",
      "category": "market",
      "teams": [
        "Palmeiras"
      ],
      "imageUrl": "https://a.espncdn.com/photo/2026/0831/r1709569_1023x576_16-9.png",
      "imageAlt": "Jhon Arias, do Palmeiras",
      "imageCredit": "Cesar Greco/Palmeiras/by Canon"
    },
    {
      "id": "17193094",
      "title": "De 'terno alinhado', Arthur, ex-Grêmio, é anunciado como novo reforço do Santos",
      "summary": "Peixe vai em busca de mais reforços após derrubar o transfer ban",
      "url": "https://www.espn.com.br/futebol/santos/artigo/_/id/17193094/santos-anuncia-arthur-ex-gremio-terno-alinhado-novo-reforco",
      "publishedAt": "2026-08-31T17:45:24Z",
      "category": "market",
      "teams": [
        "Santos",
        "Grêmio"
      ],
      "imageUrl": "https://a.espncdn.com/photo/2026/0831/r1709555_1296x729_16-9.jpg",
      "imageAlt": "Arthur, do Santos",
      "imageCredit": "Divulgação/Santos F.C."
    },
    {
      "id": "17192516",
      "title": "Palmeiras: Abel entra na mira do STJD por chute em microfone e pode tomar mais um gancho pesado",
      "summary": "Abel Ferreira concedeu entrevista coletiva após o empate com o Mirassol, neste domingo (30), pelo Brasileirão",
      "url": "https://www.espn.com.br/futebol/palmeiras/artigo/_/id/17192516/abel-ferreira-entra-mira-stjd-chute-microfone-mirassol-palmeiras-pode-tomar-gancho-pesado",
      "publishedAt": "2026-08-31T16:04:13Z",
      "category": "news",
      "teams": [
        "Palmeiras"
      ],
      "imageUrl": "https://a.espncdn.com/photo/2026/0830/r1709256_1280x720_16-9.jpg",
      "imageAlt": "Abel Ferreira durante jogo entre Mirassol e Palmeiras, pelo Brasileirão",
      "imageCredit": "Cesar Greco/Palmeiras/by Canon"
    }
  ]
};
