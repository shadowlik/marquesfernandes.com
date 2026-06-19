// One-off: convert the raw-HTML tables left by the migration into GFM Markdown.
//
// Turndown's GFM plugin only converts a table that has a header row (<thead>
// with <th>). The migrated tables are headerless (<tbody> of <td>), so they
// survived as raw HTML. Here we strip presentational attributes, promote each
// table's first row to a <thead> of <th>, then run the same turndown+gfm
// pipeline used by the extraction script. Pass file paths as args; add --write
// to edit in place (default prints a dry-run sample).
import { readFileSync, writeFileSync } from 'node:fs';
import TurndownService from 'turndown';
import { gfm } from 'turndown-plugin-gfm';

const td = new TurndownService({
  headingStyle: 'atx',
  codeBlockStyle: 'fenced',
  bulletListMarker: '-',
  emDelimiter: '*',
  strongDelimiter: '**',
  linkStyle: 'inlined',
});
td.use(gfm);

const stripAttrs = (html: string): string =>
  html.replace(/<(table|thead|tbody|tfoot|tr|th|td)\b[^>]*>/gi, '<$1>');

/** Promote the first <tr> to a <thead> of <th>, the rest into <tbody>. */
function addHeader(tableHtml: string): string {
  const rows = [...tableHtml.matchAll(/<tr>([\s\S]*?)<\/tr>/gi)].map((m) => m[1]);
  if (rows.length === 0) return tableHtml;
  const toCells = (row: string, tag: string): string =>
    row.replace(/<td>([\s\S]*?)<\/td>/gi, `<${tag}>$1</${tag}>`);
  const head = `<thead><tr>${toCells(rows[0], 'th')}</tr></thead>`;
  const body = rows
    .slice(1)
    .map((r) => `<tr>${r}</tr>`)
    .join('');
  return `<table>${head}<tbody>${body}</tbody></table>`;
}

function convert(content: string): { out: string; count: number } {
  let count = 0;
  const out = content.replace(/<table\b[\s\S]*?<\/table>/gi, (block) => {
    count += 1;
    return td.turndown(addHeader(stripAttrs(block))).trim();
  });
  return { out, count };
}

const write = process.argv.includes('--write');
const files = process.argv.slice(2).filter((a) => !a.startsWith('--'));
let total = 0;
for (const f of files) {
  const { out, count } = convert(readFileSync(f, 'utf8'));
  total += count;
  if (count === 0) continue;
  if (write) {
    writeFileSync(f, out);
    console.log(`wrote ${count} table(s): ${f}`);
  } else {
    console.log(`\n===== ${f} (${count} table(s)) =====`);
    const sample = [...out.matchAll(/^\|.*\|$/gm)].slice(0, 6).map((m) => m[0]);
    console.log(sample.join('\n'));
  }
}
console.log(
  `\n${write ? 'converted' : 'would convert'} ${total} table(s) across ${files.length} file(s)`,
);
