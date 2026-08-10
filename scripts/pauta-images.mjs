#!/usr/bin/env node
import { execFile } from 'node:child_process';
import { existsSync } from 'node:fs';
import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { promisify } from 'node:util';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = path.resolve(__dirname, '..');
const DRAFT_JSON_PATH = path.join(ROOT_DIR, 'content', 'pautas', 'draft', 'pauta-da-mesa.json');
const OUTPUT_DIR = path.join(ROOT_DIR, 'content', 'pautas', 'draft', 'imagens');
const PNG_OUTPUT_DIR = path.join(OUTPUT_DIR, 'png');
const execFileAsync = promisify(execFile);
const CHROME_CANDIDATES = [
  process.env.CHROME_BIN,
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/Applications/Chromium.app/Contents/MacOS/Chromium',
  'google-chrome',
  'chromium',
  'chromium-browser',
].filter(Boolean);

const COLORS = {
  black: '#050505',
  panel: '#111111',
  yellow: '#f5b800',
  yellowBright: '#ffd426',
  red: '#ff3b30',
  white: '#f6f4ed',
  gray: '#a6a49e',
  muted: '#777570',
};

const TEAM_ALIASES = new Map([
  ['Athletico-PR', 'CAP'],
  ['Atlético-MG', 'CAM'],
  ['Bahia', 'BAH'],
  ['Botafogo', 'BOT'],
  ['Bragantino', 'RBB'],
  ['Chapecoense', 'CHA'],
  ['Corinthians', 'COR'],
  ['Coritiba', 'CFC'],
  ['Cruzeiro', 'CRU'],
  ['Flamengo', 'FLA'],
  ['Fluminense', 'FLU'],
  ['Grêmio', 'GRE'],
  ['Internacional', 'INT'],
  ['Mirassol', 'MIR'],
  ['Palmeiras', 'PAL'],
  ['Remo', 'REM'],
  ['Santos', 'SAN'],
  ['São Paulo', 'SAO'],
  ['Vasco', 'VAS'],
  ['Vitória', 'VIT'],
]);

function escapeXml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}

function compact(value, maxLength) {
  if (value.length <= maxLength) return value;
  return `${value.slice(0, maxLength - 1).trimEnd()}...`;
}

function compactScoreline(value) {
  return Array.from(TEAM_ALIASES.entries()).reduce(
    (text, [team, alias]) => text.replaceAll(team, alias),
    value,
  );
}

function wrapText(value, maxChars, maxLines = 6) {
  const words = String(value).replace(/\s+/g, ' ').trim().split(' ');
  const lines = [];
  let line = '';

  for (let index = 0; index < words.length; index += 1) {
    const word = words[index];
    const next = line ? `${line} ${word}` : word;

    if (next.length <= maxChars) {
      line = next;
      continue;
    }

    if (lines.length >= maxLines - 1) {
      const remaining = [line, ...words.slice(index)].filter(Boolean).join(' ');
      lines.push(compact(remaining, Math.max(8, maxChars)));
      return balanceSmallLeadingWords(lines);
    }

    if (line) {
      lines.push(line);
    }
    line = word;
  }

  if (line && lines.length < maxLines) lines.push(line);

  return balanceSmallLeadingWords(lines);
}

function balanceSmallLeadingWords(lines) {
  return lines.map((line, index) => {
    if (index === 0) return line;
    if (!/^[AaEOe]\s/.test(line)) return line;

    const previous = lines[index - 1].split(' ');
    if (previous.length <= 1) return line;

    const moved = previous.pop();
    lines[index - 1] = previous.join(' ');
    return `${moved} ${line}`;
  });
}

function textBlock({
  text,
  x,
  y,
  maxChars,
  maxLines,
  size,
  lineHeight,
  fill = COLORS.white,
  family = 'Anton, Impact, Arial Black, sans-serif',
  weight = '400',
  transform = 'uppercase',
  anchor = 'start',
}) {
  const content = transform === 'uppercase' ? text.toUpperCase() : text;
  const lines = wrapText(content, maxChars, maxLines);

  return [
    `<text x="${x}" y="${y}" fill="${fill}" font-family="${family}" font-size="${size}" font-weight="${weight}" text-anchor="${anchor}">`,
    ...lines.map((line, index) => {
      const dy = index === 0 ? 0 : lineHeight;
      return `<tspan x="${x}" dy="${dy}">${escapeXml(line)}</tspan>`;
    }),
    '</text>',
  ].join('');
}

