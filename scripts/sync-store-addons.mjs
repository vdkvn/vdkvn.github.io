import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const storeDataPath = path.join(__dirname, "..", "lib", "addons-store.json");

function formatDate(isoString) {
  if (!isoString) return "";
  return new Intl.DateTimeFormat("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    timeZone: "Asia/Ho_Chi_Minh",
  }).format(new Date(isoString));
}

function detectCategory(name, desc) {
  const text = (name + " " + desc).toLowerCase();
  if (
    text.includes("speech") ||
    text.includes("tts") ||
    text.includes("voice") ||
    text.includes("speak") ||
    text.includes("pronounc")
  ) {
    return { category: "speech", categoryLabel: "Giọng đọc & Ngôn ngữ" };
  }
  if (
    text.includes("math") ||
    text.includes("learn") ||
    text.includes("education") ||
    text.includes("braille") ||
    text.includes("read") ||
    text.includes("book")
  ) {
    return { category: "education", categoryLabel: "Giáo dục & Học tập" };
  }
  if (
    text.includes("media") ||
    text.includes("radio") ||
    text.includes("video") ||
    text.includes("audio") ||
    text.includes("music") ||
    text.includes("sound") ||
    text.includes("youtube")
  ) {
    return { category: "media", categoryLabel: "Đa phương tiện & Giải trí" };
  }
  if (
    text.includes("system") ||
    text.includes("network") ||
    text.includes("window") ||
    text.includes("process") ||
    text.includes("disk") ||
    text.includes("battery") ||
    text.includes("bluetooth") ||
    text.includes("crash")
  ) {
    return { category: "system", categoryLabel: "Hệ thống & Mạng" };
  }
  return { category: "tools", categoryLabel: "Công cụ & Tiện ích" };
}

function extractAuthorGithub(sourceUrl) {
  if (sourceUrl && sourceUrl.includes("github.com/")) {
    const clean = sourceUrl
      .replace("https://github.com/", "")
      .replace("http://github.com/", "");
    const parts = clean.split("/");
    if (parts.length >= 1 && parts[0] && !parts[0].includes("?")) {
      return "https://github.com/" + parts[0];
    }
  }
  return null;
}

