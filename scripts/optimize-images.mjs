import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const root = process.cwd();
const widths = [320, 400, 512, 640, 960];
const dirs = [
  'public/images/gameplay',
  'public/images/blog',
  'public/images/blog-home',
  'public/images/spoofer',
  'public/images/ugc-only',
  'public/images/skin-changer-only',
];
const generatedWebp = new RegExp(`-(${widths.join('|')})\\.webp$`, 'i');

function isGeneratedWebp(name) {
  return generatedWebp.test(name);
}

function isSourceRaster(name) {
  return /\.(png|webp|jpe?g)$/i.test(name) && !isGeneratedWebp(name);
}

async function optimizeDir(relativeDir) {
  const dir = path.join(root, relativeDir);
  if (!fs.existsSync(dir)) return;

  const files = fs.readdirSync(dir).filter(isSourceRaster);

  for (const file of files) {
    const input = path.join(dir, file);
    const base = file.replace(/\.(png|webp|jpe?g)$/i, '');

    for (const width of widths) {
      const output = path.join(dir, `${base}-${width}.webp`);
      await sharp(input)
        .resize({ width, withoutEnlargement: true })
        .webp({ quality: 82, effort: 4 })
        .toFile(output);
      console.log(`Wrote ${path.relative(root, output)}`);
    }
  }
}

for (const dir of dirs) {
  await optimizeDir(dir);
}

console.log('Image optimization complete.');
