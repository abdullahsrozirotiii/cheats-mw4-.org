export interface ForumComment {
  author: string;
  age: string;
  score: number;
  body: string;
  replies?: ForumComment[];
}

export interface ForumPost {
  slug: string;
  category: string;
  categoryTone: 'purple' | 'blue' | 'green' | 'orange';
  title: string;
  excerpt: string;
  author: string;
  age: string;
  commentsCount: number;
  upvotes: number;
  flair?: string;
  body: string[];
  comments: ForumComment[];
  sourceTitle?: string;
  sourcePath?: string;
}

export const forumCategories = [
  { name: 'General', tone: 'purple', icon: 'users' },
  { name: 'Guides & Builds', tone: 'blue', icon: 'navBlog' },
  { name: 'Patch Talk', tone: 'orange', icon: 'refresh' },
  { name: 'Community', tone: 'green', icon: 'messageCircle' },
] as const;

const additionalGuidePosts: ForumPost[] = [
  {
    slug: 'what-is-mw4-esp',
    category: 'Guides & Builds',
    categoryTone: 'blue',
    title: 'What does the ESP setup guide cover?',
    excerpt: 'Distance caps, skeleton toggles, and color choices for night maps.',
    author: 'guide_team',
    age: '2 days ago',
    commentsCount: 6,
    upvotes: 61,
    flair: 'Guide Q&A',
    sourceTitle: 'Map awareness and ESP setup for MW4 on PC',
    sourcePath: '/blog/mw4-map-and-esp-setup/',
    body: [
      'The guide explains how to enable core ESP layers, cap distances, and pick colors that stay readable when three lanes collapse at once.',
      'It suggests duplicating presets per map pack and testing in private matches before touching ranked.',
    ],
    comments: [
      {
        author: 'guide_team',
        age: 'From the guide',
        score: 0,
        body: 'Turn on one overlay layer at a time—cluttered screens cause more mistakes than “missing” information.',
      },
      {
        author: 'lane_igl',
        age: '2 days ago',
        score: 19,
        body: 'Distance cap around 70m saved me on Embassy—anything higher and the box field looked like soup.',
      },
      {
        author: 'night_ops',
        age: '44 hours ago',
        score: 14,
        body: 'Switched skeletons off for night variants; outline noise was worse than losing bone lines.',
      },
      {
        author: 'warmup_only',
        age: '36 hours ago',
        score: 11,
        body: 'Private match test is non-negotiable—first ranked round is the wrong place to learn your palette.',
      },
      {
        author: 'rgb_drift',
        age: '28 hours ago',
        score: 8,
        body: 'Magenta for allies / cyan for enemies reads better on snow than pure green for me.',
      },
      {
        author: 'solo_q',
        age: '15 hours ago',
        score: 6,
        body: 'When three lanes pinch I turn player ESP distance down—callouts from sound carry harder there.',
      },
    ],
  },
  {
    slug: 'how-to-tune-aim-curves',
    category: 'Guides & Builds',
    categoryTone: 'blue',
    title: 'How should I tune aim curves after switching from controller?',
    excerpt: 'Smoothing, ADS split, and why you should not max every slider on day one.',
    author: 'guide_team',
    age: '2 days ago',
    commentsCount: 6,
    upvotes: 54,
    flair: 'Guide Q&A',
    sourceTitle: 'Aim assist sliders that behave on mouse and keyboard',
    sourcePath: '/blog/mw4-aim-settings-guide/',
    body: [
      'The article recommends copying your base MW4 sensitivity first, then raising smoothing before you widen FOV for aim subsets.',
      'It also warns against changing smoothing and FOV in the same session—harder to know which knob caused drift.',
    ],
    comments: [
      {
        author: 'guide_team',
        age: 'From the guide',
        score: 0,
        body: 'Log numbers in a notes file when something feels good—you will forget them after the next patch.',
      },
      {
        author: 'ads_split',
        age: '47 hours ago',
        score: 21,
        body: 'ADS mult got me first—I matched hipfire in firing range before touching horizontal smoothing.',
      },
      {
        author: 'low_sens_main',
        age: '40 hours ago',
        score: 16,
        body: 'One column per session rule is real. I broke it once and blamed Ricochet for what was my own drunk curve.',
      },
      {
        author: 'rebirth_rot',
        age: '33 hours ago',
        score: 12,
        body: 'Resurgence needs slower vertical follow than 6v6—duplicate preset and label the mode.',
      },
      {
        author: 'patch_paranoia',
        age: '22 hours ago',
        score: 9,
        body: 'After title updates I reset to last known good JSON from portal export—beats re-guessing.',
      },
      {
        author: 'dm_caller',
        age: '11 hours ago',
        score: 5,
        body: 'If tracking feels “floaty” drop smoothing before you touch bone bias—fixed my long range whiff.',
      },
    ],
  },
  {
    slug: 'lite-vs-pro-summary',
    category: 'General',
    categoryTone: 'purple',
    title: 'How do Lite and Pro differ in real matches?',
    excerpt: 'Awareness-only versus aim stacks—pick based on killcam plausibility.',
    author: 'guide_team',
    age: '2 days ago',
    commentsCount: 7,
    upvotes: 72,
    flair: 'Guide Q&A',
    sourceTitle: 'Lite vs Pro for MW4: which tier fits your playlist',
    sourcePath: '/blog/mw4-lite-vs-pro/',
    body: [
      'Lite keeps overlays without full aim automation. Pro inherits Lite modules and unlocks aim + recoil assistance tuned for PC.',
      'The comparison reminds players that ranked killcams show crosshair paths—pick tiers you can explain to yourself, not just viewers.',
    ],
    comments: [
      {
        author: 'guide_team',
        age: 'From the guide',
        score: 0,
        body: 'If you already beam offline, Lite might be enough; add Pro only when recoil variance on new guns hurts consistency.',
      },
      {
        author: 'snd_caller',
        age: '1 day ago',
        score: 22,
        body: 'I stayed on Lite for Search because the killcam never showed snap flicks—just box info. Took pressure off when mates review VODs.',
      },
      {
        author: 'wz_rotates',
        age: '1 day ago',
        score: 18,
        body: 'Pro smoothing saved my long-range AR tracking but I had to lower ADS mult to match MW4’s default curve or it looked obvious in replay.',
      },
      {
        author: 'catwalk',
        age: '20 hours ago',
        score: 14,
        body: 'Elite is overkill if you never touch Skin Changer. Portal pricing made more sense once I counted how many nights I actually played ranked.',
      },
      {
        author: 'fresh_ssd',
        age: '18 hours ago',
        score: 11,
        body: 'Hardware was fine; it was account rep that got me. Article helped me stop blaming “wrong tier” when appeals were the real bottleneck.',
      },
      {
        author: 'pc_anchor',
        age: '12 hours ago',
        score: 9,
        body: 'Patch day I duplicated my Lite preset before touching Pro sliders—rollback is one click if Ricochet flips the banner to testing.',
      },
      {
        author: 'ticket_bot',
        age: '6 hours ago',
        score: 6,
        body: 'Discord staff asked for my portal version string—not guessing. Having Lite vs Pro written down in one post made that ticket fast.',
      },
    ],
  },
  {
    slug: 'patch-day-what-to-do',
    category: 'Patch Talk',
    categoryTone: 'orange',
    title: 'What is the first step after a Ricochet announcement?',
    excerpt: 'Status banners, loader hashes, and skipping launch-night queues.',
    author: 'guide_team',
    age: '2 days ago',
    commentsCount: 6,
    upvotes: 88,
    flair: 'Guide Q&A',
    sourceTitle: 'Ricochet patch-day checklist for MW4 tools',
    sourcePath: '/blog/mw4-patch-day-checklist/',
    body: [
      'Reload cheatsmw4.org, read Discord #status, download the newest loader build, and stay out of ranked until friends confirm stable connections.',
      'The checklist compares title updates vs anti-cheat-only maintenance—each scenario has different risk.',
    ],
    comments: [
      {
        author: 'guide_team',
        age: 'From the guide',
        score: 0,
        body: 'Screenshot your portal version string when everything works—support tickets move faster with proof.',
      },
      {
        author: 'status_f5',
        age: '2 days ago',
        score: 24,
        body: 'I wait for two friends on different ISPs to confirm stable matchmaking before I touch ranked—solo test isn’t enough.',
      },
      {
        author: 'loader_hash',
        age: '46 hours ago',
        score: 17,
        body: 'Compare file size on the new loader—when it matches Discord pin I know I didn’t grab a cached old build.',
      },
      {
        author: 'casual_first',
        age: '35 hours ago',
        score: 13,
        body: 'Title-only patch vs AC-only matters; I read the #status wording twice before deciding to queue.',
      },
      {
        author: 'eu_ping',
        age: '24 hours ago',
        score: 9,
        body: 'NA friends saying “fine” doesn’t mean EU routing is—give it a sleep.',
      },
      {
        author: 'backup_cfg',
        age: '8 hours ago',
        score: 7,
        body: 'Export portal JSON before updating—reimport beats rebuilding curves from memory.',
      },
    ],
  },
  {
    slug: 'skin-changer-expectations',
    category: 'General',
    categoryTone: 'purple',
    title: 'Does Skin Changer change what spectators see?',
    excerpt: 'Local previews vs live inventories—important for montage creators.',
    author: 'guide_team',
    age: '2 days ago',
    commentsCount: 6,
    upvotes: 41,
    flair: 'Guide Q&A',
    sourceTitle: 'Skin Changer preview: what other players actually see',
    sourcePath: '/blog/mw4-skin-changer-overview/',
    body: [
      'The guide clarifies that preview utilities edit client visuals; spectators and killcams still show authentic unlocks in most cases.',
      'It also tells creators to label test footage honestly to avoid misleading thumbnails.',
    ],
    comments: [
      {
        author: 'guide_team',
        age: 'From the guide',
        score: 0,
        body: 'Pair Skin Changer testing with the stream overlay guide if you record gameplay.',
      },
      {
        author: 'thumb_lab',
        age: '2 days ago',
        score: 15,
        body: 'I watermark “preview only” on concept clips—viewers assume everything on screen is live otherwise.',
      },
      {
        author: 'killcam_check',
        age: '40 hours ago',
        score: 12,
        body: 'Watched my own killcam back—enemy saw stock skin while I had a blueprint on my client. Good sanity check.',
      },
      {
        author: 'editor_mw',
        age: '31 hours ago',
        score: 10,
        body: 'Separate OBS scene for showcase vs ranked—stops me leaking preview into live tab.',
      },
      {
        author: 'bundle_buyer',
        age: '20 hours ago',
        score: 8,
        body: 'Elite bundle note helped; standalone preview is fine for me but I don’t pretend it’s full combat.',
      },
      {
        author: 'honest_title',
        age: '9 hours ago',
        score: 5,
        body: 'If thumbnail shows a blueprint I don’t own I say so in the first line—saves comment drama.',
      },
    ],
  },
];

