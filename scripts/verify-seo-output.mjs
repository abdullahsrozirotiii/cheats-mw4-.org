/**
 * Fail the build when a penalty signal is baked into dist.
 * Cloudflare's build log shows this output before wrangler deploy.
 */
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const dist = path.join(root, 'dist');
const origin = 'https://cheatsmw4.org';
const errors = [];

function read(rel) {
  const file = path.join(dist, rel);
  if (!fs.existsSync(file)) {
    errors.push(`missing ${rel}`);
    return '';
  }
  return fs.readFileSync(file, 'utf8');
}

function reject(label, condition) {
  if (condition) errors.push(label);
}

const home = read('index.html');
const robots = read('robots.txt');
const sitemap = read('sitemap.xml');
const redirects = read('_redirects');
const product = read('products/mw4/mw4-cheats/index.html');
const ugc = read('products/mw4/ugc/index.html');
const forum = read('forum/what-is-mw4-esp/index.html');
const goPage = read('go/mw4/index.html');

reject('homepage canonical is not https://cheatsmw4.org/', !home.includes('rel="canonical" href="https://cheatsmw4.org/"'));
reject('homepage still points at workers.dev', home.includes('workers.dev'));
reject('homepage still mentions dota', /dota/i.test(home));
reject('robots Sitemap is not the brand domain', !robots.includes(`Sitemap: ${origin}/sitemap.xml`));
reject('robots.txt points at workers.dev', robots.includes('workers.dev'));
reject('sitemap points at workers.dev', sitemap.includes('workers.dev'));
reject('sitemap still lists dota-2-cheats', sitemap.includes('dota-2-cheats'));
reject('sitemap marks the forum daily', sitemap.includes('<changefreq>daily</changefreq>'));
reject('Cloudflare redirect file is missing the old product path', !redirects.includes('/products/dota-2-cheats/ /products/mw4/ 301'));
reject('product schema is missing the monthly price', !product.includes('"price":"35.00"') && !product.includes('"price": "35.00"'));
reject('UGC schema is missing the one-time price', !ugc.includes('"price":"50.00"') && !ugc.includes('"price": "50.00"'));
reject('forum page still emits DiscussionForumPosting', forum.includes('DiscussionForumPosting'));
reject('checkout page is indexable', !goPage.includes('noindex, nofollow'));
reject('legacy checkout page was still generated', fs.existsSync(path.join(dist, 'go', 'dota-2', 'index.html')));
reject('old dota product HTML was still generated', fs.existsSync(path.join(dist, 'products', 'dota-2-cheats')));

if (errors.length) {
  console.error('SEO host check failed:');
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(`SEO host check passed: canonical, sitemap, and robots use ${origin}. Preview indexing is blocked in workers/seo-host.js.`);
