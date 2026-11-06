# Lighthouse (local static preview)

**When**: 2026-11-07 (local machine)  
**How**: `npx http-server dist -p 4173 -c-1` then `npx lighthouse <url> --only-categories=performance,accessibility,best-practices,seo --chrome-flags="--headless"`  
**Context**: Simulated **desktop** Lighthouse against `http://127.0.0.1:4173` (not HTTPS, not CDN). Scores will differ on production (HTTPS, HTTP/2/3, caching).

Scores below are **category scores** (0–1 in JSON → shown as /100).

| URL | Performance | Accessibility | Best practices | SEO |
|-----|-------------|---------------|----------------|-----|
| `/` | 55 | 95 | 100 | 100 |
| `/products/dota-2-cheats/` | 71 | 100 | 100 | 100 |
| `/products/dota-2-cheats/pro/` | 50 | 94 | 100 | 100 |
| `/blog/` | 42 | 96 | 100 | 100 |
| `/blog/mw4-lite-vs-pro/` | 55 | 95 | 100 | 100 |

## Fixes applied during QA

- Removed duplicate Embla/carousel init on the products carousel (`autoInit` + manual `createCarousel`).
- Deferred hero carousel JS with `requestIdleCallback` to reduce early main-thread work.
- Added `type="module"` to scripts that use `import` (invalid classic scripts caused console errors in Lighthouse).
- Replaced `define:vars` on the blog index inline script (it prevented bundling and caused 404s on raw `.ts` import paths).

## Remaining limitations

- **Performance**: Homepage and blog index are **large HTML documents** (many SVG icons and cards). Reaching 100 Performance locally is unlikely without a bigger rework (e.g. icon sprite, less DOM, or stronger caching on a real host).
- **Accessibility**: Residual gaps (e.g. product pages at 94) need manual review of contrast and labels; automated tests do not catch everything.
- **Blog index Performance (42)**: Many images and cards in one view; pagination or lighter cards would help—out of scope for a minimal template-preserving pass unless you ask for it.
