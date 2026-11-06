import type { IconName } from '../components/icons/types';
import { normalizeInternalPath, productPath, ROUTES } from '../utils/path';

export type FaqTopic =
  | 'all'
  | 'plans'
  | 'esp'
  | 'scripts'
  | 'safety'
  | 'products'
  | 'blog'
  | 'setup';

export interface SiteFaqItem {
  id: string;
  topic: FaqTopic;
  icon: IconName;
  q: string;
  a: string;
  aHtml?: string;
  scopes?: string[];
}

function a(text: string): string {
  return text;
}

function link(text: string, href: string): string {
  return `<a href="${normalizeInternalPath(href)}">${text}</a>`;
}

const mw4Cheats = link('MW4 Cheats (Lite • Pro • Elite)', productPath('mw4-cheats'));
const productsHub = link('MW4 products', ROUTES.products);
const hwid = link('HWID Spoofer', productPath('hwid-spoofer'));
const ugc = link('UGC', productPath('ugc'));
const skin = link('Skin Changer', productPath('unlock-all'));
const faqPage = link('full FAQ', ROUTES.faq);
const blog = link('blog guides', ROUTES.blog);

export const siteFaqs: SiteFaqItem[] = [
  {
    id: 'status',
    topic: 'setup',
    icon: 'faqStatus',
    q: 'Where do I check if MW4 tools are online?',
    a: a('The live status banner is on cheatsmw4.org and in the Discord #status channel. Always check after a MW4 title update or Ricochet maintenance window.'),
  },
  {
    id: 'after-buy',
    topic: 'setup',
    icon: 'faqAfterBuy',
    q: 'What happens after I buy?',
    a: a('Your operator portal unlocks the loader, setup guide, and config library via our partner checkout. Follow the guide before launching MW4.'),
  },
  {
    id: 'platforms',
    topic: 'setup',
    icon: 'faqPlatforms',
    q: 'Which platforms are supported?',
    a: a('Call of Duty: Modern Warfare 4 on Windows 10/11 PC via Steam or Battle.net. Consoles and macOS are not supported for the builds we describe.'),
  },
  {
    id: 'license-move',
    topic: 'setup',
    icon: 'faqLicenseMove',
    q: 'Can I move my license to a new PC?',
    a: a('Usually yes—use the HWID reset in your portal or open a Discord ticket. Limits depend on your tier.'),
  },
  {
    id: 'products-page',
    topic: 'products',
    icon: 'faqProductsPage',
    q: 'Where are MW4 tiers and utilities listed?',
    a: `${productsHub} lists ${mw4Cheats} (Lite, Pro, Elite in the portal) plus ${hwid}, ${ugc}, and ${skin}. Checkout runs through our partner links.`,
  },
  {
    id: 'what-is-esp',
    topic: 'esp',
    icon: 'faqWhatIsEsp',
    q: 'What is MW4 ESP?',
    a: `${mw4Cheats} includes ESP-style overlays on the Lite path: player boxes, distance readouts, and optional skeletons. Pro and Elite add aim and recoil stacks on top in the same portal license flow.`,
    scopes: ['mw4-cheats'],
  },
  {
    id: 'esp-vs-scripts',
    topic: 'esp',
    icon: 'faqEspVsScripts',
    q: 'What is the difference between ESP and aim modules?',
    a: `ESP and radar layers show information—they do not replace aiming. Aim and recoil modules are enabled on Pro and Elite. You can stay awareness-only on Lite.`,
  },
  {
    id: 'which-tier-esp',
    topic: 'plans',
    icon: 'faqWhichTierEsp',
    q: 'Which tier is ESP-only?',
    a: `Lite is awareness-first: ESP, radar-style overlays, and loot highlights without the full aim suite. Pro adds aim curves. Elite adds the full module set plus extras like Skin Changer preview—all described on ${mw4Cheats}.`,
    scopes: ['mw4-cheats'],
  },
  {
    id: 'which-tier-scripts',
    topic: 'scripts',
    icon: 'faqWhichTierScripts',
    q: 'Which tier includes aim and recoil assistance?',
    a: `Pro and Elite ship aim and recoil tools in the portal. Lite does not include the full aim stack—only informational overlays.`,
    scopes: ['mw4-cheats'],
  },
  {
    id: 'rank-lite-vs-pro',
    topic: 'plans',
    icon: 'faqRankTiers',
    q: 'How do Lite vs Pro vs Elite compare?',
    a: `Awareness only → Lite. Aim + ESP → Pro. Full suite, Skin Changer preview, and priority support → Elite. See ${mw4Cheats} and read the ${faqPage}.`,
  },
  {
    id: 'elite-slots',
    topic: 'plans',
    icon: 'faqEliteSlots',
    q: 'Why is Elite limited slots?',
    a: `Elite includes priority patch handling and expanded modules. Slot caps keep support load realistic. Check the status banner before checkout.`,
    scopes: ['mw4-cheats'],
  },
  {
    id: 'stream-proof',
    topic: 'esp',
    icon: 'faqStreamProof',
    q: 'Can OBS capture my overlay?',
    a: `Stream-proof mode on Lite, Pro, and Elite hides overlays from common capture APIs. Record a local VOD before going live.`,
  },
  {
    id: 'undetected',
    topic: 'safety',
    icon: 'faqUndetected',
    q: 'Are undetected MW4 tools guaranteed?',
    a: a(
      'No. “Undetected” reflects current status—not a permanent promise. Stop immediately if the banner shows testing, updating, or offline.',
    ),
  },
  {
    id: 'esp-safer',
    topic: 'safety',
    icon: 'faqEspSafer',
    q: 'Is ESP safer than aim help?',
    a: a(
      'ESP may draw fewer obvious killcam patterns than maxed aim curves, but both violate game terms and can trigger Ricochet or reports.',
    ),
  },
  {
    id: 'hwid-when',
    topic: 'products',
    icon: 'faqHwidWhen',
    q: 'When do I need the HWID Spoofer?',
    a: `Use ${hwid} when fresh accounts fail instantly on one PC but work elsewhere—hardware-level flags. Pure account appeals without a hardware component may fit ${ugc} instead.`,
    scopes: ['hwid-spoofer'],
  },
  {
    id: 'ugc-what',
    topic: 'products',
    icon: 'faqUgcWhat',
    q: 'What is UGC?',
    a: `${ugc} structures appeals and documentation for Activision or platform enforcement—it is not a guaranteed unban.`,
    scopes: ['ugc'],
  },
  {
    id: 'skin-changer',
    topic: 'products',
    icon: 'faqSkinChanger',
    q: 'Does Skin Changer change my store purchases?',
    a: `${skin} previews cosmetics locally. Other players usually see your real unlocks. Included with the Elite tier path; also sold standalone for preview-only workflows.`,
    scopes: ['unlock-all'],
  },
  {
    id: 'external-loader',
    topic: 'products',
    icon: 'faqExternalLoader',
    q: 'Does the loader replace game files?',
    a: `We document an external overlay workflow—no manual copying into the MW4 install folder. Risk is never zero: follow ${productsHub} and partner instructions exactly.`,
  },
  {
    id: 'blog-vs-cheats',
    topic: 'blog',
    icon: 'faqBlogVsCheats',
    q: 'Are blog guides the same as private MW4 tools?',
    a: `Guides on ${blog} explain concepts and link to ${mw4Cheats}. They do not replace the portal software sold via partner checkout.`,
  },
  {
    id: 'blog-setup',
    topic: 'blog',
    icon: 'faqBlogSetup',
    q: 'Where do setup guides point for purchase?',
    a: `Articles link to tier pages and ${productsHub}. Checkout always runs through official redirects like /go/mw4/—never random EXE links from comments.`,
  },
  {
    id: 'compare-plans',
    topic: 'plans',
    icon: 'faqComparePlans',
    q: 'Where can I compare tiers?',
    a: `${mw4Cheats} lists how Lite, Pro, and Elite differ. The ${faqPage} aggregates common product questions.`,
  },
  {
    id: 'who-lite',
    topic: 'plans',
    icon: 'faqWhoLite',
    q: 'Who should stay on Lite?',
    a: `Players who only want map awareness—ESP, radar cues, loot highlights—and will not enable aim stacks. If you need aim help, choose Pro in the portal.`,
    scopes: ['mw4-cheats'],
  },
  {
    id: 'who-pro',
    topic: 'plans',
    icon: 'faqWhoPro',
    q: 'Who should buy Pro?',
    a: `PC players who want aim and recoil assistance stacked on top of every Lite module. Pro is the most common pick for multiplayer-focused buyers.`,
    scopes: ['mw4-cheats'],
  },
  {
    id: 'who-elite',
    topic: 'plans',
    icon: 'faqWhoElite',
    q: 'Who should buy Elite?',
    a: `Squads or creators who need Skin Changer preview, expanded filters, and faster Discord escalation when Ricochet turbulence hits.`,
    scopes: ['mw4-cheats'],
  },
  {
    id: 'vac-update',
    topic: 'safety',
    icon: 'faqVacUpdate',
    q: 'What should I do after a Ricochet or title patch?',
    a: a('Refresh cheatsmw4.org status and Discord #status. Do not launch while the banner shows testing. Re-download loaders when staff announce new hashes.'),
  },
  {
    id: 'discord-help',
    topic: 'setup',
    icon: 'faqDiscordHelp',
    q: 'How do I get install help?',
    a: a('Open Discord after purchase with your order email, Windows build, and launcher (Steam vs Battle.net). Paste exact error text, not paraphrased summaries.'),
  },
  {
    id: 'turbo-ranked',
    topic: 'plans',
    icon: 'faqTurboRanked',
    q: 'Do presets differ by playlist?',
    a: `Yes—portal presets include separate slots for respawn modes, Search and Destroy-style rounds, and large-map playlists. Clone before experimenting.`,
  },
  {
    id: 'zoom-hack',
    topic: 'esp',
    icon: 'faqZoomHack',
    q: 'Is there a FOV or camera helper?',
    a: `FOV and camera assists (when available) ship alongside ESP layers on Lite and above. Keep values close to legitimate settings to avoid obvious clips.`,
    scopes: ['mw4-cheats'],
  },
  {
    id: 'auto-farm',
    topic: 'scripts',
    icon: 'faqAutoFarm',
    q: 'Is there bot-style automation?',
    a: a(
      'MW4-focused builds emphasize aim and awareness—not idle bot farming. Read each tier list on the product page for the exact module names shipping today.',
    ),
    scopes: ['mw4-cheats'],
  },
  {
    id: 'private-cheats',
    topic: 'safety',
    icon: 'faqPrivateCheats',
    q: 'What does “private build” mean?',
    a: a(
      'Private means limited distribution with per-user licensing—not a public paste. You still accept all enforcement risk when playing online.',
    ),
  },
  {
    id: 'faq-more',
    topic: 'all',
    icon: 'faqMore',
    q: 'Where is the full FAQ?',
    a: `This site includes landing FAQs and per-product sections. Open the ${faqPage} or continue reading ${blog} for long-form setup notes.`,
  },
];

