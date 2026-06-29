import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const projectRoot = process.cwd();
const contentDir = path.join(projectRoot, 'src', 'content', 'blog');
const outputDir = path.join(projectRoot, 'public', 'optimized');
const manifestPath = path.join(projectRoot, 'src', 'generated', 'responsive-image-manifest.json');
const homepageHero = '/home-header-premium-wide.png';
const blogWidths = [360, 540, 720, 960, 1280, 1586];
const homepageWidths = [480, 720, 960, 1280, 1600, 1822];
const variantConcurrency = Number.parseInt(process.env.IMAGE_VARIANT_CONCURRENCY ?? '6', 10);

const formatConfigs = [
  { key: 'avif', extension: 'avif', options: { quality: 50 } },
  { key: 'webp', extension: 'webp', options: { quality: 72 } },
  { key: 'jpeg', extension: 'jpg', options: { quality: 78, mozjpeg: true } },
];

async function ensureDir(dirPath) {
  await fs.mkdir(dirPath, { recursive: true });
}

async function fileIsCurrent(sourcePath, outputPath) {
  try {
    const [sourceStat, outputStat] = await Promise.all([
      fs.stat(sourcePath),
      fs.stat(outputPath),
    ]);
    return outputStat.mtimeMs >= sourceStat.mtimeMs;
  } catch {
    return false;
  }
}

async function readHeroImages() {
  const entries = await fs.readdir(contentDir, { withFileTypes: true });
  const images = new Set([homepageHero]);

  for (const entry of entries) {
    if (!entry.isFile()) continue;
    const fullPath = path.join(contentDir, entry.name);
    const content = await fs.readFile(fullPath, 'utf8');
    const match = content.match(/heroImage:\s*"([^"]+)"/);
    if (match?.[1]) images.add(match[1]);
  }

  return Array.from(images);
}

function getWidthsForImage(imagePath) {
  return imagePath === homepageHero ? homepageWidths : blogWidths;
}

function buildOutputName(imagePath, width, extension) {
  const parsed = path.posix.parse(imagePath);
  const folder = parsed.dir.replace(/^\//, '');
  const fileName = `${parsed.name}-${width}.${extension}`;
  return `/${path.posix.join('optimized', folder, fileName)}`;
}

async function generateVariant(sourcePath, targetPath, width, format, options) {
  const outputPath = path.join(projectRoot, 'public', targetPath.replace(/^\//, ''));
  await ensureDir(path.dirname(outputPath));

  if (await fileIsCurrent(sourcePath, outputPath)) {
    return false;
  }

  await sharp(sourcePath)
    .resize({ width, withoutEnlargement: true })
    [format](options)
    .toFile(outputPath);

  return true;
}

async function runWithConcurrency(items, concurrency, worker) {
  let nextIndex = 0;
  let completed = 0;

  const workers = Array.from({ length: Math.max(1, concurrency) }, async () => {
    while (nextIndex < items.length) {
      const currentIndex = nextIndex;
      nextIndex += 1;
      await worker(items[currentIndex], currentIndex);
      completed += 1;
    }
  });

  await Promise.all(workers);
  return completed;
}

const manifest = {};
const imagePaths = await readHeroImages();
const variantJobs = [];

for (const imagePath of imagePaths) {
  const sourcePath = path.join(projectRoot, 'public', imagePath.replace(/^\//, ''));
  const metadata = await sharp(sourcePath).metadata();
  const widths = getWidthsForImage(imagePath).filter((width, index, all) => width <= metadata.width && all.indexOf(width) === index);

  if (!widths.includes(metadata.width)) {
    widths.push(metadata.width);
  }

  widths.sort((a, b) => a - b);

  const variants = {
    avif: [],
    webp: [],
    jpeg: [],
  };

  for (const width of widths) {
    for (const format of formatConfigs) {
      const outputPath = buildOutputName(imagePath, width, format.extension);
      variantJobs.push({
        sourcePath,
        outputPath,
        width,
        format: format.key,
        options: format.options,
      });
      variants[format.key].push({
        width,
        src: outputPath,
      });
    }
  }

  manifest[imagePath] = {
    width: metadata.width,
    height: metadata.height,
    variants,
  };
}

let generatedCount = 0;
await runWithConcurrency(variantJobs, variantConcurrency, async (job) => {
  const generated = await generateVariant(job.sourcePath, job.outputPath, job.width, job.format, job.options);
  if (generated) {
    generatedCount += 1;
  }
});

await ensureDir(path.dirname(manifestPath));
await fs.writeFile(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`, 'utf8');

console.log(`Generated responsive variants for ${imagePaths.length} images (${generatedCount} files written, ${variantJobs.length - generatedCount} current).`);
