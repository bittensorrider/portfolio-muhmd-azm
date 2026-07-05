import fs from "node:fs";
import path from "node:path";

const src = path.resolve("src/data/data.json");
const dest = path.resolve("public/data/data.json");

if (!fs.existsSync(src)) {
  console.error("[sync-data] Missing source:", src);
  process.exit(1);
}

fs.mkdirSync(path.dirname(dest), { recursive: true });
fs.copyFileSync(src, dest);
console.log("[sync-data] src/data/data.json → public/data/data.json");