export async function syncStoreAddons() {
  console.log("=== BẮT ĐẦU ĐỒNG BỘ NVDA ADD-ON STORE TỰ ĐỘNG ===");
  const GITHUB_TOKEN = process.env.GITHUB_TOKEN || "";
  const headers = { 
    "User-Agent": "vdkvn-sync-bot",
    ...(GITHUB_TOKEN ? { "Authorization": `token ${GITHUB_TOKEN}` } : {})
  };

  // 1. Lấy 100 commit mới nhất
  let recentReleases = new Map();
  try {
    const commitsRes = await fetch(
      "https://api.github.com/repos/nvaccess/addon-datastore/commits?per_page=100",
      { headers, signal: AbortSignal.timeout(10000) }
    );
    if (commitsRes.ok) {
      const commits = await commitsRes.json();
      for (const c of commits) {
        const msg = c.commit?.message || "";
        const match = msg.match(/Publish addons\/([^\/]+)\/([^\/]+\.json)/);
        if (match) {
          const addonId = match[1];
          const versionFile = match[2];
          if (!recentReleases.has(addonId)) {
            recentReleases.set(addonId, {
              versionFile,
              date: c.commit?.committer?.date || new Date().toISOString(),
              message: msg.split("\n")[0],
            });
          }
        }
      }
      console.log(`Tìm thấy ${recentReleases.size} add-on vừa phát hành mới nhất.`);
    }
  } catch (err) {
    console.warn("Không thể lấy commit gần đây:", err.message);
  }

  // 2. Nạp cache cũ nếu có
  let existingStoreData = [];
  try {
    if (fs.existsSync(storeDataPath)) {
      existingStoreData = JSON.parse(fs.readFileSync(storeDataPath, "utf8"));
    }
  } catch {}

  const existingMap = new Map(existingStoreData.map((item) => [item.id, item]));

  // 3. Quét master tree
  console.log("Đang tải danh sách tệp từ Git tree...");
  const treeRes = await fetch(
    "https://api.github.com/repos/nvaccess/addon-datastore/git/trees/master?recursive=1",
    { headers, signal: AbortSignal.timeout(20000) }
  );
  if (!treeRes.ok) {
    console.error("Lỗi khi kết nối GitHub git tree:", treeRes.status);
    return existingStoreData;
  }

  const treeData = await treeRes.json();
  const allJsonFiles = (treeData.tree || []).filter(
    (t) =>
      t.path.startsWith("addons/") &&
      t.path.endsWith(".json") &&
      !t.path.includes("/testData/")
  );

  console.log(`Tổng số tệp phiên bản: ${allJsonFiles.length}`);

  // Nhóm theo addonId
  const addonGroups = new Map();
  for (const file of allJsonFiles) {
    const parts = file.path.split("/");
    if (parts.length === 3) {
      const addonId = parts[1];
      const versionFile = parts[2];
      if (!addonGroups.has(addonId)) {
        addonGroups.set(addonId, []);
      }
      addonGroups.get(addonId).push({ path: file.path, versionFile, sha: file.sha });
    }
  }

  console.log(`Tổng cộng: ${addonGroups.size} tiện ích trong NVDA Store.`);

  const listToFetch = [];
  const results = [];

  for (const [addonId, files] of addonGroups.entries()) {
    files.sort((a, b) =>
      b.versionFile.localeCompare(a.versionFile, undefined, {
        numeric: true,
        sensitivity: "base",
      })
    );
    const latestFile = files[0];
    const cached = existingMap.get(addonId);
    const recentRelease = recentReleases.get(addonId);

    if (cached && !recentRelease && cached.versionFile === latestFile.versionFile) {
      results.push(cached);
    } else {
      listToFetch.push({ addonId, latestFile, cached, recentRelease });
    }
  }

  console.log(`Đã có trong bộ nhớ đệm: ${results.length}, cần tải mới/cập nhật: ${listToFetch.length}`);

  // Tải đồng thời theo batch (15 song song)
  const BATCH_SIZE = 15;
  for (let i = 0; i < listToFetch.length; i += BATCH_SIZE) {
    const batch = listToFetch.slice(i, i + BATCH_SIZE);
    const batchPromises = batch.map(async ({ addonId, latestFile, cached, recentRelease }) => {
      try {
        const rawUrl = `https://raw.githubusercontent.com/nvaccess/addon-datastore/master/${latestFile.path}`;
        const res = await fetch(rawUrl, { signal: AbortSignal.timeout(8000) });
        if (!res.ok) {
          if (cached) results.push(cached);
          return;
        }
        const d = await res.json();

        const hasVi =
          Array.isArray(d.translations) &&
          d.translations.some((t) => t.language === "vi" || t.language === "vi_VN");
        const viTrans = Array.isArray(d.translations)
          ? d.translations.find((t) => t.language === "vi" || t.language === "vi_VN")
          : null;

        const catInfo = detectCategory(d.displayName || d.addonId, d.description || "");
        const authorGh = extractAuthorGithub(d.sourceURL);

        let updatedAt = recentRelease ? recentRelease.date : null;
        if (!updatedAt && d.submissionTime) {
          updatedAt = new Date(d.submissionTime).toISOString();
        }
        if (!updatedAt && cached?.updatedAt) {
          updatedAt = cached.updatedAt;
        }
        if (!updatedAt) {
          updatedAt = new Date().toISOString();
        }

        const item = {
          id: d.addonId,
          name: (viTrans && viTrans.displayName) || d.displayName || d.addonId,
          category: catInfo.category,
          categoryLabel: catInfo.categoryLabel,
          hasVietnamese: hasVi,
          inStore: true,
          origin: "international",
          originLabel: "Cửa hàng NVDA Store",
          description:
            (viTrans && viTrans.description) ||
            d.description ||
            "Tiện ích mở rộng chính thức trên kho ứng dụng NVDA Add-on Store.",
          author: d.publisher || "Cộng đồng NVDA",
          authorGithub: authorGh,
          repoUrl: d.sourceURL || d.homepage || null,
          license: d.license || "GPL v2+",
          downloadUrl: d.URL || `https://addons.nvaccess.org/addons/${d.addonId}/`,
          testedVersion: d.lastTestedVersion
            ? `NVDA ${d.lastTestedVersion.major}.${d.lastTestedVersion.minor}`
            : "NVDA 2024.x",
          version:
            d.addonVersionName ||
            d.addonVersionNumber ||
            latestFile.versionFile.replace(".json", ""),
          versionFile: latestFile.versionFile,
          updatedAt: updatedAt,
          updatedAtVN: formatDate(updatedAt),
        };

        results.push(item);
      } catch (err) {
        if (cached) results.push(cached);
      }
    });

    await Promise.all(batchPromises);
    if ((i + BATCH_SIZE) % 60 === 0 || i + BATCH_SIZE >= listToFetch.length) {
      console.log(`Đã nạp ${Math.min(i + BATCH_SIZE, listToFetch.length)} / ${listToFetch.length} add-on...`);
    }
  }

  // SẮP XẾP MỚI NHẤT LÊN ĐẦU TIÊN (Newest First)
  results.sort(
    (a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
  );

  fs.writeFileSync(storeDataPath, JSON.stringify(results, null, 2), "utf8");
  console.log(
    `✅ Hoàn tất! Đã lưu thành công ${results.length} tiện ích Store vào ${storeDataPath}.`
  );
  return results;
}

syncStoreAddons();
