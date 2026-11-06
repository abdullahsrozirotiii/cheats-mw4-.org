import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { sitemapSerialize } from './src/config/sitemap.ts';

export default defineConfig({
  site: 'https://cheatsmw4.org',
  trailingSlash: 'always',
  redirects: {
    '/cheats/': '/products/dota-2-cheats/',
    '/cheats/lite/': '/products/dota-2-cheats/mw4-cheats/',
    '/cheats/pro/': '/products/dota-2-cheats/mw4-cheats/',
    '/cheats/elite/': '/products/dota-2-cheats/mw4-cheats/',
    '/products/dota-2-cheats/lite/': '/products/dota-2-cheats/mw4-cheats/',
    '/products/dota-2-cheats/pro/': '/products/dota-2-cheats/mw4-cheats/',
    '/products/dota-2-cheats/elite/': '/products/dota-2-cheats/mw4-cheats/',
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
