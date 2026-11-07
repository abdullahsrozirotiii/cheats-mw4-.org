/**
 * Emit static /go/[slug]/ HTML files into public/ before astro build.
 * Astro 7 prerender replaces inline .astro redirect pages with a minimal stub;
 * these files win as public assets and give an instant JS + meta refresh to checkout.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { CHECKOUT_PATH_REDIRECTS } from '../src/config/checkout-redirects.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const publicGo = path.join(root, 'public', 'go');

// pathname -> target; one entry per /go/[slug]/ path (trailing slash in map keys)
const bySlug = new Map();
for (const [pathname, target] of CHECKOUT_PATH_REDIRECTS) {
  if (!pathname.startsWith('/go/') || !pathname.endsWith('/')) continue;
  const slug = pathname.replace(/^\/go\//, '').replace(/\/$/, '');
  bySlug.set(slug, target);
}

function escapeHtml(s) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function pageHtml({ target, pathname }) {
  const safeTarget = escapeHtml(target);
  const safePath = escapeHtml(pathname);
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="robots" content="noindex, nofollow" />
  <meta name="color-scheme" content="dark" />
  <meta http-equiv="refresh" content="0;url=${safeTarget}" />
  <link rel="canonical" href="${safeTarget}" />
  <title>Redirecting to checkout</title>
  <style>
    :root { color-scheme: dark; }
    html, body { margin: 0; min-height: 100%; background: #0a0a0a; color: #fafafa; font-family: system-ui, sans-serif; }
    main { display: grid; min-height: 100vh; place-items: center; padding: 1rem; }
    a { color: #a78bfa; }
    code { font-size: 0.85em; }
  </style>
  <script>
    (function () {
      var u = ${JSON.stringify(target)};
      try { location.replace(u); } catch (e) { location.href = u; }
    })();
  </script>
</head>
<body>
  <main>
    <p style="margin:0;font-size:0.95rem;text-align:center;max-width:28rem;line-height:1.5">
      Redirecting to checkout…<br />
      <a href="${safeTarget}">Continue to partner site</a><br />
      <span style="font-size:0.8rem;opacity:0.75"><code>${safePath}</code></span>
    </p>
  </main>
</body>
</html>
`;
}

fs.rmSync(publicGo, { recursive: true, force: true });

const LEGACY_SLUGS = new Set(['dota-2']);

for (const [slug, target] of bySlug) {
  if (LEGACY_SLUGS.has(slug)) continue;
  const dir = path.join(publicGo, slug);
  fs.mkdirSync(dir, { recursive: true });
  const pathname = `/go/${slug}/`;
  fs.writeFileSync(path.join(dir, 'index.html'), pageHtml({ target, pathname }), 'utf8');
}

console.log(`Wrote ${bySlug.size} checkout redirect page(s) → public/go/*/index.html`);
