import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const dist = path.join(root, 'dist');
const source = path.join(dist, 'sitemap-0.xml');

function readOrigin() {
  if (process.env.PUBLIC_SITE_ORIGIN) return process.env.PUBLIC_SITE_ORIGIN;
  const envFile = path.join(root, '.env.production');
  if (!fs.existsSync(envFile)) return 'https://cheatsmw4.org';
  const match = fs.readFileSync(envFile, 'utf8').match(/^PUBLIC_SITE_ORIGIN=(.+)$/m);
  return match?.[1]?.trim() || 'https://cheatsmw4.org';
}

const siteOrigin = readOrigin().replace(/\/$/, '');

if (!fs.existsSync(source)) {
  console.error('finalize-sitemap: dist/sitemap-0.xml not found — run astro build first.');
  process.exit(1);
}

const raw = fs.readFileSync(source, 'utf8');
const urlCount = (raw.match(/<url>/g) ?? []).length;

if (urlCount === 0) {
  console.error('finalize-sitemap: sitemap-0.xml contains no URLs.');
  process.exit(1);
}

function formatUrlset(xml) {
  return xml
    .replace(/^<\?xml[^?]*\?>/, '<?xml version="1.0" encoding="UTF-8"?>\n')
    .replace(/<urlset([^>]*)>/, '<urlset$1>\n')
    .replace(/<\/urlset>/, '\n</urlset>\n')
    .replace(/<url>/g, '  <url>\n')
    .replace(/<\/url>/g, '\n  </url>\n')
    .replace(/<loc>/g, '    <loc>')
    .replace(/<\/loc>/g, '</loc>\n')
    .replace(/<lastmod>/g, '    <lastmod>')
    .replace(/<\/lastmod>/g, '</lastmod>\n')
    .replace(/<changefreq>/g, '    <changefreq>')
    .replace(/<\/changefreq>/g, '</changefreq>\n')
    .replace(/<priority>/g, '    <priority>')
    .replace(/<\/priority>/g, '</priority>\n');
}

const formatted = formatUrlset(raw).replaceAll('https://cheatsmw4.org', siteOrigin);
fs.writeFileSync(path.join(dist, 'sitemap.xml'), formatted, 'utf8');

const indexXml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${siteOrigin}/sitemap.xml</loc>
    <lastmod>${new Date().toISOString().slice(0, 10)}</lastmod>
  </sitemap>
</sitemapindex>
`;
fs.writeFileSync(path.join(dist, 'sitemap-index.xml'), indexXml, 'utf8');
fs.writeFileSync(path.join(dist, 'sitemap-0.xml'), formatted, 'utf8');

const robotsPath = path.join(dist, 'robots.txt');
if (fs.existsSync(robotsPath)) {
  const robots = fs
    .readFileSync(robotsPath, 'utf8')
    .replace(/Sitemap:\s*\S+/g, `Sitemap: ${siteOrigin}/sitemap.xml`);
  fs.writeFileSync(robotsPath, robots, 'utf8');
}

console.log(`Sitemap finalized: ${urlCount} URLs → dist/sitemap.xml`);
