import fs from "fs";
import path from "path";
import sharp from "sharp";

const ROOT = path.resolve("public");
const MAX_KB = Number(process.env.MAX_KB || 100);
const RASTER_EXT = new Set([".webp", ".png", ".jpg", ".jpeg", ".gif", ".avif"]);
const CONVERT_EXT = new Set([".png", ".jpg", ".jpeg", ".gif", ".avif"]);

function walk(dir) {
  const entries = [];
  for (const name of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, name.name);
    if (name.isDirectory()) entries.push(...walk(full));
    else entries.push(full);
  }
  return entries;
}

async function optimizeWebp(filePath, maxKB = MAX_KB) {
  const input = sharp(filePath);
  const meta = await input.metadata();
  let width = meta.width ?? 1200;
  const minWidth = 320;

  while (width >= minWidth) {
    for (let quality = 85; quality >= 45; quality -= 5) {
      const buffer = await sharp(filePath)
        .rotate()
        .resize({ width, withoutEnlargement: true })
        .webp({ quality, effort: 6, smartSubsample: true })
        .toBuffer();

      if (buffer.length <= maxKB * 1024) {
        fs.writeFileSync(filePath, buffer);
        return {
          file: path.relative(ROOT, filePath),
          width,
          quality,
          sizeKB: Math.round((buffer.length / 1024) * 10) / 10,
        };
      }
    }
    width = Math.round(width * 0.85);
  }

  throw new Error(`Could not compress ${filePath} below ${maxKB}KB`);
}

async function convertSvgToWebp(svgPath) {
  const webpPath = svgPath.replace(/\.svg$/i, ".webp");
  const buffer = await sharp(svgPath, { density: 200 })
    .resize({ width: 640, withoutEnlargement: true })
    .webp({ quality: 85, effort: 6 })
    .toBuffer();

  fs.writeFileSync(webpPath, buffer);
  return {
    file: path.relative(ROOT, webpPath),
    sizeKB: Math.round((buffer.length / 1024) * 10) / 10,
  };
}

async function convertRasterToWebp(filePath) {
  const webpPath = filePath.replace(/\.(png|jpe?g|gif|avif)$/i, ".webp");
  if (fs.existsSync(webpPath)) {
    return null;
  }

  await sharp(filePath)
    .rotate()
    .webp({ quality: 85, effort: 6 })
    .toFile(webpPath);

  return webpPath;
}

async function main() {
  const files = walk(ROOT);
  const results = { optimized: [], convertedSvg: [], skipped: [], errors: [] };

  for (const file of files) {
    const ext = path.extname(file).toLowerCase();

    if (ext === ".svg") {
      try {
        const out = await convertSvgToWebp(file);
        results.convertedSvg.push(out);
      } catch (error) {
        results.errors.push({ file, error: error.message });
      }
      continue;
    }

    if (!RASTER_EXT.has(ext)) continue;

    if (CONVERT_EXT.has(ext)) {
      try {
        const webp = await convertRasterToWebp(file);
        if (webp) {
          const stat = fs.statSync(webp);
          if (stat.size > MAX_KB * 1024) {
            results.optimized.push(await optimizeWebp(webp));
          } else {
            results.skipped.push({
              file: path.relative(ROOT, webp),
              sizeKB: Math.round((stat.size / 1024) * 10) / 10,
            });
          }
        }
      } catch (error) {
        results.errors.push({ file, error: error.message });
      }
      continue;
    }

    if (ext === ".webp") {
      const sizeKB = fs.statSync(file).size / 1024;
      if (sizeKB <= MAX_KB) {
        results.skipped.push({
          file: path.relative(ROOT, file),
          sizeKB: Math.round(sizeKB * 10) / 10,
        });
        continue;
      }

      try {
        results.optimized.push(await optimizeWebp(file));
      } catch (error) {
        results.errors.push({ file, error: error.message });
      }
    }
  }

  console.log(JSON.stringify(results, null, 2));
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
