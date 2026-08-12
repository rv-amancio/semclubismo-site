#!/usr/bin/env node
import { existsSync } from 'node:fs';
import { copyFile, mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = path.resolve(__dirname, '..');
const PUBLIC_JSON_PATH = path.join(ROOT_DIR, 'src', 'assets', 'content', 'charge-da-rodada.json');
const ARCHIVE_DIR = path.join(ROOT_DIR, 'content', 'charges', 'publicadas');

const SCOREBOARD_BASE =
  'https://site.api.espn.com/apis/site/v2/sports/soccer/bra.1/scoreboard';
const STANDINGS_URL =
  'https://site.api.espn.com/apis/v2/sports/soccer/bra.1/standings?region=br&lang=pt-BR';
const REQUEST_TIMEOUT_MS = 12_000;

function readOption(name) {
  const prefix = `--${name}=`;
  return process.argv.find((arg) => arg.startsWith(prefix))?.slice(prefix.length) ?? null;
}

function dateKey(date) {
  return date.toISOString().slice(0, 10).replaceAll('-', '');
}

function saoPauloParts(date = new Date()) {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/Sao_Paulo',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    hourCycle: 'h23',
  }).formatToParts(date);
  const value = (type) => Number(parts.find((part) => part.type === type)?.value ?? 0);
  const year = value('year');
  const month = value('month');
  const day = value('day');
  const hour = value('hour');
  const weekday = new Date(Date.UTC(year, month - 1, day)).getUTCDay();

  return { year, month, day, hour, weekday };
}

function saoPauloDateStamp(date = new Date()) {
  const { year, month, day } = saoPauloParts(date);
  return `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
}

function dateKeyFromLocalOffset(baseParts, offsetDays) {
  const date = new Date(Date.UTC(baseParts.year, baseParts.month - 1, baseParts.day));
  date.setUTCDate(date.getUTCDate() + offsetDays);
  return dateKey(date);
}

function defaultRange(date = new Date()) {
  const parts = saoPauloParts(date);
  const { weekday, hour } = parts;
  let startOffset;
  let endOffset;

  if (weekday === 0 && hour >= 22) {
    startOffset = -2;
    endOffset = 0;
  } else if (weekday >= 1 && weekday <= 3) {
    startOffset = -(weekday + 2);
    endOffset = -weekday;
  } else if (weekday === 4 && hour < 22) {
    startOffset = -6;
    endOffset = -4;
  } else {
    startOffset = weekday === 0 ? -5 : -(weekday - 2);
    endOffset = weekday === 0 ? -3 : -(weekday - 4);
  }

  return {
    start: dateKeyFromLocalOffset(parts, startOffset),
    end: dateKeyFromLocalOffset(parts, endOffset),
  };
}

function updatedLabel(date = new Date()) {
  const parts = new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: 'short',
    timeZone: 'America/Sao_Paulo',
  }).formatToParts(date);
  const day = parts.find((part) => part.type === 'day')?.value ?? '';
  const month = parts.find((part) => part.type === 'month')?.value.replace('.', '') ?? '';
  return `${day} ${month}`.trim();
}

function formatDateKey(value) {
  if (!/^\d{8}$/.test(value)) return value;
  const date = new Date(Date.UTC(
    Number(value.slice(0, 4)),
    Number(value.slice(4, 6)) - 1,
    Number(value.slice(6, 8)),
  ));

  return new Intl.DateTimeFormat('pt-BR', {
    timeZone: 'UTC',
    day: '2-digit',
    month: 'short',
  }).format(date).replace('.', '');
}

function formatDateRange(startDateKey, endDateKey = startDateKey) {
  if (startDateKey === endDateKey) return formatDateKey(startDateKey);
  if (!/^\d{8}$/.test(startDateKey) || !/^\d{8}$/.test(endDateKey)) {
    return `${startDateKey} a ${endDateKey}`;
  }

  const startDay = startDateKey.slice(6, 8);
  const startMonth = startDateKey.slice(4, 6);
  const startYear = startDateKey.slice(0, 4);
  const endDay = endDateKey.slice(6, 8);
  const endMonth = endDateKey.slice(4, 6);
  const endYear = endDateKey.slice(0, 4);

  if (startMonth === endMonth && startYear === endYear) {
    const month = formatDateKey(endDateKey).replace(/^\d{2}\s+(?:de\s+)?/, '');
    return `${startDay} a ${endDay} de ${month}`;
  }

  return `${formatDateKey(startDateKey)} a ${formatDateKey(endDateKey)}`;
}

function chargeSources(startDateKey, endDateKey = startDateKey, season = new Date().getUTCFullYear()) {
  const sources = [
    {
      label: `Placares ESPN ${startDateKey === endDateKey ? '' : 'início'}`.trim(),
      url: `https://www.espn.com.br/futebol/resultados/_/liga/bra.1/data/${startDateKey}`,
    },
  ];

  if (endDateKey !== startDateKey) {
    sources.push({
      label: 'Placares ESPN fim',
      url: `https://www.espn.com.br/futebol/resultados/_/liga/bra.1/data/${endDateKey}`,
    });
  }

  sources.push(
    {
      label: 'Classificação ESPN',
      url: 'https://www.espn.com.br/futebol/bra1/classificacao',
    },
    {
      label: 'Tabela CBF',
      url: `https://www.cbf.com.br/futebol-brasileiro/tabelas/campeonato-brasileiro/serie-a/${season}`,
    },
  );

  return sources;
}

