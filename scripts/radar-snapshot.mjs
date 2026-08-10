#!/usr/bin/env node
import { execFile } from 'node:child_process';
import { mkdtemp, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { promisify } from 'node:util';

const execFileAsync = promisify(execFile);
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = path.resolve(__dirname, '..');
const OUTPUT_PATH = path.join(ROOT_DIR, 'src', 'app', 'core', 'radar', 'radar.fallback.ts');
const PROVIDER_BASE = 'https://site.api.espn.com/apis/site/v2/sports/soccer';
const STANDINGS_BASE = 'https://site.api.espn.com/apis/v2/sports/soccer';
const REQUEST_TIMEOUT_MS = 12_000;

function readOption(name) {
  const prefix = `--${name}=`;
  return process.argv.find((arg) => arg.startsWith(prefix))?.slice(prefix.length) ?? null;
}

function dateKey(date) {
  return date.toISOString().slice(0, 10).replaceAll('-', '');
}

function defaultRange() {
  const now = new Date();
  const start = new Date(now);
  const end = new Date(now);
  start.setUTCDate(start.getUTCDate() - 5);
  end.setUTCDate(end.getUTCDate() + 14);

  return {
    start: dateKey(start),
    end: dateKey(end),
  };
}

async function fetchJson(url) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

  try {
    const response = await fetch(url, {
      headers: {
        Accept: 'application/json',
        'User-Agent': 'SemClubismo-RadarSnapshot/1.0',
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

async function loadRadarMapper() {
  const buildDir = await mkdtemp(path.join(tmpdir(), 'semclubismo-radar-'));

  try {
    await execFileAsync(
      path.join(ROOT_DIR, 'node_modules', '.bin', 'tsc'),
      ['-p', 'tsconfig.api.json', '--noEmit', 'false', '--outDir', buildDir],
      { cwd: ROOT_DIR },
    );

    const moduleUrl = pathToFileURL(
      path.join(buildDir, 'src', 'app', 'core', 'radar', 'radar.mapper.js'),
    ).href;
    return {
      buildDir,
      mapper: await import(moduleUrl),
    };
  } catch (error) {
    await rm(buildDir, { recursive: true, force: true });
    throw error;
  }
}

function fallbackSource(payload) {
  return [
    "import { RadarPayload } from './radar.models';",
    '',
    `export const RADAR_FALLBACK: RadarPayload = ${JSON.stringify(payload, null, 2)};`,
    '',
  ].join('\n');
}

async function generateSnapshot() {
  const fallbackRange = defaultRange();
  const start = readOption('start') ?? fallbackRange.start;
  const end = readOption('end') ?? fallbackRange.end;
  const { buildDir, mapper } = await loadRadarMapper();

  try {
    const { buildRadarPayload, RADAR_COMPETITIONS } = mapper;
    const sharedQuery = `region=br&lang=pt-BR&limit=100&dates=${start}-${end}`;
    const scoreboards = await Promise.all(
      RADAR_COMPETITIONS.map(async (competition) => ({
        ...competition,
        data: await fetchJson(`${PROVIDER_BASE}/${competition.id}/scoreboard?${sharedQuery}`),
      })),
    );
    const [standings, news] = await Promise.all([
      fetchJson(`${STANDINGS_BASE}/bra.1/standings?region=br&lang=pt-BR`),
      fetchJson(`${PROVIDER_BASE}/bra.1/news?region=br&lang=pt-BR&limit=50`),
    ]);
    const generatedAt = new Date().toISOString();
    const payload = buildRadarPayload({
      generatedAt,
      standings,
      news,
      scoreboards,
    });

    payload.provider = 'Snapshot Sem Clubismo';
    payload.expiresAt = new Date(Date.parse(generatedAt) + 4 * 24 * 60 * 60_000).toISOString();
    payload.isPartial = false;

    await writeFile(OUTPUT_PATH, fallbackSource(payload));
    console.log(`Snapshot do Radar atualizado em ${path.relative(ROOT_DIR, OUTPUT_PATH)}`);
    console.log(
      JSON.stringify(
        {
          range: `${start}-${end}`,
          matches: payload.matches.length,
          standings: payload.standings.length,
          news: payload.news.length,
          leader: payload.standings[0]?.team.shortName,
          leaderPoints: payload.standings[0]?.points,
        },
        null,
        2,
      ),
    );
  } finally {
    await rm(buildDir, { recursive: true, force: true });
  }
}

generateSnapshot().catch((error) => {
  console.error(`\nErro: ${error.message}`);
  process.exitCode = 1;
});