export function getLandingFaqs(): SiteFaqItem[] {
  return siteFaqs.filter((f) =>
    ['status', 'after-buy', 'platforms', 'license-move', 'products-page', 'rank-lite-vs-pro'].includes(f.id),
  );
}

export function getAllFaqs(): SiteFaqItem[] {
  return siteFaqs.filter((f) => f.topic !== 'all');
}

/** Shared FAQ block copy + filters (home, /faq/, products, blog). */
export const SITE_FAQ_SECTION_COPY = {
  eyebrow: 'All topics',
  title: 'Browse by category',
  subtitle: 'Filter tiers, ESP, aim modules, products, blog, and setup answers.',
} as const;

export const SITE_FAQ_FILTER_TOPICS: FaqTopic[] = ['all', 'plans', 'esp', 'scripts', 'safety', 'products', 'blog', 'setup'];

/** Section copy when FAQ list is scoped to the current page (not /faq/). */
export const CONTEXTUAL_FAQ_SECTION_COPY = {
  eyebrow: 'FAQ',
  title: 'Questions about this page',
  subtitle: 'Answers tied to what you are reading—visit the FAQ page for every topic.',
} as const;

export function faqFilterTopicsForItems(items: SiteFaqItem[]): FaqTopic[] {
  const present = new Set(items.map((item) => item.topic));
  const topics: FaqTopic[] = ['all'];
  for (const topic of SITE_FAQ_FILTER_TOPICS) {
    if (topic !== 'all' && present.has(topic)) topics.push(topic);
  }
  return topics;
}

