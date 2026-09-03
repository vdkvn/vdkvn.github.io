export interface ProjectDetail {
  slug: string;
  name: string;
  subtitle: string;
  tagline: string;
  category: string;
  status: string;
  author: string;
  iconName: "Radio" | "Wifi" | "Volume2";
  repoUrl: string | null;
  downloadUrl: string | null;
  introduction: string[];
  purpose: string[];
  features: { title: string; desc: string }[];
  usageGuide: string[];
  techSpecs: { label: string; value: string }[];
}

export const projectsDetailList: ProjectDetail[] = [
  {
    slug: "radiotv",
    name: "RadioTV",
    subtitle: "Ứng dụng nghe đài phát thanh và xem truyền hình tiếp cận",
    tagline: "Giao diện tối giản, điều khiển 100% bằng phím tắt, thân thiện tuyệt đối với người khiếm thị.",
    category: "Đa phương tiện tiếp cận",
    status: "Phiên bản 0.1 đang thử nghiệm",
    author: "Võ Duy Khánh",
    iconName: "Radio",
    repoUrl: null,
    downloadUrl: null,
    introduction: [
      "RadioTV là giải pháp giải trí đa phương tiện được thiết kế riêng cho người khiếm thị, người lớn tuổi và những ai ưa thích sự tinh gọn, nhanh chóng.",
      "Thay vì phải truy cập vào các trang web xem truyền hình phức tạp chứa đầy quảng cáo, bẫy nhấp chuột và các nút bấm không có nhãn tiếp cận (accessibility label), RadioTV đưa toàn bộ các kênh phát thanh và truyền hình thiết yếu vào một giao diện danh sách đơn giản.",
      "Chỉ cần mở phần mềm, bạn có thể dùng các phím mũi tên để chọn đài, bấm Enter để phát hoặc tạm dừng, và điều chỉnh âm lượng mà không gặp bất kỳ rào cản nào."
    ],
    purpose: [
      "Xóa bỏ rào cản tiếp cận thông tin thời sự, văn hóa và giải trí cho người khiếm thị.",
      "Mang lại trải nghiệm nghe đài, xem TV thuần khiết, không quảng cáo làm phiền và không tốn tài nguyên máy tính.",
      "Tạo ra một phần mềm chuẩn tiếp cận mẫu, tuân thủ nghiêm ngặt các nguyên tắc điều hướng bàn phím của NVDA và Windows."
    ],
    features: [
      {
        title: "Kênh phát thanh phong phú",
        desc: "Hỗ trợ đầy đủ các kênh của Đài Tiếng nói Việt Nam (VOV1, VOV2, VOV3, VOV Giao thông TP.HCM, Hà Nội) và nhiều đài truyền thanh địa phương."
      },
      {
        title: "Truyền hình thiết yếu",
        desc: "Truyền phát âm thanh/hình ảnh ổn định các kênh VTV1, VTV2, VTV3, HTV... với độ trễ thấp."
      },
      {
        title: "Phím tắt toàn diện",
        desc: "Mọi chức năng như chuyển kênh (Mũi tên), Tăng giảm âm lượng (Mũi tên Lên/Xuống), Tắt/bật tiếng (M), Yêu thích (F) đều thao tác nhanh gọn."
      },
      {
        title: "Tương thích 100% với NVDA",
        desc: "Mọi trạng thái kết nối, tên chương trình đang phát và thông báo đều được đọc to, rõ ràng qua trình đọc màn hình."
      }
    ],
    usageGuide: [
      "Tải về và mở file chạy RadioTV (không cần cài đặt phức tạp).",
      "Dùng phím Mũi tên Lên / Xuống để duyệt qua danh sách các kênh.",
      "Nhấn phím Enter hoặc Phím cách (Space) để Bắt đầu phát / Tạm dừng.",
      "Nhấn phím F để lưu kênh vào danh sách yêu thích và truy cập nhanh."
    ],
    techSpecs: [
      { label: "Nền tảng hỗ trợ", value: "Windows 10, Windows 11 (64-bit / 32-bit)" },
      { label: "Trình đọc màn hình tương thích", value: "NVDA, JAWS, Windows Narrator" },
      { label: "Yêu cầu mạng", value: "Kết nối Internet từ 2 Mbps trở lên" },
      { label: "Giấy phép", value: "Miễn phí cho cộng đồng" }
    ]
  },
  {
    slug: "nvda-network-optimizer",
    name: "NVDA Network Optimizer",
    subtitle: "Tiện ích bổ trợ (Add-on) tối ưu và chẩn đoán mạng cho NVDA",
    tagline: "Kiểm tra kết nối, đo độ trễ và đổi DNS an toàn với quy trình có hướng dẫn bằng giọng đọc.",
    category: "Tiện ích hệ thống",
    status: "Đang hoàn thiện hồ sơ phát hành",
    author: "Võ Duy Khánh",
    iconName: "Wifi",
    repoUrl: "https://github.com/voduykhanhmata-ctrl/NVDA-Network-Optimizer",
    downloadUrl: "https://github.com/voduykhanhmata-ctrl/NVDA-Network-Optimizer/releases",
    introduction: [
      "NVDA Network Optimizer là một add-on mạnh mẽ dành cho trình đọc màn hình NVDA, giúp người dùng dễ dàng quản lý, kiểm tra và tối ưu kết nối Internet trên hệ điều hành Windows.",
      "Thông thường, việc kiểm tra kết nối mạng hoặc đổi địa chỉ máy chủ DNS trên Windows đòi hỏi phải đi qua nhiều tầng menu cài đặt phức tạp của Control Panel. Điều này gây mất nhiều thời gian và dễ gây nhầm lẫn đối với người dùng sử dụng phím.",
      "Add-on này tích hợp trực tiếp vào menu công cụ của NVDA, cung cấp các quy trình từng bước (wizard) đơn giản, đọc to các thông số kỹ thuật mạng bằng ngôn ngữ dễ hiểu."
    ],
    purpose: [
      "Hỗ trợ người dùng khiếm thị tự kiểm tra và khắc phục sự cố mạng mà không cần nhờ người sáng mắt trợ giúp.",
      "Tối ưu tốc độ tải trang web và độ phản hồi khi lướt mạng thông qua các dịch vụ DNS công cộng chất lượng cao và an toàn.",
      "Cung cấp công cụ đo ping, độ trễ và tình trạng kết nối một cách nhanh chóng ngay trên phím tắt NVDA."
    ],
    features: [
      {
        title: "Kiểm tra kết nối & Đo ping",
        desc: "Đo độ trễ đến các máy chủ phổ biến trong nước và quốc tế, tự động thông báo mạng nhanh hay chậm."
      },
      {
        title: "Đổi DNS nhanh chóng & an toàn",
        desc: "Chuyển đổi một chạm giữa các DNS hàng đầu thế giới như Cloudflare (1.1.1.1), Google (8.8.8.8), Quad9 với độ bảo mật cao."
      },
      {
        title: "Xóa bộ nhớ đệm DNS (Flush DNS)",
        desc: "Tự động dọn dẹp cache DNS hệ thống để khắc phục lỗi không truy cập được một số website cụ thể."
      },
      {
        title: "Quy trình có hướng dẫn âm thanh",
        desc: "Tất cả các bước thiết lập đều có thông báo phản hồi bằng giọng nói và âm báo hiệu quả trực quan."
      }
    ],
    usageGuide: [
      "Tải file cài đặt có đuôi .nvda-addon từ trang phát hành GitHub.",
      "Mở file và nhấn Yes để NVDA tiến hành cài đặt, sau đó khởi động lại NVDA.",
      "Nhấn phím tắt NVDA+N -> chọn Công cụ (Tools) -> NVDA Network Optimizer.",
      "Chọn tính năng bạn muốn: Đo tốc độ mạng, Đổi DNS hoặc Khắc phục sự cố."
    ],
    techSpecs: [
      { label: "Phiên bản NVDA tương thích", value: "NVDA 2024.1 trở lên" },
      { label: "Hệ điều hành", value: "Windows 10, Windows 11" },
      { label: "Mã nguồn", value: "Mở (Open Source trên GitHub)" },
      { label: "Ngôn ngữ", value: "Tiếng Việt, Tiếng Anh" }
    ]
  },
  {
    slug: "google-tts-for-nvda",
    name: "Google TTS for NVDA",
    subtitle: "Add-on tổng hợp tiếng nói Google TTS chất lượng cao chạy ngoại tuyến",
    tagline: "Giọng đọc tiếng Việt và quốc tế tự nhiên, phát âm mượt mà, độ trễ siêu thấp và hoạt động hoàn toàn offline.",
    category: "Bộ đọc tiếng nói (TTS)",
    status: "Dự án cộng đồng (Đã phát hành)",
    author: "Nguyễn Anh Đức (nguyenanhduc09), Đào Đức Trung, Phạm Hùng Vương",
    iconName: "Volume2",
    repoUrl: "https://github.com/nguyenanhduc09/Google-TTS-For-NVDA",
    downloadUrl: "https://github.com/nguyenanhduc09/Google-TTS-For-NVDA/releases",
    introduction: [
      "Google TTS for NVDA là một tiện ích bổ trợ đột phá giúp tích hợp công nghệ tổng hợp tiếng nói tiên tiến của Google (WASM Engine) vào trình đọc màn hình NVDA.",
      "Trước đây, việc sử dụng giọng đọc Google thường yêu cầu phải có kết nối mạng Internet liên tục và dễ gặp tình trạng trễ âm thanh. Add-on này giải quyết triệt để vấn đề bằng cách tải các gói giọng đọc trực tiếp về máy và chạy thông qua nền tảng Chromium ngầm có sẵn trên máy tính (như Google Chrome, Microsoft Edge, Brave).",
      "Kết quả mang lại là giọng đọc tiếng Việt cực kỳ tự nhiên, ngữ điệu truyền cảm, êm tai khi đọc sách, tài liệu dài mà không lo gián đoạn hay mất kết nối mạng."
    ],
    purpose: [
      "Nâng cao chất lượng trải nghiệm âm thanh hàng ngày cho người sử dụng NVDA tại Việt Nam và trên thế giới.",
      "Cung cấp bộ đọc tiếng Việt chuẩn, không bị gắt tai như các bộ tổng hợp âm cũ (eSpeak).",
      "Đảm bảo quyền riêng tư và sự tiện lợi tối đa khi người dùng có thể đọc mọi văn bản ngoại tuyến 100% không cần gửi dữ liệu lên máy chủ đám mây."
    ],
    features: [
      {
        title: "Giọng đọc tự nhiên & chuẩn xác",
        desc: "Sử dụng engine WASM mới nhất của Google, ngữ điệu mượt mà, hỗ trợ phát âm tiếng Việt và hơn 40 ngôn ngữ phổ biến."
      },
      {
        title: "Trình quản lý giọng đọc (Voice Manager)",
        desc: "Giao diện tiếp cận dễ sử dụng giúp bạn dễ dàng tải xuống, xóa và cập nhật các gói ngôn ngữ mong muốn."
      },
      {
        title: "Tối ưu độ trễ siêu thấp (Low Latency)",
        desc: "Áp dụng kỹ thuật phân đoạn văn bản thông minh và bộ nhớ đệm cụm từ (phrase caching), phản hồi tức thì khi di chuyển phím."
      },
      {
        title: "Cấu hình ngôn ngữ tự động (Language Profiles)",
        desc: "Hỗ trợ tự động chuyển đổi giọng đọc tương ứng khi gặp văn bản tiếng Anh, tiếng Việt hoặc đa ngữ."
      }
    ],
    usageGuide: [
      "Tải file .nvda-addon mới nhất từ trang phát hành GitHub của tác giả nguyenanhduc09.",
      "Cài đặt addon vào NVDA và khởi động lại trình đọc màn hình.",
      "Hộp thoại Voice Manager sẽ tự động mở lên để bạn tải gói giọng đọc tiếng Việt (hoặc ngôn ngữ khác).",
      "Nhấn phím tắt NVDA+Ctrl+S để mở cài đặt Bộ tổng hợp âm thanh (Synthesizer), chọn 'Google TTS For NVDA' và bắt đầu sử dụng."
    ],
    techSpecs: [
      { label: "Phiên bản NVDA tương thích", value: "NVDA 2024.1 trở lên" },
      { label: "Yêu cầu trình duyệt nền", value: "Microsoft Edge, Google Chrome hoặc Brave" },
      { label: "Chế độ hoạt động", value: "Ngoại tuyến (Offline 100% sau khi tải voice pack)" },
      { label: "Tác giả chính", value: "Nguyễn Anh Đức, Đào Đức Trung, Phạm Hùng Vương" }
    ]
  }
];
