import { t } from '../i18n';
import { checkoutForSlug, checkoutPath } from '../config/checkout';
import type { IconName } from '../components/icons/types';

const blogHome = '/images/blog-home';
const spooferDir = '/images/spoofer';
const ugcDir = '/images/ugc-only';
const skinDir = '/images/skin-changer-only';

export interface ProductSlide {
  src: string;
  alt: string;
  caption: string;
  captionDesc: string;
  /** When true, skip -{w}.webp srcset (fixed assets from product ZIPs). */
  directSrc?: boolean;
}

export interface ProductOverview {
  title: string;
  paragraphs: string[];
}

export interface AcquisitionStep {
  num: string;
  title: string;
  desc: string;
}

export interface ProductAcquisition {
  title: string;
  steps: AcquisitionStep[];
}

export interface SystemRequirement {
  icon: IconName;
  text: string;
}

export interface ProductPage {
  slug: string;
  kind: 'tier' | 'utility';
  badge: string;
  category?: string;
  tier?: string;
  name: string;
  title: string;
  subtitle: string;
  desc: string;
  features: string[];
  more: number;
  variant?: 'essential' | 'popular' | 'limited';
  buyUrl: string;
  images: ProductSlide[];
  overview: ProductOverview;
  acquisition: ProductAcquisition;
  goodToKnow: string;
  limitations: string;
  fullFeatures: string[];
  systemRequirements: SystemRequirement[];
  about?: { type: 'h2' | 'p'; text: string }[];
  body: { type: 'h2' | 'p'; text: string }[];
  relatedBlogSlugs: string[];
}

/** Guides paired with each product detail page */
export const productRelatedBlogSlugs: Record<string, string[]> = {
  'mw4-cheats': [
    'mw4-map-and-esp-setup',
    'mw4-lite-vs-pro',
    'mw4-aim-settings-guide',
    'mw4-elite-tier-guide',
    'mw4-patch-day-checklist',
    'mw4-how-to-buy-mw4-tools',
  ],
  'hwid-spoofer': ['mw4-hwid-spoofer-after-ban', 'mw4-undetected-claims', 'mw4-patch-day-checklist', 'mw4-external-loader-guide'],
  ugc: ['mw4-undetected-claims', 'mw4-hwid-spoofer-after-ban', 'mw4-how-to-buy-mw4-tools'],
  'unlock-all': ['mw4-skin-changer-overview', 'mw4-cheat-client-worth-it', 'mw4-stream-overlay-setup'],
};

const productBase = '/products/mw4/';

const defaultAcquisitionSteps: AcquisitionStep[] = [
  {
    num: '01',
    title: 'Review current status',
    desc: 'Check the live banner on cheatsmw4.org and your operator Discord before purchase—especially after a MW4 or anti-cheat update.',
  },
  {
    num: '02',
    title: 'Choose your access tier',
    desc: 'Select MW4 Lite, Pro, or Elite in the portal (all under one checkout), or pick a standalone utility. Review the feature list before checkout via our secure link.',
  },
  {
    num: '03',
    title: 'Contact the team',
    desc: 'Open Discord and confirm availability, PC platform (Steam or Battle.net), and payment details with your order email ready.',
  },
  {
    num: '04',
    title: 'Follow guided setup',
    desc: 'Use only the operator portal, patch loader, and setup guide. Test in a private match, load conservative presets, then use live modes at your own risk.',
  },
];

function acquisitionFor(productName: string): ProductAcquisition {
  return {
    title: `How to get ${productName}`,
    steps: defaultAcquisitionSteps,
  };
}

const sharedGoodToKnow =
  'Call of Duty: Modern Warfare 4 and Ricochet receive frequent updates. Confirm module availability on the live status panel at cheatsmw4.org before you purchase or launch. Overlay behavior may differ in menus, replays, and spectator modes after patches.';

const sharedLimitations =
  'Third-party software in online games may violate Activision terms and can lead to account bans or hardware enforcement. You use this software at your own risk. Compatibility and availability can change after game, anti-cheat, or Windows updates without notice.';

