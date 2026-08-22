import { RadarPayload } from './radar.models';

export const RADAR_FALLBACK: RadarPayload = {
  "version": 1,
  "generatedAt": "2026-08-22T13:56:03.217Z",
  "expiresAt": "2026-08-26T13:56:03.217Z",
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
      "matchCount": 26,
      "liveCount": 0,
      "nextMatchAt": "2026-08-22T19:00Z"
    },
    {
      "id": "bra.copa_do_brazil",
      "name": "Copa do Brasil",
      "shortName": "Copa do Brasil",
      "matchCount": 8,
      "liveCount": 0,
      "nextMatchAt": "2026-08-26T00:00Z"
    },
    {
      "id": "conmebol.libertadores",
      "name": "CONMEBOL Libertadores",
      "shortName": "Libertadores",
      "matchCount": 5,
      "liveCount": 0,
      "nextMatchAt": null
    },
    {
      "id": "conmebol.sudamericana",
      "name": "CONMEBOL Sudamericana",
      "shortName": "Sul-Americana",
      "matchCount": 5,
      "liveCount": 0,
      "nextMatchAt": null
    }
  ],
  "matches": [
    {
      "id": "401841191",
      "competitionId": "bra.1",
      "competitionName": "Campeonato Brasileiro",
      "date": "2026-08-17T23:00Z",
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
        "id": "4936",
        "name": "Remo",
        "shortName": "Remo",
        "abbreviation": "REMO",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/4936.png"
      },
      "homeScore": "1",
      "awayScore": "1",
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401841191/remo-internacional"
    },
    {
      "id": "401874156",
      "competitionId": "conmebol.libertadores",
      "competitionName": "CONMEBOL Libertadores",
      "date": "2026-08-18T22:00Z",
      "status": "finished",
      "statusLabel": "Final Score - After Penalties",
      "clock": null,
      "venue": "Malvinas Argentinas (Mendoza)",
      "home": {
        "id": "9744",
        "name": "Independiente Rivadavia",
        "shortName": "Ind. Rivadavia",
        "abbreviation": "RIV",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/9744.png"
      },
      "away": {
        "id": "3445",
        "name": "Fluminense",
        "shortName": "Fluminense",
        "abbreviation": "FLU",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/3445.png"
      },
      "homeScore": "1",
      "awayScore": "1",
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401874156/fluminense-independiente-rivadavia"
    },
    {
      "id": "401903294",
      "competitionId": "conmebol.sudamericana",
      "competitionName": "CONMEBOL Sudamericana",
      "date": "2026-08-19T00:30Z",
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
        "id": "2681",
        "name": "Bolívar",
        "shortName": "Bolívar",
        "abbreviation": "BOL",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/2681.png"
      },
      "homeScore": "3",
      "awayScore": "1",
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401903294/bolivar-sao-paulo"
    },
    {
      "id": "401874155",
      "competitionId": "conmebol.libertadores",
      "competitionName": "CONMEBOL Libertadores",
      "date": "2026-08-19T22:00Z",
      "status": "finished",
      "statusLabel": "Final da Partida",
      "clock": null,
      "venue": "Estadio ueno La Nueva Olla",
      "home": {
        "id": "2671",
        "name": "Cerro Porteño",
        "shortName": "Cerro Porteño",
        "abbreviation": "CPT",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/2671.png"
      },
      "away": {
        "id": "2029",
        "name": "Palmeiras",
        "shortName": "Palmeiras",
        "abbreviation": "PAL",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/2029.png"
      },
      "homeScore": "0",
      "awayScore": "1",
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401874155/palmeiras-cerro-porteno"
    },
    {
      "id": "401902714",
      "competitionId": "conmebol.sudamericana",
      "competitionName": "CONMEBOL Sudamericana",
      "date": "2026-08-19T22:00Z",
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
        "id": "6079",
        "name": "Red Bull Bragantino",
        "shortName": "Bragantino",
        "abbreviation": "BRA",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/6079.png"
      },
      "homeScore": "2",
      "awayScore": "2",
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401902714/red-bull-bragantino-atletico-mg"
    },
    {
      "id": "401874141",
      "competitionId": "conmebol.libertadores",
      "competitionName": "CONMEBOL Libertadores",
      "date": "2026-08-20T00:30Z",
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
        "id": "2022",
        "name": "Cruzeiro",
        "shortName": "Cruzeiro",
        "abbreviation": "CRU",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/2022.png"
      },
      "homeScore": "2",
      "awayScore": "1",
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401874141/cruzeiro-flamengo"
    },
    {
      "id": "401874142",
      "competitionId": "conmebol.libertadores",
      "competitionName": "CONMEBOL Libertadores",
      "date": "2026-08-20T22:00Z",
      "status": "finished",
      "statusLabel": "Final Score - After Penalties",
      "clock": null,
      "venue": "Rodrigo Paz Delgado",
      "home": {
        "id": "4816",
        "name": "Liga de Quito",
        "shortName": "LDU",
        "abbreviation": "LDU",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/4816.png"
      },
      "away": {
        "id": "9169",
        "name": "Mirassol",
        "shortName": "Mirassol",
        "abbreviation": "MIR",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/9169.png"
      },
      "homeScore": "0",
      "awayScore": "0",
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401874142/mirassol-liga-de-quito"
    },
    {
      "id": "401902740",
      "competitionId": "conmebol.sudamericana",
      "competitionName": "CONMEBOL Sudamericana",
      "date": "2026-08-20T22:00Z",
      "status": "finished",
      "statusLabel": "Final da Partida",
      "clock": null,
      "venue": "Defensores del Chaco",
      "home": {
        "id": "2675",
        "name": "Club Olimpia",
        "shortName": "Olimpia",
        "abbreviation": "OLI",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/2675.png"
      },
      "away": {
        "id": "3454",
        "name": "Vasco da Gama",
        "shortName": "Vasco",
        "abbreviation": "VAS",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/3454.png"
      },
      "homeScore": "1",
      "awayScore": "4",
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401902740/vasco-da-gama-club-olimpia"
    },
    {
      "id": "401902449",
      "competitionId": "conmebol.sudamericana",
      "competitionName": "CONMEBOL Sudamericana",
      "date": "2026-08-20T22:00Z",
      "status": "finished",
      "statusLabel": "Final da Partida",
      "clock": null,
      "venue": "Estadio Bellavista",
      "home": {
        "id": "18439",
        "name": "Macará",
        "shortName": "Macará",
        "abbreviation": "MAC",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/18439.png"
      },
      "away": {
        "id": "2674",
        "name": "Santos",
        "shortName": "Santos",
        "abbreviation": "SAN",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/2674.png"
      },
      "homeScore": "0",
      "awayScore": "0",
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401902449/santos-macara"
    },
    {
      "id": "401874149",
      "competitionId": "conmebol.libertadores",
      "competitionName": "CONMEBOL Libertadores",
      "date": "2026-08-21T00:30Z",
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
        "id": "17",
        "name": "Rosário Central",
        "shortName": "Rosário Central",
        "abbreviation": "ROS",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/17.png"
      },
      "homeScore": "1",
      "awayScore": "0",
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401874149/rosario-central-corinthians"
    },
    {
      "id": "401902741",
      "competitionId": "conmebol.sudamericana",
      "competitionName": "CONMEBOL Sudamericana",
      "date": "2026-08-21T00:30Z",
      "status": "finished",
      "statusLabel": "Final da Partida",
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
        "id": "3372",
        "name": "Cienciano del Cusco",
        "shortName": "Cienciano",
        "abbreviation": "CIE",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/3372.png"
      },
      "homeScore": "1",
      "awayScore": "0",
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401902741/cienciano-del-cusco-botafogo"
    },
    {
      "id": "401841205",
      "competitionId": "bra.1",
      "competitionName": "Campeonato Brasileiro",
      "date": "2026-08-22T19:00Z",
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
        "id": "4936",
        "name": "Remo",
        "shortName": "Remo",
        "abbreviation": "REMO",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/4936.png"
      },
      "homeScore": null,
      "awayScore": null,
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401841205/remo-fluminense"
    },
    {
      "id": "401841204",
      "competitionId": "bra.1",
      "competitionName": "Campeonato Brasileiro",
      "date": "2026-08-22T21:30Z",
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
        "id": "7632",
        "name": "Atlético-MG",
        "shortName": "Atlético-MG",
        "abbreviation": "CAM",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/7632.png"
      },
      "homeScore": null,
      "awayScore": null,
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401841204/atletico-mg-internacional"
    },
    {
      "id": "401841206",
      "competitionId": "bra.1",
      "competitionName": "Campeonato Brasileiro",
      "date": "2026-08-22T23:30Z",
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
        "id": "819",
        "name": "Flamengo",
        "shortName": "Flamengo",
        "abbreviation": "FLA",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/819.png"
      },
      "homeScore": null,
      "awayScore": null,
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401841206/flamengo-cruzeiro"
    },
    {
      "id": "401841203",
      "competitionId": "bra.1",
      "competitionName": "Campeonato Brasileiro",
      "date": "2026-08-23T19:00Z",
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
        "id": "3454",
        "name": "Vasco da Gama",
        "shortName": "Vasco",
        "abbreviation": "VAS",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/3454.png"
      },
      "homeScore": null,
      "awayScore": null,
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401841203/vasco-da-gama-palmeiras"
    },
    {
      "id": "401841202",
      "competitionId": "bra.1",
      "competitionName": "Campeonato Brasileiro",
      "date": "2026-08-23T19:00Z",
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
        "id": "6273",
        "name": "Grêmio",
        "shortName": "Grêmio",
        "abbreviation": "GRE",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/6273.png"
      },
      "homeScore": null,
      "awayScore": null,
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401841202/gremio-red-bull-bragantino"
    },
    {
      "id": "401841200",
      "competitionId": "bra.1",
      "competitionName": "Campeonato Brasileiro",
      "date": "2026-08-23T19:00Z",
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
        "id": "9967",
        "name": "Bahia",
        "shortName": "Bahia",
        "abbreviation": "BAH",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/9967.png"
      },
      "homeScore": null,
      "awayScore": null,
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401841200/bahia-vitoria"
    },
    {
      "id": "401841199",
      "competitionId": "bra.1",
      "competitionName": "Campeonato Brasileiro",
      "date": "2026-08-23T21:30Z",
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
        "id": "2026",
        "name": "São Paulo",
        "shortName": "São Paulo",
        "abbreviation": "SAO",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/2026.png"
      },
      "homeScore": null,
      "awayScore": null,
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401841199/sao-paulo-chapecoense"
    },
    {
      "id": "401841201",
      "competitionId": "bra.1",
      "competitionName": "Campeonato Brasileiro",
      "date": "2026-08-23T21:30Z",
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
        "id": "9169",
        "name": "Mirassol",
        "shortName": "Mirassol",
        "abbreviation": "MIR",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/9169.png"
      },
      "homeScore": null,
      "awayScore": null,
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401841201/mirassol-santos"
    },
    {
      "id": "401841207",
      "competitionId": "bra.1",
      "competitionName": "Campeonato Brasileiro",
      "date": "2026-08-23T22:30Z",
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
        "id": "874",
        "name": "Corinthians",
        "shortName": "Corinthians",
        "abbreviation": "COR",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/874.png"
      },
      "homeScore": null,
      "awayScore": null,
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401841207/corinthians-coritiba"
    },
    {
      "id": "401841198",
      "competitionId": "bra.1",
      "competitionName": "Campeonato Brasileiro",
      "date": "2026-08-24T23:00Z",
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
        "id": "3458",
        "name": "Athletico Paranaense",
        "shortName": "Athletico-PR",
        "abbreviation": "CAP",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/3458.png"
      },
      "homeScore": null,
      "awayScore": null,
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401841198/athletico-paranaense-botafogo"
    },
    {
      "id": "401909066",
      "competitionId": "bra.copa_do_brazil",
      "competitionName": "Copa do Brasil",
      "date": "2026-08-26T00:00Z",
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
        "id": "7632",
        "name": "Atlético-MG",
        "shortName": "Atlético-MG",
        "abbreviation": "CAM",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/7632.png"
      },
      "homeScore": null,
      "awayScore": null,
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401909066/atletico-mg-cruzeiro"
    },
    {
      "id": "401909065",
      "competitionId": "bra.copa_do_brazil",
      "competitionName": "Copa do Brasil",
      "date": "2026-08-27T00:30Z",
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
        "id": "2674",
        "name": "Santos",
        "shortName": "Santos",
        "abbreviation": "SAN",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/2674.png"
      },
      "homeScore": null,
      "awayScore": null,
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401909065/santos-palmeiras"
    },
    {
      "id": "401909113",
      "competitionId": "bra.copa_do_brazil",
      "competitionName": "Copa do Brasil",
      "date": "2026-08-27T00:30Z",
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
        "id": "3457",
        "name": "Vitória",
        "shortName": "Vitória",
        "abbreviation": "VIT",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/3457.png"
      },
      "homeScore": null,
      "awayScore": null,
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401909113/vitoria-vasco-da-gama"
    },
    {
      "id": "401909064",
      "competitionId": "bra.copa_do_brazil",
      "competitionName": "Copa do Brasil",
      "date": "2026-08-27T23:00Z",
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
        "id": "6273",
        "name": "Grêmio",
        "shortName": "Grêmio",
        "abbreviation": "GRE",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/6273.png"
      },
      "homeScore": null,
      "awayScore": null,
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401909064/gremio-internacional"
    },
    {
      "id": "401841216",
      "competitionId": "bra.1",
      "competitionName": "Campeonato Brasileiro",
      "date": "2026-08-29T21:30Z",
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
        "id": "3457",
        "name": "Vitória",
        "shortName": "Vitória",
        "abbreviation": "VIT",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/3457.png"
      },
      "homeScore": null,
      "awayScore": null,
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401841216/vitoria-atletico-mg"
    },
    {
      "id": "401841209",
      "competitionId": "bra.1",
      "competitionName": "Campeonato Brasileiro",
      "date": "2026-08-29T23:00Z",
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
        "id": "6079",
        "name": "Red Bull Bragantino",
        "shortName": "Bragantino",
        "abbreviation": "BRA",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/6079.png"
      },
      "homeScore": null,
      "awayScore": null,
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401841209/red-bull-bragantino-sao-paulo"
    },
    {
      "id": "401841212",
      "competitionId": "bra.1",
      "competitionName": "Campeonato Brasileiro",
      "date": "2026-08-30T00:20Z",
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
        "id": "2022",
        "name": "Cruzeiro",
        "shortName": "Cruzeiro",
        "abbreviation": "CRU",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/2022.png"
      },
      "homeScore": null,
      "awayScore": null,
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401841212/cruzeiro-vasco-da-gama"
    },
    {
      "id": "401841208",
      "competitionId": "bra.1",
      "competitionName": "Campeonato Brasileiro",
      "date": "2026-08-30T14:00Z",
      "status": "scheduled",
      "statusLabel": "Agendado",
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
      "homeScore": null,
      "awayScore": null,
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401841208/fluminense-athletico-paranaense"
    },
    {
      "id": "401841214",
      "competitionId": "bra.1",
      "competitionName": "Campeonato Brasileiro",
      "date": "2026-08-30T19:00Z",
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
        "id": "2674",
        "name": "Santos",
        "shortName": "Santos",
        "abbreviation": "SAN",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/2674.png"
      },
      "homeScore": null,
      "awayScore": null,
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401841214/santos-corinthians"
    },
    {
      "id": "401841213",
      "competitionId": "bra.1",
      "competitionName": "Campeonato Brasileiro",
      "date": "2026-08-30T19:00Z",
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
        "id": "6086",
        "name": "Botafogo",
        "shortName": "Botafogo",
        "abbreviation": "BOT",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/6086.png"
      },
      "homeScore": null,
      "awayScore": null,
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401841213/botafogo-flamengo"
    },
    {
      "id": "401841217",
      "competitionId": "bra.1",
      "competitionName": "Campeonato Brasileiro",
      "date": "2026-08-30T21:30Z",
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
        "id": "9318",
        "name": "Chapecoense",
        "shortName": "Chapecoense",
        "abbreviation": "CHA",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/9318.png"
      },
      "homeScore": null,
      "awayScore": null,
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401841217/chapecoense-gremio"
    },
    {
      "id": "401841211",
      "competitionId": "bra.1",
      "competitionName": "Campeonato Brasileiro",
      "date": "2026-08-30T21:30Z",
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
        "id": "2029",
        "name": "Palmeiras",
        "shortName": "Palmeiras",
        "abbreviation": "PAL",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/2029.png"
      },
      "homeScore": null,
      "awayScore": null,
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401841211/palmeiras-mirassol"
    },
    {
      "id": "401841215",
      "competitionId": "bra.1",
      "competitionName": "Campeonato Brasileiro",
      "date": "2026-08-30T22:30Z",
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
        "id": "1936",
        "name": "Internacional",
        "shortName": "Internacional",
        "abbreviation": "INT",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/1936.png"
      },
      "homeScore": null,
      "awayScore": null,
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401841215/internacional-bahia"
    },
    {
      "id": "401841210",
      "competitionId": "bra.1",
      "competitionName": "Campeonato Brasileiro",
      "date": "2026-08-31T23:00Z",
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
        "id": "3456",
        "name": "Coritiba",
        "shortName": "Coritiba",
        "abbreviation": "CFC",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/3456.png"
      },
      "homeScore": null,
      "awayScore": null,
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
      "id": "401841219",
      "competitionId": "bra.1",
      "competitionName": "Campeonato Brasileiro",
      "date": "2026-09-05T21:30Z",
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
      "points": 48,
      "played": 23,
      "wins": 14,
      "draws": 6,
      "losses": 3,
      "goalsFor": 40,
      "goalsAgainst": 19,
      "goalDifference": 21
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
      "points": 45,
      "played": 22,
      "wins": 13,
      "draws": 6,
      "losses": 3,
      "goalsFor": 44,
      "goalsAgainst": 19,
      "goalDifference": 25
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
      "points": 41,
      "played": 23,
      "wins": 12,
      "draws": 5,
      "losses": 6,
      "goalsFor": 31,
      "goalsAgainst": 20,
      "goalDifference": 11
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
      "points": 38,
      "played": 23,
      "wins": 10,
      "draws": 8,
      "losses": 5,
      "goalsFor": 34,
      "goalsAgainst": 28,
      "goalDifference": 6
    },
    {
      "position": 5,
      "team": {
        "id": "2022",
        "name": "Cruzeiro",
        "shortName": "Cruzeiro",
        "abbreviation": "CRU",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/2022.png"
      },
      "points": 36,
      "played": 23,
      "wins": 10,
      "draws": 6,
      "losses": 7,
      "goalsFor": 32,
      "goalsAgainst": 32,
      "goalDifference": 0
    },
    {
      "position": 6,
      "team": {
        "id": "9967",
        "name": "Bahia",
        "shortName": "Bahia",
        "abbreviation": "BAH",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/9967.png"
      },
      "points": 34,
      "played": 23,
      "wins": 8,
      "draws": 10,
      "losses": 5,
      "goalsFor": 32,
      "goalsAgainst": 28,
      "goalDifference": 4
    },
    {
      "position": 7,
      "team": {
        "id": "6079",
        "name": "Red Bull Bragantino",
        "shortName": "Bragantino",
        "abbreviation": "BRA",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/6079.png"
      },
      "points": 32,
      "played": 22,
      "wins": 9,
      "draws": 5,
      "losses": 8,
      "goalsFor": 27,
      "goalsAgainst": 23,
      "goalDifference": 4
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
      "points": 32,
      "played": 22,
      "wins": 9,
      "draws": 5,
      "losses": 8,
      "goalsFor": 30,
      "goalsAgainst": 27,
      "goalDifference": 3
    },
    {
      "position": 9,
      "team": {
        "id": "874",
        "name": "Corinthians",
        "shortName": "Corinthians",
        "abbreviation": "COR",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/874.png"
      },
      "points": 32,
      "played": 23,
      "wins": 8,
      "draws": 8,
      "losses": 7,
      "goalsFor": 25,
      "goalsAgainst": 22,
      "goalDifference": 3
    },
    {
      "position": 10,
      "team": {
        "id": "3456",
        "name": "Coritiba",
        "shortName": "Coritiba",
        "abbreviation": "CFC",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/3456.png"
      },
      "points": 31,
      "played": 23,
      "wins": 8,
      "draws": 7,
      "losses": 8,
      "goalsFor": 28,
      "goalsAgainst": 30,
      "goalDifference": -2
    },
    {
      "position": 11,
      "team": {
        "id": "6086",
        "name": "Botafogo",
        "shortName": "Botafogo",
        "abbreviation": "BOT",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/6086.png"
      },
      "points": 30,
      "played": 22,
      "wins": 8,
      "draws": 6,
      "losses": 8,
      "goalsFor": 35,
      "goalsAgainst": 34,
      "goalDifference": 1
    },
    {
      "position": 12,
      "team": {
        "id": "3457",
        "name": "Vitória",
        "shortName": "Vitória",
        "abbreviation": "VIT",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/3457.png"
      },
      "points": 29,
      "played": 23,
      "wins": 8,
      "draws": 5,
      "losses": 10,
      "goalsFor": 23,
      "goalsAgainst": 33,
      "goalDifference": -10
    },
    {
      "position": 13,
      "team": {
        "id": "2026",
        "name": "São Paulo",
        "shortName": "São Paulo",
        "abbreviation": "SAO",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/2026.png"
      },
      "points": 27,
      "played": 22,
      "wins": 7,
      "draws": 6,
      "losses": 9,
      "goalsFor": 27,
      "goalsAgainst": 26,
      "goalDifference": 1
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
      "points": 25,
      "played": 22,
      "wins": 6,
      "draws": 7,
      "losses": 9,
      "goalsFor": 32,
      "goalsAgainst": 35,
      "goalDifference": -3
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
      "points": 25,
      "played": 22,
      "wins": 6,
      "draws": 7,
      "losses": 9,
      "goalsFor": 24,
      "goalsAgainst": 30,
      "goalDifference": -6
    },
    {
      "position": 16,
      "team": {
        "id": "1936",
        "name": "Internacional",
        "shortName": "Internacional",
        "abbreviation": "INT",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/1936.png"
      },
      "points": 24,
      "played": 23,
      "wins": 5,
      "draws": 9,
      "losses": 9,
      "goalsFor": 24,
      "goalsAgainst": 28,
      "goalDifference": -4
    },
    {
      "position": 17,
      "team": {
        "id": "9169",
        "name": "Mirassol",
        "shortName": "Mirassol",
        "abbreviation": "MIR",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/9169.png"
      },
      "points": 23,
      "played": 22,
      "wins": 6,
      "draws": 5,
      "losses": 11,
      "goalsFor": 25,
      "goalsAgainst": 35,
      "goalDifference": -10
    },
    {
      "position": 18,
      "team": {
        "id": "4936",
        "name": "Remo",
        "shortName": "Remo",
        "abbreviation": "REMO",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/4936.png"
      },
      "points": 23,
      "played": 23,
      "wins": 5,
      "draws": 8,
      "losses": 10,
      "goalsFor": 27,
      "goalsAgainst": 37,
      "goalDifference": -10
    },
    {
      "position": 19,
      "team": {
        "id": "3454",
        "name": "Vasco da Gama",
        "shortName": "Vasco",
        "abbreviation": "VAS",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/3454.png"
      },
      "points": 22,
      "played": 22,
      "wins": 5,
      "draws": 7,
      "losses": 10,
      "goalsFor": 23,
      "goalsAgainst": 34,
      "goalDifference": -11
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
      "points": 11,
      "played": 22,
      "wins": 1,
      "draws": 8,
      "losses": 13,
      "goalsFor": 23,
      "goalsAgainst": 46,
      "goalDifference": -23
    }
  ],
  "news": [
    {
      "id": "17144229",
      "title": "Como Lukaku pode mudar destino de Gabriel Jesus na Europa e o que assistir no Disney+",
      "summary": "Gabriel Jesus é um dos alvos do Napoli para substituir Lukaku, vendido para o Fenerbahçe",
      "url": "https://www.espn.com.br/futebol/italiano/artigo/_/id/17144229/lukaku-como-pode-mudar-destino-gabriel-jesus-na-europa-e-o-que-assistir-disney",
      "publishedAt": "2026-08-22T02:22:27Z",
      "category": "news",
      "teams": [
        "Napoli",
        "Arsenal",
        "Fenerbahçe"
      ],
      "imageUrl": "https://a.espncdn.com/photo/2026/0527/r1664479_1296x729_16-9.jpg",
      "imageAlt": "Gabriel Jesus, do Arsenal",
      "imageCredit": "Getty Images"
    },
    {
      "id": "17148779",
      "title": "Cruzeiro recebe ofício da CBF sobre proibição de bets em MG e pode ficar impedido de usar Mineirão",
      "summary": "Cruzeiro recebeu ofício da CBF informando sobre proibição de exibição de bets em locais públicos, como o Mineirão",
      "url": "https://www.espn.com.br/futebol/cruzeiro/artigo/_/id/17148779/cruzeiro-recebe-oficio-cbf-proibicao-bets-mg-pode-ficar-impedido-usar-mineirao",
      "publishedAt": "2026-08-22T01:43:33Z",
      "category": "news",
      "teams": [
        "Cruzeiro"
      ],
      "imageUrl": "https://a.espncdn.com/photo/2025/0530/r1500352_1296x729_16-9.jpg",
      "imageAlt": "Vista do Mineirão antes de jogo entre Cruzeiro e Atlético-MG",
      "imageCredit": "Pedro Vilela/Getty Images"
    },
    {
      "id": "17148728",
      "title": "Por que Palmeiras não poderá estrear nova camisa azul contra o Vasco; veja quando uniforme deve ser usado",
      "summary": "O uniforme é uma homenagem à seleção italiana campeã da Copa do Mundo de 2006",
      "url": "https://www.espn.com.br/futebol/palmeiras/artigo/_/id/17148728/por-que-palmeiras-nao-podera-estrear-nova-camisa-azul-contra-vasco-veja-quando-uniforme-deve-ser-usado",
      "publishedAt": "2026-08-22T01:08:36Z",
      "category": "news",
      "teams": [
        "Palmeiras",
        "Vasco da Gama"
      ],
      "imageUrl": "https://a.espncdn.com/photo/2026/0821/r1704794_1296x729_16-9.jpg",
      "imageAlt": "Palmeiras apresentou nova camisa 3 para a temporada 2026",
      "imageCredit": "Divulgação/Puma"
    },
    {
      "id": "17148712",
      "title": "Palmeiras e Vasco se enfrentam pelo Brasileirão com aproveitamentos parecidos após a Copa do Mundo; VEJA",
      "summary": "As duas equipes seguem vivas em três competições",
      "url": "https://www.espn.com.br/video/clip/_/id/17148712",
      "publishedAt": "2026-08-22T01:05:39Z",
      "category": "news",
      "teams": [
        "Palmeiras",
        "Vasco da Gama"
      ],
      "imageUrl": null,
      "imageAlt": "Palmeiras e Vasco se enfrentam pelo Brasileirão com aproveitamentos parecidos após a Copa do Mundo; VEJA",
      "imageCredit": null
    },
    {
      "id": "17148710",
      "title": "Botafogo tem negociação avançada para contratar atacante Tiquinho Soares, livre no mercado após deixar o Santos",
      "summary": "Tiquinho Soares disputou mais de 100 partidas e marcou 44 gols na primeira passagem pelo Botafogo",
      "url": "https://www.espn.com.br/futebol/botafogo/artigo/_/id/17148710/botafogo-negociacao-avancada-contratar-tiquinho-soares-livre-apos-deixar-santos",
      "publishedAt": "2026-08-22T01:03:54Z",
      "category": "market",
      "teams": [
        "Botafogo"
      ],
      "imageUrl": "https://a.espncdn.com/photo/2023/0407/r1155452_1296x729_16-9.jpg",
      "imageAlt": "Tiquinho Soares comemora gol do Botafogo contra o Magallanes na estreia da Sul-Americana",
      "imageCredit": "Vitor Silva/Botafogo"
    },
    {
      "id": "17148630",
      "title": "Kaio César, do Corinthians, pode aplicar 'lei do ex' contra Coritiba, que revelou o atacante",
      "summary": "Meia de 22 anos é um dos titulares do time paulista",
      "url": "https://www.espn.com.br/video/clip/_/id/17148630",
      "publishedAt": "2026-08-22T00:33:23Z",
      "category": "news",
      "teams": [
        "Corinthians",
        "Coritiba"
      ],
      "imageUrl": null,
      "imageAlt": "Kaio César, do Corinthians, pode aplicar 'lei do ex' contra Coritiba, que revelou o atacante",
      "imageCredit": null
    },
    {
      "id": "17148619",
      "title": "Flamengo tem primeira 'final' contra o Palmeiras em reencontro com o Cruzeiro e já depende só de si no Brasileirão; veja as contas pelo bi",
      "summary": "Rubro-Negro visita o Cruzeiro às 20h30 (de Brasília) pelo Brasileirão",
      "url": "https://www.espn.com.br/video/clip/_/id/17148619",
      "publishedAt": "2026-08-22T11:33:04Z",
      "category": "news",
      "teams": [
        "Cruzeiro",
        "Flamengo"
      ],
      "imageUrl": null,
      "imageAlt": "Flamengo tem primeira 'final' contra o Palmeiras em reencontro com o Cruzeiro e já depende só de si no Brasileirão; veja as contas pelo bi",
      "imageCredit": null
    },
    {
      "id": "17147824",
      "title": "Red Bull Bragantino x Grêmio: onde assistir ao vivo, horário, palpite e prováveis escalações do jogo do Brasileirão",
      "summary": "O confronto será às 16h (de Brasília), no Cícero de Souza Marques, em Bragança Paulista",
      "url": "https://www.espn.com.br/futebol/brasileirao/artigo/_/id/17147824/red-bull-bragantino-gremio-onde-assistir-ao-vivo-horario-palpite-provaveis-escalacoes-jogo-brasileirao-serie-a",
      "publishedAt": "2026-08-21T20:54:47Z",
      "category": "news",
      "teams": [
        "Red Bull Bragantino",
        "Grêmio"
      ],
      "imageUrl": "https://a.espncdn.com/photo/2026/0821/r1705015_1296x729_16-9.jpg",
      "imageAlt": "Cícero de Souza Marques, vista geral do estádio do Red Bull Bragantino",
      "imageCredit": "Getty Images"
    },
    {
      "id": "17147593",
      "title": "Palmeiras x Vasco: onde assistir ao vivo, horário, palpite e prováveis escalações do jogo do Brasileirão",
      "summary": "Palmeiras e Vasco se enfrentam neste domingo (23), no Nubank Parque, em partida da 24ª rodada do Campeonato Brasileiro",
      "url": "https://www.espn.com.br/futebol/brasileirao/artigo/_/id/17147593/palmeiras-x-vasco-onde-assistir-ao-vivo-horario-palpite-provaveis-escalacoes-jogo-brasileirao",
      "publishedAt": "2026-08-21T20:46:58Z",
      "category": "news",
      "teams": [
        "Palmeiras",
        "Vasco da Gama"
      ],
      "imageUrl": "https://a.espncdn.com/photo/2026/0811/r1700170_1296x864_3-2.jpg",
      "imageAlt": "Vista geral do Nubank Parque, estádio do Palmeiras",
      "imageCredit": "Anderson Romão/AGIF"
    },
    {
      "id": "17147579",
      "title": "Coritiba x Corinthians: onde assistir ao vivo, horário, palpite e prováveis escalações do jogo do Brasileirão",
      "summary": "No Couto Pereira, o Coritiba recebe o Corinthians pela 24ª rodada do Brasileirão",
      "url": "https://www.espn.com.br/futebol/brasileirao/artigo/_/id/17147579/coritiba-x-corinthians-onde-assistir-ao-vivo-horario-palpite-provaveis-escalacoes-jogo-brasileirao",
      "publishedAt": "2026-08-21T19:52:49Z",
      "category": "news",
      "teams": [
        "Coritiba",
        "Corinthians"
      ],
      "imageUrl": "https://a.espncdn.com/photo/2026/0728/r1694839_1296x729_16-9.jpg",
      "imageAlt": "Couto Pereira, estádio do Coritiba",
      "imageCredit": "Getty Images"
    },
    {
      "id": "17147286",
      "title": "Vitória x Bahia: onde assistir ao vivo, horário, palpite e prováveis escalações do jogo do Brasileirão",
      "summary": "Neste domingo, Vitória e Bahia se enfrentam no Barradão, às 16h (de Brasília), pelo Campeonato Brasileiro",
      "url": "https://www.espn.com.br/futebol/brasileirao/artigo/_/id/17147286/vitoria-x-bahia-onde-assistir-ao-vivo-horario-palpite-provaveis-escalacoes-jogo-brasileirao",
      "publishedAt": "2026-08-21T21:09:38Z",
      "category": "news",
      "teams": [
        "Bahia",
        "Vitória"
      ],
      "imageUrl": "https://a.espncdn.com/photo/2026/0512/r1657362_1296x864_3-2.jpg",
      "imageAlt": "Vista geral do Estádio Manoel Barradas, o Barradão, casa do Vitória",
      "imageCredit": "Márcio José/AGIF"
    },
    {
      "id": "17147264",
      "title": "Santos x Mirassol: onde assistir ao vivo, horário, palpite e prováveis escalações do jogo do Brasileirão",
      "summary": "Santos e Mirassol se enfrentam neste domingo (23), na Vila Belmiro, em duelo pela 24ª rodada do Campeonato Brasileiro",
      "url": "https://www.espn.com.br/futebol/brasileirao/artigo/_/id/17147264/santos-x-mirassol-onde-assistir-ao-vivo-horario-palpite-provaveis-escalacoes-jogo-brasileirao",
      "publishedAt": "2026-08-21T19:42:50Z",
      "category": "news",
      "teams": [
        "Santos",
        "Mirassol"
      ],
      "imageUrl": "https://a.espncdn.com/photo/2026/0224/r1619394_1296x729_16-9.jpg",
      "imageAlt": "Vista da Vila Belmiro antes de jogo",
      "imageCredit": "Mauro Horita/Getty Images"
    },
    {
      "id": "17147539",
      "title": "Diretoria do São Paulo dificulta saída de joia para o Ajax e toma decisão sobre Bakambu; veja bastidores",
      "summary": "São Paulo corre atrás de reforços enquanto também tenta vender joias em potencial",
      "url": "https://www.espn.com.br/futebol/sao-paulo/artigo/_/id/17147539/sao-paulo-dificulta-saida-joia-ajax-decisao-bakambu-veja-bastidores",
      "publishedAt": "2026-08-21T19:30:40Z",
      "category": "market",
      "teams": [
        "São Paulo",
        "Ajax"
      ],
      "imageUrl": "https://a.espncdn.com/photo/2026/0821/r1704963_1296x729_16-9.jpg",
      "imageAlt": "Tetê durante jogo entre São Paulo e O'Higgins, pela CONMEBOL Sul-Americana",
      "imageCredit": "NELSON ALMEIDA/AFP via Getty Images"
    },
    {
      "id": "17147379",
      "title": "Chapecoense x São Paulo: onde assistir ao vivo, horário, palpite e prováveis escalações do jogo do Brasileirão",
      "summary": "Na Arena Condá, Chapecoense e São Paulo se enfrentam pela 24ª rodada do Brasileirão",
      "url": "https://www.espn.com.br/futebol/brasileirao/artigo/_/id/17147379/chapecoense-x-sao-paulo-onde-assistir-ao-vivo-horario-palpite-provaveis-escalacoes-jogo-brasileirao",
      "publishedAt": "2026-08-21T21:14:15Z",
      "category": "news",
      "teams": [
        "São Paulo",
        "Chapecoense"
      ],
      "imageUrl": "https://a.espncdn.com/photo/2025/1024/r1565241_1296x729_16-9.jpg",
      "imageAlt": "Vista da Arena Condá, estádio da Chapecoense",
      "imageCredit": "Luiz Ferrazzo/Chapecoense"
    },
    {
      "id": "17146752",
      "title": "Textor fala sobre inimigo no Brasil e conta times que nunca compraria no país; VEJA",
      "summary": "Executivo concedeu entrevista exclusiva à ESPN",
      "url": "https://www.espn.com.br/video/clip/_/id/17146752",
      "publishedAt": "2026-08-21T17:02:57Z",
      "category": "news",
      "teams": [
        "Botafogo"
      ],
      "imageUrl": null,
      "imageAlt": "Textor fala sobre inimigo no Brasil e conta times que nunca compraria no país; VEJA",
      "imageCredit": null
    },
    {
      "id": "17143115",
      "title": "Internacional x Atlético-MG: onde assistir ao vivo, horário, palpite e prováveis escalações do jogo do Brasileirão",
      "summary": "Duelo enre Inter e Atlético-MG será disputado neste sábado (22)",
      "url": "https://www.espn.com.br/futebol/brasileirao/artigo/_/id/17143115/internacional-x-atletico-mg-onde-assistir-ao-vivo-horario-palpite-provaveis-escalacoes-jogo-brasileirao",
      "publishedAt": "2026-08-21T15:37:49Z",
      "category": "news",
      "teams": [
        "Internacional",
        "Atlético-MG"
      ],
      "imageUrl": "https://a.espncdn.com/photo/2025/0929/r1553087_1296x729_16-9.jpg",
      "imageAlt": "Vista do Beira-Rio, estádio do Internacional, em Porto Alegre",
      "imageCredit": "SILVIO AVILA/AFP via Getty Images"
    }
  ]
};