function label(text, x, y, fill = COLORS.yellow) {
  return `<text x="${x}" y="${y}" fill="${fill}" font-family="Oswald, Arial Narrow, sans-serif" font-size="28" font-weight="800">${escapeXml(text.toUpperCase())}</text>`;
}

function brand(width, height) {
  return [
    `<text x="72" y="${height - 76}" fill="${COLORS.yellow}" font-family="Oswald, Arial Narrow, sans-serif" font-size="27" font-weight="800">SEMCLUBISMO</text>`,
    `<text x="${width - 72}" y="${height - 76}" fill="${COLORS.muted}" font-family="Inter, Arial, sans-serif" font-size="22" text-anchor="end">Futebol acima das cores</text>`,
  ].join('');
}

function background(width, height, accent = COLORS.yellow) {
  const gridSize = width >= 1200 ? 80 : 72;
  return [
    `<rect width="${width}" height="${height}" fill="${COLORS.black}"/>`,
    `<path d="M0 0 H${width} V${Math.round(height * 0.18)} L0 ${Math.round(height * 0.32)} Z" fill="${accent}" opacity="0.12"/>`,
    `<path d="M${Math.round(width * 0.64)} 0 H${width} V${height} H${Math.round(width * 0.86)} Z" fill="${accent}" opacity="0.10"/>`,
    `<g opacity="0.11" stroke="${COLORS.white}" stroke-width="1">`,
    ...Array.from({ length: Math.ceil(width / gridSize) }, (_, index) => `<path d="M${index * gridSize} 0 V${height}"/>`),
    ...Array.from({ length: Math.ceil(height / gridSize) }, (_, index) => `<path d="M0 ${index * gridSize} H${width}"/>`),
    '</g>',
    `<circle cx="${Math.round(width * 0.84)}" cy="${Math.round(height * 0.18)}" r="${Math.round(width * 0.22)}" fill="none" stroke="${accent}" stroke-width="34" opacity="0.10"/>`,
  ].join('');
}

function frame(width, height, accent = COLORS.yellow) {
  return [
    `<rect x="42" y="42" width="${width - 84}" height="${height - 84}" fill="none" stroke="${COLORS.white}" stroke-opacity="0.22" stroke-width="2"/>`,
    `<rect x="42" y="42" width="${Math.min(260, width * 0.28)}" height="8" fill="${accent}"/>`,
    `<text x="${width - 72}" y="124" fill="${COLORS.white}" opacity="0.06" font-family="Anton, Impact, Arial Black, sans-serif" font-size="${Math.round(width * 0.18)}" text-anchor="end">SC</text>`,
  ].join('');
}

function svg({ width, height, body }) {
  return [
    `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" role="img">`,
    '<defs>',
    '<style>',
    'text { dominant-baseline: hanging; }',
    '</style>',
    '</defs>',
    body,
    '</svg>',
  ].join('\n');
}

function renderFeed(pauta) {
  const width = 1080;
  const height = 1080;
  const body = [
    background(width, height),
    frame(width, height),
    label('Pauta da mesa', 72, 82),
    label(pauta.updatedLabel, width - 190, 82, COLORS.white),
    textBlock({
      text: pauta.title,
      x: 72,
      y: 174,
      maxChars: 17,
      maxLines: 5,
      size: 92,
      lineHeight: 96,
    }),
    `<rect x="72" y="716" width="936" height="148" fill="${COLORS.yellow}"/>`,
    textBlock({
      text: pauta.facts[0]?.value ?? pauta.round,
      x: 104,
      y: 748,
      maxChars: 32,
      maxLines: 2,
      size: 46,
      lineHeight: 52,
      fill: COLORS.black,
      family: 'Oswald, Arial Narrow, sans-serif',
      weight: '800',
    }),
    textBlock({
      text: pauta.resenha[0] ?? pauta.summary,
      x: 72,
      y: 904,
      maxChars: 58,
      maxLines: 2,
      size: 28,
      lineHeight: 36,
      fill: COLORS.gray,
      family: 'Inter, Arial, sans-serif',
      transform: 'none',
    }),
    brand(width, height),
  ].join('\n');

  return svg({ width, height, body });
}

