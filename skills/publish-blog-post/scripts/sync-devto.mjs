#!/usr/bin/env node
/* global URL, console, fetch */

import { readFile, readdir } from 'node:fs/promises';
import { resolve } from 'node:path';
import process from 'node:process';
import TurndownService from 'turndown';
import { gfm } from 'turndown-plugin-gfm';
import YAML from 'yaml';

const SITE_ORIGIN = 'https://marquesfernandes.com';
const API_ORIGIN = 'https://dev.to/api';
const ACCEPT = 'application/vnd.forem.api-v1+json';

function fail(message) {
  console.error(message);
  process.exit(1);
}

function parseSource(source) {
  const match = source.match(/^---\n([\s\S]*?)\n---\n/);
  if (!match) fail('The English article has no valid YAML frontmatter.');
  return YAML.parse(match[1]);
}

function publicPath(metadata) {
  if (!metadata.canonicalPath) return `/${metadata.lang}/${metadata.slug}/`;

  const segments = metadata.canonicalPath.split('/').filter(Boolean);
  const lang = segments[0] === 'en' || segments[0] === 'es' ? segments.shift() : undefined;
  const slug = segments.at(-1);
  return `${lang ? `/${lang}` : ''}/${slug}/`;
}

function extractContent(html) {
  const opening = html.match(/<div\b[^>]*class="[^"]*\bcontent\b[^"]*"[^>]*>/i);
  if (!opening || opening.index === undefined) {
    fail('Could not find the rendered article body in production.');
  }
  const start = opening.index;
  const contentStart = start + opening[0].length;

  const tokenPattern = /<div\b[^>]*>|<\/div>/gi;
  tokenPattern.lastIndex = contentStart;
  let depth = 1;
  let match;
  while ((match = tokenPattern.exec(html))) {
    depth += match[0].startsWith('</') ? -1 : 1;
    if (depth === 0) return html.slice(contentStart, match.index);
  }
  fail('Could not determine where the rendered article body ends.');
}

function absoluteLinks(html, canonicalUrl) {
  return html.replace(
    /\b(href|src)="(\/[^"]*)"/g,
    (_, attribute, path) => `${attribute}="${new URL(path, canonicalUrl).href}"`,
  );
}

async function api(path, apiKey, options = {}) {
  const response = await fetch(`${API_ORIGIN}${path}`, {
    ...options,
    headers: {
      Accept: ACCEPT,
      'Content-Type': 'application/json',
      'api-key': apiKey,
      'User-Agent': 'marquesfernandes.com DEV.to publisher',
      ...options.headers,
    },
  });
  const payload = await response.json().catch(() => ({}));
  if (!response.ok) {
    fail(`DEV.to API returned ${response.status}: ${JSON.stringify(payload)}`);
  }
  return payload;
}

async function findExisting(apiKey, canonicalUrl) {
  for (let page = 1; page <= 20; page += 1) {
    const articles = await api(`/articles/me/all?page=${page}&per_page=100`, apiKey);
    const match = articles.find((article) => article.canonical_url === canonicalUrl);
    if (match) return match;
    if (articles.length < 100) return undefined;
  }
  fail('Could not search all DEV.to articles within the pagination safety limit.');
}

const [folderArg, ...flags] = process.argv.slice(2);
if (!folderArg) fail('Usage: sync-devto.mjs <article-folder> [--publish] [--dry-run]');
const dryRun = flags.includes('--dry-run');
try {
  process.loadEnvFile();
} catch (error) {
  if (error?.code !== 'ENOENT') throw error;
}
const apiKey = process.env.DEVTO_API_KEY;
if (!dryRun && !apiKey) fail('Set DEVTO_API_KEY in the environment before syncing.');

const folder = resolve(folderArg);
const files = await readdir(folder);
const englishFile = files.find((name) => /^en\.(md|mdx)$/.test(name));
if (!englishFile) fail('The article folder has no en.md or en.mdx file.');

const metadata = parseSource(await readFile(resolve(folder, englishFile), 'utf8'));
if (metadata.lang !== 'en') fail('The selected source is not marked as English.');
if (!metadata.slug) fail('The English article requires a slug before syndication.');
if (metadata.draft) fail('Refusing to sync an article that is still a website draft.');
const canonicalUrl = new URL(publicPath(metadata), SITE_ORIGIN).href;
const pageResponse = await fetch(canonicalUrl, {
  headers: { 'User-Agent': 'marquesfernandes.com DEV.to publisher' },
});
if (!pageResponse.ok) fail(`Production article returned ${pageResponse.status}: ${canonicalUrl}`);

const renderedBody = absoluteLinks(extractContent(await pageResponse.text()), canonicalUrl);
const turndown = new TurndownService({ bulletListMarker: '-', codeBlockStyle: 'fenced' });
turndown.use(gfm);
turndown.remove(['script', 'style']);
const bodyMarkdown = turndown.turndown(renderedBody).trim();
const tags = [...new Set(metadata.tags ?? [])]
  .map((tag) => tag.toLowerCase().replace(/[^a-z0-9]/g, ''))
  .filter(Boolean)
  .slice(0, 4)
  .join(',');
const published = flags.includes('--publish');
const article = {
  title: metadata.title,
  body_markdown: bodyMarkdown,
  published,
  canonical_url: canonicalUrl,
  description: metadata.description ?? '',
  tags,
  series: metadata.tags?.includes('building-in-public') ? 'Growing HAID in Public' : null,
  main_image: new URL(`/og/en/${metadata.translationKey}.png`, SITE_ORIGIN).href,
};

if (dryRun) {
  console.log(
    JSON.stringify(
      {
        action: 'dry-run',
        title: article.title,
        published: article.published,
        canonicalUrl,
        tags: article.tags.split(',').filter(Boolean),
        bodyCharacters: bodyMarkdown.length,
        images: (bodyMarkdown.match(/!\[[^\]]*\]\([^)]+\)/g) ?? []).length,
        links: (bodyMarkdown.match(/(?<!!)\[[^\]]+\]\([^)]+\)/g) ?? []).length,
      },
      null,
      2,
    ),
  );
  process.exit(0);
}

const existing = await findExisting(apiKey, canonicalUrl);
const result = existing
  ? await api(`/articles/${existing.id}`, apiKey, {
      method: 'PUT',
      body: JSON.stringify({ article }),
    })
  : await api('/articles', apiKey, {
      method: 'POST',
      body: JSON.stringify({ article }),
    });

console.log(
  JSON.stringify(
    {
      action: existing ? 'updated' : 'created',
      id: result.id,
      published: result.published,
      url: result.url,
      canonicalUrl,
    },
    null,
    2,
  ),
);
