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
    'site.tagline': 'Tecnologia, desenvolvimento e design',
    'lang.label': 'Idioma',
    'post.writtenBy': 'Escrito por:',
    'post.postedOn': 'Publicado em:',
    'post.tags': 'Tags:',
    'post.machineTranslated':
      'Esta tradução foi gerada automaticamente e está pendente de revisão.',
    'home.role': 'Software Engineer',
    'home.ctaTagline': 'Dados de fitness que entendem sua vida, não apenas seu corpo.',
    'home.latestPosts': 'Últimos Posts',
    'home.latestLabel': 'Leia minhas reflexões',
    'home.exploreNow': 'Explorar agora',
    'footer.letsTalk': 'Vamos conversar',
    'footer.blurb':
      'Vamos conversar! Adoraria saber sobre sua próxima ideia ou projeto, fique à vontade para entrar em contato a qualquer momento.',
    'footer.tagline': 'Este blog funciona com cafeína e trocadilhos ruins.',
  },
  en: {
    'nav.home': 'Home',
    'nav.blog': 'Blog',
    'site.tagline': 'Technology, development and design',
    'lang.label': 'Language',
    'post.writtenBy': 'Written by:',
    'post.postedOn': 'Posted on:',
    'post.tags': 'Tags:',
    'post.machineTranslated': 'This translation is machine-generated and pending review.',
    'home.role': 'Software Engineer',
    'home.ctaTagline': 'Fitness data that understands your life, not just your body.',
    'home.latestPosts': 'Latest Posts',
    'home.latestLabel': 'Check out some of my thinking',
    'home.exploreNow': 'Explore Now',
    'footer.letsTalk': "Let's Talk",
    'footer.blurb':
      "Let's talk! I'd love to hear about your next idea or project, feel free to reach out anytime.",
    'footer.tagline': 'This blog runs on caffeine and bad puns.',
  },
  es: {
    'nav.home': 'Inicio',
    'nav.blog': 'Blog',
    'site.tagline': 'Tecnología, desarrollo y diseño',
    'lang.label': 'Idioma',
    'post.writtenBy': 'Escrito por:',
    'post.postedOn': 'Publicado el:',
    'post.tags': 'Etiquetas:',
    'post.machineTranslated':
      'Esta traducción se generó automáticamente y está pendiente de revisión.',
    'home.role': 'Software Engineer',
    'home.ctaTagline': 'Datos de fitness que entienden tu vida, no solo tu cuerpo.',
    'home.latestPosts': 'Últimas Entradas',
    'home.latestLabel': 'Conoce algunas de mis ideas',
    'home.exploreNow': 'Explorar ahora',
    'footer.letsTalk': 'Hablemos',
    'footer.blurb':
      '¡Hablemos! Me encantaría saber sobre tu próxima idea o proyecto, no dudes en contactarme en cualquier momento.',
    'footer.tagline': 'Este blog funciona con cafeína y malos chistes.',
  },
} as const satisfies Record<Lang, Record<string, string>>;

export type UIKey = keyof (typeof ui)['pt'];