function renderStory(pauta) {
  const width = 1080;
  const height = 1920;
  const question = pauta.nextAgenda[0] ?? 'Foi tropeço normal ou sinal de alerta?';
  const body = [
    background(width, height),
    frame(width, height),
    label('Enquete SemClubismo', 72, 88),
    textBlock({
      text: question,
      x: 72,
      y: 260,
      maxChars: 15,
      maxLines: 7,
      size: 104,
      lineHeight: 112,
    }),
    `<rect x="72" y="1180" width="936" height="170" rx="0" fill="${COLORS.yellow}"/>`,
    textBlock({
      text: 'Acidente',
      x: 120,
      y: 1230,
      maxChars: 18,
      maxLines: 1,
      size: 64,
      lineHeight: 72,
      fill: COLORS.black,
    }),
    `<rect x="72" y="1386" width="936" height="170" fill="none" stroke="${COLORS.white}" stroke-opacity="0.72" stroke-width="3"/>`,
    textBlock({
      text: 'Sinal de alerta',
      x: 120,
      y: 1436,
      maxChars: 18,
      maxLines: 1,
      size: 64,
      lineHeight: 72,
      fill: COLORS.white,
    }),
    textBlock({
      text: pauta.facts.slice(0, 2).map((fact) => compactScoreline(fact.value)).join(' / '),
      x: 72,
      y: 1656,
      maxChars: 42,
      maxLines: 2,
      size: 34,
      lineHeight: 42,
      fill: COLORS.gray,
      family: 'Oswald, Arial Narrow, sans-serif',
      weight: '700',
    }),
    brand(width, height),
  ].join('\n');

  return svg({ width, height, body });
}

function renderThumbnail(pauta) {
  const width = 1280;
  const height = 720;
  const body = [
    background(width, height),
    frame(width, height),
    label('Reels / Shorts', 72, 74),
    textBlock({
      text: compact(pauta.title.replace('e o campeonato ganhou assunto.', 'e agora?'), 64),
      x: 72,
      y: 150,
      maxChars: 20,
      maxLines: 4,
      size: 88,
      lineHeight: 92,
    }),
    `<rect x="796" y="244" width="412" height="154" fill="${COLORS.yellow}"/>`,
    textBlock({
      text: pauta.facts[0]?.value ?? pauta.round,
      x: 824,
      y: 282,
      maxChars: 18,
      maxLines: 2,
      size: 44,
      lineHeight: 50,
      fill: COLORS.black,
      family: 'Oswald, Arial Narrow, sans-serif',
      weight: '800',
    }),
    textBlock({
      text: pauta.facts[1]?.value ?? '',
      x: 824,
      y: 432,
      maxChars: 22,
      maxLines: 2,
      size: 34,
      lineHeight: 42,
      fill: COLORS.white,
      family: 'Oswald, Arial Narrow, sans-serif',
      weight: '800',
    }),
    brand(width, height),
  ].join('\n');

  return svg({ width, height, body });
}

function renderStatement({ pauta, type, text, accent }) {
  const width = 1080;
  const height = 1080;
  const body = [
    background(width, height, accent),
    frame(width, height, accent),
    label(type, 72, 82, accent),
    textBlock({
      text,
      x: 72,
      y: 216,
      maxChars: 22,
      maxLines: 7,
      size: 72,
      lineHeight: 82,
      fill: COLORS.white,
      family: 'Oswald, Arial Narrow, sans-serif',
      weight: '800',
    }),
    `<rect x="72" y="804" width="936" height="4" fill="${accent}"/>`,
    textBlock({
      text: pauta.title,
      x: 72,
      y: 840,
      maxChars: 48,
      maxLines: 2,
      size: 28,
      lineHeight: 36,
      fill: COLORS.gray,
      family: 'Inter, Arial, sans-serif',
      transform: 'none',
    }),
    brand(width, height),
  ].join('\n');

  return svg({ width, height, body });
}

function previewHtml(files) {
  const cards = files.map((file) => {
    const name = path.basename(file);
    return `<article><img src="./${name}" alt="${name}"><a href="./${name}">${name}</a></article>`;
  }).join('\n');

  return `<!doctype html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Prévia das imagens - SemClubismo</title>
  <style>
    body { margin: 0; background: #050505; color: #f6f4ed; font-family: Inter, Arial, sans-serif; }
    main { max-width: 1320px; margin: 0 auto; padding: 32px; }
    h1 { font-family: Impact, Anton, sans-serif; text-transform: uppercase; font-size: clamp(2.4rem, 6vw, 5rem); font-weight: 400; line-height: 1; }
    section { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 22px; }
    article { border: 1px solid rgba(255,255,255,.16); background: #111; padding: 12px; }
    img { width: 100%; height: auto; display: block; background: #050505; }
    a { display: block; margin-top: 12px; color: #f5b800; font-weight: 800; text-transform: uppercase; text-decoration: none; }
  </style>
</head>
<body>
  <main>
    <h1>Prévia das imagens</h1>
    <section>${cards}</section>
  </main>
</body>
</html>
`;
}

