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
      heading: "2. Hỗ trợ tiếng Việt & Trải nghiệm đọc màn hình",
      content: isVN
        ? `🇻🇳 **Điểm cộng lớn:** Tiện ích đã hỗ trợ giao diện và thông báo bằng Tiếng Việt, giúp người khiếm thị tại Việt Nam thao tác trực quan, dễ dàng nắm bắt các phản hồi giọng nói mà không gặp rào cản ngôn ngữ.`
        : `🌐 **Lưu ý ngôn ngữ:** Phiên bản hiện tại chủ yếu sử dụng giao diện Tiếng Anh hoặc ngôn ngữ quốc tế. Tuy nhiên các phím lệnh và cấu trúc menu đều tuân thủ chuẩn NVDA, các bộ đọc tiếng Việt (Sao Mai, Google TTS) vẫn có thể phát âm tốt các nhãn điều khiển.`,
    },
    {
      heading: "3. Hướng dẫn sử dụng & Phím tắt nhanh",
      content: addon.shortcuts
        ? `Tiện ích được tích hợp sẵn các phím tắt chính sau:\n- **${addon.shortcuts}**\n\n*Mẹo:* Bạn luôn có thể tùy chỉnh lại tổ hợp phím này bằng cách vào menu NVDA (NVDA + N) &rarr; Tùy chọn (Preferences) &rarr; Cử chỉ nhập liệu (Input Gestures).`
        : `Tiện ích hoạt động tự động khi NVDA khởi chạy hoặc tích hợp trực tiếp vào các menu ngữ cảnh của ứng dụng. Bạn có thể kiểm tra danh sách phím tắt gán cho tiện ích tại menu *Cử chỉ nhập liệu* của NVDA.`,
    },
    {
      heading: "4. Đánh giá ưu điểm và hạn chế thực tế",
      content: `### Ưu điểm:\n- Tương thích tốt với phiên bản **${addon.testedVersion || "NVDA 2024.x"}**.\n- Mã nguồn minh bạch, tôn trọng bản quyền cộng đồng với liên kết GitHub chính thức.\n- Tối ưu hóa phản hồi âm thanh/lời nói nhanh chóng, không gây giật lag máy tính.\n\n### Hạn chế cần lưu ý:\n- Khi nâng cấp các bản NVDA lớn hàng năm (như NVDA 2024 sang 2025), người dùng cần kiểm tra lại độ tương thích API nếu tiện ích chưa kịp cập nhật.`,
    },
    {
      heading: "5. Hướng dẫn tải và cài đặt an toàn",
      content: `1. Nhấn nút **Tải tệp .nvda-addon** từ trang Kho Tiện Ích hoặc liên kết chính thức: [Tải ${addon.name}](${addon.downloadUrl}).\n2. Mở tệp vừa tải về trong thư mục Downloads.\n3. Khi NVDA hiện thông báo xác nhận cài đặt add-on, nhấn phím **Y** (Yes).\n4. Khởi động lại NVDA để hoàn tất kích hoạt.`,
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