function safeText(value, fallback = '') {
  return typeof value === 'string' && value.trim() ? value.trim() : fallback;
}

function safeUrl(value) {
  if (typeof value !== 'string') return null;

  try {
    const url = new URL(value);
    const hostname = url.hostname.toLowerCase();
    const isEspnHost =
      hostname === 'espncdn.com' ||
      hostname.endsWith('.espncdn.com') ||
      hostname === 'espn.com' ||
      hostname.endsWith('.espn.com') ||
      hostname === 'espn.com.br' ||
      hostname.endsWith('.espn.com.br');

    return url.protocol === 'https:' && isEspnHost ? url.toString() : null;
  } catch {
    return null;
  }
}

function statValue(entry, name) {
  const stat = entry?.stats?.find((item) => item.name === name);
  return typeof stat?.value === 'number' && Number.isFinite(stat.value) ? stat.value : 0;
}

function compactText(value, maxLength) {
  if (value.length <= maxLength) return value;
  return `${value.slice(0, maxLength - 1).trimEnd()}…`;
}

function hashText(value) {
  return [...value].reduce((acc, char) => ((acc << 5) - acc + char.charCodeAt(0)) | 0, 0);
}

function pick(options, seed) {
  const index = Math.abs(hashText(seed)) % options.length;
  return options[index];
}

async function fetchJson(url) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

  try {
    const response = await fetch(url, {
      headers: {
        Accept: 'application/json',
        'User-Agent': 'SemClubismo-ChargeDaRodada/1.0',
      },
      signal: controller.signal,
    });

    if (!response.ok) {
      throw new Error(`Fonte respondeu ${response.status}: ${url}`);
    }

    return await response.json();
  } finally {
    clearTimeout(timeoutId);
  }
}

function mapTeam(team) {
  const name = safeText(team?.displayName, 'Clube');
  const shortName = safeText(team?.shortDisplayName, name);

  return {
    id: safeText(team?.id, name),
    name,
    shortName,
    abbreviation: safeText(team?.abbreviation, shortName.slice(0, 3).toUpperCase()),
    logo: safeUrl(team?.logo ?? team?.logos?.[0]?.href),
  };
}

function mapMatches(scoreboard) {
  const events = Array.isArray(scoreboard?.events) ? scoreboard.events : [];

  return events
    .map((event) => {
      const competition = event.competitions?.[0];
      const competitors = Array.isArray(competition?.competitors)
        ? competition.competitors
        : [];
      const home = competitors.find((item) => item.homeAway === 'home');
      const away = competitors.find((item) => item.homeAway === 'away');
      const completed = competition?.status?.type?.completed ?? event.status?.type?.completed;
      const homeScore = Number(home?.score);
      const awayScore = Number(away?.score);

      if (!home?.team || !away?.team || !completed) return null;
      if (!Number.isFinite(homeScore) || !Number.isFinite(awayScore)) return null;

      return {
        id: safeText(event.id),
        date: safeText(event.date),
        home: mapTeam(home.team),
        away: mapTeam(away.team),
        homeScore,
        awayScore,
        scoreline: `${safeText(home.team.shortDisplayName, home.team.displayName)} ${homeScore} x ${awayScore} ${safeText(away.team.shortDisplayName, away.team.displayName)}`,
      };
    })
    .filter(Boolean)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
}

