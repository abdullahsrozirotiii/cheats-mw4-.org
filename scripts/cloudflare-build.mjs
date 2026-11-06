import { spawnSync } from 'node:child_process';

// Workers Builds runs `npm clean-install`, then `npx wrangler deploy`.
// The deploy command does not create dist, so build here when Cloudflare sets WORKERS_CI.
if (process.env.WORKERS_CI !== '1') {
  process.exit(0);
}

const result = spawnSync('npm', ['run', 'build'], {
  stdio: 'inherit',
  shell: true,
  env: process.env,
});

process.exit(result.status ?? 1);
