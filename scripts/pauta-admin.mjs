#!/usr/bin/env node
import { existsSync } from 'node:fs';
import { copyFile, mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = path.resolve(__dirname, '..');
const DRAFT_DIR = path.join(ROOT_DIR, 'content', 'pautas', 'draft');
const ARCHIVE_DIR = path.join(ROOT_DIR, 'content', 'pautas', 'publicadas');
const DRAFT_JSON_PATH = path.join(DRAFT_DIR, 'pauta-da-mesa.json');
const DRAFT_MD_PATH = path.join(DRAFT_DIR, 'pauta-da-mesa.md');
const PUBLIC_JSON_PATH = path.join(ROOT_DIR, 'src', 'assets', 'content', 'pauta-da-mesa.json');

const SCOREBOARD_BASE = 'https://site.api.espn.com/apis/site/v2/sports/soccer/bra.1/scoreboard';
const STANDINGS_URL = 'https://site.api.espn.com/apis/v2/sports/soccer/bra.1/standings?region=br&lang=pt-BR';
const REQUEST_TIMEOUT_MS = 12_000;

function readOption(name) {
  const prefix = `--${name}=`;
  return process.argv.find((arg) => arg.startsWith(prefix))?.slice(prefix.length) ?? null;
}

function dateKey(date) {
  return date.toISOString().slice(0, 10).replaceAll('-', '');
}

function defaultRange() {
  const end = new Date();
  const start = new Date(end);
  start.setUTCDate(start.getUTCDate() - 3);
  return { start: dateKey(start), end: dateKey(end) };
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

function pautaSources(startDateKey) {
  return [
    {
      label: 'Placares ESPN',
      url: `https://www.espn.com.br/futebol/resultados/_/liga/bra.1/data/${startDateKey}`,
    },
    {
      label: 'Classificação ESPN',
      url: 'https://www.espn.com.br/futebol/bra1/classificacao',
    },
    {
      label: 'Tabela CBF',
      url: 'https://www.cbf.com.br/futebol-brasileiro/tabelas/campeonato-brasileiro/serie-a/2026',
    },
  ];
}

function safeText(value, fallback = '') {
  return typeof value === 'string' && value.trim() ? value.trim() : fallback;
}

function statValue(entry, name) {
  const stat = entry?.stats?.find((item) => item.name === name);
  return typeof stat?.value === 'number' && Number.isFinite(stat.value) ? stat.value : 0;
}

function formatScore(match) {
  return `${match.home} ${match.homeScore} x ${match.awayScore} ${match.away}`;
}

function isDraw(match) {
  return match.homeScore === match.awayScore;
}

function winner(match) {
  if (isDraw(match)) return null;
  return match.homeScore > match.awayScore
    ? { id: match.homeId, name: match.home }
    : { id: match.awayId, name: match.away };
}

function loser(match) {
  if (isDraw(match)) return null;
  return match.homeScore < match.awayScore
    ? { id: match.homeId, name: match.home }
    : { id: match.awayId, name: match.away };
}

async function fetchJson(url) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

  try {
    const response = await fetch(url, {
      headers: {
        Accept: 'application/json',
        'User-Agent': 'SemClubismo-Pauta/1.0',
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

      if (!home?.team || !away?.team || !completed) return null;

      return {
        id: safeText(event.id),
        date: safeText(event.date),
        homeId: safeText(home.team.id),
        awayId: safeText(away.team.id),
        home: safeText(home.team.shortDisplayName, home.team.displayName),
        away: safeText(away.team.shortDisplayName, away.team.displayName),
        homeScore: Number(home.score),
        awayScore: Number(away.score),
      };
    })
    .filter((match) =>
      match &&
      Number.isFinite(match.homeScore) &&
      Number.isFinite(match.awayScore),
    )
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
}

function mapStandings(standings) {
  const entries = standings?.children?.[0]?.standings?.entries;
  if (!Array.isArray(entries)) return [];

  return entries
    .map((entry) => ({
      id: safeText(entry.team?.id),
      team: safeText(entry.team?.shortDisplayName, entry.team?.displayName),
      rank: statValue(entry, 'rank'),
      points: statValue(entry, 'points'),
      played: statValue(entry, 'gamesPlayed'),
      wins: statValue(entry, 'wins'),
      draws: statValue(entry, 'ties'),
      losses: statValue(entry, 'losses'),
      goalDifference: statValue(entry, 'pointDifferential'),
    }))
    .filter((entry) => entry.id && entry.team)
    .sort((a, b) => a.rank - b.rank);
}

function matchByTeam(matches, team) {
  return matches.find((match) => match.homeId === team.id || match.awayId === team.id) ?? null;
}

function buildPauta(matches, standings, sources) {
  const leader = standings[0] ?? { team: 'Líder', points: 0, id: '' };
  const vice = standings[1] ?? { team: 'Vice-líder', points: 0, id: '' };
  const topFour = standings.slice(0, 4);
  const bottomFour = standings.slice(-4);
  const bottomIds = new Set(bottomFour.map((entry) => entry.id));
  const leaderMatch = matchByTeam(matches, leader);
  const viceMatch = matchByTeam(matches, vice);
  const survivalWin = matches.find((match) => {
    const matchWinner = winner(match);
    return matchWinner ? bottomIds.has(matchWinner.id) : false;
  });
  const totalGoals = matches.reduce((sum, match) => sum + match.homeScore + match.awayScore, 0);
  const drawCount = matches.filter(isDraw).length;
  const title =
    leaderMatch && loser(leaderMatch)?.id === leader.id
      ? `O líder tropeçou, o vice deixou passar e o campeonato ganhou assunto.`
      : `A rodada mexeu na tabela e abriu pauta para a mesa.`;

  const factMatch = leaderMatch ?? matches[0];
  const chanceMatch = viceMatch ?? matches.find(isDraw) ?? matches[1] ?? factMatch;
  const z4Match = survivalWin ?? matches.find((match) =>
    [match.homeId, match.awayId].some((id) => bottomIds.has(id)),
  ) ?? matches.at(-1) ?? factMatch;

  return {
    round: 'Brasileirão 2026 - rodada em análise',
    updatedLabel: updatedLabel(),
    title,
    summary:
      `Foram ${matches.length} jogos, ${totalGoals} gols e ${drawCount} empates na janela analisada. ` +
      `${leader.team} segue no topo com ${leader.points} pontos, ${vice.team} vem depois com ${vice.points}, ` +
      `e a parte de baixo segue comprimida o bastante para transformar cada tropeço em crise.`,
    facts: [
      {
        label: 'Jogo que muda clima',
        value: factMatch ? formatScore(factMatch) : 'Rodada em atualização',
      },
      {
        label: 'Chance de cobrança',
        value: chanceMatch ? formatScore(chanceMatch) : 'Rodada em atualização',
      },
      {
        label: 'Pressão no Z4',
        value: z4Match ? formatScore(z4Match) : 'Rodada em atualização',
      },
      {
        label: 'Topo da tabela',
        value: `${leader.team} ${leader.points} pts; ${vice.team} ${vice.points}`,
      },
    ],
    takes: [
      {
        voice: 'Rodrigo',
        role: 'Provocação',
        title:
          leaderMatch && loser(leaderMatch)?.id === leader.id
            ? `${leader.team} perdeu, mas a cobrança maior é para quem não aproveitou.`
            : `Nem toda liderança confortável é futebol confortável.`,
        body:
          `Rodada boa para testar discurso. Se o líder tropeça, todo perseguidor precisa transformar oportunidade em incômodo real. ` +
          `Quando a porta abre e ninguém empurra, a culpa não é da tabela: é de quem faltou chegar com apetite.`,
      },
      {
        voice: 'Daniel',
        role: 'Análise',
        title:
          `${topFour.map((entry) => `${entry.team} (${entry.points})`).join(', ')}: a parte de cima ainda tem hierarquia.`,
        body:
          `A tabela ainda protege quem fez gordura, mas a leitura da rodada vai além dos pontos. ` +
          `Resultado em casa, resposta fora e sequência curta pesam muito no começo do returno. A diferença agora é mental: quem absorve o tropeço e quem transforma empate em sintoma.`,
      },
      {
        voice: 'Tadeu',
        role: 'Resenha',
        title: `Essa foi a rodada do "calma, ainda tem muita história".`,
        body:
          `Teve líder sendo cutucado, vice deixando papo escapar e Z4 virando fila de gente aflita. ` +
          `É o tipo de rodada em que ninguém sai totalmente feliz, mas todo mundo sai com uma frase pronta para defender o próprio lado.`,
      },
    ],
    praise: [
      'Quem venceu fora ou sob pressão merece elogio dobrado: no returno, resultado assim muda clima de vestiário.',
      'Time da parte de baixo que ganha confronto pesado mostra uma coisa simples: ainda tem pulso.',
      'A rodada premiou eficiência. Nem sempre o melhor discurso é posse; às vezes é pontaria e casca.',
    ],
    criticism: [
      'Perseguidor que empata quando o líder tropeça deixa a rodada com gosto de desperdício.',
      'Quem está perto do Z4 não pode tratar empate em casa como ponto neutro. Na parte de baixo, ponto perdido cobra juros.',
      'Volume sem decisão vira estatística bonita e conversa amarga na segunda-feira.',
    ],
    resenha: [
      'O returno começou lembrando que campeonato brasileiro não aceita roteiro simples.',
      'A zona de queda está tão apertada que até respirar fora dela parece comemoração provisória.',
      'Se essa foi a amostra, a próxima mesa já começa com alguém pedindo direito de resposta.',
    ],
    nextAgenda: [
      `${vice.team} precisa responder se a chance perdida foi acidente ou sintoma.`,
      `${leader.team} joga a próxima rodada com a tabela a favor e o clima cobrando resposta.`,
      'A briga do Z4 merece quadro fixo: cada vitória muda o humor de meia tabela.',
      'Olho em quem empilhou empate: estabilidade também pode ser só falta de coragem para vencer.',
    ],
    sources,
  };
}

function toMarkdown(pauta) {
  const lines = [
    `# ${pauta.title}`,
    '',
    `**${pauta.round} | ${pauta.updatedLabel}**`,
    '',
    pauta.summary,
    '',
    '## Fatos',
    ...pauta.facts.map((fact) => `- **${fact.label}:** ${fact.value}`),
    '',
    '## Opiniões da mesa',
    ...pauta.takes.flatMap((take) => [
      `### ${take.voice} - ${take.role}`,
      `**${take.title}**`,
      '',
      take.body,
      '',
    ]),
    '## Críticas',
    ...pauta.criticism.map((item) => `- ${item}`),
    '',
    '## Elogios',
    ...pauta.praise.map((item) => `- ${item}`),
    '',
    '## Resenha',
    ...pauta.resenha.map((item) => `- ${item}`),
    '',
    '## Próxima conversa',
    ...pauta.nextAgenda.map((item) => `- ${item}`),
    '',
  ];

  return `${lines.join('\n')}\n`;
}

async function writeDraft(pauta) {
  await mkdir(DRAFT_DIR, { recursive: true });
  await writeFile(DRAFT_JSON_PATH, `${JSON.stringify(pauta, null, 2)}\n`);
  await writeFile(DRAFT_MD_PATH, toMarkdown(pauta));
}

async function readDraft() {
  if (!existsSync(DRAFT_JSON_PATH)) {
    throw new Error('Nenhum rascunho encontrado. Rode: npm run pauta:draft');
  }
  return JSON.parse(await readFile(DRAFT_JSON_PATH, 'utf8'));
}

function printPauta(pauta) {
  console.log(`\n${pauta.title}`);
  console.log(`${pauta.round} | ${pauta.updatedLabel}\n`);
  console.log(pauta.summary);
  console.log('\nFATOS');
  pauta.facts.forEach((fact) => console.log(`- ${fact.label}: ${fact.value}`));
  console.log('\nOPINIÕES');
  pauta.takes.forEach((take) => {
    console.log(`\n${take.voice} (${take.role})`);
    console.log(`${take.title}`);
    console.log(take.body);
  });
  console.log('\nCRÍTICAS');
  pauta.criticism.forEach((item) => console.log(`- ${item}`));
  console.log('\nELOGIOS');
  pauta.praise.forEach((item) => console.log(`- ${item}`));
  console.log('\nRESENHA');
  pauta.resenha.forEach((item) => console.log(`- ${item}`));
}

async function generateDraft() {
  const fallbackRange = defaultRange();
  const start = readOption('start') ?? fallbackRange.start;
  const end = readOption('end') ?? fallbackRange.end;
  const scoreboardUrl = `${SCOREBOARD_BASE}?region=br&lang=pt-BR&limit=100&dates=${start}-${end}`;

  const [scoreboard, standings] = await Promise.all([
    fetchJson(scoreboardUrl),
    fetchJson(STANDINGS_URL),
  ]);
  const matches = mapMatches(scoreboard);
  const table = mapStandings(standings);

  if (!matches.length || !table.length) {
    throw new Error('Não consegui montar a pauta: placares ou tabela vieram vazios.');
  }

  const pauta = buildPauta(matches, table, pautaSources(start));
  await writeDraft(pauta);
  printPauta(pauta);
  console.log(`\nRascunho salvo em ${path.relative(ROOT_DIR, DRAFT_JSON_PATH)}`);
  console.log(`Prévia em Markdown: ${path.relative(ROOT_DIR, DRAFT_MD_PATH)}`);
}

async function approveDraft(existingRl = null) {
  const pauta = await readDraft();
  printPauta(pauta);

  const rl = existingRl ?? readline.createInterface({ input, output });
  const answer = await rl.question('\nPublicar esta pauta no site? Digite SIM para confirmar: ');
  if (!existingRl) rl.close();

  if (answer.trim().toUpperCase() !== 'SIM') {
    console.log('Publicação cancelada. O rascunho continua salvo.');
    return;
  }

  await mkdir(path.dirname(PUBLIC_JSON_PATH), { recursive: true });
  await mkdir(ARCHIVE_DIR, { recursive: true });
  await copyFile(DRAFT_JSON_PATH, PUBLIC_JSON_PATH);
  const archiveName = `${new Date().toISOString().slice(0, 10)}-pauta-da-mesa.json`;
  await copyFile(DRAFT_JSON_PATH, path.join(ARCHIVE_DIR, archiveName));
  console.log('\nPauta publicada no site.');
  console.log(`Arquivo atualizado: ${path.relative(ROOT_DIR, PUBLIC_JSON_PATH)}`);
}

async function reviewDraft() {
  printPauta(await readDraft());
  console.log(`\nPara publicar: npm run pauta:approve`);
}

async function runAdmin() {
  const rl = readline.createInterface({ input, output });

  try {
    for (;;) {
      console.log('\nRedação SemClubismo');
      console.log('1. Gerar novo rascunho da rodada');
      console.log('2. Revisar rascunho atual');
      console.log('3. Aprovar e publicar rascunho');
      console.log('4. Sair');
      const answer = await rl.question('Escolha uma opção: ');

      if (answer.trim() === '1') await generateDraft();
      else if (answer.trim() === '2') await reviewDraft();
      else if (answer.trim() === '3') await approveDraft(rl);
      else if (answer.trim() === '4') break;
      else console.log('Opção inválida.');
    }
  } finally {
    rl.close();
  }
}

async function main() {
  const command = process.argv[2] ?? 'admin';

  if (command === 'draft') await generateDraft();
  else if (command === 'review') await reviewDraft();
  else if (command === 'approve') await approveDraft();
  else if (command === 'admin') await runAdmin();
  else {
    console.log('Comandos: draft, review, approve, admin');
    process.exitCode = 1;
  }
}

main().catch((error) => {
  console.error(`\nErro: ${error.message}`);
  process.exitCode = 1;
});
