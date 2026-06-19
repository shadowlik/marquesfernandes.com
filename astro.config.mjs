// @ts-check
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://marquesfernandes.com',

  // Match the legacy WordPress URLs, which all end in a trailing slash.
  trailingSlash: 'always',

  // Mirrors the legacy Polylang setup: pt is the default and lives at the
  // root (no /pt/ prefix), en/es are served under their language prefix.
  // This keeps every historical URL identical after the migration.
  i18n: {
    defaultLocale: 'pt',
    locales: ['pt', 'en', 'es'],
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false,
    },
  },

  integrations: [
    mdx(),
    sitemap({ i18n: { defaultLocale: 'pt', locales: { pt: 'pt-BR', en: 'en', es: 'es' } } }),
  ],
});
