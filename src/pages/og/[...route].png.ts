import type { APIRoute, GetStaticPaths } from 'astro';
import { getCollection } from 'astro:content';
import satori from 'satori';
import sharp from 'sharp';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { ui, languages, type Lang } from '@/i18n/ui';
import {
  DEFAULT_OG_ROUTE,
  articleOgRoute,
  homeOgRoute,
  blogOgRoute,
  categoryLabel,
  formatOgDate,
  truncateTitle,
} from '@/lib/og';

const W = 1200;
const H = 630;
const ALL_LANGS = Object.keys(languages) as Lang[];

const fontFile = (spec: string) => readFileSync(fileURLToPath(import.meta.resolve(spec)));

const poppins700 = fontFile('@fontsource/poppins/files/poppins-latin-700-normal.woff');
const roboto600 = fontFile(
  '@fontsource/roboto-condensed/files/roboto-condensed-latin-600-normal.woff',
);

/** Text supplied to a single card. */
interface CardProps {
  title: string;
  subtitle: string;
}

/** Satori VDOM for one card. Plain object form avoids needing JSX in a .ts file. */
function cardElement({ title, subtitle }: CardProps) {
  return {
    type: 'div',
    props: {
      style: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '80px',
        backgroundColor: '#ffffff',
        fontFamily: 'Poppins',
      },
      children: [
        {
          type: 'div',
          props: {
            style: { display: 'flex', flexDirection: 'column' },
            children: [
              {
                type: 'div',
                props: {
                  style: { fontFamily: 'Poppins', fontWeight: 700, fontSize: 48, color: '#101010' },
                  children: 'MF.',
                },
              },
              {
                type: 'div',
                props: {
                  style: { width: 72, height: 8, backgroundColor: '#e9204f', marginTop: 18 },
                },
              },
            ],
          },
        },
        {
          type: 'div',
          props: {
            style: {
              display: 'flex',
              fontFamily: 'Poppins',
              fontWeight: 700,
              fontSize: 68,
              lineHeight: 1.1,
              color: '#101010',
              maxWidth: '900px',
            },
            children: truncateTitle(title),
          },
        },
        {
          type: 'div',
          props: {
            style: {
              display: 'flex',
              fontFamily: 'Roboto Condensed',
              fontWeight: 600,
              fontSize: 30,
              letterSpacing: '0.04em',
              color: '#101010',
            },
            children: subtitle,
          },
        },
      ],
    },
  };
}

async function renderPng(props: CardProps): Promise<Buffer> {
  const svg = await satori(cardElement(props), {
    width: W,
    height: H,
    fonts: [
      { name: 'Poppins', data: poppins700, weight: 700, style: 'normal' },
      { name: 'Roboto Condensed', data: roboto600, weight: 600, style: 'normal' },
    ],
  });
  return sharp(Buffer.from(svg)).png().toBuffer();
}

export const getStaticPaths = (async () => {
  const posts = (await getCollection('blog')).filter((p) => !p.data.draft && p.data.canonicalPath);

  const articleRoutes = posts.map((p) => ({
    params: { route: articleOgRoute(p.data.lang, p.data.translationKey) },
    props: {
      title: p.data.title,
      subtitle: `${categoryLabel(p.data.category)} · ${formatOgDate(p.data.date, p.data.lang)}`,
    } satisfies CardProps,
  }));

  const homeRoutes = ALL_LANGS.map((lang) => ({
    params: { route: homeOgRoute(lang) },
    props: {
      title: 'Henrique Marques Fernandes',
      subtitle: ui[lang]['site.tagline'].toUpperCase(),
    } satisfies CardProps,
  }));

  const blogRoutes = ALL_LANGS.map((lang) => ({
    params: { route: blogOgRoute(lang) },
    props: {
      title: ui[lang]['nav.blog'],
      subtitle: ui[lang]['site.tagline'].toUpperCase(),
    } satisfies CardProps,
  }));

  const defaultRoute = {
    params: { route: DEFAULT_OG_ROUTE },
    props: {
      title: 'Henrique Marques Fernandes',
      subtitle: ui.pt['site.tagline'].toUpperCase(),
    } satisfies CardProps,
  };

  return [...articleRoutes, ...homeRoutes, ...blogRoutes, defaultRoute];
}) satisfies GetStaticPaths;

export const GET: APIRoute = async ({ props }) => {
  const png = await renderPng(props as CardProps);
  return new Response(new Uint8Array(png), {
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
};
