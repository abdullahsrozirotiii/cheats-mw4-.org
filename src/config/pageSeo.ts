/**
 * Central titles/descriptions for high-traffic routes.
 * After Search Console shows impressions, edit the matching path here and redeploy.
 */

export interface PageSeoEntry {
  title: string;
  description: string;
}

export const PAGE_SEO: Record<string, PageSeoEntry> = {
  '/': {
    title: 'MW4 Cheats – Aimbot, ESP, and Radar for PC players',
    description:
      'MW4 cheats for PC with soft aim, player ESP, wallhack, 2D radar, triggerbot, and separate 6v6 or DMZ configs on supported builds.',
  },
  '/products/dota-2-cheats/': {
    title: 'MW4 Cheats & Utilities | Products — CheatsMW4',
    description:
      'Compare MW4 cheats (Lite, Pro, Elite) with the HWID spoofer, UGC appeals, and Skin Changer preview. Feature lists and partner checkout.',
  },
  '/products/dota-2-cheats/mw4-cheats/': {
    title: 'MW4 Cheats (Lite, Pro, Elite) | CheatsMW4',
    description:
      'Buy MW4 cheats for PC: Lite for ESP and radar, Pro for aim and recoil, Elite for the full stack plus Skin Changer preview.',
  },
  '/products/dota-2-cheats/hwid-spoofer/': {
    title: 'MW4 HWID Spoofer | Hardware Recovery — CheatsMW4',
    description:
      'HWID spoofer for MW4 on PC when a hardware flag blocks new accounts. Restore-point steps and verification live in the portal.',
  },
  '/products/dota-2-cheats/ugc/': {
    title: 'MW4 UGC Appeals | Documentation — CheatsMW4',
    description:
      'UGC organizes MW4 account appeals and evidence timelines. It does not guarantee an unban—pair it with the HWID guide when hardware is flagged.',
  },
  '/products/dota-2-cheats/unlock-all/': {
    title: 'MW4 Skin Changer Preview | CheatsMW4',
    description:
      'Skin Changer for MW4 previews blueprints and operator skins locally. Other players usually still see your real unlocks.',
  },
  '/products/dota-2-cheats/utilities/': {
    title: 'MW4 Utilities | Spoofer, UGC, Skin Changer',
    description:
      'When to use each MW4 utility: hardware recovery, appeal paperwork, or local cosmetic preview—links to the full product pages.',
  },
  '/blog/': {
    title: 'Blog – MW4 guides, patch notes, and PC setup tips.',
    description:
      'Blog with informational PC guides covering ESP setup, aim settings, Lite versus Pro, Ricochet patch checks, and loadout notes.',
  },
  '/forum/': {
    title: 'Forum – Read MW4 discussions tied to our guides here',
    description:
      'Forum for MW4 discussions tied to the guides: ESP, aim curves, Lite versus Pro, patch day, and HWID recovery notes for players.',
  },
  '/faq/': {
    title: 'FAQ – Tiers, setup, checkout, and PC platform help',
    description:
      'FAQ covering Lite versus Pro versus Elite, ESP and aim modules, PC platforms, license moves, and partner checkout steps.',
  },
  '/terms/': {
    title: 'Terms & Conditions | CheatsMW4',
    description:
      'Terms for using cheatsmw4.org and buying MW4 cheats or utilities through partner checkout, including enforcement risk.',
  },
  '/privacy/': {
    title: 'Privacy Policy – Analytics, cookies, and support data',
    description:
      'Privacy Policy: How cheatsmw4.org handles analytics, cookies, and support messages. Card data stays on the partner checkout, not this site.',
  },
  '/about/': {
    title: 'Guides – About CheatsMW4, PC setup, and utilities.',
    description:
      'CheatsMW4 publishes Modern Warfare 4 cheat comparisons, PC setup guides, and utility pages for players evaluating a purchase.',
  },
  '/support/': {
    title: 'MW4 Cheats Support | Loader & Checkout Help',
    description:
      'Support for MW4 cheats: loader errors, HWID resets, and order questions. Browse the forum or open checkout with your order email ready.',
  },
};

export function normalizeSeoPath(pathname: string): string {
  let path = pathname || '/';
  if (!path.startsWith('/')) path = `/${path}`;
  if (path !== '/' && !path.endsWith('/')) path = `${path}/`;
  return path;
}

export function getPageSeoEntry(pathname: string): PageSeoEntry | undefined {
  return PAGE_SEO[normalizeSeoPath(pathname)];
}
