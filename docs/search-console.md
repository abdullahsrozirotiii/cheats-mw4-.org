# Search Console workflow (cheatsmw4.org)

Use this checklist after the production site is live on `https://cheatsmw4.org`.

1. Open [Google Search Console](https://search.google.com/search-console) and add the **domain** property for `cheatsmw4.org` (DNS verification).
2. Under **Sitemaps**, submit: `https://cheatsmw4.org/sitemap.xml`
3. When pages earn impressions, tune titles and descriptions in [`src/config/pageSeo.ts`](../src/config/pageSeo.ts) and redeploy.
4. Map queries to URLs (examples — replace with data from your Search Console export):

| Query theme | Primary landing |
|-------------|-----------------|
| Modern Warfare 4 cheats (broad) | `/` |
| MW4 Lite vs Pro | `/blog/mw4-lite-vs-pro/` |
| Ricochet / patch checklist | `/blog/mw4-patch-day-checklist/` |
| HWID / recovery | `/products/dota-2-cheats/hwid-spoofer/` |

*Do not treat this table as keyword volume data—only Search Console or third-party tools with your login provide real metrics.*
