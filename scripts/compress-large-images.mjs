import fs from "fs";
import path from "path";
import { execSync } from "child_process";
import sharp from "sharp";

const ROOT = path.resolve("public");
const MAX_KB = Number(process.env.MAX_KB || 50);

const TARGETS = [
  "images/hero-hourglass.webp",
  "images/hero-hours-days.webp",
  "images/salary-calc-visual.webp",
];

async function compressTo(filePath, maxKB = MAX_KB) {
  const abs = path.resolve(ROOT, filePath);
  const meta = await sharp(abs).metadata();
  let width = meta.width ?? 1200;
  const minWidth = 320;

  while (width >= minWidth) {
    for (let quality = 85; quality >= 40; quality -= 5) {
      const buffer = await sharp(abs)
        .rotate()
        .resize({ width, withoutEnlargement: true })
        .webp({ quality, effort: 6, smartSubsample: true })
        .toBuffer();

      if (buffer.length <= maxKB * 1024) {
        const staging = `${abs}.staging`;
        fs.writeFileSync(staging, buffer);
        execSync(
          `powershell -NoProfile -Command "Remove-Item -LiteralPath '${abs.replace(/'/g, "''")}' -Force -ErrorAction SilentlyContinue; Move-Item -LiteralPath '${staging.replace(/'/g, "''")}' -Destination '${abs.replace(/'/g, "''")}' -Force"`,
          { stdio: "inherit" }
        );
        return {
          file: filePath,
          sizeKB: Math.round((buffer.length / 1024) * 10) / 10,
          width,
          quality,
        };
      }
    }
    width = Math.round(width * 0.85);
  }

  throw new Error(`Could not compress ${filePath} below ${maxKB}KB`);
}

const results = [];
for (const file of TARGETS) {
  results.push(await compressTo(file));
}

console.log(JSON.stringify(results, null, 2));
