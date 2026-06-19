import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';
import { postsForLang } from '@/lib/blog';

export async function GET(context: APIContext) {
  const posts = postsForLang(await getCollection('blog'), 'en');
  return rss({
    title: 'MF.',
    description: 'Technology, development and design',
    site: context.site!,
    items: posts.map((p) => ({
      title: p.data.title,
      description: p.data.description,
      pubDate: p.data.date,
      link: p.data.canonicalPath ?? '/en/',
    })),
  });
}
