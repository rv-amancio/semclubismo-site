import { RadarPayload } from './radar.models';

export const RADAR_FALLBACK: RadarPayload = {
  "version": 1,
  "generatedAt": "2026-08-10T15:30:00.000Z",
  "expiresAt": "2026-08-10T15:30:00.000Z",
  "season": 2026,
  "provider": "Snapshot local",
  "providerUrl": "https://www.espn.com.br/futebol/",
  "officialReferenceUrl": "https://www.cbf.com.br/futebol-brasileiro/tabelas/campeonato-brasileiro/serie-a/2026",
  "isPartial": true,
  "competitions": [
    {
      "id": "bra.1",
      "name": "Campeonato Brasileiro",
      "shortName": "Brasileirão",
      "matchCount": 60,
      "liveCount": 0,
      "nextMatchAt": "2026-08-15T19:30Z"
    },
    {
      "id": "bra.copa_do_brazil",
      "name": "Copa do Brasil",
      "shortName": "Copa do Brasil",
      "matchCount": 16,
      "liveCount": 0,
      "nextMatchAt": null
    },
    {
      "id": "conmebol.libertadores",
      "name": "CONMEBOL Libertadores",
      "shortName": "Libertadores",
      "matchCount": 10,
      "liveCount": 0,
      "nextMatchAt": "2026-08-11T22:00Z"
    },
    {
      "id": "conmebol.sudamericana",
      "name": "CONMEBOL Sudamericana",
      "shortName": "Sul-Americana",
      "matchCount": 14,
      "liveCount": 0,
      "nextMatchAt": "2026-08-12T00:30Z"
    }
  ],
  "matches": [
    {
      "id": "401874146",
      "competitionId": "conmebol.sudamericana",
      "competitionName": "CONMEBOL Sudamericana",
      "date": "2026-07-29T00:30Z",
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
        "id": "10094",
        "name": "UCV FC",
        "shortName": "UCV FC",
        "abbreviation": "UCV",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/10094.png"
      },
      "homeScore": "4",
      "awayScore": "2",
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401874146/ucv-fc-santos"
    },
    {
      "id": "401841168",
      "competitionId": "bra.1",
      "competitionName": "Campeonato Brasileiro",
      "date": "2026-07-29T18:00Z",
      "status": "postponed",
      "statusLabel": "Adiado",
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
      "homeScore": null,
      "awayScore": null,
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401841168/red-bull-bragantino-atletico-mg"
    },
    {
      "id": "401841176",
      "competitionId": "bra.1",
      "competitionName": "Campeonato Brasileiro",
      "date": "2026-07-29T18:00Z",
      "status": "postponed",
      "statusLabel": "Adiado",
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
        "id": "6273",
        "name": "Grêmio",
        "shortName": "Grêmio",
        "abbreviation": "GRE",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/6273.png"
      },
      "homeScore": null,
      "awayScore": null,
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401841176/gremio-botafogo"
    },
    {
      "id": "401841175",
      "competitionId": "bra.1",
      "competitionName": "Campeonato Brasileiro",
      "date": "2026-07-29T18:00Z",
      "status": "postponed",
      "statusLabel": "Adiado",
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
        "id": "3454",
        "name": "Vasco da Gama",
        "shortName": "Vasco",
        "abbreviation": "VAS",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/3454.png"
      },
      "homeScore": null,
      "awayScore": null,
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401841175/vasco-da-gama-chapecoense"
    },
    {
      "id": "401841169",
      "competitionId": "bra.1",
      "competitionName": "Campeonato Brasileiro",
      "date": "2026-07-29T18:00Z",
      "status": "postponed",
      "statusLabel": "Adiado",
      "clock": null,
      "venue": null,
      "home": {
        "id": "2026",
        "name": "São Paulo",
        "shortName": "São Paulo",
        "abbreviation": "SAO",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/2026.png"
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
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401841169/santos-sao-paulo"
    },
    {
      "id": "401874167",
      "competitionId": "conmebol.sudamericana",
      "competitionName": "CONMEBOL Sudamericana",
      "date": "2026-07-29T22:00Z",
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
        "id": "2690",
        "name": "Independiente Medellín",
        "shortName": "Ind. Medellín",
        "abbreviation": "DIM",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/2690.png"
      },
      "homeScore": "1",
      "awayScore": "0",
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401874167/independiente-medellin-vasco-da-gama"
    },
    {
      "id": "401841171",
      "competitionId": "bra.1",
      "competitionName": "Campeonato Brasileiro",
      "date": "2026-07-29T22:30Z",
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
        "id": "819",
        "name": "Flamengo",
        "shortName": "Flamengo",
        "abbreviation": "FLA",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/819.png"
      },
      "homeScore": "1",
      "awayScore": "1",
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401841171/flamengo-internacional"
    },
    {
      "id": "401841170",
      "competitionId": "bra.1",
      "competitionName": "Campeonato Brasileiro",
      "date": "2026-07-29T22:30Z",
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
        "id": "4936",
        "name": "Remo",
        "shortName": "Remo",
        "abbreviation": "REMO",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/4936.png"
      },
      "homeScore": "2",
      "awayScore": "1",
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401841170/remo-mirassol"
    },
    {
      "id": "401841177",
      "competitionId": "bra.1",
      "competitionName": "Campeonato Brasileiro",
      "date": "2026-07-30T00:30Z",
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
        "id": "9967",
        "name": "Bahia",
        "shortName": "Bahia",
        "abbreviation": "BAH",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/9967.png"
      },
      "homeScore": "0",
      "awayScore": "0",
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401841177/bahia-fluminense"
    },
    {
      "id": "401841172",
      "competitionId": "bra.1",
      "competitionName": "Campeonato Brasileiro",
      "date": "2026-07-30T00:30Z",
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
        "id": "2029",
        "name": "Palmeiras",
        "shortName": "Palmeiras",
        "abbreviation": "PAL",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/2029.png"
      },
      "homeScore": "0",
      "awayScore": "4",
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401841172/palmeiras-vitoria"
    },
    {
      "id": "401874151",
      "competitionId": "conmebol.sudamericana",
      "competitionName": "CONMEBOL Sudamericana",
      "date": "2026-07-30T00:30Z",
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
        "id": "2673",
        "name": "Sporting Cristal",
        "shortName": "Sporting Cristal",
        "abbreviation": "SCR",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/2673.png"
      },
      "homeScore": "1",
      "awayScore": "0",
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401874151/sporting-cristal-red-bull-bragantino"
    },
    {
      "id": "401874159",
      "competitionId": "conmebol.sudamericana",
      "competitionName": "CONMEBOL Sudamericana",
      "date": "2026-07-30T22:00Z",
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
        "id": "2681",
        "name": "Bolívar",
        "shortName": "Bolívar",
        "abbreviation": "BOL",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/2681.png"
      },
      "homeScore": "0",
      "awayScore": "1",
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401874159/bolivar-gremio"
    },
    {
      "id": "401841174",
      "competitionId": "bra.1",
      "competitionName": "Campeonato Brasileiro",
      "date": "2026-07-30T22:30Z",
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
        "id": "3458",
        "name": "Athletico Paranaense",
        "shortName": "Athletico-PR",
        "abbreviation": "CAP",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/3458.png"
      },
      "homeScore": "0",
      "awayScore": "0",
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401841174/athletico-paranaense-corinthians"
    },
    {
      "id": "401841173",
      "competitionId": "bra.1",
      "competitionName": "Campeonato Brasileiro",
      "date": "2026-07-31T00:30Z",
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
        "id": "2022",
        "name": "Cruzeiro",
        "shortName": "Cruzeiro",
        "abbreviation": "CRU",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/2022.png"
      },
      "homeScore": "0",
      "awayScore": "1",
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401841173/cruzeiro-coritiba"
    },
    {
      "id": "401873956",
      "competitionId": "bra.copa_do_brazil",
      "competitionName": "Copa do Brasil",
      "date": "2026-08-01T20:30Z",
      "status": "finished",
      "statusLabel": "Final da Partida",
      "clock": null,
      "venue": "Estadio do Maracana",
      "home": {
        "id": "3454",
        "name": "Vasco da Gama",
        "shortName": "Vasco",
        "abbreviation": "VAS",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/3454.png"
      },
      "away": {
        "id": "3445",
        "name": "Fluminense",
        "shortName": "Fluminense",
        "abbreviation": "FLU",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/3445.png"
      },
      "homeScore": "0",
      "awayScore": "0",
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401873956/fluminense-vasco-da-gama"
    },
    {
      "id": "401873958",
      "competitionId": "bra.copa_do_brazil",
      "competitionName": "Copa do Brasil",
      "date": "2026-08-01T22:30Z",
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
        "id": "6270",
        "name": "Juventude",
        "shortName": "Juventude",
        "abbreviation": "JUV",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/6270.png"
      },
      "homeScore": "0",
      "awayScore": "0",
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401873958/juventude-atletico-mg"
    },
    {
      "id": "401873954",
      "competitionId": "bra.copa_do_brazil",
      "competitionName": "Copa do Brasil",
      "date": "2026-08-02T00:00Z",
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
        "id": "4936",
        "name": "Remo",
        "shortName": "Remo",
        "abbreviation": "REMO",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/4936.png"
      },
      "homeScore": "0",
      "awayScore": "0",
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401873954/remo-santos"
    },
    {
      "id": "401873913",
      "competitionId": "bra.copa_do_brazil",
      "competitionName": "Copa do Brasil",
      "date": "2026-08-02T19:00Z",
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
        "id": "6272",
        "name": "Fortaleza",
        "shortName": "Fortaleza",
        "abbreviation": "FOR",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/6272.png"
      },
      "homeScore": "3",
      "awayScore": "0",
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401873913/fortaleza-palmeiras"
    },
    {
      "id": "401873939",
      "competitionId": "bra.copa_do_brazil",
      "competitionName": "Copa do Brasil",
      "date": "2026-08-02T21:00Z",
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
        "id": "6273",
        "name": "Grêmio",
        "shortName": "Grêmio",
        "abbreviation": "GRE",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/6273.png"
      },
      "homeScore": "1",
      "awayScore": "1",
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401873939/gremio-mirassol"
    },
    {
      "id": "401873955",
      "competitionId": "bra.copa_do_brazil",
      "competitionName": "Copa do Brasil",
      "date": "2026-08-02T21:30Z",
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
        "id": "2022",
        "name": "Cruzeiro",
        "shortName": "Cruzeiro",
        "abbreviation": "CRU",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/2022.png"
      },
      "homeScore": "0",
      "awayScore": "0",
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401873955/cruzeiro-chapecoense"
    },
    {
      "id": "401873957",
      "competitionId": "bra.copa_do_brazil",
      "competitionName": "Copa do Brasil",
      "date": "2026-08-02T22:30Z",
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
        "id": "874",
        "name": "Corinthians",
        "shortName": "Corinthians",
        "abbreviation": "COR",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/874.png"
      },
      "homeScore": "2",
      "awayScore": "0",
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401873957/corinthians-internacional"
    },
    {
      "id": "401873938",
      "competitionId": "bra.copa_do_brazil",
      "competitionName": "Copa do Brasil",
      "date": "2026-08-04T00:00Z",
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
        "id": "3457",
        "name": "Vitória",
        "shortName": "Vitória",
        "abbreviation": "VIT",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/3457.png"
      },
      "homeScore": "2",
      "awayScore": "0",
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401873938/vitoria-athletico-paranaense"
    },
    {
      "id": "401874097",
      "competitionId": "bra.copa_do_brazil",
      "competitionName": "Copa do Brasil",
      "date": "2026-08-04T22:30Z",
      "status": "finished",
      "statusLabel": "Final da Partida",
      "clock": null,
      "venue": "Alfredo Jaconi",
      "home": {
        "id": "6270",
        "name": "Juventude",
        "shortName": "Juventude",
        "abbreviation": "JUV",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/6270.png"
      },
      "away": {
        "id": "7632",
        "name": "Atlético-MG",
        "shortName": "Atlético-MG",
        "abbreviation": "CAM",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/7632.png"
      },
      "homeScore": "0",
      "awayScore": "1",
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401874097/atletico-mg-juventude"
    },
    {
      "id": "401874098",
      "competitionId": "bra.copa_do_brazil",
      "competitionName": "Copa do Brasil",
      "date": "2026-08-05T00:30Z",
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
        "id": "2674",
        "name": "Santos",
        "shortName": "Santos",
        "abbreviation": "SAN",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/2674.png"
      },
      "homeScore": "0",
      "awayScore": "1",
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401874098/santos-remo"
    },
    {
      "id": "401874039",
      "competitionId": "bra.copa_do_brazil",
      "competitionName": "Copa do Brasil",
      "date": "2026-08-05T22:00Z",
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
        "id": "9318",
        "name": "Chapecoense",
        "shortName": "Chapecoense",
        "abbreviation": "CHA",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/9318.png"
      },
      "homeScore": "2",
      "awayScore": "0",
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401874039/chapecoense-cruzeiro"
    },
    {
      "id": "401874038",
      "competitionId": "bra.copa_do_brazil",
      "competitionName": "Copa do Brasil",
      "date": "2026-08-05T22:30Z",
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
        "id": "9169",
        "name": "Mirassol",
        "shortName": "Mirassol",
        "abbreviation": "MIR",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/9169.png"
      },
      "homeScore": "1",
      "awayScore": "0",
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401874038/mirassol-gremio"
    },
    {
      "id": "401874095",
      "competitionId": "bra.copa_do_brazil",
      "competitionName": "Copa do Brasil",
      "date": "2026-08-06T00:30Z",
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
        "id": "3454",
        "name": "Vasco da Gama",
        "shortName": "Vasco",
        "abbreviation": "VAS",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/3454.png"
      },
      "homeScore": "1",
      "awayScore": "3",
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401874095/vasco-da-gama-fluminense"
    },
    {
      "id": "401874099",
      "competitionId": "bra.copa_do_brazil",
      "competitionName": "Copa do Brasil",
      "date": "2026-08-06T00:30Z",
      "status": "finished",
      "statusLabel": "Final da Partida",
      "clock": null,
      "venue": "Arena Pantanal",
      "home": {
        "id": "6272",
        "name": "Fortaleza",
        "shortName": "Fortaleza",
        "abbreviation": "FOR",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/6272.png"
      },
      "away": {
        "id": "2029",
        "name": "Palmeiras",
        "shortName": "Palmeiras",
        "abbreviation": "PAL",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/2029.png"
      },
      "homeScore": "3",
      "awayScore": "2",
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401874099/palmeiras-fortaleza"
    },
    {
      "id": "401874094",
      "competitionId": "bra.copa_do_brazil",
      "competitionName": "Copa do Brasil",
      "date": "2026-08-06T23:00Z",
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
        "id": "1936",
        "name": "Internacional",
        "shortName": "Internacional",
        "abbreviation": "INT",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/1936.png"
      },
      "homeScore": "2",
      "awayScore": "1",
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401874094/internacional-corinthians"
    },
    {
      "id": "401874096",
      "competitionId": "bra.copa_do_brazil",
      "competitionName": "Copa do Brasil",
      "date": "2026-08-06T23:00Z",
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
        "id": "3458",
        "name": "Athletico Paranaense",
        "shortName": "Athletico-PR",
        "abbreviation": "CAP",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/3458.png"
      },
      "homeScore": "4",
      "awayScore": "0",
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401874096/athletico-paranaense-vitoria"
    },
    {
      "id": "401841181",
      "competitionId": "bra.1",
      "competitionName": "Campeonato Brasileiro",
      "date": "2026-08-08T19:00Z",
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
        "id": "2026",
        "name": "São Paulo",
        "shortName": "São Paulo",
        "abbreviation": "SAO",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/2026.png"
      },
      "homeScore": "2",
      "awayScore": "1",
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401841181/sao-paulo-gremio"
    },
    {
      "id": "401841178",
      "competitionId": "bra.1",
      "competitionName": "Campeonato Brasileiro",
      "date": "2026-08-08T21:30Z",
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
        "id": "7632",
        "name": "Atlético-MG",
        "shortName": "Atlético-MG",
        "abbreviation": "CAM",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/7632.png"
      },
      "homeScore": "2",
      "awayScore": "2",
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401841178/atletico-mg-remo"
    },
    {
      "id": "401841184",
      "competitionId": "bra.1",
      "competitionName": "Campeonato Brasileiro",
      "date": "2026-08-08T23:30Z",
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
        "id": "9318",
        "name": "Chapecoense",
        "shortName": "Chapecoense",
        "abbreviation": "CHA",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/9318.png"
      },
      "homeScore": "2",
      "awayScore": "1",
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401841184/chapecoense-coritiba"
    },
    {
      "id": "401841185",
      "competitionId": "bra.1",
      "competitionName": "Campeonato Brasileiro",
      "date": "2026-08-09T00:00Z",
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
        "id": "3445",
        "name": "Fluminense",
        "shortName": "Fluminense",
        "abbreviation": "FLU",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/3445.png"
      },
      "homeScore": "1",
      "awayScore": "1",
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401841185/fluminense-botafogo"
    },
    {
      "id": "401841183",
      "competitionId": "bra.1",
      "competitionName": "Campeonato Brasileiro",
      "date": "2026-08-09T14:00Z",
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
        "id": "9169",
        "name": "Mirassol",
        "shortName": "Mirassol",
        "abbreviation": "MIR",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/9169.png"
      },
      "homeScore": "3",
      "awayScore": "1",
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401841183/mirassol-cruzeiro"
    },
    {
      "id": "401841186",
      "competitionId": "bra.1",
      "competitionName": "Campeonato Brasileiro",
      "date": "2026-08-09T19:00Z",
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
        "id": "3454",
        "name": "Vasco da Gama",
        "shortName": "Vasco",
        "abbreviation": "VAS",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/3454.png"
      },
      "homeScore": "0",
      "awayScore": "0",
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401841186/vasco-da-gama-bahia"
    },
    {
      "id": "401841180",
      "competitionId": "bra.1",
      "competitionName": "Campeonato Brasileiro",
      "date": "2026-08-09T19:00Z",
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
        "id": "1936",
        "name": "Internacional",
        "shortName": "Internacional",
        "abbreviation": "INT",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/1936.png"
      },
      "homeScore": "0",
      "awayScore": "0",
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401841180/internacional-palmeiras"
    },
    {
      "id": "401841179",
      "competitionId": "bra.1",
      "competitionName": "Campeonato Brasileiro",
      "date": "2026-08-09T21:30Z",
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
        "id": "874",
        "name": "Corinthians",
        "shortName": "Corinthians",
        "abbreviation": "COR",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/874.png"
      },
      "homeScore": "0",
      "awayScore": "2",
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401841179/corinthians-red-bull-bragantino"
    },
    {
      "id": "401841182",
      "competitionId": "bra.1",
      "competitionName": "Campeonato Brasileiro",
      "date": "2026-08-09T21:30Z",
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
        "id": "3458",
        "name": "Athletico Paranaense",
        "shortName": "Athletico-PR",
        "abbreviation": "CAP",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/3458.png"
      },
      "homeScore": "0",
      "awayScore": "2",
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401841182/athletico-paranaense-santos"
    },
    {
      "id": "401841187",
      "competitionId": "bra.1",
      "competitionName": "Campeonato Brasileiro",
      "date": "2026-08-09T22:30Z",
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
        "id": "3457",
        "name": "Vitória",
        "shortName": "Vitória",
        "abbreviation": "VIT",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/3457.png"
      },
      "homeScore": "2",
      "awayScore": "0",
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401841187/vitoria-flamengo"
    },
    {
      "id": "401874070",
      "competitionId": "conmebol.libertadores",
      "competitionName": "CONMEBOL Libertadores",
      "date": "2026-08-11T22:00Z",
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
        "id": "9744",
        "name": "Independiente Rivadavia",
        "shortName": "Ind. Rivadavia",
        "abbreviation": "RIV",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/9744.png"
      },
      "homeScore": null,
      "awayScore": null,
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401874070/independiente-rivadavia-fluminense"
    },
    {
      "id": "401903296",
      "competitionId": "conmebol.sudamericana",
      "competitionName": "CONMEBOL Sudamericana",
      "date": "2026-08-12T00:30Z",
      "status": "scheduled",
      "statusLabel": "Agendado",
      "clock": null,
      "venue": "Estadio Hernando Siles",
      "home": {
        "id": "2681",
        "name": "Bolívar",
        "shortName": "Bolívar",
        "abbreviation": "BOL",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/2681.png"
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
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401903296/sao-paulo-bolivar"
    },
    {
      "id": "401874076",
      "competitionId": "conmebol.libertadores",
      "competitionName": "CONMEBOL Libertadores",
      "date": "2026-08-12T22:00Z",
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
        "id": "2671",
        "name": "Cerro Porteño",
        "shortName": "Cerro Porteño",
        "abbreviation": "CPT",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/2671.png"
      },
      "homeScore": null,
      "awayScore": null,
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401874076/cerro-porteno-palmeiras"
    },
    {
      "id": "401902743",
      "competitionId": "conmebol.sudamericana",
      "competitionName": "CONMEBOL Sudamericana",
      "date": "2026-08-12T22:00Z",
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
        "id": "7632",
        "name": "Atlético-MG",
        "shortName": "Atlético-MG",
        "abbreviation": "CAM",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/7632.png"
      },
      "homeScore": null,
      "awayScore": null,
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401902743/atletico-mg-red-bull-bragantino"
    },
    {
      "id": "401874153",
      "competitionId": "conmebol.libertadores",
      "competitionName": "CONMEBOL Libertadores",
      "date": "2026-08-13T00:30Z",
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
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401874153/flamengo-cruzeiro"
    },
    {
      "id": "401874073",
      "competitionId": "conmebol.libertadores",
      "competitionName": "CONMEBOL Libertadores",
      "date": "2026-08-13T22:00Z",
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
        "id": "4816",
        "name": "Liga de Quito",
        "shortName": "LDU",
        "abbreviation": "LDU",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/4816.png"
      },
      "homeScore": null,
      "awayScore": null,
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401874073/liga-de-quito-mirassol"
    },
    {
      "id": "401902572",
      "competitionId": "conmebol.sudamericana",
      "competitionName": "CONMEBOL Sudamericana",
      "date": "2026-08-13T22:00Z",
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
        "id": "18439",
        "name": "Macará",
        "shortName": "Macará",
        "abbreviation": "MAC",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/18439.png"
      },
      "homeScore": null,
      "awayScore": null,
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401902572/macara-santos"
    },
    {
      "id": "401902742",
      "competitionId": "conmebol.sudamericana",
      "competitionName": "CONMEBOL Sudamericana",
      "date": "2026-08-13T22:00Z",
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
        "id": "2675",
        "name": "Club Olimpia",
        "shortName": "Olimpia",
        "abbreviation": "OLI",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/2675.png"
      },
      "homeScore": null,
      "awayScore": null,
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401902742/club-olimpia-vasco-da-gama"
    },
    {
      "id": "401874075",
      "competitionId": "conmebol.libertadores",
      "competitionName": "CONMEBOL Libertadores",
      "date": "2026-08-14T00:30Z",
      "status": "scheduled",
      "statusLabel": "Agendado",
      "clock": null,
      "venue": "Gigante de Arroyito",
      "home": {
        "id": "17",
        "name": "Rosário Central",
        "shortName": "Rosário Central",
        "abbreviation": "ROS",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/17.png"
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
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401874075/corinthians-rosario-central"
    },
    {
      "id": "401902715",
      "competitionId": "conmebol.sudamericana",
      "competitionName": "CONMEBOL Sudamericana",
      "date": "2026-08-14T00:30Z",
      "status": "scheduled",
      "statusLabel": "Agendado",
      "clock": null,
      "venue": "Estadio Inca Garcilaso de la Vega",
      "home": {
        "id": "3372",
        "name": "Cienciano del Cusco",
        "shortName": "Cienciano",
        "abbreviation": "CIE",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/3372.png"
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
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401902715/botafogo-cienciano-del-cusco"
    },
    {
      "id": "401841192",
      "competitionId": "bra.1",
      "competitionName": "Campeonato Brasileiro",
      "date": "2026-08-15T19:30Z",
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
        "id": "2029",
        "name": "Palmeiras",
        "shortName": "Palmeiras",
        "abbreviation": "PAL",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/2029.png"
      },
      "homeScore": null,
      "awayScore": null,
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401841192/palmeiras-fluminense"
    },
    {
      "id": "401841196",
      "competitionId": "bra.1",
      "competitionName": "Campeonato Brasileiro",
      "date": "2026-08-15T21:30Z",
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
        "id": "6079",
        "name": "Red Bull Bragantino",
        "shortName": "Bragantino",
        "abbreviation": "BRA",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/6079.png"
      },
      "homeScore": null,
      "awayScore": null,
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401841196/red-bull-bragantino-athletico-paranaense"
    },
    {
      "id": "401841189",
      "competitionId": "bra.1",
      "competitionName": "Campeonato Brasileiro",
      "date": "2026-08-16T00:00Z",
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
        "id": "3456",
        "name": "Coritiba",
        "shortName": "Coritiba",
        "abbreviation": "CFC",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/3456.png"
      },
      "homeScore": null,
      "awayScore": null,
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401841189/coritiba-sao-paulo"
    },
    {
      "id": "401841194",
      "competitionId": "bra.1",
      "competitionName": "Campeonato Brasileiro",
      "date": "2026-08-16T14:00Z",
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
        "id": "9967",
        "name": "Bahia",
        "shortName": "Bahia",
        "abbreviation": "BAH",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/9967.png"
      },
      "homeScore": null,
      "awayScore": null,
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401841194/bahia-chapecoense"
    },
    {
      "id": "401841195",
      "competitionId": "bra.1",
      "competitionName": "Campeonato Brasileiro",
      "date": "2026-08-16T19:00Z",
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
        "id": "6273",
        "name": "Grêmio",
        "shortName": "Grêmio",
        "abbreviation": "GRE",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/6273.png"
      },
      "homeScore": null,
      "awayScore": null,
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401841195/gremio-atletico-mg"
    },
    {
      "id": "401841188",
      "competitionId": "bra.1",
      "competitionName": "Campeonato Brasileiro",
      "date": "2026-08-16T19:00Z",
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
        "id": "2674",
        "name": "Santos",
        "shortName": "Santos",
        "abbreviation": "SAN",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/2674.png"
      },
      "homeScore": null,
      "awayScore": null,
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401841188/santos-vasco-da-gama"
    },
    {
      "id": "401841190",
      "competitionId": "bra.1",
      "competitionName": "Campeonato Brasileiro",
      "date": "2026-08-16T21:30Z",
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
        "id": "819",
        "name": "Flamengo",
        "shortName": "Flamengo",
        "abbreviation": "FLA",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/819.png"
      },
      "homeScore": null,
      "awayScore": null,
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401841190/flamengo-mirassol"
    },
    {
      "id": "401841197",
      "competitionId": "bra.1",
      "competitionName": "Campeonato Brasileiro",
      "date": "2026-08-16T21:30Z",
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
        "id": "6086",
        "name": "Botafogo",
        "shortName": "Botafogo",
        "abbreviation": "BOT",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/6086.png"
      },
      "homeScore": null,
      "awayScore": null,
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401841197/botafogo-vitoria"
    },
    {
      "id": "401841193",
      "competitionId": "bra.1",
      "competitionName": "Campeonato Brasileiro",
      "date": "2026-08-16T22:30Z",
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
        "id": "2022",
        "name": "Cruzeiro",
        "shortName": "Cruzeiro",
        "abbreviation": "CRU",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/2022.png"
      },
      "homeScore": null,
      "awayScore": null,
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401841193/cruzeiro-corinthians"
    },
    {
      "id": "401841191",
      "competitionId": "bra.1",
      "competitionName": "Campeonato Brasileiro",
      "date": "2026-08-17T23:00Z",
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
        "id": "4936",
        "name": "Remo",
        "shortName": "Remo",
        "abbreviation": "REMO",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/4936.png"
      },
      "homeScore": null,
      "awayScore": null,
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401841191/remo-internacional"
    },
    {
      "id": "401874156",
      "competitionId": "conmebol.libertadores",
      "competitionName": "CONMEBOL Libertadores",
      "date": "2026-08-18T22:00Z",
      "status": "scheduled",
      "statusLabel": "Agendado",
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
      "homeScore": null,
      "awayScore": null,
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401874156/fluminense-independiente-rivadavia"
    },
    {
      "id": "401903294",
      "competitionId": "conmebol.sudamericana",
      "competitionName": "CONMEBOL Sudamericana",
      "date": "2026-08-19T00:30Z",
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
        "id": "2681",
        "name": "Bolívar",
        "shortName": "Bolívar",
        "abbreviation": "BOL",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/2681.png"
      },
      "homeScore": null,
      "awayScore": null,
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401903294/bolivar-sao-paulo"
    },
    {
      "id": "401874155",
      "competitionId": "conmebol.libertadores",
      "competitionName": "CONMEBOL Libertadores",
      "date": "2026-08-19T22:00Z",
      "status": "scheduled",
      "statusLabel": "Agendado",
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
      "homeScore": null,
      "awayScore": null,
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401874155/palmeiras-cerro-porteno"
    },
    {
      "id": "401902714",
      "competitionId": "conmebol.sudamericana",
      "competitionName": "CONMEBOL Sudamericana",
      "date": "2026-08-19T22:00Z",
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
        "id": "6079",
        "name": "Red Bull Bragantino",
        "shortName": "Bragantino",
        "abbreviation": "BRA",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/6079.png"
      },
      "homeScore": null,
      "awayScore": null,
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401902714/red-bull-bragantino-atletico-mg"
    },
    {
      "id": "401874141",
      "competitionId": "conmebol.libertadores",
      "competitionName": "CONMEBOL Libertadores",
      "date": "2026-08-20T00:30Z",
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
        "id": "2022",
        "name": "Cruzeiro",
        "shortName": "Cruzeiro",
        "abbreviation": "CRU",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/2022.png"
      },
      "homeScore": null,
      "awayScore": null,
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401874141/cruzeiro-flamengo"
    },
    {
      "id": "401874142",
      "competitionId": "conmebol.libertadores",
      "competitionName": "CONMEBOL Libertadores",
      "date": "2026-08-20T22:00Z",
      "status": "scheduled",
      "statusLabel": "Agendado",
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
      "homeScore": null,
      "awayScore": null,
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401874142/mirassol-liga-de-quito"
    },
    {
      "id": "401902740",
      "competitionId": "conmebol.sudamericana",
      "competitionName": "CONMEBOL Sudamericana",
      "date": "2026-08-20T22:00Z",
      "status": "scheduled",
      "statusLabel": "Agendado",
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
      "homeScore": null,
      "awayScore": null,
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401902740/vasco-da-gama-club-olimpia"
    },
    {
      "id": "401902449",
      "competitionId": "conmebol.sudamericana",
      "competitionName": "CONMEBOL Sudamericana",
      "date": "2026-08-20T22:00Z",
      "status": "scheduled",
      "statusLabel": "Agendado",
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
      "homeScore": null,
      "awayScore": null,
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401902449/santos-macara"
    },
    {
      "id": "401874149",
      "competitionId": "conmebol.libertadores",
      "competitionName": "CONMEBOL Libertadores",
      "date": "2026-08-21T00:30Z",
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
        "id": "17",
        "name": "Rosário Central",
        "shortName": "Rosário Central",
        "abbreviation": "ROS",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/17.png"
      },
      "homeScore": null,
      "awayScore": null,
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401874149/rosario-central-corinthians"
    },
    {
      "id": "401902741",
      "competitionId": "conmebol.sudamericana",
      "competitionName": "CONMEBOL Sudamericana",
      "date": "2026-08-21T00:30Z",
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
        "id": "3372",
        "name": "Cienciano del Cusco",
        "shortName": "Cienciano",
        "abbreviation": "CIE",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/3372.png"
      },
      "homeScore": null,
      "awayScore": null,
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
      "id": "401841208",
      "competitionId": "bra.1",
      "competitionName": "Campeonato Brasileiro",
      "date": "2026-08-29T18:00Z",
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
      "id": "401841216",
      "competitionId": "bra.1",
      "competitionName": "Campeonato Brasileiro",
      "date": "2026-08-29T18:00Z",
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
      "id": "401841215",
      "competitionId": "bra.1",
      "competitionName": "Campeonato Brasileiro",
      "date": "2026-08-29T18:00Z",
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
      "id": "401841214",
      "competitionId": "bra.1",
      "competitionName": "Campeonato Brasileiro",
      "date": "2026-08-29T18:00Z",
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
      "date": "2026-08-29T18:00Z",
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
      "date": "2026-08-29T18:00Z",
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
      "date": "2026-08-29T18:00Z",
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
      "id": "401841210",
      "competitionId": "bra.1",
      "competitionName": "Campeonato Brasileiro",
      "date": "2026-08-29T18:00Z",
      "status": "scheduled",
      "statusLabel": "Agendado",
      "clock": null,
      "venue": "Estadio Evandro Almeida (Baenao)",
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
      "id": "401841209",
      "competitionId": "bra.1",
      "competitionName": "Campeonato Brasileiro",
      "date": "2026-08-29T18:00Z",
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
      "date": "2026-08-29T18:00Z",
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
      "id": "401841221",
      "competitionId": "bra.1",
      "competitionName": "Campeonato Brasileiro",
      "date": "2026-09-05T18:00Z",
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
      "date": "2026-09-05T18:00Z",
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
      "id": "401841219",
      "competitionId": "bra.1",
      "competitionName": "Campeonato Brasileiro",
      "date": "2026-09-05T18:00Z",
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
      "date": "2026-09-05T18:00Z",
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
      "id": "401841227",
      "competitionId": "bra.1",
      "competitionName": "Campeonato Brasileiro",
      "date": "2026-09-05T18:00Z",
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
      "id": "401841223",
      "competitionId": "bra.1",
      "competitionName": "Campeonato Brasileiro",
      "date": "2026-09-05T18:00Z",
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
      "id": "401841224",
      "competitionId": "bra.1",
      "competitionName": "Campeonato Brasileiro",
      "date": "2026-09-05T18:00Z",
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
      "id": "401841225",
      "competitionId": "bra.1",
      "competitionName": "Campeonato Brasileiro",
      "date": "2026-09-05T18:00Z",
      "status": "scheduled",
      "statusLabel": "Agendado",
      "clock": null,
      "venue": "Estadio Evandro Almeida (Baenao)",
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
      "id": "401841226",
      "competitionId": "bra.1",
      "competitionName": "Campeonato Brasileiro",
      "date": "2026-09-05T18:00Z",
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
      "id": "401841222",
      "competitionId": "bra.1",
      "competitionName": "Campeonato Brasileiro",
      "date": "2026-09-05T18:00Z",
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
      "points": 48,
      "played": 22,
      "wins": 14,
      "draws": 6,
      "losses": 2,
      "goalsFor": 38,
      "goalsAgainst": 16,
      "goalDifference": 22
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
      "points": 42,
      "played": 21,
      "wins": 12,
      "draws": 6,
      "losses": 3,
      "goalsFor": 39,
      "goalsAgainst": 18,
      "goalDifference": 21
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
      "points": 40,
      "played": 22,
      "wins": 12,
      "draws": 4,
      "losses": 6,
      "goalsFor": 30,
      "goalsAgainst": 19,
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
      "points": 35,
      "played": 22,
      "wins": 9,
      "draws": 8,
      "losses": 5,
      "goalsFor": 31,
      "goalsAgainst": 26,
      "goalDifference": 5
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
      "points": 33,
      "played": 22,
      "wins": 9,
      "draws": 6,
      "losses": 7,
      "goalsFor": 30,
      "goalsAgainst": 31,
      "goalDifference": -1
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
      "points": 33,
      "played": 22,
      "wins": 8,
      "draws": 9,
      "losses": 5,
      "goalsFor": 29,
      "goalsAgainst": 25,
      "goalDifference": 4
    },
    {
      "position": 7,
      "team": {
        "id": "874",
        "name": "Corinthians",
        "shortName": "Corinthians",
        "abbreviation": "COR",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/874.png"
      },
      "points": 32,
      "played": 22,
      "wins": 8,
      "draws": 8,
      "losses": 6,
      "goalsFor": 24,
      "goalsAgainst": 20,
      "goalDifference": 4
    },
    {
      "position": 8,
      "team": {
        "id": "6079",
        "name": "Red Bull Bragantino",
        "shortName": "Bragantino",
        "abbreviation": "BRA",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/6079.png"
      },
      "points": 31,
      "played": 21,
      "wins": 9,
      "draws": 4,
      "losses": 8,
      "goalsFor": 26,
      "goalsAgainst": 22,
      "goalDifference": 4
    },
    {
      "position": 9,
      "team": {
        "id": "6086",
        "name": "Botafogo",
        "shortName": "Botafogo",
        "abbreviation": "BOT",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/6086.png"
      },
      "points": 30,
      "played": 21,
      "wins": 8,
      "draws": 6,
      "losses": 7,
      "goalsFor": 35,
      "goalsAgainst": 33,
      "goalDifference": 2
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
      "points": 30,
      "played": 22,
      "wins": 8,
      "draws": 6,
      "losses": 8,
      "goalsFor": 27,
      "goalsAgainst": 29,
      "goalDifference": -2
    },
    {
      "position": 11,
      "team": {
        "id": "7632",
        "name": "Atlético-MG",
        "shortName": "Atlético-MG",
        "abbreviation": "CAM",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/7632.png"
      },
      "points": 29,
      "played": 21,
      "wins": 8,
      "draws": 5,
      "losses": 8,
      "goalsFor": 27,
      "goalsAgainst": 27,
      "goalDifference": 0
    },
    {
      "position": 12,
      "team": {
        "id": "2026",
        "name": "São Paulo",
        "shortName": "São Paulo",
        "abbreviation": "SAO",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/2026.png"
      },
      "points": 26,
      "played": 21,
      "wins": 7,
      "draws": 5,
      "losses": 9,
      "goalsFor": 26,
      "goalsAgainst": 25,
      "goalDifference": 1
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
      "points": 26,
      "played": 22,
      "wins": 7,
      "draws": 5,
      "losses": 10,
      "goalsFor": 22,
      "goalsAgainst": 33,
      "goalDifference": -11
    },
    {
      "position": 14,
      "team": {
        "id": "6273",
        "name": "Grêmio",
        "shortName": "Grêmio",
        "abbreviation": "GRE",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/6273.png"
      },
      "points": 25,
      "played": 21,
      "wins": 6,
      "draws": 7,
      "losses": 8,
      "goalsFor": 24,
      "goalsAgainst": 27,
      "goalDifference": -3
    },
    {
      "position": 15,
      "team": {
        "id": "9169",
        "name": "Mirassol",
        "shortName": "Mirassol",
        "abbreviation": "MIR",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/9169.png"
      },
      "points": 23,
      "played": 21,
      "wins": 6,
      "draws": 5,
      "losses": 10,
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
      "points": 23,
      "played": 22,
      "wins": 5,
      "draws": 8,
      "losses": 9,
      "goalsFor": 23,
      "goalsAgainst": 27,
      "goalDifference": -4
    },
    {
      "position": 17,
      "team": {
        "id": "2674",
        "name": "Santos",
        "shortName": "Santos",
        "abbreviation": "SAN",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/2674.png"
      },
      "points": 22,
      "played": 21,
      "wins": 5,
      "draws": 7,
      "losses": 9,
      "goalsFor": 29,
      "goalsAgainst": 35,
      "goalDifference": -6
    },
    {
      "position": 18,
      "team": {
        "id": "3454",
        "name": "Vasco da Gama",
        "shortName": "Vasco",
        "abbreviation": "VAS",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/3454.png"
      },
      "points": 22,
      "played": 21,
      "wins": 5,
      "draws": 7,
      "losses": 9,
      "goalsFor": 23,
      "goalsAgainst": 31,
      "goalDifference": -8
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
      "points": 22,
      "played": 22,
      "wins": 5,
      "draws": 7,
      "losses": 10,
      "goalsFor": 26,
      "goalsAgainst": 36,
      "goalDifference": -10
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
      "points": 10,
      "played": 21,
      "wins": 1,
      "draws": 7,
      "losses": 13,
      "goalsFor": 20,
      "goalsAgainst": 43,
      "goalDifference": -23
    }
  ],
  "news": [
    {
      "id": "17101775",
      "title": "Sueco, jogador que disputou a Copa e destaque da Libertadores: os planos do Inter para reforçar o ataque",
      "summary": "Internacional se movimenta para reforçar o setor ofensivo e trabalha com três nomes no momento",
      "url": "https://www.espn.com.br/futebol/internacional/artigo/_/id/17101775/sueco-jogador-disputou-copa-destaque-libertadores-planos-inter-reforcar-ataque",
      "publishedAt": "2026-08-10T16:15:31Z",
      "category": "market",
      "teams": [
        "Internacional"
      ],
      "imageUrl": "https://a.espncdn.com/photo/2026/0617/r1675103_1296x729_16-9.jpg",
      "imageAlt": "Cedrick Bakambu pula em cima de seus companheiros na comemoração do gol da RD Congo contra Portugal, na estreia da Copa do Mundo 2026",
      "imageCredit": "Getty ImagesGetty Images"
    },
    {
      "id": "17101649",
      "title": "Zagueiro do Coritiba diz que 'esqueceu' do fosso no Couto Pereira e explica sensação da queda em comemoração de gol anulado: 'Quando eu pulo...'",
      "summary": "Jogador caiu em escada que leva ao vestiário ao pular placa de publicidade",
      "url": "https://www.espn.com.br/futebol/brasileirao/artigo/_/id/17101649/zagueiro-coritiba-diz-esqueceu-fosso-couto-pereira-explica-sensacao-queda-comemoracao-gol-anulado-quando-eu-pulo",
      "publishedAt": "2026-08-10T15:54:22Z",
      "category": "news",
      "teams": [
        "Coritiba"
      ],
      "imageUrl": "https://a.espncdn.com/photo/2026/0810/r1699948_1296x729_16-9.jpg",
      "imageAlt": "Jacy, zagueiro do Coritba",
      "imageCredit": "Arte ESPN (Getty Images e Paulo De Tarso/AGIF)"
    },
    {
      "id": "17098489",
      "title": "Bolívar x São Paulo: onde assistir ao vivo, horário, palpite e prováveis escalações do jogo da Sul-Americana",
      "summary": "Bolívar e São Paulo se enfrentam nesta terça-feira (11), na altitude de La Paz, pela CONMEBOL Sul-Americana",
      "url": "https://www.espn.com.br/futebol/sul-americana/artigo/_/id/17098489/bolivar-x-sao-paulo-onde-assistir-ao-vivo-horario-palpite-provaveis-escalacoes-jogo-sul-americana",
      "publishedAt": "2026-08-10T13:56:34Z",
      "category": "news",
      "teams": [
        "Palmeiras",
        "Internacional"
      ],
      "imageUrl": "https://a.espncdn.com/photo/2025/0915/r1546062_1296x729_16-9.jpg",
      "imageAlt": "Vista do estádio Hernando Siles, em La Paz, antes de Bolívar x Palmeiras",
      "imageCredit": "DAVID MERCADO/AFP via Getty Images"
    },
    {
      "id": "17101190",
      "title": "Vasco empata com o Bahia fora de casa, segue no Z-4 e aumenta drama no Brasileirão; melhores momentos",
      "summary": "Cruzmaltino está na 18ª colocação do campeonato",
      "url": "https://www.espn.com.br/video/clip/_/id/17101190",
      "publishedAt": "2026-08-10T13:03:16Z",
      "category": "news",
      "teams": [
        "Bahia",
        "Vasco da Gama"
      ],
      "imageUrl": null,
      "imageAlt": "Vasco empata com o Bahia fora de casa, segue no Z-4 e aumenta drama no Brasileirão; melhores momentos",
      "imageCredit": null
    },
    {
      "id": "17100995",
      "title": "Confusão bizarra com uniformes vai parar na súmula de Bragantino x Corinthians: 'O correto deveria ser...'",
      "summary": "Partida entre Red Bull Bragantino e Corinthians foi marcada por bizarrice envolvendo uniformes das equipes",
      "url": "https://www.espn.com.br/futebol/brasileirao/artigo/_/id/17100995/confusao-bizarra-uniformes-vai-parar-sumula-bragantino-x-corinthians-correto-deveria-ser",
      "publishedAt": "2026-08-10T12:21:09Z",
      "category": "news",
      "teams": [
        "Corinthians",
        "Red Bull Bragantino"
      ],
      "imageUrl": "https://a.espncdn.com/photo/2026/0810/r1699874_1280x720_16-9.jpg",
      "imageAlt": "Eduardo Sasha, do Red Bull Bragantino, durante jogo contra o Corinthians",
      "imageCredit": "Ari Ferreira/Red Bull Bragantino"
    },
    {
      "id": "17100319",
      "title": "Flamengo perde sem Almada e Luiz Henrique? A resposta de Jardim após negociações frustradas e 'opinião sobre mercado'",
      "summary": "Leonardo Jardim evitou comentar as negociações frustradas e valorizou o atual elenco do Flamengo",
      "url": "https://www.espn.com.br/futebol/flamengo/artigo/_/id/17100319/flamengo-leonardo-jardim-responde-apos-negociacoes-frustradas-com-thiago-almada-e-luiz-henrique",
      "publishedAt": "2026-08-10T02:15:58Z",
      "category": "market",
      "teams": [
        "Flamengo"
      ],
      "imageUrl": "https://a.espncdn.com/photo/2026/0305/r1623723_1296x729_16-9.jpg",
      "imageAlt": "Leonardo Jardim conversa com os jogadores durante seu primeiro treino como treinador do Flamengo",
      "imageCredit": "Reprodução/Flamengo"
    },
    {
      "id": "17100212",
      "title": "Cuca revela que ainda vai conversar com Neymar sobre cartões e lamenta ausência do craque: 'Nosso poderio de finalizações seria maior'",
      "summary": "O Santos foi derrotado pelo Athletico Paranaense dentro de casa pelo Brasileirão",
      "url": "https://www.espn.com.br/video/clip/_/id/17100212",
      "publishedAt": "2026-08-10T01:52:49Z",
      "category": "news",
      "teams": [
        "Athletico Paranaense",
        "Santos"
      ],
      "imageUrl": null,
      "imageAlt": "Cuca revela que ainda vai conversar com Neymar sobre cartões e lamenta ausência do craque: 'Nosso poderio de finalizações seria maior'",
      "imageCredit": null
    },
    {
      "id": "17100210",
      "title": "Como fica o elenco do Flamengo sem Almada e Luiz Henrique? Leonardo Jardim: 'Se eu der uma opinião sobre mercado...'",
      "summary": "Treinador do Flamengo falou sobre as tentativas frustradas de contração após a vitória contra o Vitória pelo Brasileirão",
      "url": "https://www.espn.com.br/video/clip/_/id/17100210",
      "publishedAt": "2026-08-10T01:51:05Z",
      "category": "market",
      "teams": [
        "Flamengo",
        "Vitória"
      ],
      "imageUrl": null,
      "imageAlt": "Como fica o elenco do Flamengo sem Almada e Luiz Henrique? Leonardo Jardim: 'Se eu der uma opinião sobre mercado...'",
      "imageCredit": null
    },
    {
      "id": "17100194",
      "title": "Memphis Depay perto de renovar e com chances de jogar contra o Rosario Central; Diniz abre o jogo sobre situação do holandês",
      "summary": "Treinador do Corinthians falou sobre o atacante após a vitória contra o Red Bull Bragantino pelo Brasileirão",
      "url": "https://www.espn.com.br/video/clip/_/id/17100194",
      "publishedAt": "2026-08-10T01:46:51Z",
      "category": "market",
      "teams": [
        "Corinthians",
        "Red Bull Bragantino"
      ],
      "imageUrl": null,
      "imageAlt": "Memphis Depay perto de renovar e com chances de jogar contra o Rosario Central; Diniz abre o jogo sobre situação do holandês",
      "imageCredit": null
    },
    {
      "id": "17100113",
      "title": "Cuca diz que terá conversa com Neymar sobre cartões e suspensões no Santos: 'Muito importante para ficar fora'",
      "summary": "Neymar desfalcou o Santos pelo segundo jogo por suspensão no Campeonato Brasileiro",
      "url": "https://www.espn.com.br/futebol/santos/artigo/_/id/17100113/santos-cuca-diz-tera-conversa-neymar-sobre-cartoes-muito-importante-para-ficar-fora",
      "publishedAt": "2026-08-10T01:29:59Z",
      "category": "news",
      "teams": [
        "Santos"
      ],
      "imageUrl": "https://a.espncdn.com/photo/2026/0804/r1697338_1296x729_16-9.jpg",
      "imageAlt": "Neymar e Cuca, durante treinamento pelo Santos",
      "imageCredit": "Getty Images"
    },
    {
      "id": "17100085",
      "title": "Cuca aponta limitações do Santos e pede compreensão após derrota: 'Nós não temos elenco'",
      "summary": "O Santos foi derrotado pelo Athletico Paranaense dentro de casa pelo Brasileirão",
      "url": "https://www.espn.com.br/video/clip/_/id/17100085",
      "publishedAt": "2026-08-10T01:25:23Z",
      "category": "news",
      "teams": [
        "Athletico Paranaense",
        "Santos"
      ],
      "imageUrl": null,
      "imageAlt": "Cuca aponta limitações do Santos e pede compreensão após derrota: 'Nós não temos elenco'",
      "imageCredit": null
    },
    {
      "id": "17100069",
      "title": "Vítima repetida! Pulgar já tinha marcado golaço contra o vitória no primeiro turno; VEJA",
      "summary": "Com a vitória, Flamengo se aproximou do líder Palmeiras no Brasileirão",
      "url": "https://www.espn.com.br/video/clip/_/id/17100069",
      "publishedAt": "2026-08-10T01:21:13Z",
      "category": "news",
      "teams": [
        "Flamengo",
        "Vitória"
      ],
      "imageUrl": null,
      "imageAlt": "Vítima repetida! Pulgar já tinha marcado golaço contra o vitória no primeiro turno; VEJA",
      "imageCredit": null
    },
    {
      "id": "17100053",
      "title": "Cuca desabafa após derrota do Santos para o Athletico Paranaense: 'Temos que ser um todo agora'",
      "summary": "O Santos foi derrotado pelo Athletico Paranaense dentro de casa pelo Brasileirão",
      "url": "https://www.espn.com.br/video/clip/_/id/17100053",
      "publishedAt": "2026-08-10T01:13:59Z",
      "category": "news",
      "teams": [
        "Athletico Paranaense",
        "Santos"
      ],
      "imageUrl": null,
      "imageAlt": "Cuca desabafa após derrota do Santos para o Athletico Paranaense: 'Temos que ser um todo agora'",
      "imageCredit": null
    },
    {
      "id": "17099998",
      "title": "Allan deveria ter sido expulso em lance com Félix Torres em Palmeiras x Inter? Renata Ruel analisa polêmica",
      "summary": "Jogadores do Internacional pediram a expulsão de Allan em Félix Torres no início do 2º tempo",
      "url": "https://www.espn.com.br/futebol/brasileirao/artigo/_/id/17099998/palmeiras-x-inter-renata-ruel-analisa-se-allan-deveria-ter-sido-expulso-em-lance-com-felix-torres",
      "publishedAt": "2026-08-10T00:59:01Z",
      "category": "news",
      "teams": [
        "Palmeiras",
        "Internacional"
      ],
      "imageUrl": "https://a.espncdn.com/photo/2026/0810/r1699777_1296x729_16-9.jpg",
      "imageAlt": "Matheus Bahia reclama com o árbitro Davi De Oliveira Lacerda",
      "imageCredit": "Anderson Romao/AGIF"
    },
    {
      "id": "17099939",
      "title": "Pulgar faz gol antológico, Flamengo vence o Vitória e diminui diferença para o líder Palmeiras no Brasileirão; VEJA os melhores momentos",
      "summary": "O Flamengo venceu o Vitória por 2 a 0 pelo Brasileirão",
      "url": "https://www.espn.com.br/video/clip/_/id/17099939",
      "publishedAt": "2026-08-10T00:47:27Z",
      "category": "news",
      "teams": [
        "Flamengo",
        "Vitória"
      ],
      "imageUrl": null,
      "imageAlt": "Pulgar faz gol antológico, Flamengo vence o Vitória e diminui diferença para o líder Palmeiras no Brasileirão; VEJA os melhores momentos",
      "imageCredit": null
    },
    {
      "id": "17099929",
      "title": "Bruno Henrique e Pulgar garantem vitória do Flamengo sobre o Vitória pelo Brasileirão; VEJA os gols da partida",
      "summary": "O Flamengo venceu o Vitória por 2 a 0 pelo Brasileirão",
      "url": "https://www.espn.com.br/video/clip/_/id/17099929",
      "publishedAt": "2026-08-10T00:43:17Z",
      "category": "news",
      "teams": [
        "Flamengo",
        "Vitória"
      ],
      "imageUrl": null,
      "imageAlt": "Bruno Henrique e Pulgar garantem vitória do Flamengo sobre o Vitória pelo Brasileirão; VEJA os gols da partida",
      "imageCredit": null
    }
  ]
};