const mwSystemRequirements: SystemRequirement[] = [
  { icon: 'reqWindows', text: 'Supported 64-bit edition of Windows 10 or Windows 11.' },
  { icon: 'reqSteam', text: 'Call of Duty: Modern Warfare 4 on PC (Steam or Battle.net) with latest patches.' },
  { icon: 'reqSettings', text: 'Administrator access for loader installation and patch updates.' },
  { icon: 'reqWifi', text: 'Stable internet connection for portal access and patch delivery.' },
  { icon: 'reqCpu', text: 'A system that meets MW4 published hardware requirements.' },
];

type GalleryEntry = {
  src: string;
  alt: string;
  caption: string;
  captionDesc: string;
  directSrc?: boolean;
};

type GalleryKey = keyof typeof galleryRaw;

/** Hero + MW4 product carousel: blogs-home.zip only (paths under /images/blog-home/). */
const galleryRaw = {
  blogMw1: {
    src: `${blogHome}/hero-slide-mw4-main.webp`,
    alt: 'Modern Warfare 4 PC scene',
    caption: 'Multiplayer',
    captionDesc: 'Reference still from our blog bundle—modes and settings vary by playlist.',
  },
  blogMw2: {
    src: `${blogHome}/hero-slide-mw4-visuals.webp`,
    alt: 'MW4 overlay and map awareness',
    caption: 'Awareness',
    captionDesc: 'ESP-style layers are tunable in the portal after checkout.',
  },
  blogMw3: {
    src: `${blogHome}/hero-slide-mw4-review-4.webp`,
    alt: 'MW4 client review screenshot',
    caption: 'Tiers',
    captionDesc: 'Lite, Pro, and Elite share one MW4 license path—pick the module set that fits.',
  },
  /** Extra home hero slides — blog-home pack only, all distinct (no spoofer/UGC/skin ZIP paths). */
  blogMw4: {
    src: `${blogHome}/mw4-map-and-esp-setup.webp`,
    alt: 'MW4 map awareness and ESP setup on PC',
    caption: 'Map awareness',
    captionDesc: 'From our blog-home asset set—ESP layers and playlist notes.',
  },
  blogMw5: {
    src: `${blogHome}/mw4-external-loader-guide.webp`,
    alt: 'External overlay loader workflow for MW4',
    caption: 'Loader',
    captionDesc: 'Overlay-first workflow—still from the blog bundle.',
  },
  blogMw6: {
    src: `${blogHome}/mw4-aim-settings-guide.webp`,
    alt: 'Aim and sensitivity tuning for MW4 on mouse and keyboard',
    caption: 'Aim tuning',
    captionDesc: 'Sensitivity and curve tips from the same blog-home images.',
  },
  spoofer1: {
    src: `${spooferDir}/hwid-spoofer-1-960.webp`,
    alt: 'HWID spoofer utility interface from product bundle',
    caption: 'HWID workflow',
    captionDesc: 'Follow the portal checklist before relaunching the game.',
    directSrc: true,
  },
  spoofer2: {
    src: `${spooferDir}/hwid-spoofer-3-960.webp`,
    alt: 'Hardware identifier verification view',
    caption: 'Verification',
    captionDesc: 'Cold reboot and identifier checks after spoofing.',
    directSrc: true,
  },
  ugcShot: {
    src: `${ugcDir}/ugc-gallery-1-960.webp`,
    alt: 'UGC appeal dashboard from product bundle',
    caption: 'Appeal workspace',
    captionDesc: 'Document timelines and evidence for platform review—not instant unban.',
    directSrc: true,
  },
  skinShot: {
    src: `${skinDir}/dayz-skin-changer-product-960.webp`,
    alt: 'Skin changer preview interface from product bundle',
    caption: 'Skin preview',
    captionDesc: 'Local preview for content testing—others may see default inventory.',
    directSrc: true,
  },
} as const satisfies Record<string, GalleryEntry>;