export function getProductFaqs(slug: string, kind: 'tier' | 'utility'): SiteFaqItem[] {
  const general = siteFaqs.filter(
    (f) => !f.scopes && ['setup', 'safety', 'plans', 'esp', 'scripts'].includes(f.topic),
  );
  const scoped = siteFaqs.filter((f) => f.scopes?.includes(slug));
  const tierCompare = siteFaqs.filter((f) =>
    ['rank-lite-vs-pro', 'compare-plans', 'undetected', 'vac-update'].includes(f.id),
  );

  const combined =
    kind === 'tier' ? [...scoped, ...tierCompare, ...general.slice(0, 8)] : [...scoped, ...general.slice(0, 6)];

  const seen = new Set<string>();
  return combined.filter((item) => {
    if (seen.has(item.id)) return false;
    seen.add(item.id);
    return true;
  });
}

const blogTopicFaqs: Record<string, SiteFaqItem[]> = {
  Guides: [
    {
      id: 'blog-guide-tier',
      topic: 'blog',
      icon: 'faqBlogGuideTier',
      q: 'Which tier matches this guide?',
      a: `Awareness-heavy posts → Lite. Aim tuning posts → Pro. Full-suite or Skin Changer topics → Elite. All tiers are covered on ${mw4Cheats}.`,
    },
    {
      id: 'blog-guide-status',
      topic: 'blog',
      icon: 'faqBlogGuideStatus',
      q: 'Is this guide still valid after a patch?',
      a: a('Compare the publish date with today’s status banner. Ricochet updates can disable modules without changing the article text immediately.'),
    },
  ],
  Setup: [
    {
      id: 'blog-setup-loader',
      topic: 'blog',
      icon: 'faqBlogSetupLoader',
      q: 'Where do I download the loader?',
      a: a('Only from the operator portal linked after partner checkout—not from DMs or unofficial mirrors.'),
    },
  ],
  Security: [
    {
      id: 'blog-sec-vac',
      topic: 'blog',
      icon: 'faqBlogSecVac',
      q: 'Does this article guarantee I will stay undetected?',
      a: a('No. Undetected is a moment-in-time label—stop immediately if status shows testing or offline.'),
    },
  ],
};

