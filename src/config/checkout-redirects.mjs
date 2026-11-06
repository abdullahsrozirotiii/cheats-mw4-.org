/** Checkout destinations keyed by internal product id (no affiliate codes). */
export const CHECKOUT_URLS = {
  mw4: 'https://zadeyo.com/go/ABDULLAH?to=%2Fproducts%2Fmw4',
  skinChanger: 'https://zadeyo.com/go/ABDULLAH?to=%2Fproducts%2Fskin-changer',
  hwidSpoofer: 'https://zadeyo.com/go/ABDULLAH?to=%2Fproducts%2Fhwid-spoofer',
  ugc: 'https://zadeyo.com/go/ABDULLAH?to=%2Fproducts%2Fugc',
};

/** Checkout paths → external product URLs (used by Node serve + Astro middleware). */
export const CHECKOUT_PATH_REDIRECTS = new Map([
  ['/go/mw4', CHECKOUT_URLS.mw4],
  ['/go/mw4/', CHECKOUT_URLS.mw4],
  // Legacy slug from template — same MW4 checkout target
  ['/go/dota-2', CHECKOUT_URLS.mw4],
  ['/go/dota-2/', CHECKOUT_URLS.mw4],
  ['/go/skin-changer', CHECKOUT_URLS.skinChanger],
  ['/go/skin-changer/', CHECKOUT_URLS.skinChanger],
  ['/go/hwid-spoofer', CHECKOUT_URLS.hwidSpoofer],
  ['/go/hwid-spoofer/', CHECKOUT_URLS.hwidSpoofer],
  ['/go/ugc', CHECKOUT_URLS.ugc],
  ['/go/ugc/', CHECKOUT_URLS.ugc],
]);

export function resolveCheckoutPathRedirect(pathname) {
  const direct = CHECKOUT_PATH_REDIRECTS.get(pathname);
  if (direct) return direct;

  if (pathname !== '/' && !pathname.endsWith('/')) {
    return CHECKOUT_PATH_REDIRECTS.get(`${pathname}/`) ?? null;
  }

  return null;
}
