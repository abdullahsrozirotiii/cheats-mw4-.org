import { PRODUCT_BASE } from '../config/site';

/** Normalize internal paths to match trailingSlash: 'always' and canonical URLs. */
export function withTrailingSlash(path: string): string {
  if (!path || path.startsWith('http') || path.startsWith('#') || path.startsWith('mailto:')) {
    return path;
  }
  const [pathname, hash = ''] = path.split('#');
  const normalized = pathname === '/' || pathname.endsWith('/') ? pathname : `${pathname}/`;
  return hash ? `${normalized}#${hash}` : normalized;
}

/** Former /cheats/* URLs → current routes (301 targets match astro.config + scripts/redirects.mjs). */
export const LEGACY_PATH_MAP: Record<string, string> = {
  '/cheats': PRODUCT_BASE,
  '/cheats/': PRODUCT_BASE,
  '/cheats/lite': `${PRODUCT_BASE}mw4-cheats/`,
  '/cheats/lite/': `${PRODUCT_BASE}mw4-cheats/`,
  '/cheats/pro': `${PRODUCT_BASE}mw4-cheats/`,
  '/cheats/pro/': `${PRODUCT_BASE}mw4-cheats/`,
  '/cheats/elite': `${PRODUCT_BASE}mw4-cheats/`,
  '/cheats/elite/': `${PRODUCT_BASE}mw4-cheats/`,
  '/cheats/compare': '/blog/mw4-lite-vs-pro/',
  '/cheats/compare/': '/blog/mw4-lite-vs-pro/',
  '/contact': '/support/',
  '/contact/': '/support/',
  '/products/dota-2-cheats': PRODUCT_BASE,
  '/products/dota-2-cheats/': PRODUCT_BASE,
  '/products/dota-2-cheats/lite': `${PRODUCT_BASE}mw4-cheats/`,
  '/products/dota-2-cheats/lite/': `${PRODUCT_BASE}mw4-cheats/`,
  '/products/dota-2-cheats/pro': `${PRODUCT_BASE}mw4-cheats/`,
  '/products/dota-2-cheats/pro/': `${PRODUCT_BASE}mw4-cheats/`,
  '/products/dota-2-cheats/elite': `${PRODUCT_BASE}mw4-cheats/`,
  '/products/dota-2-cheats/elite/': `${PRODUCT_BASE}mw4-cheats/`,
  '/products/dota-2-cheats/mw4-cheats': `${PRODUCT_BASE}mw4-cheats/`,
  '/products/dota-2-cheats/mw4-cheats/': `${PRODUCT_BASE}mw4-cheats/`,
  '/products/dota-2-cheats/hwid-spoofer': `${PRODUCT_BASE}hwid-spoofer/`,
  '/products/dota-2-cheats/hwid-spoofer/': `${PRODUCT_BASE}hwid-spoofer/`,
  '/products/dota-2-cheats/ugc': `${PRODUCT_BASE}ugc/`,
  '/products/dota-2-cheats/ugc/': `${PRODUCT_BASE}ugc/`,
  '/products/dota-2-cheats/unlock-all': `${PRODUCT_BASE}unlock-all/`,
  '/products/dota-2-cheats/unlock-all/': `${PRODUCT_BASE}unlock-all/`,
  '/products/dota-2-cheats/utilities': `${PRODUCT_BASE}utilities/`,
  '/products/dota-2-cheats/utilities/': `${PRODUCT_BASE}utilities/`,
  '/products/dota-2-cheats/account-recovery': `${PRODUCT_BASE}ugc/`,
  '/products/dota-2-cheats/account-recovery/': `${PRODUCT_BASE}ugc/`,
  '/go/dota-2': '/go/mw4/',
  '/go/dota-2/': '/go/mw4/',
};

export function normalizeInternalPath(href: string): string {
  if (!href || href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('/go/')) {
    return href;
  }

  const hashIndex = href.indexOf('#');
  const rawPath = hashIndex >= 0 ? href.slice(0, hashIndex) : href;
  const hash = hashIndex >= 0 ? href.slice(hashIndex) : '';

  let pathname = rawPath.startsWith('/') ? rawPath : `/${rawPath}`;
  pathname = LEGACY_PATH_MAP[pathname] ?? pathname;

  return withTrailingSlash(pathname) + hash;
}

export const ROUTES = {
  home: '/',
  blog: '/blog/',
  forum: '/forum/',
  products: PRODUCT_BASE,
  productsElite: `${PRODUCT_BASE}mw4-cheats/`,
  productsUtilities: `${PRODUCT_BASE}utilities/`,
  faq: '/faq/',
  terms: '/terms/',
  about: '/about/',
  support: '/support/',
  privacy: '/privacy/',
} as const;

export function blogPostPath(slug: string): string {
  return `/blog/${slug}/`;
}

/** @deprecated Use productPath — cheat tier pages live under products. */
export function cheatPath(slug: string): string {
  return productPath(slug);
}

export function productPath(slug: string): string {
  return `${PRODUCT_BASE}${slug}/`;
}
