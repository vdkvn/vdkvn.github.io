import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outputPath = path.join(__dirname, "..", "lib", "updates.json");

const trackedRepos = [
  {
    projectName: "NVDA Network Optimizer",
    repo: "voduykhanhmata-ctrl/nvda-network-optimizer",
    fallbackType: "Addon NVDA",
    category: "Tiện ích hệ thống",
  },
  {
    projectName: "Google TTS for NVDA",
    repo: "nguyenanhduc09/Google-TTS-For-NVDA",
    fallbackType: "Addon NVDA",
    category: "Bộ đọc tiếng nói",
  },
];

function formatDate(isoString) {
  if (!isoString) return "";
  const d = new Date(isoString);
  const day = String(d.getDate()).padStart(2, "0");
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const year = d.getFullYear();
  return `${day}/${month}/${year}`;
}

function cleanMessage(rawMsg) {
  if (!rawMsg) return "Cập nhật mã nguồn";
  const firstLine = rawMsg.split("\n")[0].trim();
  return firstLine.replace(/^(feat|fix|chore|docs|refactor|style|test)(\([^)]+\))?:\s*/i, "");
}

async function fetchRepoData(item) {
  try {
    const headers = { "User-Agent": "vdkvn-sync-bot" };
    const res = await fetch(`https://api.github.com/repos/${item.repo}/commits?per_page=1`, { headers });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const commits = await res.json();
    if (!commits || !commits.length) return null;

    const latest = commits[0];
    const dateStr = formatDate(latest.commit?.committer?.date || latest.commit?.author?.date);
    const summary = cleanMessage(latest.commit?.message);

    return {
      projectName: item.projectName,
      category: item.category,
      type: item.fallbackType,
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
  const results = [];

  for (const item of trackedRepos) {
    const data = await fetchRepoData(item);
    if (data) {
      results.push(data);
    }
  }

  // Thêm mục RadioTV thử nghiệm
  results.push({
    projectName: "RadioTV",
    category: "Đa phương tiện tiếp cận",
    type: "Phần mềm",
    date: "03/09/2026",
    summary: "Đang hoàn thiện giao diện nghe đài & truyền hình tối ưu phím tắt",
    fullMessage: "Phiên bản 0.1 đang trong quá trình thử nghiệm nội bộ",
    sha: "v0.1.0",
    url: "https://vdkvn.github.io/#du-an",
  });

  const outputData = {
    lastChecked: new Date().toISOString(),
    lastCheckedVN: formatDate(new Date().toISOString()),
    items: results,
  };

  fs.writeFileSync(outputPath, JSON.stringify(outputData, null, 2), "utf-8");
  console.log("Successfully wrote updates to", outputPath);
}

main();
