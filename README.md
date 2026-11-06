# cheats-mw4-.org

Static site for cheatsmw4.org. Astro builds the pages into `dist`. Cloudflare Workers serves that folder.

## Local

```bash
npm ci
npm run dev
```

Production build:

```bash
npm run build
```

## Cloudflare

Connect this GitHub repo in **Workers & Pages → Create → Import a repository**. Use branch `main`.

| Setting | Value |
| --- | --- |
| Build command | `npm run build` |
| Deploy command | `npx wrangler deploy` |
| Node | `22` (set build variable `NODE_VERSION` to `22`) |

Each push to `main` then gets a build log in the Cloudflare dashboard under the Worker’s **Deployments** list. The GitHub Action in `.github/workflows/build.yml` also saves `build.log` for 90 days under the Actions run artifacts.

Details: [docs/cloudflare-pages.md](docs/cloudflare-pages.md).
