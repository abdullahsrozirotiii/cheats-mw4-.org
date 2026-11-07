# MW4 keyword map (cheatsmw4.org)

This is a **qualitative** page map for search intent. It does **not** include search volume, keyword difficulty, or CPC—those require your own data from [Google Keyword Planner](https://ads.google.com/home/tools/keyword-planner), [Microsoft Advertising Keyword Planner](https://about.ads.microsoft.com/en-us/tools/keyword-planner), Ahrefs, Semrush, or **Google Search Console** once the site is live.

## How to use

1. After go-live, export **Queries** and **Pages** from Search Console and align them with the URLs below.
2. Prefer long-tail, intent-specific phrases (setup, patch, tier comparison, HWID) over single-word head terms, which are typically crowded for game-related queries.
3. Refresh titles and meta descriptions in [`src/config/pageSeo.ts`](../src/config/pageSeo.ts) using **real** query data, not guesses.

## Primary themes (examples)

| Theme | Example phrases (not volume-ranked) | Primary URL |
|-------|-------------------------------------|-------------|
| Brand / site | cheatsmw4, cheatsmw4.org, MW4 tools site | `/` |
| Tiers & comparison | MW4 Lite vs Pro, Elite tier, cheat tiers PC | `/products/mw4/`, `/blog/mw4-lite-vs-pro/` |
| Setup & safety | Ricochet patch day, undetected claims, ban risk | `/blog/mw4-patch-day-checklist/`, `/blog/mw4-undetected-claims/`, `/faq/` |
| Utilities | HWID spoofer MW4, UGC recovery, skin changer | `/products/mw4/hwid-spoofer/`, `/products/mw4/ugc/`, `/products/mw4/unlock-all/` |
| Gameplay guides | loadouts, graphics settings, Warzone notes | `/blog/` (various slugs) |

## Supporting pages

- **Blog index** (`/blog/`): captures informational intent for guides and patch notes.
- **Forum** (`/forum/`): community-style questions; keep indexable but avoid thin duplicate content vs blog.
- **Support** (`/support/`): contact and help; pair with Organization schema and consistent NAP-style details if applicable.

## Verified vs assumed

| Statement | Status |
|-----------|--------|
| Page ↔ topic mapping above | Assumed intent (not from Search Console yet) |
| Any numeric volume or KD | **Not stated** — needs your tool accounts |
