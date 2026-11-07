import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { loadEnv } from 'vite';
import { sitemapSerialize } from './src/config/sitemap.ts';

const env = loadEnv(process.env.NODE_ENV || 'production', process.cwd(), '');
const BRAND_ORIGIN = 'https://cheatsmw4.org';

function siteOrigin(value) {
  const trimmed = (value || BRAND_ORIGIN).trim().replace(/\/$/, '');
  if (!trimmed || trimmed.includes('.workers.dev')) return BRAND_ORIGIN;
  return trimmed;
}

const site = siteOrigin(process.env.PUBLIC_SITE_ORIGIN || env.PUBLIC_SITE_ORIGIN);

export default defineConfig({
  site,
  trailingSlash: 'always',
  redirects: {
    '/cheats/': '/products/mw4/',
    '/cheats/lite/': '/products/mw4/mw4-cheats/',
    '/cheats/pro/': '/products/mw4/mw4-cheats/',
    '/cheats/elite/': '/products/mw4/mw4-cheats/',
    '/products/mw4/lite/': '/products/mw4/mw4-cheats/',
    '/products/mw4/pro/': '/products/mw4/mw4-cheats/',
    '/products/mw4/elite/': '/products/mw4/mw4-cheats/',
    '/products/mw4/account-recovery/': '/products/mw4/ugc/',
    '/cheats/compare/': '/blog/mw4-lite-vs-pro/',
    '/contact/': '/support/',
  },
  compressHTML: true,
  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'hover',
  },
  devToolbar: {
    enabled: false,
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404') && !page.includes('/go/'),
      serialize: sitemapSerialize,
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssMinify: true,
      minify: 'esbuild',
      target: 'es2022',
      modulePreload: { polyfill: false },
    },
  },
  build: {
    inlineStylesheets: 'always',
  },
});