const defaultBlogFaqs: SiteFaqItem[] = [
  {
    id: 'blog-default-1',
    topic: 'blog',
    icon: 'faqBlogDefault1',
    q: 'Are blog posts official product documentation?',
    a: `Articles explain workflows and link to ${mw4Cheats} and ${productsHub}. Feature lists on live product pages stay authoritative.`,
  },
  {
    id: 'blog-default-2',
    topic: 'blog',
    icon: 'faqBlogDefault2',
    q: 'Need help applying this guide?',
    a: a('Join Discord with your order email and the article slug so staff can reference the same presets.'),
  },
  {
    id: 'blog-default-3',
    topic: 'blog',
    icon: 'faqBlogDefault3',
    q: 'Will these settings work after the next patch?',
    a: a('Re-check cheatsmw4.org status after every MW4 update. Reload portal presets instead of copying month-old numbers.'),
  },
];

export function getBlogFaqs(tag: string, slug: string): SiteFaqItem[] {
  const topicFaqs = blogTopicFaqs[tag] ?? [];
  const slugHints: SiteFaqItem[] = [];

  if (slug.includes('map') || slug.includes('esp')) {
    slugHints.push({
      id: 'blog-slug-esp',
      topic: 'esp',
      icon: 'faqBlogSlugEsp',
      q: 'Which tier covers ESP from this article?',
      a: `Lite includes informational overlays. Pro layers aim assistance on top.`,
    });
  }
  if (slug.includes('aim') || slug.includes('recoil') || slug.includes('loadout')) {
    slugHints.push({
      id: 'blog-slug-scripts',
      topic: 'scripts',
      icon: 'faqBlogSlugScripts',
      q: 'Which tier includes aim tuning?',
      a: `Pro and Elite include aim stacks. Lite is awareness-first.`,
    });
  }
  if (slug.includes('hwid') || slug.includes('ban') || slug.includes('undetected')) {
    slugHints.push({
      id: 'blog-slug-hwid',
      topic: 'products',
      icon: 'faqBlogSlugHwid',
      q: 'Does this replace HWID or UGC products?',
      a: `Guides complement ${hwid} and ${ugc}—read product pages for realistic outcomes.`,
    });
  }

  return [...slugHints, ...topicFaqs, ...defaultBlogFaqs].slice(0, 8);
}

