import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distClient = path.join(__dirname, "..", "dist", "client");
const duAnDir = path.join(distClient, "du-an");

if (fs.existsSync(duAnDir)) {
  const files = fs.readdirSync(duAnDir);
  for (const file of files) {
    if (file.endsWith(".html") && file !== "index.html") {
      const slug = file.replace(/\.html$/, "");
      const targetDir = path.join(duAnDir, slug);
      if (!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir, { recursive: true });
      }
      fs.copyFileSync(path.join(duAnDir, file), path.join(targetDir, "index.html"));
      console.log(`Created ${slug}/index.html for GitHub Pages routing`);
    }
  }
}

// Ensure kho-addon has index.html
const khoAddonHtml = path.join(distClient, "kho-addon.html");
const khoAddonDir = path.join(distClient, "kho-addon");
if (fs.existsSync(khoAddonHtml)) {
  if (!fs.existsSync(khoAddonDir)) {
    fs.mkdirSync(khoAddonDir, { recursive: true });
  }
  fs.copyFileSync(khoAddonHtml, path.join(khoAddonDir, "index.html"));
  console.log("Created kho-addon/index.html for GitHub Pages routing");
}

// Copy public assets if needed
const publicDir = path.join(__dirname, "..", "public");
for (const file of ["robots.txt", "sitemap.xml", ".nojekyll", "CNAME", "vdkisadevindexnow2026.txt"]) {
  const src = path.join(publicDir, file);
  const dest = path.join(distClient, file);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    console.log(`Synced ${file} to dist/client`);
  }
}
