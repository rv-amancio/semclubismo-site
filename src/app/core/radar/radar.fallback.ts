import { RadarPayload } from './radar.models';

export const RADAR_FALLBACK: RadarPayload = {
  "version": 1,
  "generatedAt": "2026-08-24T03:35:15.556Z",
  "expiresAt": "2026-08-28T03:35:15.556Z",
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
      "nextMatchAt": "2026-08-24T23:00Z"
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
      "matchCount": 4,
      "liveCount": 0,
      "nextMatchAt": null
    },
    {
      "id": "conmebol.sudamericana",
      "name": "CONMEBOL Sudamericana",
      "shortName": "Sul-Americana",
      "matchCount": 4,
      "liveCount": 0,
      "nextMatchAt": null
    }
  ],
  "matches": [
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
      "status": "finished",
      "statusLabel": "Final da Partida",
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
      "homeScore": "2",
      "awayScore": "1",
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401841205/remo-fluminense"
    },
    {
      "id": "401841204",
      "competitionId": "bra.1",
      "competitionName": "Campeonato Brasileiro",
      "date": "2026-08-22T21:30Z",
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
        "id": "7632",
        "name": "Atlético-MG",
        "shortName": "Atlético-MG",
        "abbreviation": "CAM",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/7632.png"
      },
      "homeScore": "0",
      "awayScore": "0",
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401841204/atletico-mg-internacional"
    },
    {
      "id": "401841206",
      "competitionId": "bra.1",
      "competitionName": "Campeonato Brasileiro",
      "date": "2026-08-22T23:30Z",
      "status": "finished",
      "statusLabel": "Final da Partida",
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
      "homeScore": "2",
      "awayScore": "1",
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401841206/flamengo-cruzeiro"
    },
    {
      "id": "401841203",
      "competitionId": "bra.1",
      "competitionName": "Campeonato Brasileiro",
      "date": "2026-08-23T19:00Z",
      "status": "finished",
      "statusLabel": "Final da Partida",
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
      "homeScore": "4",
      "awayScore": "1",
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401841203/vasco-da-gama-palmeiras"
    },
    {
      "id": "401841202",
      "competitionId": "bra.1",
      "competitionName": "Campeonato Brasileiro",
      "date": "2026-08-23T19:00Z",
      "status": "finished",
      "statusLabel": "Final da Partida",
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
      "homeScore": "1",
      "awayScore": "0",
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401841202/gremio-red-bull-bragantino"
    },
    {
      "id": "401841200",
      "competitionId": "bra.1",
      "competitionName": "Campeonato Brasileiro",
      "date": "2026-08-23T19:00Z",
      "status": "finished",
      "statusLabel": "Final da Partida",
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
      "homeScore": "0",
      "awayScore": "2",
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401841200/bahia-vitoria"
    },
    {
      "id": "401841199",
      "competitionId": "bra.1",
      "competitionName": "Campeonato Brasileiro",
      "date": "2026-08-23T21:30Z",
      "status": "finished",
      "statusLabel": "Final da Partida",
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
      "homeScore": "1",
      "awayScore": "0",
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401841199/sao-paulo-chapecoense"
    },
    {
      "id": "401841201",
      "competitionId": "bra.1",
      "competitionName": "Campeonato Brasileiro",
      "date": "2026-08-23T21:30Z",
      "status": "finished",
      "statusLabel": "Final da Partida",
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
      "homeScore": "1",
      "awayScore": "1",
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401841201/mirassol-santos"
    },
    {
      "id": "401841207",
      "competitionId": "bra.1",
      "competitionName": "Campeonato Brasileiro",
      "date": "2026-08-23T22:30Z",
      "status": "finished",
      "statusLabel": "Final da Partida",
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
      "homeScore": "2",
      "awayScore": "1",
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
      "points": 51,
      "played": 24,
      "wins": 15,
      "draws": 6,
      "losses": 3,
      "goalsFor": 44,
      "goalsAgainst": 20,
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
      "points": 45,
      "played": 23,
      "wins": 13,
      "draws": 6,
      "losses": 4,
      "goalsFor": 45,
      "goalsAgainst": 21,
      "goalDifference": 24
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
      "points": 41,
      "played": 24,
      "wins": 11,
      "draws": 8,
      "losses": 5,
      "goalsFor": 36,
      "goalsAgainst": 29,
      "goalDifference": 7
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
      "points": 39,
      "played": 24,
      "wins": 11,
      "draws": 6,
      "losses": 7,
      "goalsFor": 34,
      "goalsAgainst": 33,
      "goalDifference": 1
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
      "points": 37,
      "played": 24,
      "wins": 9,
      "draws": 10,
      "losses": 5,
      "goalsFor": 34,
      "goalsAgainst": 28,
      "goalDifference": 6
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
      "points": 35,
      "played": 23,
      "wins": 10,
      "draws": 5,
      "losses": 8,
      "goalsFor": 28,
      "goalsAgainst": 23,
      "goalDifference": 5
    },
    {
      "position": 8,
      "team": {
        "id": "3456",
        "name": "Coritiba",
        "shortName": "Coritiba",
        "abbreviation": "CFC",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/3456.png"
      },
      "points": 34,
      "played": 24,
      "wins": 9,
      "draws": 7,
      "losses": 8,
      "goalsFor": 30,
      "goalsAgainst": 31,
      "goalDifference": -1
    },
    {
      "position": 9,
      "team": {
        "id": "7632",
        "name": "Atlético-MG",
        "shortName": "Atlético-MG",
        "abbreviation": "CAM",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/7632.png"
      },
      "points": 33,
      "played": 23,
      "wins": 9,
      "draws": 6,
      "losses": 8,
      "goalsFor": 30,
      "goalsAgainst": 27,
      "goalDifference": 3
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
      "played": 24,
      "wins": 8,
      "draws": 8,
      "losses": 8,
      "goalsFor": 26,
      "goalsAgainst": 24,
      "goalDifference": 2
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
      "played": 24,
      "wins": 8,
      "draws": 5,
      "losses": 11,
      "goalsFor": 23,
      "goalsAgainst": 35,
      "goalDifference": -12
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
      "played": 23,
      "wins": 7,
      "draws": 6,
      "losses": 10,
      "goalsFor": 27,
      "goalsAgainst": 27,
      "goalDifference": 0
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
      "points": 26,
      "played": 23,
      "wins": 6,
      "draws": 8,
      "losses": 9,
      "goalsFor": 33,
      "goalsAgainst": 36,
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
      "played": 23,
      "wins": 6,
      "draws": 7,
      "losses": 10,
      "goalsFor": 24,
      "goalsAgainst": 31,
      "goalDifference": -7
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
      "points": 25,
      "played": 24,
      "wins": 5,
      "draws": 10,
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
      "points": 24,
      "played": 23,
      "wins": 6,
      "draws": 6,
      "losses": 11,
      "goalsFor": 26,
      "goalsAgainst": 36,
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
      "played": 24,
      "wins": 5,
      "draws": 8,
      "losses": 11,
      "goalsFor": 28,
      "goalsAgainst": 39,
      "goalDifference": -11
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
      "played": 23,
      "wins": 5,
      "draws": 7,
      "losses": 11,
      "goalsFor": 24,
      "goalsAgainst": 38,
      "goalDifference": -14
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
      "played": 23,
      "wins": 2,
      "draws": 8,
      "losses": 13,
      "goalsFor": 24,
      "goalsAgainst": 46,
      "goalDifference": -22
    }
  ],
  "news": [
    {
      "id": "17159010",
      "title": "Diniz diz se Corinthians precisa de reforços: 'Se conseguirmos pagar o transfer ban...'",
      "summary": "Fernando Diniz valorizou o elenco, mas abriu as portas para reforços no Corinthians",
      "url": "https://www.espn.com.br/futebol/corinthians/artigo/_/id/17159010/corinthians-fernando-diniz-diz-precisa-reforcos-se-conseguimos-pagar-o-transfer-ban",
      "publishedAt": "2026-08-24T02:12:39Z",
      "category": "market",
      "teams": [
        "Corinthians"
      ],
      "imageUrl": "https://a.espncdn.com/photo/2026/0824/r1706088_1296x729_16-9.jpg",
      "imageAlt": "Fernando Diniz orienta os jogadores do Corinthians contra o Coritiba",
      "imageCredit": "Paulo De Tarso/AGIF"
    },
    {
      "id": "17158929",
      "title": "Dorival se revolta com derrota do São Paulo para Chapecoense: 'Fico sem palavras'",
      "summary": "Tricolor perdeu fora de casa para o lanterna do Brasileirão",
      "url": "https://www.espn.com.br/video/clip/_/id/17158929",
      "publishedAt": "2026-08-24T02:02:57Z",
      "category": "news",
      "teams": [
        "Chapecoense",
        "São Paulo"
      ],
      "imageUrl": null,
      "imageAlt": "Dorival se revolta com derrota do São Paulo para Chapecoense: 'Fico sem palavras'",
      "imageCredit": null
    },
    {
      "id": "17158826",
      "title": "Dirigente do Grêmio sobre futuro de Luis Castro após derrota: 'Tudo na vida tem limite'",
      "summary": "Luis Castro tem três partidas para convencer a diretoria que merece continuar no Grêmio",
      "url": "https://www.espn.com.br/futebol/gremio/artigo/_/id/17158826/gremio-paulo-pelaipe-sobre-futuro-de-luis-castro-tudo-na-vida-tem-limite",
      "publishedAt": "2026-08-24T01:25:49Z",
      "category": "news",
      "teams": [
        "Grêmio"
      ],
      "imageUrl": "https://a.espncdn.com/photo/2026/0808/r1699281_1296x729_16-9.jpg",
      "imageAlt": "Luís Castro, técnico do Grêmio, durante jogo da equipe",
      "imageCredit": "Getty Images"
    },
    {
      "id": "17158827",
      "title": "São Paulo amarga 10º jogo sem vencer no Brasileirão em segunda vitória da lanterna Chapecoense; veja como foi",
      "summary": "Imagens: Premiere/Globo. Tricolor perdeu e segue na parte de baixo da tabela, sem reagir no campeonato",
      "url": "https://www.espn.com.br/video/clip/_/id/17158827",
      "publishedAt": "2026-08-24T01:27:35Z",
      "category": "news",
      "teams": [
        "Chapecoense",
        "São Paulo"
      ],
      "imageUrl": null,
      "imageAlt": "São Paulo amarga 10º jogo sem vencer no Brasileirão em segunda vitória da lanterna Chapecoense; veja como foi",
      "imageCredit": null
    },
    {
      "id": "17158688",
      "title": "Coritiba vence o Corinthians no Brasileirão e encerra jejum de 15 anos sem vencer o Alvinegro no Couto Pereira; VEJA os gols",
      "summary": "Pedro Rocha e Paulo Roberto marcaram os gols do Coxa; Raniele descontou para o Timão",
      "url": "https://www.espn.com.br/video/clip/_/id/17158688",
      "publishedAt": "2026-08-24T00:50:00Z",
      "category": "news",
      "teams": [
        "Corinthians",
        "Coritiba"
      ],
      "imageUrl": null,
      "imageAlt": "Coritiba vence o Corinthians no Brasileirão e encerra jejum de 15 anos sem vencer o Alvinegro no Couto Pereira; VEJA os gols",
      "imageCredit": null
    },
    {
      "id": "17158553",
      "title": "Com time misto, Corinthians perde para o Coritiba e fica distante do G-5 do Brasileirão",
      "summary": "Corinthians perdeu para o Coritiba, por 2 a 1, na noite deste domingo (23), no Couto Pereira",
      "url": "https://www.espn.com.br/futebol/brasileirao/artigo/_/id/17158553/corinthians-perde-coritiba-com-time-misto-fica-distante-g5-do-brasileirao",
      "publishedAt": "2026-08-24T00:32:37Z",
      "category": "news",
      "teams": [
        "Coritiba"
      ],
      "imageUrl": "https://a.espncdn.com/photo/2026/0824/r1706033_1296x729_16-9.jpg",
      "imageAlt": "Pedro Rocha comemoram primeiro gol do Coritiba contra o Corinthians",
      "imageCredit": "Paulo De Tarso/AGIF"
    },
    {
      "id": "17158419",
      "title": "Palmeiras acerta contratação de Bruno Bertinato; goleiro cumpre 'desejo' de Abel Ferreira",
      "summary": "Jogador deve chegar ao clube já nesta segunda-feira (24)",
      "url": "https://www.espn.com.br/futebol/palmeiras/artigo/_/id/17158419/palmeiras-acerta-contratacao-bruno-bertinato-goleiro-cumpre-desejo-abel-ferreira",
      "publishedAt": "2026-08-24T00:15:00Z",
      "category": "market",
      "teams": [
        "Palmeiras"
      ],
      "imageUrl": "https://a.espncdn.com/photo/2026/0823/r1706015_1296x729_16-9.jpg",
      "imageAlt": "Bruno Bertinato em jogo da Portuguesa",
      "imageCredit": "Anderson Romão/AGIF"
    },
    {
      "id": "17158406",
      "title": "Pedro Rocha deixa Kaio César no chão e anota golaço contra o Corinthians; VEJA",
      "summary": "Coritiba e Corinthians se enfrentam neste domingo (23) pelo Brasileirão",
      "url": "https://www.espn.com.br/video/clip/_/id/17158406",
      "publishedAt": "2026-08-24T00:32:04Z",
      "category": "news",
      "teams": [
        "Corinthians",
        "Coritiba"
      ],
      "imageUrl": null,
      "imageAlt": "Pedro Rocha deixa Kaio César no chão e anota golaço contra o Corinthians; VEJA",
      "imageCredit": null
    },
    {
      "id": "17158382",
      "title": "Ruim para os dois! Neymar dá assistência, mas Santos e Mirassol empatam na Vila Belmiro e seguem ameaçados pelo Z4",
      "summary": "Os gols foram marcados por Eduardo, para o Leão, e Barreal, para o Peixe",
      "url": "https://www.espn.com.br/video/clip/_/id/17158382",
      "publishedAt": "2026-08-23T23:52:28Z",
      "category": "news",
      "teams": [
        "Brasil",
        "Mirassol",
        "Santos"
      ],
      "imageUrl": null,
      "imageAlt": "Ruim para os dois! Neymar dá assistência, mas Santos e Mirassol empatam na Vila Belmiro e seguem ameaçados pelo Z4",
      "imageCredit": null
    },
    {
      "id": "17158307",
      "title": "São Paulo perde para a Chapecoense, aumenta jejum no Brasileirão e segue perto da zona de rebaixamento",
      "summary": "São Paulo perdeu para a Chapecoense e chegou a quatro meses sem vitória no Brasileirão",
      "url": "https://www.espn.com.br/futebol/brasileirao/artigo/_/id/17158307/sao-paulo-perde-chapecoense-aumenta-jejum-segue-perto-zona-rebaixamento-brasileirao",
      "publishedAt": "2026-08-23T23:28:10Z",
      "category": "news",
      "teams": [
        "Chapecoense",
        "São Paulo"
      ],
      "imageUrl": "https://a.espncdn.com/photo/2026/0823/r1706003_1296x729_16-9.jpg",
      "imageAlt": "Bruno Pacheco comemora gol da Chapecoense sobre o São Paulo",
      "imageCredit": "Liamara Polli/AGIF"
    },
    {
      "id": "17158288",
      "title": "Gol do Santos! Neymar dá bela assistência, e Barreal marca um golaço; VEJA",
      "summary": "Peixe e Leão seguem na briga contra o rebaixamento no Brasileirão",
      "url": "https://www.espn.com.br/video/clip/_/id/17158288",
      "publishedAt": "2026-08-23T23:34:16Z",
      "category": "news",
      "teams": [
        "Brasil",
        "Mirassol",
        "Santos"
      ],
      "imageUrl": null,
      "imageAlt": "Gol do Santos! Neymar dá bela assistência, e Barreal marca um golaço; VEJA",
      "imageCredit": null
    },
    {
      "id": "17158158",
      "title": "Gol do Mirassol! Leão parte em contra-ataque, e Eduardo marca golaço de fora da área; VEJA",
      "summary": "Santos e Mirassol brigam contra a ameaça da zona de rebaixamento no Brasileirão",
      "url": "https://www.espn.com.br/video/clip/_/id/17158158",
      "publishedAt": "2026-08-23T23:33:54Z",
      "category": "news",
      "teams": [
        "Mirassol",
        "Santos"
      ],
      "imageUrl": null,
      "imageAlt": "Gol do Mirassol! Leão parte em contra-ataque, e Eduardo marca golaço de fora da área; VEJA",
      "imageCredit": null
    },
    {
      "id": "17158141",
      "title": "Cacá tenta rasgar camisa de Jean Lucas após jogador marcar em Vitória x Bahia; VEJA",
      "summary": "Bahia venceu o clássico deste domingo (23) por 2 a 0",
      "url": "https://www.espn.com.br/video/clip/_/id/17158141",
      "publishedAt": "2026-08-23T22:53:06Z",
      "category": "news",
      "teams": [
        "Bahia",
        "Vitória"
      ],
      "imageUrl": null,
      "imageAlt": "Cacá tenta rasgar camisa de Jean Lucas após jogador marcar em Vitória x Bahia; VEJA",
      "imageCredit": null
    },
    {
      "id": "17158124",
      "title": "Abel é direto sobre possível saída de Allan para o Manchester City: 'Por enquanto...'",
      "summary": "Manchester City tem interesse na contratação de Allan, do Palmeiras",
      "url": "https://www.espn.com.br/futebol/palmeiras/artigo/_/id/17158124/palmeiras-abel-ferreira-direto-sobre-possivel-saida-allan-para-manchester-city",
      "publishedAt": "2026-08-23T22:47:19Z",
      "category": "market",
      "teams": [
        "Palmeiras",
        "Manchester City"
      ],
      "imageUrl": "https://a.espncdn.com/photo/2026/0823/r1705981_1296x729_16-9.jpg",
      "imageAlt": "Abel Ferreira durante jogo do Palmeiras no Brasileirão",
      "imageCredit": "Anderson Romao/AGIF"
    },
    {
      "id": "17158120",
      "title": "Bahia vence o clássico contra o Vitória no Brasileirão; VEJA os gols",
      "summary": "Alejo Véliz e Jean Lucas marcaram os gols da partida",
      "url": "https://www.espn.com.br/video/clip/_/id/17158120",
      "publishedAt": "2026-08-23T22:45:50Z",
      "category": "news",
      "teams": [
        "Bahia",
        "Vitória"
      ],
      "imageUrl": null,
      "imageAlt": "Bahia vence o clássico contra o Vitória no Brasileirão; VEJA os gols",
      "imageCredit": null
    },
    {
      "id": "17157985",
      "title": "Abel cita Barcelona e City e culpa calendário por oscilação do Palmeiras: 'Quem consegue jogar a temporada toda bem?'",
      "summary": "Palmeiras goleou o Vasco por 4 a 1 neste domingo (23)",
      "url": "https://www.espn.com.br/futebol/palmeiras/artigo/_/id/17157985/palmeiras-abel-cita-barcelona-city-culpa-calendario-oscilacao-quem-consegue-jogar-temporada-toda-bem",
      "publishedAt": "2026-08-24T00:08:15Z",
      "category": "news",
      "teams": [
        "Palmeiras"
      ],
      "imageUrl": "https://a.espncdn.com/photo/2026/0823/r1705970_1296x729_16-9.jpg",
      "imageAlt": "Abel Ferreira durante jogo do Palmeiras contra o Vasco",
      "imageCredit": "Getty Images"
    }
  ]
};
