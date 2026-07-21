---
name: publish-blog-post
description: Publish marquesfernandes.com blog changes and cross-post the English article to DEV.to. Use when committing, pushing, shipping, or publishing a blog article, or when creating or updating its DEV.to copy after deployment.
---

# Publish a blog post

Use this skill after `finish-blog-post`. The website is the source of truth and
DEV.to is a syndicated English copy.

## Publish the website

1. Confirm the article passed `finish-blog-post`, has `draft: false`, and has
   approved PT, EN, and ES versions.
2. Run the validation required by `CLAUDE.md`.
3. Commit and push the intended article changes.
4. Wait for the production deployment to succeed before syndicating. The
   script reads the rendered production article so Astro and MDX components
   become portable Markdown.

## Sync DEV.to

1. Require `DEVTO_API_KEY` in the environment or the ignored root `.env` file.
   Never print, commit, log, or add it to a command argument. Do not store it in
   a tracked file.
2. Run:

   ```bash
   pnpm exec node skills/publish-blog-post/scripts/sync-devto.mjs <article-folder> --publish
   ```

3. Use `--dry-run` first when changing the converter or diagnosing a sync. A
   dry run does not require an API key and does not contact DEV.to.
4. Omit `--publish` only when the user asks for a DEV.to draft.
5. Report the returned DEV.to URL and whether the operation created or updated
   the article.

The script uses the English canonical URL as its identity and performs an
upsert, so rerunning it updates the existing copy instead of creating a
duplicate. It sends no more than four English tags and keeps the canonical URL
pointing to marquesfernandes.com.

Do not sync Portuguese or Spanish. Do not publish to DEV.to before the website
deployment succeeds. Never treat a successful website push as proof that the
DEV.to request succeeded.
