import { spawnSync } from 'node:child_process';

// Workers Builds runs `npm clean-install`, then `npx wrangler deploy`.
// The deploy command does not create dist, so build here when Cloudflare sets WORKERS_CI.
if (process.env.WORKERS_CI !== '1') {
  process.exit(0);
}

console.log('--- Cloudflare build start ---');
console.log(`Node ${process.version}`);
console.log('SEO origin is https://cheatsmw4.org. robots.txt allows crawling except /go/.');
console.log('Dashboard build command must stay empty. This install step runs npm run build, then deploy runs npx wrangler deploy.');

const result = spawnSync('npm', ['run', 'build'], {
  stdio: 'inherit',
  shell: true,
  env: process.env,
});

if ((result.status ?? 1) !== 0) {
  console.error('--- Cloudflare build failed: dist was not published ---');
  process.exit(result.status ?? 1);
}

console.log('--- Cloudflare build finished: dist is ready for npx wrangler deploy ---');
process.exit(0);
