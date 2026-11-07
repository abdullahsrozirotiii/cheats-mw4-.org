/** Static path redirects (301). Keys are pathname without query/hash. */
const TIER = '/products/mw4/mw4-cheats/';
const HUB = '/products/mw4/';

export const PATH_REDIRECTS = new Map([
  ['/blog', '/blog/'],
  ['/about', '/about/'],
  ['/contact', '/support/'],
  ['/contact/', '/support/'],
  ['/support', '/support/'],
  ['/privacy', '/privacy/'],
  ['/terms', '/terms/'],
  ['/faq', '/faq/'],
  ['/cheats', HUB],
  ['/cheats/', HUB],
  ['/cheats/lite', TIER],
  ['/cheats/lite/', TIER],
  ['/cheats/pro', TIER],
  ['/cheats/pro/', TIER],
  ['/cheats/elite', TIER],
  ['/cheats/elite/', TIER],
  ['/cheats/compare', '/blog/mw4-lite-vs-pro/'],
  ['/cheats/compare/', '/blog/mw4-lite-vs-pro/'],
  ['/products/mw4', HUB],
  ['/products/mw4/utilities', '/products/mw4/utilities/'],
  ['/products/mw4/lite', TIER],
  ['/products/mw4/lite/', TIER],
  ['/products/mw4/pro', TIER],
  ['/products/mw4/pro/', TIER],
  ['/products/mw4/elite', TIER],
  ['/products/mw4/elite/', TIER],
  ['/products/mw4/account-recovery', '/products/mw4/ugc/'],
  ['/products/mw4/account-recovery/', '/products/mw4/ugc/'],
  ['/go/dota-2', '/go/mw4/'],
  ['/go/dota-2/', '/go/mw4/'],
  ['/products/dota-2-cheats', HUB],
  ['/products/dota-2-cheats/', HUB],
  ['/products/dota-2-cheats/lite', TIER],
  ['/products/dota-2-cheats/lite/', TIER],
  ['/products/dota-2-cheats/pro', TIER],
  ['/products/dota-2-cheats/pro/', TIER],
  ['/products/dota-2-cheats/elite', TIER],
  ['/products/dota-2-cheats/elite/', TIER],
  ['/products/dota-2-cheats/account-recovery', '/products/mw4/ugc/'],
  ['/products/dota-2-cheats/account-recovery/', '/products/mw4/ugc/'],
  ['/products/dota-2-cheats/mw4-cheats', TIER],
  ['/products/dota-2-cheats/mw4-cheats/', TIER],
  ['/products/dota-2-cheats/hwid-spoofer', '/products/mw4/hwid-spoofer/'],
  ['/products/dota-2-cheats/hwid-spoofer/', '/products/mw4/hwid-spoofer/'],
  ['/products/dota-2-cheats/ugc', '/products/mw4/ugc/'],
  ['/products/dota-2-cheats/ugc/', '/products/mw4/ugc/'],
  ['/products/dota-2-cheats/unlock-all', '/products/mw4/unlock-all/'],
  ['/products/dota-2-cheats/unlock-all/', '/products/mw4/unlock-all/'],
  ['/products/dota-2-cheats/utilities', '/products/mw4/utilities/'],
  ['/products/dota-2-cheats/utilities/', '/products/mw4/utilities/'],
]);

/** Paths that should not receive a forced trailing slash. */
export const TRAILING_SLASH_SKIP = /\.[a-z0-9]+$/i;

export function resolvePathRedirect(pathname) {
  const direct = PATH_REDIRECTS.get(pathname);
  if (direct) return direct;

  if (pathname !== '/' && !pathname.endsWith('/') && !TRAILING_SLASH_SKIP.test(pathname)) {
    return `${pathname}/`;
  }

  return null;
}