function mapStandings(standings) {
  const entries = standings?.children?.[0]?.standings?.entries;
  if (!Array.isArray(entries)) return [];

  return entries
    .map((entry) => ({
      position: statValue(entry, 'rank'),
      team: mapTeam(entry.team),
      points: statValue(entry, 'points'),
      played: statValue(entry, 'gamesPlayed'),
      wins: statValue(entry, 'wins'),
      draws: statValue(entry, 'ties'),
      losses: statValue(entry, 'losses'),
      goalDifference: statValue(entry, 'pointDifferential'),
    }))
    .filter((entry) => entry.position > 0 && entry.team.id && entry.team.shortName)
    .sort((a, b) => a.position - b.position);
}

function matchForTeam(matches, teamId) {
  return [...matches]
    .reverse()
    .find((match) => match.home.id === teamId || match.away.id === teamId) ?? null;
}

function resultForTeam(match, teamId) {
  if (!match) return null;

  const isHome = match.home.id === teamId;
  const team = isHome ? match.home : match.away;
  const opponent = isHome ? match.away : match.home;
  const goalsFor = isHome ? match.homeScore : match.awayScore;
  const goalsAgainst = isHome ? match.awayScore : match.homeScore;
  const diff = goalsFor - goalsAgainst;
  const outcome = diff > 0 ? 'win' : diff < 0 ? 'loss' : 'draw';

  return {
    team,
    opponent,
    goalsFor,
    goalsAgainst,
    diff,
    outcome,
    homeAway: isHome ? 'home' : 'away',
    scoreline: match.scoreline,
  };
}

function zoneForPosition(position) {
  if (position === 1) return 'leader';
  if (position <= 6) return 'libertadores';
  if (position <= 12) return 'sul-americana';
  if (position <= 16) return 'alerta';
  return 'z4';
}

function zoneLabel(position) {
  if (position === 1) return 'Líder';
  if (position <= 6) return 'G6';
  if (position <= 12) return 'Meio da briga';
  if (position <= 16) return 'Alerta ligado';
  return 'Z4';
}

function movementFrom(previousPosition, currentPosition) {
  if (!previousPosition) {
    return {
      previousPosition: null,
      movement: 0,
      movementLabel: '0',
      movementDirection: 'same',
      movementText: 'Sem comparação anterior',
    };
  }

  const movement = previousPosition - currentPosition;
  const magnitude = Math.abs(movement);
  if (movement > 0) {
    return {
      previousPosition,
      movement,
      movementLabel: `+${movement}`,
      movementDirection: 'up',
      movementText: `Subiu ${magnitude} posição${magnitude === 1 ? '' : 'ões'}`,
    };
  }

  if (movement < 0) {
    return {
      previousPosition,
      movement,
      movementLabel: `${movement}`,
      movementDirection: 'down',
      movementText: `Caiu ${magnitude} posição${magnitude === 1 ? '' : 'ões'}`,
    };
  }

  return {
    previousPosition,
    movement,
    movementLabel: '0',
    movementDirection: 'same',
    movementText: 'Manteve a posição',
  };
}

function verdictFor(result) {
  if (!result) return 'Sem jogo';
  if (result.outcome === 'win') return result.diff >= 3 ? 'Goleou' : 'Venceu';
  if (result.outcome === 'loss') return result.diff <= -3 ? 'Tomou pancada' : 'Perdeu';
  return result.goalsFor === 0 ? 'Empatou 0 x 0' : 'Empatou';
}