function slide(...keys: GalleryKey[]): ProductSlide[] {
  return keys.map((k) => {
    const item = galleryRaw[k];
    return {
      src: item.src,
      alt: item.alt,
      caption: item.caption,
      captionDesc: item.captionDesc,
      ...(item.directSrc ? { directSrc: true as const } : {}),
    };
  });
}

function slugFromHref(href: string): string {
  const segment = href.replace(productBase, '').replace(/^\//, '').replace(/\/$/, '');
  return segment || 'mw4-cheats';
}

const mw4MergedAbout: ProductPage['about'] = [
  {
    type: 'p',
    text: 'MW4 Cheats on CheatsMW4 covers Lite (awareness-first), Pro (awareness plus aim and recoil stacks), and Elite (full module set with Skin Changer preview and priority support when slots are open). One product page describes all three—you choose the tier in the operator portal after checkout.',
  },
  { type: 'h2', text: 'Lite — lower profile' },
  {
    type: 'p',
    text: 'Lite focuses on ESP, radar-style cues, and loot highlights without full aim automation. Stream-safe modes hide overlays from capture software when configured in the portal.',
  },
  { type: 'h2', text: 'Pro — awareness + execution' },
  {
    type: 'p',
    text: 'Pro inherits every Lite module and adds aim assist, recoil helpers, and weapon-class presets. Start with conservative profiles from our [aim settings guide](/blog/mw4-aim-settings-guide/) before raising sensitivity or FOV.',
  },
  { type: 'h2', text: 'Elite — full operator stack' },
  {
    type: 'p',
    text: 'Elite bundles everything in Lite and Pro with Skin Changer preview, expanded ESP filters, and priority patch support. Slots can be limited—check the cheatsmw4.org status banner and Discord before checkout.',
  },
];

const mw4MergedBody: ProductPage['body'] = [
  { type: 'h2', text: 'Feature snapshot' },
  {
    type: 'p',
    text: 'Shared across tiers where listed: player ESP, optional skeleton, 2D radar, loot highlights, stream-proof toggles, cloud config backup, and patch auto-updater. Pro and Elite add aim and recoil modules, weapon banks, and (Elite) Skin Changer preview and priority queues.',
  },
  { type: 'h2', text: 'Compare before you buy' },
  {
    type: 'p',
    text: 'Read [Lite vs Pro](/blog/mw4-lite-vs-pro/) and [Elite tier guide](/blog/mw4-elite-tier-guide/) to match the module list to the playlists you actually play.',
  },
];

const utilityBodies: Record<string, ProductPage['body']> = {
  'hwid-spoofer': [
    { type: 'h2', text: 'When you need it' },
    {
      type: 'p',
      text: 'Use when new accounts fail instantly on one PC but work elsewhere—typical hardware enforcement. For account-only shadowbans without a hardware flag, review [UGC](/products/mw4/ugc/) instead.',
    },
    { type: 'h2', text: 'Full workflow' },
    {
      type: 'p',
      text: 'Restore point, driver cleanup, spoof application, cold reboot, identifier verification, then conservative cheat profile before multiplayer. Full checklist ships in the portal and in our HWID blog guide.',
    },
  ],
  ugc: [
    { type: 'h2', text: 'What UGC covers' },
    {
      type: 'p',
      text: 'UGC (Unban & Governance Control) is an appeal workspace for platform restrictions, bans, and security flags—structured evidence and timelines, not a guaranteed reversal.',
    },
    { type: 'h2', text: 'Realistic expectations' },
    {
      type: 'p',
      text: 'Some enforcement actions cannot be undone. UGC helps you organize files and follow-ups for Activision or platform review. Pair with [HWID Spoofer](/products/mw4/hwid-spoofer/) when hardware is flagged.',
    },
  ],
  'unlock-all': [
    { type: 'h2', text: 'Local preview' },
    {
      type: 'p',
      text: 'Weapon and operator cosmetics may display locally for testing and content work. Other players in your lobby typically see your real store state.',
    },
    { type: 'h2', text: 'Bundled in Elite' },
    {
      type: 'p',
      text: 'Skin Changer ships inside the Elite tier. Buy standalone here if you want cosmetic preview without full combat modules.',
    },
  ],
};

const productContent: Record<
  string,
  Pick<ProductPage, 'overview' | 'images' | 'fullFeatures' | 'goodToKnow' | 'limitations' | 'systemRequirements'>
> = {
  'mw4-cheats': {
    images: slide('blogMw1', 'blogMw2', 'blogMw3'),
    goodToKnow: sharedGoodToKnow,
    limitations: sharedLimitations,
    systemRequirements: mwSystemRequirements,
    fullFeatures: [
      'Lite: ESP, radar, loot highlights, stream-proof',
      'Pro: all Lite + aim & recoil, weapon-class banks',
      'Elite: all Pro + Skin Changer preview, expanded filters, priority support',
      'Cloud config backup',
      'Patch auto-updater',
      'Portal presets for ranked and casual',
      'Discord operator support',
    ],
    overview: {
      title: 'MW4 Cheats — Lite, Pro, and Elite in one place',
      paragraphs: [
        'Pick the tier that matches how you play: awareness-only, aim stacks on top of awareness, or the full private build with extras. All tiers route through the same partner checkout and unlock the operator portal.',
        'Images on this page come from the same blog-and-home asset pack we use across CheatsMW4—no third-party gameplay grabs.',
      ],
    },
  },
  'hwid-spoofer': {
    images: slide('spoofer1', 'spoofer2'),
    goodToKnow:
      'Run the compatibility scan in the portal before spoofing. Create a Windows restore point first. Verify identifiers changed after a cold reboot before launching MW4.',
    limitations:
      'Spoofing does not fix every ban type. Never stack two spoof tools. Shared or work PCs may not be suitable. You accept all risk from driver-level changes.',
    systemRequirements: [
      { icon: 'reqWindows', text: 'Windows 10 or 11 64-bit with administrator access.' },
      { icon: 'reqRestorePoint', text: 'Ability to create a system restore point before running.' },
      { icon: 'reqShieldGuide', text: 'Follow the portal setup guide before launching MW4 after spoofing.' },
      { icon: 'reqWifi', text: 'Stable connection for portal verification tools.' },
    ],
    fullFeatures: [
      'Disk serial profile tools',
      'MAC address rotation',
      'Restore point checklist',
      'Compatibility scan',
      'Driver conflict detection',
      'Post-spoof verification',
      'Identifier diff report',
      'Cold reboot guide',
      'Portal step-by-step workflow',
      'Discord recovery support',
    ],
    overview: {
      title: 'Built around hardware recovery',
      paragraphs: [
        'The HWID Spoofer helps when Activision Ricochet flags your machine but you still need a clean identifier path. Tools ship with restore-point and verification steps.',
        'Use when fresh accounts fail on one rig but work elsewhere—not for every “Disconnected” message. Screenshots above are taken only from the SPOOFER product bundle.',
      ],
    },
  },
  ugc: {
    images: slide('ugcShot'),
    goodToKnow:
      'Gather order email, platform IDs, and enforcement screenshots before opening a ticket. UGC structures appeals—it does not bypass human review.',
    limitations:
      'UGC does not guarantee account restoration. Permanent hardware bans may need a different path than paperwork alone.',
    systemRequirements: [
      { icon: 'reqMailOrder', text: 'Order email used at checkout on cheatsmw4.org or your portal.' },
      { icon: 'reqShieldAccount', text: 'Account details and ban or restriction notices if available.' },
      { icon: 'reqWifiPortal', text: 'Internet access for Discord support and case dashboard.' },
    ],
    fullFeatures: [
      'Custom appeal workflows',
      'Restriction dispute templates',
      'Case documentation structure',
      'Status tracking dashboard',
      'Identity verification guide',
      'Evidence upload layout',
      'Timeline tracker',
      'Follow-up response templates',
    ],
    overview: {
      title: 'Built around account appeals',
      paragraphs: [
        'UGC helps you organize Activision and platform appeals with structured notes and automation—not instant unlock promises.',
        'Gallery images use only the UGC product ZIP supplied for this site.',
      ],
    },
  },
  'unlock-all': {
    images: slide('skinShot'),
    goodToKnow:
      'Skin Changer previews cosmetics locally. Other players usually see your real store unlocks—not every previewed blueprint.',
    limitations:
      'Local preview does not grant store ownership. Does not modify server-side entitlements.',
    systemRequirements: mwSystemRequirements,
    fullFeatures: [
      'Weapon blueprint preview',
      'Operator skin preview',
      'Attachment & camo browser',
      'Favorites and export lists',
      'Loadout snapshot (local)',
    ],
    overview: {
      title: 'Built for local cosmetic preview',
      paragraphs: [
        'Browse blueprints and operator skins locally in MW4—useful for thumbnails and offline concept work without claiming store purchases.',
        'Screenshots are sourced only from the Skin Changer bundle.',
      ],
    },
  },
};

function buildTierPages(): ProductPage[] {
  const cheat = t.cheats.items[0];
  if (!cheat) return [];
  const slug = slugFromHref(cheat.href);
  const content = productContent[slug];
  return [
    {
      slug,
      kind: 'tier',
      badge: cheat.badge,
      tier: cheat.tier,
      name: cheat.name,
      title: cheat.title,
      subtitle: cheat.desc,
      desc: cheat.desc,
      features: cheat.features,
      more: cheat.more,
      variant: cheat.variant,
      buyUrl: checkoutForSlug(slug),
      images: content.images,
      overview: content.overview,
      acquisition: acquisitionFor('MW4 Cheats'),
      goodToKnow: content.goodToKnow,
      limitations: content.limitations,
      fullFeatures: content.fullFeatures,
      systemRequirements: content.systemRequirements,
      about: mw4MergedAbout,
      body: mw4MergedBody,
      relatedBlogSlugs: productRelatedBlogSlugs[slug] ?? [],
    },
  ];
}

function buildUtilityPages(): ProductPage[] {
  return t.products.items
    .filter((p) => p.href !== productBase)
    .map((product) => {
      const slug = slugFromHref(product.href);
      const content = productContent[slug];
      return {
        slug,
        kind: 'utility',
        badge: product.badge,
        category: product.category,
        name: product.title,
        title: product.title,
        subtitle: product.subtitle,
        desc: product.desc,
        features: product.features,
        more: product.more,
        buyUrl: checkoutForSlug(slug),
        images: content.images,
        overview: content.overview,
        acquisition: acquisitionFor(product.title),
        goodToKnow: content.goodToKnow,
        limitations: content.limitations,
        fullFeatures: content.fullFeatures,
        systemRequirements: content.systemRequirements,
        body: utilityBodies[slug] ?? [],
        relatedBlogSlugs: productRelatedBlogSlugs[slug] ?? [],
      };
    });
}

export const productPages: ProductPage[] = [...buildTierPages(), ...buildUtilityPages()];

export const cheatPages = productPages.filter((p) => p.kind === 'tier');

export function getProductPage(slug: string) {
  return productPages.find((p) => p.slug === slug);
}

export function getCheatPage(slug: string) {
  return cheatPages.find((p) => p.slug === slug);
}

export function getAllProductSlugs() {
  return productPages.map((p) => p.slug);
}

export function getAllCheatSlugs() {
  return cheatPages.map((p) => p.slug);
}

export const heroSlides = slide('blogMw1', 'blogMw2', 'blogMw3', 'blogMw4', 'blogMw5', 'blogMw6');

export const productHub = {
  path: productBase,
  title: t.products.title,
  subtitle: t.products.subtitle,
  description: 'MW4 Cheats (Lite, Pro, Elite), HWID spoofer, UGC recovery, and Skin Changer utilities for PC.',
  buyUrl: checkoutPath('mw4'),
};
