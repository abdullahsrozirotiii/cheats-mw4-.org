# Cloudflare Workers (static deploy) — cheatsmw4.org

The site is an Astro static build. [`wrangler.jsonc`](../wrangler.jsonc) serves `dist` with Workers Static Assets. Connect the GitHub repo so every future push stores a build log in Cloudflare.

## Workers Builds

In the Cloudflare dashboard: **Workers & Pages → Create → Import a repository**. Choose `abdullahsrozirotiii/cheats-mw4-.org`, branch `main`.

| Setting | Value |
| --- | --- |
| Build command | `npm run build` |
| Deploy command | `npx wrangler deploy` |
| Preview command | `npx wrangler preview` |
| Root directory | repository root |
| Build variable | `NODE_VERSION` = `22` |

Wrangler is a devDependency, so Workers Builds uses that version. Build output is `dist` (set in `wrangler.jsonc`, not as a separate “output directory” field).

After the first successful deploy, open the Worker → **Deployments**. Each later push to `main` adds a row with the full build log. Non-production branches get preview builds when preview builds are enabled.

GitHub also runs [`.github/workflows/build.yml`](../.github/workflows/build.yml) on every push and pull request. The Actions run log is the live output. The same run uploads `build.log` as an artifact kept for 90 days.

Optional environment variables stay build-only unless you also add them under **Settings → Variables & Secrets** for runtime.

## Environment variables (optional)

Set these as Workers Builds variables (**Settings → Build**). Only values prefixed with `PUBLIC_` are exposed to the client in Astro.

| Variable | Purpose |
|----------|---------|
| `PUBLIC_GA_MEASUREMENT_ID` | Google Analytics 4 measurement ID (see [`src/layouts/BaseLayout.astro`](../src/layouts/BaseLayout.astro)) |
| `PUBLIC_TWITTER_SITE` | Twitter `site` handle for meta (optional) |
| `PUBLIC_TWITTER_CREATOR` | Twitter `creator` handle for meta (optional) |
| `PUBLIC_ORG_SAME_AS` | Comma-separated social/profile URLs for Organization `sameAs` in JSON-LD |
| `PUBLIC_SITE_ORIGIN` | Override site origin for [`scripts/finalize-sitemap.mjs`](../scripts/finalize-sitemap.mjs) if needed (defaults to production domain) |
| `INDEXNOW_KEY` | IndexNow key (server/build only; used by [`scripts/indexnow.mjs`](../scripts/indexnow.mjs) at build time—do **not** prefix with `PUBLIC_`) |

## Routing

- **Trailing slashes**: the site uses `trailingSlash: 'always'` in [`astro.config.mjs`](../astro.config.mjs). `wrangler.jsonc` sets `html_handling` to `force-trailing-slash` and serves `404.html` for missing pages.
- **Astro `redirects`**: defined in [`astro.config.mjs`](../astro.config.mjs) (e.g. `/cheats/` → products). They are emitted as static redirects in the build where applicable—verify in `dist` after `npm run build`.

## Post-build steps

`npm run build` already runs sitemap finalization and optional IndexNow when `INDEXNOW_KEY` is set. Workers Builds then runs `npx wrangler deploy`, which publishes `dist` and does not rebuild the site.