function punchlineFor(entry, result) {
  const name = entry.team.shortName;
  const seed = `${entry.team.id}-${entry.position}-${entry.points}`;

  if (!result) {
    return compactText(
      pick([
        `${name} não jogou, mas a tabela também sabe incomodar no sofá.`,
        `${name} ficou de camarote e ainda assim saiu com assunto para explicar.`,
        `${name} descansou a chuteira e deixou a torcida fiscalizar o resto da rodada.`,
      ], seed),
      112,
    );
  }

  if (result.outcome === 'win' && result.diff >= 3) {
    return compactText(
      pick([
        `${name} goleou e agora a soberba já pediu microfone.`,
        `${name} passou o trator e deixou o adversário procurando a placa do jogo.`,
        `${name} venceu largo: quando a fase ajuda, até a corneta vira coro.`,
      ], seed),
      112,
    );
  }

  if (result.outcome === 'win' && result.homeAway === 'away') {
    return compactText(
      pick([
        `${name} venceu fora e voltou para casa com três pontos e um discurso pronto.`,
        `${name} ganhou longe da torcida e já pode chamar isso de maturidade sem rir.`,
        `${name} buscou vitória fora: perigoso a confiança chegar antes do ônibus.`,
      ], seed),
      112,
    );
  }

  if (result.outcome === 'win') {
    return compactText(
      pick([
        `${name} fez o serviço e vendeu como epopeia. Está valendo.`,
        `${name} ganhou, respirou e deixou a crise esperando na fila.`,
        `${name} somou três pontos e ganhou o direito de falar mais alto até a próxima.`,
      ], seed),
      112,
    );
  }

  if (result.outcome === 'draw' && result.goalsFor === 0) {
    return compactText(
      pick([
        `${name} entregou um 0 x 0 para testar a fé de quem ficou até o fim.`,
        `${name} empatou sem gols: o placar descansou mais que os atacantes.`,
        `${name} saiu com um ponto e uma coleção de quase nada para defender.`,
      ], seed),
      112,
    );
  }

  if (result.outcome === 'draw') {
    return compactText(
      pick([
        `${name} empatou e chamou de ponto importante. A tabela ouviu sem se emocionar.`,
        `${name} dividiu pontos, culpa e desculpas em partes quase iguais.`,
        `${name} ficou no meio do caminho: nem crise inteira, nem alegria honesta.`,
      ], seed),
      112,
    );
  }

  if (result.outcome === 'loss' && result.diff <= -3) {
    return compactText(
      pick([
        `${name} tomou pancada e a reunião de cobrança já nasceu sem pauta leve.`,
        `${name} perdeu feio: quando o placar vira documento, não adianta coletiva bonita.`,
        `${name} levou uma dessas que fazem até o replay pedir licença para sair.`,
      ], seed),
      112,
    );
  }

  if (result.outcome === 'loss' && result.homeAway === 'home') {
    return compactText(
      pick([
        `${name} perdeu em casa e transformou apoio em silêncio constrangedor.`,
        `${name} tropeçou diante da própria torcida. O sofá visitante agradece.`,
        `${name} deixou os pontos em casa, só que na mala do adversário.`,
      ], seed),
      112,
    );
  }

  return compactText(
    pick([
      `${name} voltou sem pontos e com material suficiente para uma semana longa.`,
      `${name} perdeu e agora vai chamar cobrança de processo de evolução.`,
      `${name} caiu no placar e entregou munição para a resenha alheia.`,
    ], seed),
    112,
  );
}

function buildSummary(matches, table, start, end) {
  const totalGoals = matches.reduce((sum, match) => sum + match.homeScore + match.awayScore, 0);
  const draws = matches.filter((match) => match.homeScore === match.awayScore).length;
  const leader = table[0];
  const vice = table[1];
  const windowLabel = formatDateRange(start, end);

  if (!leader || !vice) {
    return `Retrato da rodada, atualizado com placares e tabela do Brasileirão entre ${windowLabel}.`;
  }

  return (
    `Rodada com ${matches.length} jogos, ${totalGoals} gols e ${draws} empate${draws === 1 ? '' : 's'} ` +
    `entre ${windowLabel}. ${leader.team.shortName} lidera com ${leader.points} pontos; ` +
    `${vice.team.shortName} vem na cola com ${vice.points}.`
  );
}

function buildHeadline(matches, table) {
  const leader = table[0];
  const leaderResult = leader ? resultForTeam(matchForTeam(matches, leader.team.id), leader.team.id) : null;
  const biggestWin = matches
    .map((match) => ({
      match,
      diff: Math.abs(match.homeScore - match.awayScore),
    }))
    .sort((a, b) => b.diff - a.diff)[0];

  if (leaderResult?.outcome === 'loss') {
    return `${leader.team.shortName} caiu, e a tabela ganhou assunto.`;
  }
  if (leaderResult?.outcome === 'draw') {
    return `${leader.team.shortName} freou, e a corneta pediu microfone.`;
  }
  if (biggestWin?.diff >= 3) {
    const winningTeam =
      biggestWin.match.homeScore > biggestWin.match.awayScore
        ? biggestWin.match.home.shortName
        : biggestWin.match.away.shortName;
    return `${winningTeam} fez barulho, o resto que lute pela narrativa.`;
  }
  return 'A rodada acabou. A desculpa ficou por conta da tabela.';
}

