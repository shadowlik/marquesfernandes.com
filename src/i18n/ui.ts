/**
 * Supported locales and UI string dictionary.
 *
 * `pt` is the default and source language (lives at the site root, no prefix).
 * `en` and `es` are served under their language prefix. This mirrors the
 * legacy Polylang configuration so historical URLs stay identical.
 *
 * UI strings here are the site *chrome* (nav, footer, labels) only. Article
 * content is authored per-language as Markdown in `src/content/`.
 */

export const defaultLang = 'pt' as const;

export const languages = {
  pt: 'Português',
  en: 'English',
  es: 'Español',
} as const;

export type Lang = keyof typeof languages;

export const ui = {
  pt: {
    'nav.home': 'Início',
    'nav.blog': 'Blog',
    'nav.portfolio': 'Portfólio',
    'site.tagline': 'Tecnologia, desenvolvimento e design',
    'lang.label': 'Idioma',
  },
  en: {
    'nav.home': 'Home',
    'nav.blog': 'Blog',
    'nav.portfolio': 'Portfolio',
    'site.tagline': 'Technology, development and design',
    'lang.label': 'Language',
  },
  es: {
    'nav.home': 'Inicio',
    'nav.blog': 'Blog',
    'nav.portfolio': 'Portafolio',
    'site.tagline': 'Tecnología, desarrollo y diseño',
    'lang.label': 'Idioma',
  },
} as const satisfies Record<Lang, Record<string, string>>;

export type UIKey = keyof (typeof ui)['pt'];
