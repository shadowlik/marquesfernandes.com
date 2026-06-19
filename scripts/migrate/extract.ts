/**
 * One-time, idempotent WordPress -> Markdown extraction (#3).
 *
 * Reads the live WP database (read-only, WP_DB_* env vars), converts each
 * published post's HTML to Markdown, and writes one file per language under
 * `src/content/blog/<translationKey>/<lang>.md`. Also emits an image manifest
 * (`src/data/image-manifest.json`) listing every referenced upload, consumed by
 * the image migration (#4).
 *
 * Usage:
 *   pnpm migrate:extract            # all published posts
 *   pnpm migrate:extract --limit 5 # 5 most-recent translation groups (sample)
 *   pnpm migrate:extract --ids 12761,12857
 */
import { mkdir, writeFile, rm } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { stringify } from 'yaml';
import {
  connect,
  getSlugs,
  getTranslationGroups,
  getPermalinks,
  getTags,
  getPosts,
  type WpPost,
} from './db';
import {
  parsePermalink,
  rewriteUploadUrls,
  extractUploadPaths,
  wpHtmlToMarkdown,
  decodeEntities,
  type Lang,
} from './transform';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '../..');
const BLOG_DIR = join(ROOT, 'src/content/blog');
const MANIFEST = join(ROOT, 'src/data/image-manifest.json');

interface Args {
  limit?: number;
  ids?: number[];
}

function parseArgs(argv: string[]): Args {
  const args: Args = {};
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    const val = () => (argv[i].includes('=') ? argv[i].split('=')[1] : argv[++i]);
    if (a.startsWith('--limit')) args.limit = Number(val());
    else if (a.startsWith('--ids')) args.ids = val().split(',').map(Number);
  }
  return args;
}

function deriveDescription(excerpt: string, markdown: string): string | undefined {
  const fromExcerpt = decodeEntities(excerpt).trim();
  if (fromExcerpt) return fromExcerpt;
  const firstPara = markdown
    .split('\n')
    .map((l) => l.trim())
    .find((l) => l && !l.startsWith('#') && !l.startsWith('!') && !l.startsWith('```'));
  if (!firstPara) return undefined;
  const plain = firstPara.replace(/[*_`[\]()]/g, '').trim();
  return plain.length > 160 ? `${plain.slice(0, 157)}...` : plain;
}

function buildMarkdownFile(frontmatter: Record<string, unknown>, body: string): string {
  return `---\n${stringify(frontmatter)}---\n\n${body}\n`;
}

async function main() {
  process.loadEnvFile(join(ROOT, '.env'));
  const args = parseArgs(process.argv.slice(2));
  const db = await connect();

  try {
    const [slugs, groups, allPosts] = await Promise.all([
      getSlugs(db),
      getTranslationGroups(db),
      getPosts(db),
    ]);
    const allIds = allPosts.map((p) => p.id);
    const [permalinks, tags] = await Promise.all([getPermalinks(db, allIds), getTags(db, allIds)]);

    // postId -> translationKey (the pt sibling's slug; falls back en/es, then self).
    const keyOf = new Map<number, string>();
    for (const g of groups) {
      const anchor = g.pt ?? g.en ?? g.es;
      const key = anchor ? (slugs.get(anchor) ?? String(anchor)) : undefined;
      if (!key) continue;
      for (const id of Object.values(g)) keyOf.set(id, key);
    }

    const postById = new Map(allPosts.map((p) => [p.id, p]));

    // Decide which posts to extract.
    let targetIds: number[];
    if (args.ids) {
      targetIds = args.ids;
    } else if (args.limit) {
      // Most-recent N groups, by their newest member's date; include all members.
      const dated = groups
        .map((g) => {
          const ids = Object.values(g);
          const newest = Math.max(...ids.map((id) => postById.get(id)?.date.getTime() ?? 0));
          return { ids, newest };
        })
        .sort((a, b) => b.newest - a.newest)
        .slice(0, args.limit);
      targetIds = dated.flatMap((d) => d.ids);
    } else {
      targetIds = allIds;
    }

    const uploads = new Set<string>();
    let written = 0;
    const skipped: number[] = [];
    const junk: number[] = [];

    for (const id of targetIds) {
      const post: WpPost | undefined = postById.get(id);
      const permalink = permalinks.get(id);
      if (!post || !permalink) {
        skipped.push(id);
        continue;
      }

      // Skip junk posts (no usable title): their translation siblings carry the
      // real article, and #8 can AI-translate the missing language cleanly.
      const title = decodeEntities(post.title).trim();
      if (!title) {
        junk.push(id);
        continue;
      }

      const { canonicalPath, lang, category, slug } = parsePermalink(permalink);
      const translationKey = keyOf.get(id) ?? post.slug;

      const rewritten = rewriteUploadUrls(post.content);
      for (const u of extractUploadPaths(rewritten)) uploads.add(u);
      const body = wpHtmlToMarkdown(rewritten).trim();

      const frontmatter: Record<string, unknown> = {
        title,
        description: deriveDescription(post.excerpt, body),
        date: post.date.toISOString(),
        lang: lang satisfies Lang,
        translationKey,
        slug,
        category,
        tags: tags.get(id) ?? [],
        wpId: id,
        canonicalPath,
        needsReview: false,
      };
      if (post.modified.getTime() !== post.date.getTime()) {
        frontmatter.updated = post.modified.toISOString();
      }
      if (frontmatter.description === undefined) delete frontmatter.description;

      const dir = join(BLOG_DIR, translationKey);
      await mkdir(dir, { recursive: true });
      await writeFile(join(dir, `${lang}.md`), buildMarkdownFile(frontmatter, body));
      written++;
    }

    await mkdir(dirname(MANIFEST), { recursive: true });
    const sorted = [...uploads].sort();
    await writeFile(
      MANIFEST,
      `${JSON.stringify({ count: sorted.length, images: sorted }, null, 2)}\n`,
    );

    console.log(
      `Extracted ${written} post file(s) across ${new Set(targetIds.map((id) => keyOf.get(id))).size} group(s).`,
    );
    console.log(
      `Referenced uploads: ${sorted.length} unique (manifest -> src/data/image-manifest.json).`,
    );
    if (skipped.length)
      console.log(
        `Skipped ${skipped.length} id(s) without a post/permalink: ${skipped.join(', ')}`,
      );
    if (junk.length)
      console.log(`Skipped ${junk.length} junk id(s) with no title: ${junk.join(', ')}`);
  } finally {
    await db.end();
  }
}

// Allow a clean re-run of just the blog content when requested.
if (process.argv.includes('--clean')) {
  await rm(BLOG_DIR, { recursive: true, force: true });
}

await main();