async function commandExists(command) {
  try {
    await execFileAsync('which', [command]);
    return true;
  } catch {
    return false;
  }
}

async function findChrome() {
  for (const candidate of CHROME_CANDIDATES) {
    if (candidate.includes('/') && existsSync(candidate)) return candidate;
    if (!candidate.includes('/') && await commandExists(candidate)) return candidate;
  }

  return null;
}

async function renderPngs(files) {
  const chromePath = await findChrome();

  if (!chromePath) {
    console.log('\nPNG não gerado: Chrome/Chromium não está disponível neste ambiente.');
    return [];
  }

  try {
    await rm(PNG_OUTPUT_DIR, { recursive: true, force: true });
    await mkdir(PNG_OUTPUT_DIR, { recursive: true });
    const written = [];

    for (const file of files) {
      const finalPngPath = path.join(PNG_OUTPUT_DIR, `${path.basename(file.path, '.svg')}.png`);

      await execFileAsync(chromePath, [
        '--headless=new',
        '--disable-gpu',
        '--no-first-run',
        '--hide-scrollbars',
        '--force-device-scale-factor=1',
        `--window-size=${file.width},${file.height}`,
        `--screenshot=${finalPngPath}`,
        pathToFileURL(file.path).href,
      ]);
      written.push(finalPngPath);
    }

    return written;
  } catch (error) {
    console.log(`\nPNG não gerado automaticamente: ${error.message}`);
    return [];
  }
}

async function readPauta() {
  try {
    return JSON.parse(await readFile(DRAFT_JSON_PATH, 'utf8'));
  } catch {
    throw new Error('Nenhum rascunho encontrado. Rode: npm run pauta:draft');
  }
}

export async function generateImages() {
  const pauta = await readPauta();
  await mkdir(OUTPUT_DIR, { recursive: true });

  const files = [
    ['01-feed-instagram.svg', renderFeed(pauta), 1080, 1080],
    ['02-story-enquete.svg', renderStory(pauta), 1080, 1920],
    ['03-thumbnail-reels.svg', renderThumbnail(pauta), 1280, 720],
    [
      '04-card-critica.svg',
      renderStatement({
        pauta,
        type: 'Crítica da rodada',
        text: pauta.criticism[0] ?? pauta.summary,
        accent: COLORS.red,
      }),
      1080,
      1080,
    ],
    [
      '05-card-elogio.svg',
      renderStatement({
        pauta,
        type: 'Elogio da rodada',
        text: pauta.praise[0] ?? pauta.summary,
        accent: COLORS.yellow,
      }),
      1080,
      1080,
    ],
    [
      '06-card-resenha.svg',
      renderStatement({
        pauta,
        type: 'Resenha da rodada',
        text: pauta.resenha[0] ?? pauta.summary,
        accent: COLORS.yellowBright,
      }),
      1080,
      1080,
    ],
  ];

  const written = [];

  for (const [filename, source, width, height] of files) {
    const filePath = path.join(OUTPUT_DIR, filename);
    await writeFile(filePath, source);
    written.push({ path: filePath, width, height });
  }

  await writeFile(path.join(OUTPUT_DIR, 'preview.html'), previewHtml(written.map((file) => file.path)));
  const pngFiles = await renderPngs(written);

  console.log('\nImagens geradas em content/pautas/draft/imagens');
  for (const file of written) {
    console.log(`- ${path.relative(ROOT_DIR, file.path)}`);
  }
  console.log('- content/pautas/draft/imagens/preview.html');

  if (pngFiles.length) {
    console.log('\nPNGs gerados em content/pautas/draft/imagens/png');
    for (const file of pngFiles) {
      console.log(`- ${path.relative(ROOT_DIR, file)}`);
    }
  }
}

async function main() {
  await generateImages();
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  main().catch((error) => {
    console.error(`\nErro: ${error.message}`);
    process.exitCode = 1;
  });
}
