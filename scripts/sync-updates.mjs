import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outputPath = path.join(__dirname, "..", "lib", "updates.json");

const trackedRepos = [
  {
    slug: "radiotv",
    projectName: "RadioTV",
    repo: "voduykhanhmata-ctrl/radiotv",
    fallbackType: "Addon NVDA",
    category: "Đa phương tiện tiếp cận",
  },
  {
    slug: "nvda-screen-reader",
    projectName: "NVDA Screen Reader",
    repo: "nvaccess/nvda",
    fallbackType: "Trình đọc màn hình",
    category: "Phần mềm tiếp cận",
  },
  {
    slug: "nvda-network-optimizer",
    projectName: "NVDA Network Optimizer",
    repo: "voduykhanhmata-ctrl/nvda-network-optimizer",
    fallbackType: "Addon NVDA",
    category: "Tiện ích hệ thống",
  },
  {
    slug: "google-tts-for-nvda",
    projectName: "Google TTS for NVDA",
    repo: "nguyenanhduc09/Google-TTS-For-NVDA",
    fallbackType: "Addon NVDA",
    category: "Bộ đọc tiếng nói",
  },
];

function formatDate(isoString) {
  if (!isoString) return "";
  return new Intl.DateTimeFormat("vi-VN", {
    day: "2-digit", month: "2-digit", year: "numeric", timeZone: "Asia/Ho_Chi_Minh",
  }).format(new Date(isoString));
}

function cleanMessage(rawMsg) {
  if (!rawMsg) return "Cập nhật mã nguồn";
  const firstLine = rawMsg.split("\n")[0].trim();
  return firstLine.replace(/^(feat|fix|chore|docs|refactor|style|test)(\([^)]+\))?:\s*/i, "");
}

async function fetchRepoData(item) {
  try {
    const headers = { "User-Agent": "vdkvn-sync-bot" };
    const res = await fetch(`https://api.github.com/repos/${item.repo}/commits?per_page=1`, { headers, signal: AbortSignal.timeout(15000) });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const commits = await res.json();
    if (!commits || !commits.length) return null;

    const latest = commits[0];
    const isoDate = latest.commit?.committer?.date || latest.commit?.author?.date || new Date().toISOString();
    const dateStr = formatDate(isoDate);
    const summary = cleanMessage(latest.commit?.message);

    return {
      slug: item.slug,
      projectName: item.projectName,
      category: item.category,
      type: item.fallbackType,
      timestamp: isoDate,
      date: dateStr,
      summary: summary,
      fullMessage: latest.commit?.message || "",
      sha: latest.sha?.substring(0, 7) || "",
      url: latest.html_url || `https://github.com/${item.repo}`,
    };
  } catch (err) {
    console.warn(`Could not fetch data for ${item.projectName}:`, err.message);
    return null;
  }
}

async function main() {
  console.log("Fetching latest updates from repositories...");
  let previousItems = [];
  try {
    const previous = JSON.parse(fs.readFileSync(outputPath, "utf8"));
    previousItems = Array.isArray(previous.items) ? previous.items : [];
  } catch {
    // A first build can run without a cached update list.
  }
  const results = [];

  for (const item of trackedRepos) {
    const data = await fetchRepoData(item) || previousItems.find((entry) => entry.slug === item.slug);
    if (data) {
      results.push(data);
    }
  }

  if (!results.length) {
    console.warn("No updates available; leaving the existing file unchanged.");
    return;
  }

  // Sắp xếp các mục theo thời gian cập nhật mới nhất lên đầu tiên (Newest first)
  results.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());

  const outputData = {
    lastChecked: new Date().toISOString(),
    lastCheckedVN: formatDate(new Date().toISOString()),
    items: results,
  };

  fs.writeFileSync(outputPath, JSON.stringify(outputData, null, 2), "utf-8");
  console.log("Successfully wrote sorted updates to", outputPath);
}

await main();
