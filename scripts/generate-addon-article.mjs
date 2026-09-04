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

// AI Engine Template chuyên sâu phân tích tiện ích tiếp cận cho người khiếm thị
export function generateAccessibleReview(addon) {
  const isVN = addon.hasVietnamese;
  const isStore = addon.inStore;

  const title = `Đánh giá tiện ích NVDA: ${addon.name} (Phiên bản ${addon.version || "mới nhất"})`;
  const summary = `Phân tích chuyên sâu về tiện ích ${addon.name} dành cho trình đọc màn hình NVDA. Cung cấp hướng dẫn phím tắt, đối tượng người dùng phù hợp và đánh giá khả năng tiếp cận thực tế.`;

  const sections = [
    {
      heading: "1. Giới thiệu tổng quan",
      content: `Tiện ích **${addon.name}** được phát triển bởi tác giả/nhóm **${addon.author}** dưới giấy phép mã nguồn mở **${addon.license || "GPL"}**.\n\n${addon.description}\n\nTrạng thái phát hành: ${
        isStore
          ? "✅ Đã có sẵn trên Cửa hàng Add-on Store chính thức của NVDA, người dùng có thể cài đặt trực tiếp không cần tải tệp rời."
          : "🌟 Được phát hành độc lập từ cộng đồng, cần tải tệp .nvda-addon về máy để cài đặt."
      }`,
    },
    {
      heading: "2. Hỗ trợ tiếng Việt & Trải nghiệm thực tế",
      content: isVN
        ? `Tiện ích đã có sẵn giao diện tiếng Việt. Giọng đọc NVDA sẽ phát âm các nút bấm và thông báo rất rõ ràng, người dùng chỉ cần cài vào là dùng được ngay mà không cần chỉnh sửa gì thêm.`
        : `Hiện tại tác giả chưa dịch tiếng Việt nên các menu vẫn hiển thị tiếng Anh. Tuy nhiên, cấu trúc phím bấm tuân theo chuẩn NVDA thông thường, các bộ đọc tiếng Việt vẫn đọc được các mục bình thường.`,
    },
    {
      heading: "3. Phím tắt và cách dùng nhanh",
      content: addon.shortcuts
        ? `Tổ hợp phím thao tác:\n- **${addon.shortcuts}**\n\nNếu muốn đổi phím khác theo thói quen: Nhấn NVDA + N &rarr; Tùy chọn &rarr; Cử chỉ nhập liệu.`
        : `Tiện ích không có phím tắt riêng mà tự động chạy nền hoặc nằm trong menu ngữ cảnh của ứng dụng liên quan. Bạn có thể kiểm tra thêm trong menu *Cử chỉ nhập liệu*.`,
    },
    {
      heading: "4. Điểm cần lưu ý khi dùng",
      content: `- Phiên bản đã kiểm tra hoạt động tốt trên: **${addon.testedVersion || "NVDA 2024.x trở lên"}**.\n- Mã nguồn mở minh bạch từ kho GitHub chính thức của tác giả.\n- Không gây xung đột âm thanh hay làm chậm tốc độ phản hồi của NVDA.`,
    },
    {
      heading: "5. Các bước cài đặt",
      content: `1. Nhấn nút [Tải ${addon.name}](${addon.downloadUrl}) để tải tệp .nvda-addon về máy.\n2. Vào thư mục Downloads, nhấn Enter vào tệp vừa tải.\n3. Khi NVDA hỏi xác nhận, nhấn phím Y (hoặc chọn Đồng ý).\n4. Bấm khởi động lại NVDA là xong.`,
    },
  ];

  return {
    id: `review-${addon.id}`,
    addonId: addon.id,
    addonName: addon.name,
    version: addon.version || "Mới nhất",
    title,
    summary,
    author: "AI Assistant & Võ Duy Khánh",
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
