import { buildRadarPayload, RADAR_COMPETITIONS } from '../src/app/core/radar/radar.mapper.js';
import type {
  RadarProviderInput,
  RadarScoreboardInput,
} from '../src/app/core/radar/radar.models.js';

const PROVIDER_BASE = 'https://site.api.espn.com/apis/site/v2/sports/soccer';
const STANDINGS_BASE = 'https://site.api.espn.com/apis/v2/sports/soccer';
const REQUEST_TIMEOUT_MS = 8_000;

interface ProviderResult {
  data: unknown | null;
  failed: boolean;
}

function dateKey(date: Date): string {
  return date.toISOString().slice(0, 10).replace(/-/g, '');
}

function providerDateRange(): { start: string; end: string } {
  const now = new Date();
  const start = new Date(now);
  const end = new Date(now);

  start.setUTCDate(start.getUTCDate() - 14);
  end.setUTCDate(end.getUTCDate() + 30);

  return { start: dateKey(start), end: dateKey(end) };
}

async function fetchProvider(url: string): Promise<ProviderResult> {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

  try {
    const response = await fetch(url, {
      headers: {
        Accept: 'application/json',
        'User-Agent': 'SemClubismo-Radar/1.0',
      },
      signal: controller.signal,
    });

    if (!response.ok) {
      return { data: null, failed: true };
    }

    return { data: await response.json(), failed: false };
  } catch {
    return { data: null, failed: true };
  } finally {
    clearTimeout(timeoutId);
  }
}

function jsonResponse(body: unknown, status: number, cacheable: boolean): Response {
  const headers = new Headers({
    'Content-Type': 'application/json; charset=utf-8',
    'X-Content-Type-Options': 'nosniff',
  });

  if (cacheable) {
    headers.set('Cache-Control', 'public, max-age=60');
    headers.set(
      'Vercel-CDN-Cache-Control',
      'public, s-maxage=300, stale-while-revalidate=300',
    );
  } else {
    headers.set('Cache-Control', 'no-store');
  }

  return new Response(JSON.stringify(body), { status, headers });
}

async function handleRequest(request: Request): Promise<Response> {
  if (request.method !== 'GET' && request.method !== 'HEAD') {
    return jsonResponse(
      { error: 'method_not_allowed', message: 'Use GET para consultar o Radar.' },
      405,
      false,
    );
  }

  const requestUrl = new URL(request.url);
  if (requestUrl.search.length > 0) {
    return jsonResponse(
      { error: 'invalid_query', message: 'Este endpoint não aceita parâmetros.' },
      400,
      false,
    );
  }

  const range = providerDateRange();
  const sharedQuery = `region=br&lang=pt-BR&limit=100&dates=${range.start}-${range.end}`;
  const scoreboardRequests = RADAR_COMPETITIONS.map((competition) =>
    fetchProvider(`${PROVIDER_BASE}/${competition.id}/scoreboard?${sharedQuery}`),
  );

  const [scoreboardResults, standingsResult, newsResult] = await Promise.all([
    Promise.all(scoreboardRequests),
    fetchProvider(`${STANDINGS_BASE}/bra.1/standings?region=br&lang=pt-BR`),
    fetchProvider(`${PROVIDER_BASE}/bra.1/news?region=br&lang=pt-BR&limit=50`),
  ]);

  const scoreboards: RadarScoreboardInput[] = RADAR_COMPETITIONS.map(
    (competition, index) => ({
      ...competition,
      data: scoreboardResults[index]?.data ?? null,
    }),
  );

  const providerInput: RadarProviderInput = {
    generatedAt: new Date().toISOString(),
    standings: standingsResult.data,
    news: newsResult.data,
    scoreboards,
  };
  const payload = buildRadarPayload(providerInput);
  const allProvidersFailed =
    scoreboardResults.every((result) => result.failed) &&
    standingsResult.failed &&
    newsResult.failed;

  if (
    allProvidersFailed ||
    (!payload.matches.length && !payload.standings.length && !payload.news.length)
  ) {
    return jsonResponse(
      {
        error: 'provider_unavailable',
        message: 'O provedor do Radar está temporariamente indisponível.',
      },
      503,
      false,
    );
  }

  payload.isPartial =
    payload.isPartial ||
    scoreboardResults.some((result) => result.failed) ||
    standingsResult.failed ||
    newsResult.failed;

  const response = jsonResponse(payload, 200, true);
  if (payload.matches.some((match) => match.status === 'live')) {
    response.headers.set('Cache-Control', 'public, max-age=15');
    response.headers.set(
      'Vercel-CDN-Cache-Control',
      'public, s-maxage=60, stale-while-revalidate=120',
    );
  }

  if (request.method === 'HEAD') {
    return new Response(null, { status: response.status, headers: response.headers });
  }

  return response;
}

export default { fetch: handleRequest };
