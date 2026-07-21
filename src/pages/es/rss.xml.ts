import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';
import { postsForLang, stripCategoryPath } from '@/lib/blog';
import { resolveCanonicalPath } from '@/lib/translations';

export async function GET(context: APIContext) {
  const posts = postsForLang(await getCollection('blog'), 'es');
  return rss({
    title: 'MF.',
    description: 'Tecnología, desarrollo y diseño',
    site: context.site!,
    items: posts.map((p) => ({
      title: p.data.title,
      description: p.data.description,
      pubDate: p.data.date,
      link: stripCategoryPath(resolveCanonicalPath(p.data)),
    })),
  });
}
