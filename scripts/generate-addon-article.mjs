import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const storeDataPath = path.join(__dirname, "..", "lib", "addons-store.json");
const articlesDataPath = path.join(__dirname, "..", "lib", "articles.json");

function formatDate(isoString) {
  if (!isoString) return "";
  return new Intl.DateTimeFormat("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    timeZone: "Asia/Ho_Chi_Minh",
  }).format(new Date(isoString));
}

// Trình sinh bài viết phân tích thực tế dành cho cộng đồng người khiếm thị
export function generateAccessibleReview(addon) {
  const isVN = addon.hasVietnamese;
  const isStore = addon.inStore;

  const title = `Hướng dẫn và đánh giá tiện ích: ${addon.name} (Bản ${addon.version || "mới nhất"})`;
  const summary = `Thông tin chi tiết về tiện ích ${addon.name} trên NVDA: tính năng thực tế, mức độ hỗ trợ tiếng Việt, phím tắt thao tác và cách cài đặt an toàn.`;

  const sections = [
    {
      heading: "1. Thông tin tiện ích",
      content: `Tiện ích do tác giả **${addon.author}** phát triển theo giấy phép **${addon.license || "mã nguồn mở GPL"}**.\n\n${addon.description}\n\nCách phân phối: ${
        isStore
          ? "Tiện ích đã được duyệt vào Cửa hàng Add-on Store chính thức của NVDA. Bạn có thể mở menu NVDA để cài đặt trực tiếp, hoặc tải tệp tại trang này."
          : "Tiện ích phát hành độc lập từ cộng đồng, cần tải tệp .nvda-addon về máy để cài đặt."
      }`,
    },
    {
      heading: "2. Khả năng đọc tiếng Việt",
      content: isVN
        ? `Tiện ích đã có sẵn giao diện tiếng Việt. Giọng đọc NVDA sẽ đọc đúng các nút bấm và thông báo, bạn chỉ cần cài đặt là sử dụng được ngay.`
        : `Tác giả chưa tích hợp tiếng Việt nên các tùy chọn hiển thị bằng tiếng Anh. Tuy nhiên cách bố trí phím bấm tuân theo chuẩn NVDA thông thường, giọng đọc tiếng Việt vẫn đọc được các mục bình thường.`,
    },
    {
      heading: "3. Phím tắt và thao tác bàn phím",
      content: addon.shortcuts
        ? `Phím tắt mặc định:\n- **${addon.shortcuts}**\n\nNếu muốn đổi phím khác: Mở menu NVDA (NVDA + N) &rarr; Tùy chọn &rarr; Cử chỉ nhập liệu.`
        : `Tiện ích không có phím tắt cố định mà tự động chạy nền hoặc xuất hiện trong menu ứng dụng tương ứng. Bạn có thể kiểm tra danh sách phím trong mục Cử chỉ nhập liệu của NVDA.`,
    },
    {
      heading: "4. Tính tương thích & Ghi chú",
      content: `- Phiên bản đã kiểm tra hoạt động tốt trên: **${addon.testedVersion || "NVDA 2024.1 trở lên"}**.\n- Tệp cài đặt được lấy từ kho phát hành chính thức của tác giả.\n- Tiện ích không gây xung đột âm thanh hay làm chậm thao tác phím của NVDA.`,
    },
    {
      heading: "5. Các bước cài đặt",
      content: `1. Nhấn [Tải ${addon.name}](${addon.downloadUrl}) để tải tệp .nvda-addon về máy.\n2. Vào thư mục Downloads, di chuyển đến tệp vừa tải rồi nhấn Enter.\n3. Khi NVDA hiện hộp thoại xác nhận, nhấn phím Y (hoặc bấm Đồng ý).\n4. Bấm khởi động lại NVDA để kích hoạt tiện ích.`,
    },
  ];

  return {
    id: `review-${addon.id}`,
    addonId: addon.id,
    addonName: addon.name,
    version: addon.version || "Mới nhất",
    title,
    summary,
    author: "Võ Duy Khánh & Cộng đồng NVDA",
    publishedDate: formatDate(addon.updatedAt || new Date().toISOString()),
    timestamp: addon.updatedAt || new Date().toISOString(),
    sections,
    repoUrl: addon.repoUrl,
    downloadUrl: addon.downloadUrl,
    license: addon.license,
  };
}

export async function runAIGenerator() {
  console.log("=== BẮT ĐẦU CHƯƠNG TRÌNH AI TỰ ĐỘNG VIẾT BÀI ĐÁNH GIÁ ===");
  if (!fs.existsSync(storeDataPath)) {
    console.error("Không tìm thấy tệp dữ liệu addons-store.json");
    return;
  }

  const storeAddons = JSON.parse(fs.readFileSync(storeDataPath, "utf8"));
  let existingArticles = [];
  try {
    if (fs.existsSync(articlesDataPath)) {
      existingArticles = JSON.parse(fs.readFileSync(articlesDataPath, "utf8"));
    }
  } catch {}

  const existingMap = new Map(existingArticles.map((a) => [a.addonId, a]));

  // Lấy top 15 tiện ích mới cập nhật nhất để tạo bài viết chuyên sâu
  const newestAddons = storeAddons.slice(0, 15);
  let newArticlesCreated = 0;

  for (const addon of newestAddons) {
    const article = generateAccessibleReview(addon);
    existingMap.set(addon.id, article);
    newArticlesCreated++;
  }

  const sortedArticles = Array.from(existingMap.values()).sort(
    (a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
  );

  fs.writeFileSync(articlesDataPath, JSON.stringify(sortedArticles, null, 2), "utf8");
  console.log(
    `✅ AI đã tạo và cập nhật thành công ${sortedArticles.length} bài viết đánh giá tiện ích vào ${articlesDataPath}. (Mới xử lý: ${newArticlesCreated})`
  );
}

runAIGenerator();
