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

function punchlineOptions(group, texts) {
  return texts.map((text, index) => ({
    id: `${group}-${index + 1}`,
    text,
  }));
}

function normalizedWords(value) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .trim()
    .split(/\s+/)
    .filter(Boolean);
}

function punchlineLead(value, fallbackText) {
  const teamName = fallbackText.match(/^(.*?) fecha em /)?.[1] ?? '';
  const words = normalizedWords(value);
  const teamWords = normalizedWords(teamName);
  const startsWithTeam = teamWords.every((word, index) => words[index] === word);
  const contentWords = startsWithTeam ? words.slice(teamWords.length) : words.slice(1);

  return contentWords.slice(0, 2).join('-');
}

function uniquePunchline(options, seed, usedTemplateIds, usedPunchlines, fallbackText, maxLength = 112) {
  if (!options.length) {
    const fallback = compactText(fallbackText, maxLength);
    usedPunchlines.add(fallback);
    return fallback;
  }

  const start = Math.abs(hashText(seed)) % options.length;
  const ordered = options.map((_, index) => options[(start + index) % options.length]);
  const optionText = (option) => compactText(option.text, maxLength);
  const optionLead = (option) => punchlineLead(optionText(option), fallbackText);
  const selected =
    ordered.find((option) => {
      const lead = optionLead(option);
      return (
        !usedTemplateIds.has(option.id) &&
        !usedTemplateIds.has(`lead:${lead}`) &&
        !usedPunchlines.has(optionText(option))
      );
    }) ??
    ordered.find((option) => !usedTemplateIds.has(option.id)) ??
    ordered.find((option) => !usedPunchlines.has(optionText(option))) ??
    null;
  const selectedText = compactText(selected?.text ?? fallbackText, maxLength);
  const text = usedPunchlines.has(selectedText)
    ? compactText(fallbackText, maxLength)
    : selectedText;

  if (selected) {
    const lead = punchlineLead(text, fallbackText);
    usedTemplateIds.add(selected.id);
    if (lead) usedTemplateIds.add(`lead:${lead}`);
  }
  usedPunchlines.add(text);

  return text;
}