export const compareRows = [
  { feature: 'Player ESP & boxes', icon: 'comparePlayerEsp' as const, lite: true, pro: true, elite: true },
  { feature: '2D radar / minimap assist', icon: 'compareMinimapHack' as const, lite: true, pro: true, elite: true },
  { feature: 'Loot & weapon highlights', icon: 'compareWardLocator' as const, lite: true, pro: true, elite: true },
  { feature: 'Distance readouts', icon: 'compareRuneTimer' as const, lite: true, pro: true, elite: true },
  { feature: 'Stream-proof overlays', icon: 'compareStreamproof' as const, lite: true, pro: true, elite: true },
  { feature: 'Skeleton ESP (optional)', icon: 'compareZoomHack' as const, lite: true, pro: true, elite: true },
  { feature: 'Aim & recoil assistance', icon: 'compareAutoCombo' as const, lite: false, pro: true, elite: true },
  { feature: 'Trigger / ADS subset', icon: 'compareTargetSelector' as const, lite: false, pro: true, elite: true },
  { feature: 'Humanized smoothing curves', icon: 'compareOrbwalker' as const, lite: false, pro: true, elite: true },
  { feature: 'Weapon-class preset banks', icon: 'compareActivator' as const, lite: false, pro: true, elite: true },
  { feature: 'Playlist-specific configs', icon: 'compareAbilityRadius' as const, lite: false, pro: true, elite: true },
  { feature: 'Expanded ESP filters', icon: 'compareSmokeAlert' as const, lite: false, pro: false, elite: true },
  { feature: 'Skin Changer preview', icon: 'compareSkinChanger' as const, lite: false, pro: false, elite: true },
  { feature: 'Priority patch queue', icon: 'comparePriorityPatch' as const, lite: false, pro: false, elite: true },
  { feature: 'Direct dev Discord line', icon: 'compareDevSupport' as const, lite: false, pro: false, elite: true },
  { feature: 'Cloud config backup', icon: 'compareCloudBackup' as const, lite: true, pro: true, elite: true },
];