async function readPreviousPositions() {
  if (!existsSync(PUBLIC_JSON_PATH)) return new Map();

  try {
    const data = JSON.parse(await readFile(PUBLIC_JSON_PATH, 'utf8'));
    const teams = Array.isArray(data?.teams) ? data.teams : [];
    return new Map(
      teams
        .map((row) => [row?.team?.id, row?.position])
        .filter(([id, position]) => typeof id === 'string' && typeof position === 'number'),
    );
  } catch {
    return new Map();
  }
}

function roundLabel(scoreboard, start, end) {
  const season = Number(scoreboard?.season?.year) || new Date().getUTCFullYear();
  const round = Number(scoreboard?.week?.number);
  const range = formatDateRange(start, end);

  if (Number.isFinite(round) && round > 0) {
    return `Brasileirão ${season} - ${round}ª rodada`;
  }

  return `Brasileirão ${season} - rodada de ${range}`;
}

function buildCharge({ matches, table, scoreboard, start, end, previousPositions }) {
  const generatedAt = new Date().toISOString();
  const season = Number(scoreboard?.season?.year) || new Date(generatedAt).getUTCFullYear();
  const rows = table.map((entry) => {
    const match = matchForTeam(matches, entry.team.id);
    const result = resultForTeam(match, entry.team.id);
    const movement = movementFrom(previousPositions.get(entry.team.id), entry.position);

    return {
      position: entry.position,
      ...movement,
      zone: zoneForPosition(entry.position),
      zoneLabel: zoneLabel(entry.position),
      team: entry.team,
      points: entry.points,
      played: entry.played,
      goalDifference: entry.goalDifference,
      resultLabel: result?.scoreline ?? 'Sem jogo na janela',
      verdict: verdictFor(result),
      punchline: punchlineFor(entry, result),
    };
  });

  return {
    version: 1,
    generatedAt,
    updatedLabel: updatedLabel(new Date(generatedAt)),
    round: roundLabel(scoreboard, start, end),
    title: 'Tabela sincerona da rodada',
    headline: buildHeadline(matches, table),
    summary: buildSummary(matches, table, start, end),
    sources: chargeSources(start, end, season),
    teams: rows,
  };
}

async function writeCharge(charge) {
  await mkdir(path.dirname(PUBLIC_JSON_PATH), { recursive: true });
  await mkdir(ARCHIVE_DIR, { recursive: true });
  await writeFile(PUBLIC_JSON_PATH, `${JSON.stringify(charge, null, 2)}\n`);

  const dateStamp = saoPauloDateStamp();
  const archivePath = path.join(ARCHIVE_DIR, `${dateStamp}-charge-da-rodada.json`);
  await copyFile(PUBLIC_JSON_PATH, archivePath);
}

async function generateCharge() {
  const fallbackRange = defaultRange();
  const start = readOption('start') ?? fallbackRange.start;
  const end = readOption('end') ?? fallbackRange.end;
  const scoreboardUrl = `${SCOREBOARD_BASE}?region=br&lang=pt-BR&limit=100&dates=${start}-${end}`;

  const previousPositions = await readPreviousPositions();
  const [scoreboard, standings] = await Promise.all([
    fetchJson(scoreboardUrl),
    fetchJson(STANDINGS_URL),
  ]);
  const matches = mapMatches(scoreboard);
  const table = mapStandings(standings);

  if (!matches.length || !table.length) {
    throw new Error('Não consegui montar a charge: placares ou tabela vieram vazios.');
  }

  const charge = buildCharge({ matches, table, scoreboard, start, end, previousPositions });
  await writeCharge(charge);

  console.log(`Charge da Rodada atualizada em ${path.relative(ROOT_DIR, PUBLIC_JSON_PATH)}`);
  console.log(
    JSON.stringify(
      {
        round: charge.round,
        teams: charge.teams.length,
        matches: matches.length,
        leader: charge.teams[0]?.team.shortName,
        headline: charge.headline,
      },
      null,
      2,
    ),
  );
}

generateCharge().catch((error) => {
  console.error(`\nErro: ${error.message}`);
  process.exitCode = 1;
});