function fallbackPunchline(entry, result) {
  const label = result?.scoreline ?? 'sem jogo na janela';
  return `${entry.team.shortName} fecha em ${entry.position}º, com ${entry.points} pontos e ${label} virando resenha.`;
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
      const homeTeam = mapTeam(home.team);
      const awayTeam = mapTeam(away.team);

      return {
        id: safeText(event.id),
        date: safeText(event.date),
        home: homeTeam,
        away: awayTeam,
        homeScore,
        awayScore,
        scoreline: `${homeTeam.abbreviation} ${homeScore} x ${awayScore} ${awayTeam.abbreviation}`,
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

function punchlineFor(entry, result, usedTemplateIds, usedPunchlines) {
  const name = entry.team.shortName;
  const opponent = result?.opponent.shortName ?? 'a rodada';
  const score = result?.scoreline ?? 'sem jogo';
  const seed = `${entry.team.id}-${entry.position}-${entry.points}-${score}`;
  const fallback = fallbackPunchline(entry, result);

  if (!result) {
    return uniquePunchline(
      punchlineOptions('sem-jogo', [
        `${name} não jogou, mas a tabela também sabe incomodar no sofá.`,
        `${name} ficou de camarote e ainda assim saiu com assunto para explicar.`,
        `${name} descansou a chuteira e deixou a torcida fiscalizar o resto da rodada.`,
        `${name} folgou no campo, mas não no julgamento da classificação.`,
        `${name} viu a rodada passar e descobriu que descanso também dá nervoso.`,
        `${name} não entrou em campo; a ansiedade entrou no lugar.`,
        `${name} ficou parado e torceu para ninguém transformar folga em problema.`,
        `${name} acompanhou de longe, aquele esporte radical chamado secar concorrente.`,
        `${name} teve rodada de observação e mesmo assim a corneta bateu ponto.`,
        `${name} não jogou; a torcida, claro, trabalhou em tempo integral.`,
        `${name} ficou sem placar próprio e com opinião sobre todos os outros.`,
        `${name} tirou a noite de campo, mas a tabela não tirou folga.`,
        `${name} virou fiscal da rodada enquanto espera a bola voltar.`,
        `${name} não suou camisa, só paciência.`,
        `${name} ficou no modo espera: menos gramado, mais calculadora.`,
        `${name} viu o campeonato pela janela e fingiu tranquilidade.`,
        `${name} descansou, mas a arquibancada mental seguiu lotada.`,
        `${name} ficou sem jogo e com o mesmo drama de quem jogou duas vezes.`,
        `${name} poupou as chuteiras e gastou todos os cenários possíveis.`,
        `${name} não teve 90 minutos; teve 90 teorias sobre a tabela.`,
        `${name} assistiu ao caos dos outros tentando não virar assunto.`,
      ]),
      seed,
      usedTemplateIds,
      usedPunchlines,
      fallback,
    );
  }

  if (result.outcome === 'win' && result.diff >= 3) {
    return uniquePunchline(
      punchlineOptions('win-goleada', [
        `${name} goleou e agora a soberba já pediu microfone.`,
        `${name} passou o trator e deixou o adversário procurando a placa do jogo.`,
        `${name} venceu largo: quando a fase ajuda, até a corneta vira coro.`,
        `${name} fez placar de meme e saiu posando para a tabela.`,
        `${name} ganhou com folga e agora precisa fingir humildade até a próxima.`,
        `${name} abriu vantagem no placar e fechou a rodada com pose de manchete.`,
        `${name} atropelou o jogo e deixou a resenha com prova material.`,
        `${name} resolveu cedo e passou o resto do jogo negociando autoestima.`,
        `${name} venceu tão largo que a moderação da torcida foi substituída.`,
        `${name} aplicou corretivo no placar e pediu replay em horário nobre.`,
        `${name} ganhou grande; o difícil agora é baixar o volume da empolgação.`,
        `${name} fez a diferença de gols virar argumento de família.`,
      ]),
      seed,
      usedTemplateIds,
      usedPunchlines,
      fallback,
    );
  }

  if (result.outcome === 'win' && result.homeAway === 'away') {
    return uniquePunchline(
      punchlineOptions('win-fora', [
        `${name} venceu fora e voltou para casa com três pontos e um discurso pronto.`,
        `${name} ganhou longe da torcida e já pode chamar isso de maturidade sem rir.`,
        `${name} buscou vitória fora: perigoso a confiança chegar antes do ônibus.`,
        `${name} calou a casa alheia e ainda deixou recibo na tabela.`,
        `${name} foi visitante só no ingresso; no placar mandou no papo.`,
        `${name} venceu contra ${opponent} e trouxe argumento na bagagem de mão.`,
        `${name} voltou da viagem com três pontos e zero vontade de ser discreto.`,
        `${name} ganhou fora, aquele luxo que transforma segunda-feira em desfile.`,
        `${name} entrou na casa dos outros e saiu com a chave da resenha.`,
        `${name} achou vitória longe de casa e já quer chamar de arrancada.`,
        `${name} venceu fora; a tabela agradeceu, o rival nem tanto.`,
        `${name} buscou três pontos na estrada e voltou com pose de gente grande.`,
      ]),
      seed,
      usedTemplateIds,
      usedPunchlines,
      fallback,
    );
  }

  if (result.outcome === 'win') {
    return uniquePunchline(
      punchlineOptions('win-normal', [
        `${name} fez o serviço e vendeu como epopeia. Está valendo.`,
        `${name} ganhou, respirou e deixou a crise esperando na fila.`,
        `${name} somou três pontos e ganhou o direito de falar mais alto até a próxima.`,
        `${name} venceu e liberou a torcida para exagerar com moderação.`,
        `${name} achou a vitória e já tem gente chamando de projeto.`,
        `${name} fez o básico, mas básico com três pontos vira tese.`,
        `${name} ganhou e passou 24 horas fingindo que estava tudo sob controle.`,
        `${name} saiu com vitória e uma semana inteira de argumento.`,
        `${name} venceu; agora falta decidir se foi reação ou só um dia sem susto.`,
        `${name} colocou três pontos no bolso e mandou a cobrança esperar sentada.`,
        `${name} ganhou em casa e deixou o ambiente oficialmente respirável.`,
        `${name} venceu contra ${opponent}; a corneta vai precisar remarcar horário.`,
      ]),
      seed,
      usedTemplateIds,
      usedPunchlines,
      fallback,
    );
  }

  if (result.outcome === 'draw' && result.goalsFor === 0) {
    return uniquePunchline(
      punchlineOptions('draw-zero', [
        `${name} entregou um 0 x 0 para testar a fé de quem ficou até o fim.`,
        `${name} empatou sem gols: o placar descansou mais que os atacantes.`,
        `${name} saiu com um ponto e uma coleção de quase nada para defender.`,
        `${name} fez do 0 x 0 uma experiência de paciência coletiva.`,
        `${name} colocou o torcedor para assistir expectativa evaporar em tempo real.`,
        `${name} empatou no zero e deixou o melhor lance para a imaginação.`,
        `${name} saiu de um 0 x 0 que deveria contar como cardio emocional.`,
        `${name} dividiu pontos e guardou os gols para um dia misterioso.`,
        `${name} ficou no zero; a rede agradeceu a folga.`,
        `${name} empatou sem gol, porque aparentemente finalizar era opcional.`,
        `${name} transformou o 0 x 0 em teste de resistência para sofá.`,
        `${name} levou um ponto, mas deixou a empolgação trancada no vestiário.`,
        `${name} fez um empate tão seco que até o narrador economizou exclamação.`,
        `${name} saiu sem balançar a rede e com muita coisa para explicar baixo.`,
        `${name} segurou o zero dos dois lados e chamou de solidez.`,
        `${name} empatou com ${opponent} e provou que o nada também ocupa espaço.`,
        `${name} passou 90 minutos flertando com o gol e saiu no vácuo.`,
        `${name} fez a bola circular, mas o placar preferiu ficar em home office.`,
        `${name} buscou o gol como quem procura sinal em elevador.`,
        `${name} fechou o jogo no zero e abriu a reunião das justificativas.`,
        `${name} terminou sem gols; pelo menos ninguém acusou o placar de excesso.`,
      ]),
      seed,
      usedTemplateIds,
      usedPunchlines,
      fallback,
    );
  }

  if (result.outcome === 'draw') {
    return uniquePunchline(
      punchlineOptions('draw-normal', [
        `${name} empatou e chamou de ponto importante. A tabela ouviu sem se emocionar.`,
        `${name} dividiu pontos, culpa e desculpas em partes quase iguais.`,
        `${name} ficou no meio do caminho: nem crise inteira, nem alegria honesta.`,
        `${name} levou um ponto para casa e deixou dois no campo das explicações.`,
        `${name} empatou, aquele resultado que todo mundo defende olhando para baixo.`,
        `${name} saiu do jogo com um ponto e uma frase pronta para acalmar a torcida.`,
        `${name} ficou no quase contra ${opponent}: quase venceu, quase convenceu.`,
        `${name} somou um ponto e multiplicou as interpretações.`,
        `${name} empatou e deixou a pergunta clássica: evolução ou desperdício?`,
        `${name} saiu com igualdade no placar e desigualdade na paciência da torcida.`,
        `${name} dividiu a conta com ${opponent}, mas a ressaca ficou inteira.`,
        `${name} não perdeu, também não resolveu. A classificação anotou em silêncio.`,
        `${name} empatou e entregou aquele empate que parece recibo sem compra.`,
        `${name} fez jogo de meio termo: bom para discurso, ruim para dormir tranquilo.`,
        `${name} ficou no empate e deixou a rodada com gosto de quase.`,
        `${name} ganhou um ponto e perdeu a chance de encurtar a conversa.`,
        `${name} assinou empate e mandou a torcida procurar nuance no replay.`,
        `${name} trouxe um ponto, mas esqueceu a paz no caminho.`,
        `${name} saiu do empate com cara de quem sabe que dava para mais.`,
        `${name} repartiu o placar e deixou a cobrança em regime de condomínio.`,
        `${name} empatou com ${opponent}; a calculadora trabalhou mais que a alegria.`,
      ]),
      seed,
      usedTemplateIds,
      usedPunchlines,
      fallback,
    );
  }

  if (result.outcome === 'loss' && result.diff <= -3) {
    return uniquePunchline(
      punchlineOptions('loss-pancada', [
        `${name} tomou pancada e a reunião de cobrança já nasceu sem pauta leve.`,
        `${name} perdeu feio: quando o placar vira documento, não adianta coletiva bonita.`,
        `${name} levou uma dessas que fazem até o replay pedir licença para sair.`,
        `${name} virou alerta em caixa alta antes mesmo do vestiário esfriar.`,
        `${name} saiu machucado no placar e na paciência da torcida.`,
        `${name} levou goleada e transformou a coletiva em prova oral.`,
        `${name} perdeu grande; nem o otimismo conseguiu credenciamento.`,
        `${name} tomou distância no placar e aproximou a cobrança.`,
        `${name} apanhou da partida e deixou a tabela com cara de sermão.`,
        `${name} entregou um placar que não cabe em desculpa curta.`,
        `${name} saiu de campo com o tipo de derrota que vira pauta fixa.`,
        `${name} sofreu uma dessas que fazem a semana nascer longa.`,
      ]),
      seed,
      usedTemplateIds,
      usedPunchlines,
      fallback,
    );
  }

  if (result.outcome === 'loss' && result.homeAway === 'home') {
    return uniquePunchline(
      punchlineOptions('loss-casa', [
        `${name} perdeu em casa e transformou apoio em silêncio constrangedor.`,
        `${name} tropeçou diante da própria torcida. O sofá visitante agradece.`,
        `${name} deixou os pontos em casa, só que na mala do adversário.`,
        `${name} mandou no endereço, mas quem saiu dono da noite foi o rival.`,
        `${name} perdeu em casa; o fator local pediu para não ser citado.`,
        `${name} abriu a porta para ${opponent} e ainda serviu três pontos.`,
        `${name} fez a torcida sair revisando todas as promessas da semana.`,
        `${name} caiu diante da própria arquibancada e ouviu até pensamento alto.`,
        `${name} perdeu onde precisava mandar e agora vai chamar de aprendizado.`,
        `${name} transformou mando de campo em visita guiada para o adversário.`,
        `${name} deixou a casa arrumada para ${opponent} fazer festa.`,
        `${name} saiu derrotado em casa e sem álibi para o barulho da cobrança.`,
      ]),
      seed,
      usedTemplateIds,
      usedPunchlines,
      fallback,
    );
  }

  return uniquePunchline(
    punchlineOptions('loss-normal', [
      `${name} voltou sem pontos e com material suficiente para uma semana longa.`,
      `${name} perdeu e agora vai chamar cobrança de processo de evolução.`,
      `${name} caiu no placar e entregou munição para a resenha alheia.`,
      `${name} saiu derrotado e levou para casa aquele silêncio que fala alto.`,
      `${name} deixou o jogo com menos pontos e mais explicações.`,
      `${name} perdeu contra ${opponent}; a tabela não perdoa luto criativo.`,
      `${name} voltou vazio no placar e cheio de frases defensivas.`,
      `${name} perdeu e fez a calculadora da torcida pedir demissão.`,
      `${name} caiu fora de casa e trouxe a cobrança de brinde.`,
      `${name} saiu do jogo procurando onde deixou a reação prometida.`,
      `${name} perdeu; a classificação não gritou, mas olhou torto.`,
      `${name} deixou três pontos escaparem e ganhou uma semana de debate.`,
    ]),
    seed,
    usedTemplateIds,
    usedPunchlines,
    fallback,
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
  const usedPunchlineTemplates = new Set();
  const usedPunchlines = new Set();
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
      punchline: punchlineFor(entry, result, usedPunchlineTemplates, usedPunchlines),
    };
  });

  return {
    version: 1,
    generatedAt,
    updatedLabel: updatedLabel(new Date(generatedAt)),
    round: roundLabel(scoreboard, start, end),
    title: 'Memes da Rodada',
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

  console.log(`Memes da Rodada atualizados em ${path.relative(ROOT_DIR, PUBLIC_JSON_PATH)}`);
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