export const forumPosts: ForumPost[] = [
  {
    slug: 'is-cheating-bannable-mw4',
    category: 'General',
    categoryTone: 'purple',
    title: 'Can I get banned for third-party MW4 tools?',
    excerpt: 'Yes—Activision publishes enforcement actions and Ricochet evolves constantly.',
    author: 'guide_team',
    age: '3 hours ago',
    commentsCount: 6,
    upvotes: 118,
    flair: 'Safety',
    sourceTitle: 'Undetected claims: what they actually mean',
    sourcePath: '/blog/mw4-undetected-claims/',
    body: [
      'Third-party software violates Call of Duty terms. Bans can be manual or automated.',
      'Treat “undetected” as a snapshot—read cheatsmw4.org status before every session and stop if the banner shows testing.',
    ],
    comments: [
      {
        author: 'pc_anchor',
        age: '2 hours ago',
        score: 31,
        body: 'Also clip your own killcams—if it looks robotic, dial presets back.',
      },
      {
        author: 'uav_stack',
        age: '1 hour ago',
        score: 14,
        body: 'Ricochet silent updates are the scary part. Discord #status is mandatory.',
      },
      {
        author: 'report_vol',
        age: '55 min ago',
        score: 12,
        body: 'Weekend squads report more—my casual preset is softer than my weekday one.',
      },
      {
        author: 'vac_watch',
        age: '42 min ago',
        score: 9,
        body: '“Undetected” in a seller Discord ≠ what Ricochet shipped this hour.',
      },
      {
        author: 'solo_ish',
        age: '28 min ago',
        score: 7,
        body: 'If status says testing I play something else—ego isn’t worth the lock.',
      },
      {
        author: 'replay_fan',
        age: '12 min ago',
        score: 5,
        body: 'Saved a bad killcam once—turned out my FOV assist looked worse than it felt.',
      },
    ],
  },
  {
    slug: 'steam-vs-battlenet-loader',
    category: 'Guides & Builds',
    categoryTone: 'blue',
    title: 'Does the loader care if I use Steam or Battle.net?',
    excerpt: 'Install path differs; overlay hooks stay external either way.',
    author: 'guide_team',
    age: '6 hours ago',
    commentsCount: 6,
    upvotes: 76,
    flair: 'Setup',
    sourceTitle: 'External loader guide: overlay-first MW4 workflow',
    sourcePath: '/blog/mw4-external-loader-guide/',
    body: [
      'You still run MW4 on PC, but each launcher uses different folder paths for backups.',
      'Follow the portal instructions for your launcher and keep Windows Defender exclusions consistent.',
    ],
    comments: [
      {
        author: 'wz_rotates',
        age: '5 hours ago',
        score: 19,
        body: 'Battle.net repair tool helps when shader cache corrupts overlays.',
      },
      {
        author: 'snd_igl',
        age: '4 hours ago',
        score: 11,
        body: 'Steam verify integrity is my first step before blaming the loader.',
      },
      {
        author: 'folder_guess',
        age: '3 hours ago',
        score: 14,
        body: 'Portal lists both install roots—I screenshot mine so tickets aren’t “where is game” ping-pong.',
      },
      {
        author: 'defender_win',
        age: '2 hours ago',
        score: 10,
        body: 'Exclusion on the loader folder only; excluding whole drive is overkill and scary.',
      },
      {
        author: 'dual_boot',
        age: '90 min ago',
        score: 8,
        body: 'I have both launchers—different portal presets per path saved me from mixed DLL paths.',
      },
      {
        author: 'sfc_scan',
        age: '40 min ago',
        score: 6,
        body: 'sfc /scannow after a bad Windows update fixed weird hook failures for me once.',
      },
    ],
  },
  {
    slug: 'ranked-presets-safe',
    category: 'Patch Talk',
    categoryTone: 'orange',
    title: 'Are ranked playlists higher risk than casual?',
    excerpt: 'Higher report volume and more killcam reviews—conservative presets matter.',
    author: 'guide_team',
    age: '10 hours ago',
    commentsCount: 6,
    upvotes: 64,
    flair: 'Risk',
    sourceTitle: 'Ranked and CDL-style playlists: protect your account',
    sourcePath: '/blog/mw4-rank-play-safety/',
    body: [
      'Yes. Ranked lobbies pair you with invested players who review killcams more often.',
      'Duplicate a casual preset before tightening curves for ranked—rollback is faster.',
    ],
    comments: [
      {
        author: 'flex_chall',
        age: '9 hours ago',
        score: 17,
        body: 'I queue casual until my new sensitivity stabilizes.',
      },
      {
        author: 'catwalk',
        age: '8 hours ago',
        score: 9,
        body: 'Audio-only weeks help me rely less on overlays—oddly lowers reports.',
      },
      {
        author: 'cdl_adj',
        age: '7 hours ago',
        score: 15,
        body: 'CDL-rule lobbies feel hotter on report volume—I shave aim assist layers there first.',
      },
      {
        author: 'review_mode',
        age: '6 hours ago',
        score: 11,
        body: 'Two teammates watching killcams in party chat caught awkward tracking before randoms did.',
      },
      {
        author: 'slow_rank',
        age: '5 hours ago',
        score: 8,
        body: 'I cap ranked sessions shorter—fatigue is when sliders creep up by accident.',
      },
      {
        author: 'snD_only',
        age: '3 hours ago',
        score: 6,
        body: 'Search has fewer respawns so every death gets dissected—worth a separate preset.',
      },
    ],
  },
  {
    slug: 'hwid-vs-new-pc',
    category: 'Community',
    categoryTone: 'green',
    title: 'HWID spoofer or new PC—which comes first?',
    excerpt: 'Depends whether Activision flagged hardware or account reputation.',
    author: 'guide_team',
    age: '14 hours ago',
    commentsCount: 6,
    upvotes: 52,
    flair: 'Recovery',
    sourceTitle: 'HWID spoofer after a hardware ban: realistic outcomes',
    sourcePath: '/blog/mw4-hwid-spoofer-after-ban/',
    body: [
      'If brand-new accounts die on one machine but work elsewhere, hardware bans are likely—review the HWID guide.',
      'If the same account fails everywhere, spoofing alone rarely fixes reputation issues—consider appeals via UGC workflows.',
    ],
    comments: [
      {
        author: 'fresh_ssd',
        age: '12 hours ago',
        score: 15,
        body: 'Document motherboard + disk serial before/after so support can see changes.',
      },
      {
        author: 'ticket_bot',
        age: '11 hours ago',
        score: 8,
        body: 'Appeal letters need timelines; UGC templates help organize that.',
      },
      {
        author: 'cafe_pc',
        age: '10 hours ago',
        score: 12,
        body: 'Borrowed a laptop login test: same account worked there → pointed me at HWID not “bad luck.”',
      },
      {
        author: 'appeal_first',
        age: '9 hours ago',
        score: 10,
        body: 'When every device failed I stopped chasing spoof and filed paperwork—took longer but matched reality.',
      },
      {
        author: 'restore_pt',
        age: '7 hours ago',
        score: 7,
        body: 'Restore point before any driver-level step—portal said it twice for a reason.',
      },
      {
        author: 'dual_acct',
        age: '4 hours ago',
        score: 5,
        body: 'Fresh account on phone hotspot vs home LAN helped me tell IP vs HWID stories apart.',
      },
    ],
  },
  ...additionalGuidePosts,
];

export function getForumPost(slug: string): ForumPost | undefined {
  return forumPosts.find((post) => post.slug === slug);
}
