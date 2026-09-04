export interface ProjectDetail {
  slug: string;
  name: string;
  subtitle: string;
  category: string;
  status: string;
  author: string;
  coAuthors?: string[];
  iconName: "Radio" | "Wifi" | "Volume2" | "Accessibility";
  repoUrl: string;
  downloadUrl: string;
  downloadLabel: string;
  docsUrl: string;
  introduction: string[];
  features: { title: string; desc: string }[];
  shortcuts: { key: string; action: string }[];
  shortcutNote?: string;
  usageGuide: string[];
  faq: { question: string; answer: string }[];
  techSpecs: { label: string; value: string }[];
}

export const projectsDetailList: ProjectDetail[] = [
  {
    slug: "nvda-screen-reader",
    name: "NVDA",
    subtitle: "Sử dụng máy tính Windows với giọng nói và chữ nổi.",
    category: "Đọc màn hình",
    status: "Phần mềm của NV Access",
    author: "NV Access và cộng đồng đóng góp",
    iconName: "Accessibility",
    repoUrl: "https://github.com/nvaccess/nvda",
    downloadUrl: "https://github.com/nvaccess/nvda/releases/download/release-2026.2/nvda_2026.2.exe",
    downloadLabel: "Tải NVDA 2026.2 (Bản mới nhất · 61.5 MB)",
    docsUrl: "https://download.nvaccess.org/documentation/userGuide.html",
    introduction: [
      "NVDA là trình đọc màn hình miễn phí, mã nguồn mở cho Windows. Phần mềm đọc nội dung bằng giọng nói và hỗ trợ nhiều thiết bị hiển thị chữ nổi.",
      "Trang này giới thiệu cách bắt đầu và dẫn tới nguồn chính thức của NV Access. Khả năng đọc từng ứng dụng phụ thuộc vào phiên bản và cách ứng dụng đó hỗ trợ tiếp cận.",
    ],
    usageGuide: [
      "Mở trang tải của NV Access, xem yêu cầu hệ thống rồi tải bộ cài phù hợp.",
      "Mở tệp vừa tải. Trong cửa sổ NVDA, đọc điều khoản và chọn cài đặt hoặc tạo bản di động.",
      "Làm theo hướng dẫn trên màn hình để hoàn tất.",
      "Mở menu NVDA để chọn giọng đọc, cấu hình bàn phím và xem trợ giúp.",
    ],
    shortcutNote: "Phím NVDA thường là Insert hoặc Caps Lock, tùy cấu hình của bạn.",
    shortcuts: [
      { key: "NVDA + N", action: "Mở menu NVDA" },
      { key: "Ctrl", action: "Dừng giọng đọc" },
      { key: "NVDA + 1", action: "Bật hoặc tắt trợ giúp phím" },
      { key: "NVDA + Ctrl + S", action: "Chọn bộ tổng hợp tiếng nói" },
      { key: "H / Shift + H", action: "Đến tiêu đề sau / trước trong chế độ duyệt" },
    ],
    features: [
      { title: "Đọc nội dung", desc: "Làm việc với trang web, tài liệu và các ứng dụng có hỗ trợ tiếp cận." },
      { title: "Giọng nói và chữ nổi", desc: "Chọn bộ đọc phù hợp hoặc kết nối màn hình chữ nổi được hỗ trợ." },
      { title: "Tiện ích bổ sung", desc: "Mở rộng chức năng qua Add-on Store và kiểm tra tính tương thích trước khi cài." },
      { title: "Bản di động", desc: "Có thể tạo bản chạy từ USB; một số chức năng hệ thống cần bản cài đặt." },
    ],
    faq: [
      { question: "Cập nhật NVDA có ảnh hưởng tới tiện ích không?", answer: "Một số tiện ích có thể chưa tương thích với phiên bản mới. Hãy xem thông báo của bộ cài và ghi chú phát hành trước khi cập nhật." },
      { question: "Có thể dùng giọng đọc tiếng Việt không?", answer: "Có. Bạn có thể chọn giọng tiếng Việt trong bộ tổng hợp được hỗ trợ hoặc cài thêm bộ đọc phù hợp." },
    ],
    techSpecs: [
      { label: "Hệ điều hành", value: "NVDA 2026.2 yêu cầu Windows 10/11 64 bit hoặc Windows Server được hỗ trợ; xem hướng dẫn NV Access." },
      { label: "Giấy phép", value: "GNU GPL — xem điều khoản trong kho nguồn NVDA." },
    ],
  },
  {
    slug: "radiotv",
    name: "RadioTV",
    subtitle: "Nghe radio và âm thanh kênh TV ngay trong NVDA.",
    category: "Nghe đài và TV",
    status: "0.1.0 · Bản thử nghiệm",
    author: "Võ Duy Khánh",
    iconName: "Radio",
    repoUrl: "https://github.com/voduykhanhmata-ctrl/radiotv",
    downloadUrl: "https://github.com/voduykhanhmata-ctrl/radiotv/releases/download/v0.1.0/RadioTV-0.1.0.nvda-addon",
    downloadLabel: "Tải RadioTV 0.1.0",
    docsUrl: "https://github.com/voduykhanhmata-ctrl/radiotv#readme",
    introduction: [
      "RadioTV là tiện ích cho NVDA, gồm bốn mục: TV, Radio, Bóng đá và Yêu thích. Bạn có thể tìm tên kênh không dấu và điều khiển bằng bàn phím.",
      "Bản 0.1.0 chỉ phát âm thanh, chưa hiển thị video. Danh sách kênh được đóng gói sẵn; nguồn phát có thể thay đổi hoặc hết hạn.",
    ],
    usageGuide: [
      "Tải tệp RadioTV 0.1.0 từ liên kết phía trên.",
      "Khi NVDA đang chạy, mở tệp .nvda-addon và làm theo hộp thoại cài đặt.",
      "Khởi động lại NVDA nếu được yêu cầu, rồi nhấn Windows+Alt+V để mở RadioTV.",
      "Chọn mục và kênh bằng bàn phím. Nhấn Enter để phát; Escape để dừng và đóng cửa sổ.",
    ],
    shortcutNote: "Enter, Space và các phím mũi tên dưới đây áp dụng khi đang ở danh sách kênh.",
    shortcuts: [
      { key: "Windows + Alt + V", action: "Mở RadioTV" },
      { key: "Windows + Alt + P", action: "Phát hoặc dừng" },
      { key: "Windows + Alt + S", action: "Dừng phát" },
      { key: "Windows + Alt + Lên / Xuống", action: "Tăng / giảm âm lượng 5%" },
      { key: "Lên / Xuống", action: "Duyệt kênh, chưa tự phát" },
      { key: "Enter", action: "Phát kênh đã chọn" },
      { key: "Space", action: "Phát hoặc dừng, không phải tạm dừng để nghe tiếp" },
      { key: "Trái / Phải", action: "Chuyển sang kênh trước / sau và phát" },
      { key: "Tab / Shift + Tab", action: "Di chuyển giữa các điều khiển" },
      { key: "Ctrl + 1 / 2 / 3 / 4", action: "Chọn TV / Radio / Bóng đá / Yêu thích" },
      { key: "Ctrl + Tab / Ctrl + Shift + Tab", action: "Chuyển mục kế tiếp / trước" },
      { key: "F1", action: "Mở trợ giúp" },
      { key: "Escape", action: "Dừng phát và đóng cửa sổ" },
    ],
    features: [
      { title: "Tìm và chọn kênh", desc: "Tìm tên hoặc thẻ bằng tiếng Việt có dấu hay không dấu; TV được chia theo nhóm." },
      { title: "Lưu yêu thích", desc: "Dùng nút yêu thích để thêm hoặc bỏ kênh. Danh sách và âm lượng được lưu qua các phiên NVDA." },
      { title: "Lịch phát sóng", desc: "Xem lịch cho kênh có dữ liệu XMLTV. Lịch được tải ở nền." },
    ],
    faq: [
      { question: "Có cần Internet không?", answer: "Có. RadioTV mở luồng trực tiếp từ nhà cung cấp, nên kết nối mạng và tình trạng nguồn sẽ ảnh hưởng tới việc nghe." },
      { question: "Vì sao đổi âm lượng có thể ngắt tiếng?", answer: "Bản 0.1 hiện mở lại luồng khi đổi âm lượng, nên có thể ngắt tiếng ngắn." },
      { question: "Tôi có thể đề xuất thêm kênh không?", answer: "Có. Bạn có thể gửi tên đài và trang phát chính thức qua mục Góp ý RadioTV." },
    ],
    techSpecs: [
      { label: "Phiên bản", value: "0.1.0, phát hành thử nghiệm" },
      { label: "Nền tảng", value: "Mục tiêu NVDA 2024.1 trở lên trên Windows 10/11; xem giới hạn trong ghi chú phát hành." },
      { label: "Giấy phép", value: "Mã RadioTV: LGPL-2.1-or-later. BASS/BASSHLS có điều khoản riêng." },
    ],
  },
  {
    slug: "nvda-network-optimizer",
    name: "NVDA Network Optimizer",
    subtitle: "Kiểm tra kết nối và hỗ trợ thiết lập DNS bằng bàn phím.",
    category: "Kiểm tra mạng",
    status: "Tiện ích của Võ Duy Khánh",
    author: "Võ Duy Khánh",
    iconName: "Wifi",
    repoUrl: "https://github.com/voduykhanhmata-ctrl/nvda-network-optimizer",
    downloadUrl: "https://github.com/voduykhanhmata-ctrl/nvda-network-optimizer/releases",
    downloadLabel: "Bản tải Network Optimizer",
    docsUrl: "https://github.com/voduykhanhmata-ctrl/nvda-network-optimizer/blob/main/README.vi.md",
    introduction: ["Tiện ích giúp kiểm tra mạng trong NVDA. Bạn xem kết quả và xác nhận trước khi đổi DNS."],
    usageGuide: [
      "Tải bản phát hành phù hợp, mở tệp .nvda-addon và làm theo hướng dẫn cài đặt.",
      "Mở Tùy chọn → Cài đặt → Network Optimization and Diagnostics trong NVDA.",
      "Chọn nhóm chức năng cần dùng và chạy kiểm tra trước khi thay đổi cấu hình.",
    ],
    shortcuts: [],
    features: [
      { title: "Kiểm tra mạng", desc: "Xem thông tin kết nối và đo khả năng phản hồi của DNS." },
      { title: "Hỗ trợ đổi DNS", desc: "So sánh Cloudflare, Google và Quad9. Bạn chọn kết nối và xác nhận thay đổi." },
      { title: "Lưu kết quả", desc: "Sao chép báo cáo hoặc lưu thành tệp văn bản." },
    ],
    faq: [
      { question: "Đổi DNS có luôn tăng tốc mạng không?", answer: "Không. Thời gian phản hồi DNS khác với tốc độ tải xuống." },
      { question: "Có cần quyền quản trị không?", answer: "Các thao tác thay đổi hệ thống có thể yêu cầu xác nhận của Windows. Đọc hướng dẫn trước khi dùng trên mạng cơ quan hoặc VPN." },
    ],
    techSpecs: [
      { label: "NVDA", value: "Mục tiêu NVDA 2026.1 theo tài liệu dự án." },
      { label: "Ngôn ngữ", value: "Tiếng Việt và tiếng Anh" },
    ],
  },
  {
    slug: "google-tts-for-nvda",
    name: "Google TTS for NVDA",
    subtitle: "Dùng giọng đọc Google trên máy sau khi tải gói giọng.",
    category: "Giọng đọc",
    status: "Tiện ích do cộng đồng phát triển",
    author: "Nguyễn Anh Đức",
    coAuthors: ["Đào Đức Trung", "Phạm Hùng Vương"],
    iconName: "Volume2",
    repoUrl: "https://github.com/nguyenanhduc09/Google-TTS-For-NVDA",
    downloadUrl: "https://github.com/nguyenanhduc09/Google-TTS-For-NVDA/releases",
    downloadLabel: "Bản tải Google TTS",
    docsUrl: "https://github.com/nguyenanhduc09/Google-TTS-For-NVDA#readme",
    introduction: ["Tiện ích bổ sung giọng đọc Google cho NVDA. Giọng được xử lý trên máy bằng trình duyệt Chromium được hỗ trợ; cần Internet để tải gói giọng."],
    usageGuide: [
      "Tải tệp .nvda-addon từ trang phát hành của tác giả rồi cài trong NVDA.",
      "Khởi động lại NVDA nếu được yêu cầu. Nhấn NVDA+Ctrl+S và chọn Google TTS For NVDA.",
      "Nếu chưa có giọng, mở trình quản lý giọng đọc theo thông báo và tải gói phù hợp.",
    ],
    shortcuts: [
      { key: "NVDA + Ctrl + S", action: "Chọn bộ tổng hợp tiếng nói" },
      { key: "NVDA + Ctrl + Shift + G", action: "Mở trình quản lý giọng Google TTS" },
    ],
    features: [
      { title: "Đọc ngoại tuyến", desc: "Dùng gói giọng đã tải mà không cần mạng khi đọc." },
      { title: "Quản lý giọng", desc: "Tìm, tải và gỡ gói giọng trong NVDA." },
    ],
    faq: [
      { question: "Cần trình duyệt nào?", answer: "Chrome, Edge hoặc Brave. Khi dùng Edge, tiện ích còn cần WebView2 Runtime; xem hướng dẫn của tác giả." },
      { question: "Có dùng trên màn hình đăng nhập Windows không?", answer: "Không nên dựa vào tiện ích ở màn hình đăng nhập hoặc nơi không cho phép trình duyệt nền chạy." },
    ],
    techSpecs: [
      { label: "NVDA", value: "2024.1 trở lên theo tài liệu dự án" },
      { label: "Gói giọng", value: "Cần tải trước khi đọc ngoại tuyến" },
    ],
  },
];
