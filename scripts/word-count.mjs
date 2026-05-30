import fs from "node:fs";
import path from "node:path";

const dir = path.join(process.cwd(), "src/content/legal");
for (const file of fs.readdirSync(dir)) {
  const content = fs.readFileSync(path.join(dir, file), "utf8");
  const strings = [...content.matchAll(/"((?:\\.|[^"\\])*)"/g)].map((m) =>
    m[1].replace(/\\n/g, " ").replace(/\\"/g, '"')
  );
  const text = strings.filter((s) => s.length > 30).join(" ");
  const words = text.split(/\s+/).filter(Boolean).length;
  console.log(`${file}: ${words} words ${words >= 800 ? "✓" : "✗ NEEDS MORE"}`);
}
