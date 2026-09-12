import { RadarPayload } from './radar.models';

export const RADAR_FALLBACK: RadarPayload = {
  "version": 1,
  "generatedAt": "2026-09-12T16:28:41.047Z",
  "expiresAt": "2026-09-16T16:28:41.047Z",
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
      "matchCount": 22,
      "liveCount": 0,
      "nextMatchAt": "2026-09-12T19:00Z"
    },
    {
      "id": "bra.copa_do_brazil",
      "name": "Copa do Brasil",
      "shortName": "Copa do Brasil",
      "matchCount": 0,
      "liveCount": 0,
      "nextMatchAt": null
    },
    {
      "id": "conmebol.libertadores",
      "name": "CONMEBOL Libertadores",
      "shortName": "Libertadores",
      "matchCount": 8,
      "liveCount": 0,
      "nextMatchAt": "2026-09-15T22:00Z"
    },
    {
      "id": "conmebol.sudamericana",
      "name": "CONMEBOL Sudamericana",
      "shortName": "Sul-Americana",
      "matchCount": 6,
      "liveCount": 0,
      "nextMatchAt": "2026-09-15T22:00Z"
    }
  ],
  "matches": [
    {
      "id": "401841222",
      "competitionId": "bra.1",
      "competitionName": "Campeonato Brasileiro",
      "date": "2026-09-07T23:00Z",
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
        "id": "6273",
        "name": "Grêmio",
        "shortName": "Grêmio",
        "abbreviation": "GRE",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/6273.png"
      },
      "homeScore": "1",
      "awayScore": "0",
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401841222/gremio-vitoria"
    },
    {
      "id": "401912518",
      "competitionId": "conmebol.libertadores",
      "competitionName": "CONMEBOL Libertadores",
      "date": "2026-09-08T22:00Z",
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
        "id": "7764",
        "name": "Platense",
        "shortName": "Platense",
        "abbreviation": "PLA",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/7764.png"
      },
      "homeScore": "2",
      "awayScore": "0",
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401912518/platense-fluminense"
    },
    {
      "id": "401913960",
      "competitionId": "conmebol.sudamericana",
      "competitionName": "CONMEBOL Sudamericana",
      "date": "2026-09-08T22:00Z",
      "status": "finished",
      "statusLabel": "Final da Partida",
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
      "homeScore": "0",
      "awayScore": "0",
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401913960/vasco-da-gama-independiente-santa-fe"
    },
    {
      "id": "401912542",
      "competitionId": "conmebol.sudamericana",
      "competitionName": "CONMEBOL Sudamericana",
      "date": "2026-09-09T00:30Z",
      "status": "finished",
      "statusLabel": "Final da Partida",
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
      "homeScore": "1",
      "awayScore": "0",
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401912542/sao-paulo-boca-juniors"
    },
    {
      "id": "401912527",
      "competitionId": "conmebol.libertadores",
      "competitionName": "CONMEBOL Libertadores",
      "date": "2026-09-09T22:00Z",
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
        "id": "4816",
        "name": "Liga de Quito",
        "shortName": "LDU",
        "abbreviation": "LDU",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/4816.png"
      },
      "homeScore": "1",
      "awayScore": "0",
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401912527/liga-de-quito-palmeiras"
    },
    {
      "id": "401913073",
      "competitionId": "conmebol.sudamericana",
      "competitionName": "CONMEBOL Sudamericana",
      "date": "2026-09-09T22:00Z",
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
        "id": "7632",
        "name": "Atlético-MG",
        "shortName": "Atlético-MG",
        "abbreviation": "CAM",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/7632.png"
      },
      "homeScore": "2",
      "awayScore": "0",
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401913073/atletico-mg-santos"
    },
    {
      "id": "401912541",
      "competitionId": "conmebol.libertadores",
      "competitionName": "CONMEBOL Libertadores",
      "date": "2026-09-10T00:30Z",
      "status": "finished",
      "statusLabel": "Final da Partida",
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
      "homeScore": "1",
      "awayScore": "1",
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401912541/corinthians-estudiantes-de-la-plata"
    },
    {
      "id": "401912543",
      "competitionId": "conmebol.libertadores",
      "competitionName": "CONMEBOL Libertadores",
      "date": "2026-09-11T00:30Z",
      "status": "finished",
      "statusLabel": "Final da Partida",
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
      "homeScore": "0",
      "awayScore": "2",
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401912543/flamengo-independiente-del-valle"
    },
    {
      "id": "401841232",
      "competitionId": "bra.1",
      "competitionName": "Campeonato Brasileiro",
      "date": "2026-09-12T00:00Z",
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
        "id": "3458",
        "name": "Athletico Paranaense",
        "shortName": "Athletico-PR",
        "abbreviation": "CAP",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/3458.png"
      },
      "homeScore": "3",
      "awayScore": "3",
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
    },
    {
      "id": "401912525",
      "competitionId": "conmebol.libertadores",
      "competitionName": "CONMEBOL Libertadores",
      "date": "2026-09-16T22:00Z",
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
        "id": "2029",
        "name": "Palmeiras",
        "shortName": "Palmeiras",
        "abbreviation": "PAL",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/2029.png"
      },
      "homeScore": null,
      "awayScore": null,
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401912525/palmeiras-liga-de-quito"
    },
    {
      "id": "401913071",
      "competitionId": "conmebol.sudamericana",
      "competitionName": "CONMEBOL Sudamericana",
      "date": "2026-09-16T22:00Z",
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
        "id": "2674",
        "name": "Santos",
        "shortName": "Santos",
        "abbreviation": "SAN",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/2674.png"
      },
      "homeScore": null,
      "awayScore": null,
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401913071/santos-atletico-mg"
    },
    {
      "id": "401841176",
      "competitionId": "bra.1",
      "competitionName": "Campeonato Brasileiro",
      "date": "2026-09-16T22:30Z",
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
      "id": "401912540",
      "competitionId": "conmebol.libertadores",
      "competitionName": "CONMEBOL Libertadores",
      "date": "2026-09-17T00:30Z",
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
        "id": "8",
        "name": "Estudiantes de La Plata",
        "shortName": "Estudiantes",
        "abbreviation": "EST",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/8.png"
      },
      "homeScore": null,
      "awayScore": null,
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401912540/estudiantes-de-la-plata-corinthians"
    },
    {
      "id": "401912526",
      "competitionId": "conmebol.libertadores",
      "competitionName": "CONMEBOL Libertadores",
      "date": "2026-09-18T00:30Z",
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
        "id": "17086",
        "name": "Independiente del Valle",
        "shortName": "Ind. del Valle",
        "abbreviation": "IDV",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/17086.png"
      },
      "homeScore": null,
      "awayScore": null,
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401912526/independiente-del-valle-flamengo"
    },
    {
      "id": "401841239",
      "competitionId": "bra.1",
      "competitionName": "Campeonato Brasileiro",
      "date": "2026-09-19T19:00Z",
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
        "id": "9318",
        "name": "Chapecoense",
        "shortName": "Chapecoense",
        "abbreviation": "CHA",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/9318.png"
      },
      "homeScore": null,
      "awayScore": null,
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401841239/chapecoense-atletico-mg"
    },
    {
      "id": "401841245",
      "competitionId": "bra.1",
      "competitionName": "Campeonato Brasileiro",
      "date": "2026-09-19T20:00Z",
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
        "id": "6086",
        "name": "Botafogo",
        "shortName": "Botafogo",
        "abbreviation": "BOT",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/6086.png"
      },
      "homeScore": null,
      "awayScore": null,
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401841245/botafogo-mirassol"
    },
    {
      "id": "401841244",
      "competitionId": "bra.1",
      "competitionName": "Campeonato Brasileiro",
      "date": "2026-09-19T21:30Z",
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
        "id": "2674",
        "name": "Santos",
        "shortName": "Santos",
        "abbreviation": "SAN",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/2674.png"
      },
      "homeScore": null,
      "awayScore": null,
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401841244/santos-remo"
    },
    {
      "id": "401841247",
      "competitionId": "bra.1",
      "competitionName": "Campeonato Brasileiro",
      "date": "2026-09-19T23:30Z",
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
        "id": "3456",
        "name": "Coritiba",
        "shortName": "Coritiba",
        "abbreviation": "CFC",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/3456.png"
      },
      "homeScore": null,
      "awayScore": null,
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401841247/coritiba-vasco-da-gama"
    },
    {
      "id": "401841243",
      "competitionId": "bra.1",
      "competitionName": "Campeonato Brasileiro",
      "date": "2026-09-20T00:00Z",
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
        "id": "1936",
        "name": "Internacional",
        "shortName": "Internacional",
        "abbreviation": "INT",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/1936.png"
      },
      "homeScore": null,
      "awayScore": null,
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401841243/internacional-sao-paulo"
    },
    {
      "id": "401841246",
      "competitionId": "bra.1",
      "competitionName": "Campeonato Brasileiro",
      "date": "2026-09-20T14:00Z",
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
        "id": "2029",
        "name": "Palmeiras",
        "shortName": "Palmeiras",
        "abbreviation": "PAL",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/2029.png"
      },
      "homeScore": null,
      "awayScore": null,
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401841246/palmeiras-gremio"
    },
    {
      "id": "401841240",
      "competitionId": "bra.1",
      "competitionName": "Campeonato Brasileiro",
      "date": "2026-09-20T19:00Z",
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
        "id": "3445",
        "name": "Fluminense",
        "shortName": "Fluminense",
        "abbreviation": "FLU",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/3445.png"
      },
      "homeScore": null,
      "awayScore": null,
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401841240/fluminense-corinthians"
    },
    {
      "id": "401841242",
      "competitionId": "bra.1",
      "competitionName": "Campeonato Brasileiro",
      "date": "2026-09-20T19:00Z",
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
        "id": "2022",
        "name": "Cruzeiro",
        "shortName": "Cruzeiro",
        "abbreviation": "CRU",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/2022.png"
      },
      "homeScore": null,
      "awayScore": null,
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401841242/cruzeiro-vitoria"
    },
    {
      "id": "401841241",
      "competitionId": "bra.1",
      "competitionName": "Campeonato Brasileiro",
      "date": "2026-09-20T21:30Z",
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
        "id": "6079",
        "name": "Red Bull Bragantino",
        "shortName": "Bragantino",
        "abbreviation": "BRA",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/6079.png"
      },
      "homeScore": null,
      "awayScore": null,
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401841241/red-bull-bragantino-flamengo"
    },
    {
      "id": "401841238",
      "competitionId": "bra.1",
      "competitionName": "Campeonato Brasileiro",
      "date": "2026-09-20T22:30Z",
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
        "id": "9967",
        "name": "Bahia",
        "shortName": "Bahia",
        "abbreviation": "BAH",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/9967.png"
      },
      "homeScore": null,
      "awayScore": null,
      "link": "https://www.espn.com.br/futebol/partida/_/jogoId/401841238/bahia-athletico-paranaense"
    }
  ],
  "standings": [
    {
      "position": 1,
      "team": {
        "id": "819",
        "name": "Flamengo",
        "shortName": "Flamengo",
        "abbreviation": "FLA",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/819.png"
      },
      "points": 54,
      "played": 26,
      "wins": 16,
      "draws": 6,
      "losses": 4,
      "goalsFor": 51,
      "goalsAgainst": 21,
      "goalDifference": 30
    },
    {
      "position": 2,
      "team": {
        "id": "2029",
        "name": "Palmeiras",
        "shortName": "Palmeiras",
        "abbreviation": "PAL",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/2029.png"
      },
      "points": 53,
      "played": 26,
      "wins": 15,
      "draws": 8,
      "losses": 3,
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
      "points": 46,
      "played": 27,
      "wins": 13,
      "draws": 7,
      "losses": 7,
      "goalsFor": 41,
      "goalsAgainst": 31,
      "goalDifference": 10
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
      "points": 45,
      "played": 26,
      "wins": 12,
      "draws": 9,
      "losses": 5,
      "goalsFor": 40,
      "goalsAgainst": 32,
      "goalDifference": 8
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
      "points": 43,
      "played": 26,
      "wins": 11,
      "draws": 10,
      "losses": 5,
      "goalsFor": 40,
      "goalsAgainst": 32,
      "goalDifference": 8
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
      "points": 42,
      "played": 26,
      "wins": 12,
      "draws": 6,
      "losses": 8,
      "goalsFor": 38,
      "goalsAgainst": 37,
      "goalDifference": 1
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
      "points": 38,
      "played": 27,
      "wins": 10,
      "draws": 8,
      "losses": 9,
      "goalsFor": 37,
      "goalsAgainst": 38,
      "goalDifference": -1
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
      "played": 25,
      "wins": 10,
      "draws": 6,
      "losses": 9,
      "goalsFor": 32,
      "goalsAgainst": 30,
      "goalDifference": 2
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
      "played": 25,
      "wins": 10,
      "draws": 5,
      "losses": 10,
      "goalsFor": 31,
      "goalsAgainst": 28,
      "goalDifference": 3
    },
    {
      "position": 10,
      "team": {
        "id": "2026",
        "name": "São Paulo",
        "shortName": "São Paulo",
        "abbreviation": "SAO",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/2026.png"
      },
      "points": 33,
      "played": 25,
      "wins": 9,
      "draws": 6,
      "losses": 10,
      "goalsFor": 31,
      "goalsAgainst": 28,
      "goalDifference": 3
    },
    {
      "position": 11,
      "team": {
        "id": "3457",
        "name": "Vitória",
        "shortName": "Vitória",
        "abbreviation": "VIT",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/3457.png"
      },
      "points": 32,
      "played": 26,
      "wins": 9,
      "draws": 5,
      "losses": 12,
      "goalsFor": 25,
      "goalsAgainst": 37,
      "goalDifference": -12
    },
    {
      "position": 12,
      "team": {
        "id": "874",
        "name": "Corinthians",
        "shortName": "Corinthians",
        "abbreviation": "COR",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/874.png"
      },
      "points": 32,
      "played": 26,
      "wins": 8,
      "draws": 8,
      "losses": 10,
      "goalsFor": 27,
      "goalsAgainst": 27,
      "goalDifference": 0
    },
    {
      "position": 13,
      "team": {
        "id": "2674",
        "name": "Santos",
        "shortName": "Santos",
        "abbreviation": "SAN",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/2674.png"
      },
      "points": 32,
      "played": 25,
      "wins": 8,
      "draws": 8,
      "losses": 9,
      "goalsFor": 37,
      "goalsAgainst": 38,
      "goalDifference": -1
    },
    {
      "position": 14,
      "team": {
        "id": "6086",
        "name": "Botafogo",
        "shortName": "Botafogo",
        "abbreviation": "BOT",
        "logo": "https://a.espncdn.com/i/teamlogos/soccer/500/6086.png"
      },
      "points": 31,
      "played": 25,
      "wins": 8,
      "draws": 7,
      "losses": 10,
      "goalsFor": 37,
      "goalsAgainst": 40,
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
      "points": 28,
      "played": 25,
      "wins": 7,
      "draws": 7,
      "losses": 11,
      "goalsFor": 27,
      "goalsAgainst": 33,
      "goalDifference": -6
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
      "points": 28,
      "played": 26,
      "wins": 7,
      "draws": 7,
      "losses": 12,
      "goalsFor": 29,
      "goalsAgainst": 40,
      "goalDifference": -11
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
      "played": 25,
      "wins": 6,
      "draws": 7,
      "losses": 12,
      "goalsFor": 27,
      "goalsAgainst": 40,
      "goalDifference": -13
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
      "played": 26,
      "wins": 5,
      "draws": 10,
      "losses": 11,
      "goalsFor": 28,
      "goalsAgainst": 34,
      "goalDifference": -6
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
      "played": 26,
      "wins": 5,
      "draws": 8,
      "losses": 13,
      "goalsFor": 30,
      "goalsAgainst": 43,
      "goalDifference": -13
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
      "points": 17,
      "played": 25,
      "wins": 3,
      "draws": 8,
      "losses": 14,
      "goalsFor": 27,
      "goalsAgainst": 50,
      "goalDifference": -23
    }
  ],
  "news": [
    {
      "id": "17245706",
      "title": "Neymar 'anuncia' Coutinho antes do Santos em suas redes; VEJA",
      "summary": "Créditos: Instagram/@neymarjr",
      "url": "https://www.espn.com.br/video/clip/_/id/17245706",
      "publishedAt": "2026-09-12T15:51:11Z",
      "category": "news",
      "teams": [
        "Santos"
      ],
      "imageUrl": null,
      "imageAlt": "Neymar 'anuncia' Coutinho antes do Santos em suas redes; VEJA",
      "imageCredit": null
    },
    {
      "id": "17245353",
      "title": "Neymar 'fura' Santos e anuncia contratação de Philippe Coutinho",
      "summary": "Coutinho estava sem clube desde fevereiro, quando deixou o Vasco",
      "url": "https://www.espn.com.br/futebol/santos/artigo/_/id/17245353/philippe-coutinho-neymar-fura-santos-anuncia-contratacao",
      "publishedAt": "2026-09-12T15:37:01Z",
      "category": "market",
      "teams": [
        "Santos"
      ],
      "imageUrl": "https://a.espncdn.com/photo/2025/0815/r1532296_1296x729_16-9.jpg",
      "imageAlt": "Atacante brasileiro Neymar e meia brasileiro Philippe Coutinho comemoram gol do Brasil sobre a Costa Rica, na fase de grupos da Copa do Mundo de 2018, em São Petersburgo (RUS)",
      "imageCredit": "Jean Catuffe/Getty Images"
    },
    {
      "id": "17244958",
      "title": "Bahia x Remo: onde assistir ao vivo, horário, palpite e prováveis escalações do jogo do Brasileirão",
      "summary": "Confronto encerra a 27ª rodada da competição",
      "url": "https://www.espn.com.br/futebol/brasileirao/artigo/_/id/17244958/bahia-x-remo-onde-assistir-ao-vivo-horario-palpite-provaveis-escalacoes-jogo-brasileirao",
      "publishedAt": "2026-09-12T13:58:52Z",
      "category": "news",
      "teams": [
        "Bahia",
        "Remo"
      ],
      "imageUrl": "https://a.espncdn.com/photo/2026/0330/r1636068_1296x729_16-9.jpg",
      "imageAlt": "Vista da Fonte Nova",
      "imageCredit": "Pedro Vilela/Getty Images"
    },
    {
      "id": "17242228",
      "title": "De protestos a 'consolação': como último 'mês do desgosto' mudou vidas de Santos e Cruzeiro e trouxe nova realidade",
      "summary": "Times mudaram totalmente de cenário após serem eliminados por rivais locais na Copa do Brasil",
      "url": "https://www.espn.com.br/futebol/brasileirao/artigo/_/id/17242228/protestos-consolacao-ultimomes-desgosto-mudou-vidas-santos-cruzeiro-trouxe-nova-realidade",
      "publishedAt": "2026-09-12T12:30:35Z",
      "category": "news",
      "teams": [
        "Santos",
        "Cruzeiro"
      ],
      "imageUrl": "https://a.espncdn.com/photo/2026/0911/r1715030_1296x729_16-9.jpg",
      "imageAlt": "Oliva e Rollheiser comemoram gol do Santos, enquanto Kaio Jorge e Matheus Pereira conversam em jogo do Cruzeiro",
      "imageCredit": "Montagem ESPN/Getty Images"
    },
    {
      "id": "17237027",
      "title": "Poupar? Os dilemas e dúvidas de Abel e Dorival para Palmeiras x São Paulo antes de 'decisões' continentais",
      "summary": "Palmeiras e São Paulo se encontram no Brasileirão em meio a definições pela Libertadores e pela Sul-Americana",
      "url": "https://www.espn.com.br/futebol/brasileirao/artigo/_/id/17237027/poupar-dilemas-duvidas-abel-dorival-palmeiras-x-sao-paulo-antes-decisoes-continentais",
      "publishedAt": "2026-09-12T12:24:52Z",
      "category": "news",
      "teams": [
        "Palmeiras",
        "São Paulo"
      ],
      "imageUrl": "https://a.espncdn.com/photo/2026/0910/r1714448_1296x729_16-9.jpg",
      "imageAlt": "Os técnicos Dorival Júnior (esq), do São Paulo, e Abel Ferreira, do Palmeiras",
      "imageCredit": "ESPN"
    },
    {
      "id": "17244666",
      "title": "Morre Paulo Angioni, histórico dirigente do futebol brasileiro, aos 80 anos",
      "summary": "Diretor executivo do Fluminense, Paulo Angioni morreu na madrugada deste sábado (12), aos 80 anos",
      "url": "https://www.espn.com.br/futebol/artigo/_/id/17244666/morre-paulo-angioni-historico-dirigente-futebol-brasileiro-aos-80-anos",
      "publishedAt": "2026-09-12T12:20:09Z",
      "category": "news",
      "teams": [
        "Fluminense",
        "Vasco da Gama",
        "Brasil"
      ],
      "imageUrl": "https://a.espncdn.com/photo/2026/0912/r1715277_1296x729_16-9.jpg",
      "imageAlt": "Dirigente brasileiro Paulo Angioni, diretor executivo de futebol do Fluminense, em coletiva no CT Carlos Castilho, na zona Oeste do Rio de Janeiro (RJ)",
      "imageCredit": "Lucas Merçon/ Fluminense F.C."
    },
    {
      "id": "17244229",
      "title": "Coritiba arranca empate heroico com Athletico-PR em clássico com seis gols e 'protocolo Vini Jr'; VEJA como foi",
      "summary": "Imagens: Sportv/Premiere | Rivais protagonizam duelo caótico em partida nesta sexta-feira (12) no Couto Pereira",
      "url": "https://www.espn.com.br/video/clip/_/id/17244229",
      "publishedAt": "2026-09-12T04:27:15Z",
      "category": "news",
      "teams": [
        "Athletico Paranaense",
        "Coritiba"
      ],
      "imageUrl": null,
      "imageAlt": "Coritiba arranca empate heroico com Athletico-PR em clássico com seis gols e 'protocolo Vini Jr'; VEJA como foi",
      "imageCredit": null
    },
    {
      "id": "17244183",
      "title": "Arrascaeta abre o jogo sobre discussão com Samuel Lino e revela papo no Flamengo: 'Jogo com mais dez'",
      "summary": "Imagens: Pod Boa | Craque rubro-negro abriu o jogo sobre situação polêmica da semana na equipe",
      "url": "https://www.espn.com.br/video/clip/_/id/17244183",
      "publishedAt": "2026-09-12T03:54:28Z",
      "category": "news",
      "teams": [
        "Brasil",
        "Flamengo",
        "Uruguai"
      ],
      "imageUrl": null,
      "imageAlt": "Arrascaeta abre o jogo sobre discussão com Samuel Lino e revela papo no Flamengo: 'Jogo com mais dez'",
      "imageCredit": null
    },
    {
      "id": "17244024",
      "title": "Alô, São Paulo! Ex-Corinthians, Romero assina pintura pelo Boca Juniors antes de 'decisão' pela Sul-Americana; VEJA",
      "summary": "Atacante paraguaio brilhou com dois gols em vitória sobre o Central Córdoba pelo Argentino",
      "url": "https://www.espn.com.br/video/clip/_/id/17244024",
      "publishedAt": "2026-09-12T03:11:27Z",
      "category": "news",
      "teams": [
        "Boca Juniors",
        "São Paulo",
        "Águilas Doradas"
      ],
      "imageUrl": null,
      "imageAlt": "Alô, São Paulo! Ex-Corinthians, Romero assina pintura pelo Boca Juniors antes de 'decisão' pela Sul-Americana; VEJA",
      "imageCredit": null
    },
    {
      "id": "17243795",
      "title": "Internacional recebe doação de R$ 20 milhões para pagar salários atrasados dos jogadores",
      "summary": "Internacional vai conseguir pagar os atrasados de jogadores e funcionários",
      "url": "https://www.espn.com.br/futebol/internacional/artigo/_/id/17243795/internacional-recebe-doacao-pagar-salarios-atrasados-jogadores",
      "publishedAt": "2026-09-12T01:57:03Z",
      "category": "news",
      "teams": [
        "Internacional"
      ],
      "imageUrl": "https://a.espncdn.com/photo/2026/0312/r1627497_1296x729_16-9.jpg",
      "imageAlt": "Bandeira do Internacional no Beira-Rio",
      "imageCredit": "Ricardo Duarte / Internacional"
    },
    {
      "id": "17243678",
      "title": "Libertadores terá primeira semifinal 100% brasileira? Veja os PALPITES para os jogos de Fluminense, Palmeiras, Corinthians e Flamengo",
      "summary": "Assista à CONMEBOL Libertadores na ESPN pelo Plano Premium do Disney+",
      "url": "https://www.espn.com.br/video/clip/_/id/17243678",
      "publishedAt": "2026-09-12T01:11:16Z",
      "category": "news",
      "teams": [
        "Corinthians",
        "Flamengo",
        "Fluminense"
      ],
      "imageUrl": null,
      "imageAlt": "Libertadores terá primeira semifinal 100% brasileira? Veja os PALPITES para os jogos de Fluminense, Palmeiras, Corinthians e Flamengo",
      "imageCredit": null
    },
    {
      "id": "17243531",
      "title": "'Retranca porque o Abel odeia enfrentar': Vitor Birner dá dica a Dorival e escala São Paulo ideal para Choque-Rei contra o Palmeiras; VEJA",
      "summary": "Tricolor visita o rival em clássico pelo Brasileirão neste sábado (12)",
      "url": "https://www.espn.com.br/video/clip/_/id/17243531",
      "publishedAt": "2026-09-12T00:45:14Z",
      "category": "news",
      "teams": [
        "Palmeiras",
        "São Paulo"
      ],
      "imageUrl": null,
      "imageAlt": "'Retranca porque o Abel odeia enfrentar': Vitor Birner dá dica a Dorival e escala São Paulo ideal para Choque-Rei contra o Palmeiras; VEJA",
      "imageCredit": null
    },
    {
      "id": "17243496",
      "title": "Arrascaeta quebra silêncio sobre discussão com Samuel Lino e põe panos quentes: 'A gente se resolveu'",
      "summary": "Arrascaeta minimizou a reclamação de Samuel Lino após não receber um passe durante Flamengo x Remo",
      "url": "https://www.espn.com.br/futebol/flamengo/artigo/_/id/17243496/flamengo-arrascaeta-quebra-silencio-discussao-com-samuel-lino-a-gente-se-resolveu",
      "publishedAt": "2026-09-12T03:55:01Z",
      "category": "news",
      "teams": [
        "Flamengo"
      ],
      "imageUrl": "https://a.espncdn.com/photo/2026/0912/r1715149_1296x729_16-9.jpg",
      "imageAlt": "Samuel Lino e Arrascaeta comemoram gol do Flamengo",
      "imageCredit": "Ruano Carneiro/Getty Images"
    },
    {
      "id": "17243225",
      "title": "Corinthians já foi campeão contra o Flamengo em 2026; Relembre final da Supercopa do Brasil",
      "summary": "Equipes se enfrentam neste domingo (13) pelo Campeonato Brasileiro",
      "url": "https://www.espn.com.br/video/clip/_/id/17243225",
      "publishedAt": "2026-09-11T23:13:19Z",
      "category": "news",
      "teams": [
        "Corinthians",
        "Flamengo"
      ],
      "imageUrl": null,
      "imageAlt": "Corinthians já foi campeão contra o Flamengo em 2026; Relembre final da Supercopa do Brasil",
      "imageCredit": null
    },
    {
      "id": "17242551",
      "title": "Mirassol x Vitória: onde assistir ao vivo, horário, palpite e prováveis escalações do jogo do Brasileirão",
      "summary": "Mirassol e Vitória se enfrentam neste domingo (13), no Maião, em jogão pelo Campeonato Brasileiro",
      "url": "https://www.espn.com.br/futebol/brasileirao/artigo/_/id/17242551/mirassol-x-vitoria-onde-assistir-ao-vivo-horario-palpite-escalacoes-jogo-brasileirao",
      "publishedAt": "2026-09-11T22:45:02Z",
      "category": "news",
      "teams": [
        "Mirassol",
        "Vitória"
      ],
      "imageUrl": "https://a.espncdn.com/photo/2026/0828/r1708151_1296x729_16-9.jpg",
      "imageAlt": "Vista da arquibancada do estádio José Maria de Campos Maia, do Mirassol",
      "imageCredit": "JP Pinheiro/Agência Mirassol"
    },
    {
      "id": "17242471",
      "title": "Flamengo x Corinthians: onde assistir ao vivo, horário, palpite e prováveis escalações do jogo do Brasileirão",
      "summary": "Flamengo e Corinthians se enfrentam neste domingo (13), no Maracanã, em jogão pelo Campeonato Brasileiro",
      "url": "https://www.espn.com.br/futebol/brasileirao/artigo/_/id/17242471/flamengo-x-corinthians-onde-assistir-ao-vivo-horario-palpite-escalacoes-jogo-brasileirao",
      "publishedAt": "2026-09-11T22:04:31Z",
      "category": "news",
      "teams": [
        "Flamengo",
        "Corinthians"
      ],
      "imageUrl": "https://a.espncdn.com/photo/2026/0911/r1715054_1296x729_16-9.jpg",
      "imageAlt": "Vista do Maracanã antes de jogo entre Flamengo e Corinthians, pela Copa do Brasil",
      "imageCredit": "Wagner Meier/Getty Images"
    }
  ]
};
