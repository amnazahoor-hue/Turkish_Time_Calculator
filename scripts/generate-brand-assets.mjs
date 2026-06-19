import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";
import pngToIco from "png-to-ico";

const BRANDING = path.join(process.cwd(), "public", "branding");

const assets = [
  { svg: "logo-full-light.svg", name: "logo-full-light", width: 320, height: 80 },
  { svg: "logo-full-dark.svg", name: "logo-full-dark", width: 280, height: 72 },
  { svg: "logo-icon.svg", name: "logo-icon", width: 64, height: 64 },
  { svg: "logo-icon.svg", name: "favicon-32", width: 32, height: 32 },
];

async function generate() {
  fs.mkdirSync(BRANDING, { recursive: true });

  for (const { svg, name, width, height } of assets) {
    const input = path.join(BRANDING, svg);
    const pipeline = sharp(input).resize(width, height);
    await pipeline.clone().webp({ quality: 90 }).toFile(path.join(BRANDING, `${name}.webp`));
    console.log(`✓ ${name}.webp`);
  }

  const favicon32 = path.join(BRANDING, "favicon-32.webp");
  const faviconIco = path.join(BRANDING, "favicon.ico");
  const icoBuffer = await pngToIco(favicon32);
  fs.writeFileSync(faviconIco, icoBuffer);
  console.log("✓ favicon.ico");

  const ogBase = sharp(path.join(BRANDING, "logo-full-light.svg")).resize(1200, 630, {
    fit: "contain",
    background: { r: 240, g: 249, b: 255, alpha: 1 },
  });
  await ogBase.clone().webp({ quality: 85 }).toFile(path.join(BRANDING, "og-image.webp"));
  console.log("✓ og-image.webp");
}

generate().catch((err) => {
  console.error(err);
  process.exit(1);
});
