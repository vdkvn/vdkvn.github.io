export interface ProjectFeature {
  title: string;
  desc: string;
}

export interface ShortcutItem {
  key: string;
  action: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface TechSpec {
  label: string;
  value: string;
}

export interface ProjectDetail {
  slug: string;
  name: string;
  subtitle: string;
  tagline: string;
  category: string;
  status: string;
  author: string;
  coAuthors?: string[];
  iconName: "Radio" | "Wifi" | "Volume2" | "Accessibility";
  repoUrl: string | null;
  downloadUrl: string | null;
  introduction: string[];
  purpose: string[];
  features: ProjectFeature[];
  shortcuts: ShortcutItem[];
  usageGuide: string[];
  faq: FaqItem[];
  techSpecs: TechSpec[];
}

export const projectsDetailList: ProjectDetail[] = [
  {
    slug: "nvda-screen-reader",
    name: "NVDA Screen Reader (Bản mới nhất)",
    subtitle: "Trình đọc màn hình miễn phí, mã nguồn mở hàng đầu thế giới cho Windows",
    tagline: "Cập nhật NVDA mới nhất: Tối ưu Windows 11 & Office 365, nâng cấp Add-on Store, phản hồi phím siêu tốc và hỗ trợ tiếng Việt toàn diện.",
    category: "Trình đọc màn hình",
    status: "Bản phát hành chính thức mới nhất",
    author: "NV Access & Cộng đồng toàn cầu",
    coAuthors: ["Cộng đồng người dùng & dịch giả NVDA Việt Nam"],
    iconName: "Accessibility",
    repoUrl: "https://github.com/nvaccess/nvda",
    downloadUrl: "https://www.nvaccess.org/download/",
    introduction: [
      "NVDA (NonVisual Desktop Access) là phần mềm đọc màn hình mã nguồn mở hàng đầu thế giới dành riêng cho hệ điều hành Microsoft Windows, được sáng lập và duy trì bởi tổ chức phi lợi nhuận NV Access (Úc) cùng mạng lưới hàng nghìn lập trình viên khiếm thị trên toàn cầu.",
      "Thông qua việc chuyển đổi toàn bộ giao diện đồ họa, tài liệu văn bản, bảng biểu và trang web thành giọng nói tổng hợp hoặc hiển thị trên màn hình chữ nổi Braille, NVDA mở ra cánh cửa tri thức và cơ hội việc làm bình đẳng cho hàng triệu người mù trên khắp thế giới.",
      "Phiên bản cập nhật mới nhất mang đến những bước tiến công nghệ vượt trội: Tối ưu hóa sâu cho Windows 11 23H2/24H2, nâng cấp kho tiện ích Add-on Store trực quan giúp tự động cập nhật tiện ích chỉ với một phím bấm, tăng cường độ ổn định khi làm việc với Microsoft Word, Excel 365, duyệt web trên Google Chrome, Microsoft Edge và các ứng dụng giao tiếp hàng ngày."
    ],
    purpose: [
      "Xóa bỏ hoàn toàn rào cản tài chính đối với công nghệ trợ giúp, đảm bảo mọi người khiếm thị ở bất kỳ đâu đều được sử dụng máy tính miễn phí 100%.",
      "Xây dựng một hệ sinh thái mã nguồn mở mạnh mẽ, cho phép cộng đồng lập trình viên Việt Nam tự do phát triển các tiện ích bổ trợ (add-ons) và bộ đọc tiếng Việt chuyên biệt.",
      "Cung cấp khả năng di động tối đa với chế độ Portable (chạy từ USB) không cần quyền Admin, giúp người dùng tự tin làm việc tại mọi văn phòng, trường học hay thư viện."
    ],
    features: [
      {
        title: "Tương thích hoàn hảo Windows 11 & Office 365",
        desc: "Đọc chính xác và mượt mà từng ô bảng tính Excel, tài liệu Word, bài thuyết trình PowerPoint và các thông báo hệ thống mới nhất của Windows."
      },
      {
        title: "Kho tiện ích Add-on Store tích hợp sẵn",
        desc: "Tìm kiếm, cài đặt, bật/tắt và cập nhật tự động hàng trăm tiện ích mở rộng trực tiếp ngay trong menu NVDA mà không phải tải tệp thủ công."
      },
      {
        title: "Hỗ trợ phong phú các bộ đọc tiếng Việt",
        desc: "Tương thích hoàn hảo với các giải pháp tổng hợp tiếng nói tiếng Việt chất lượng cao như Google TTS WASM Offline, Windows OneCore, SAPI5 và eSpeak NG."
      },
      {
        title: "Kết nối màn hình chữ nổi Braille tự động",
        desc: "Hỗ trợ tự động nhận diện và xuất chữ nổi sang hầu hết các dòng máy hiển thị Braille phổ biến qua kết nối Bluetooth hoặc cáp USB."
      },
      {
        title: "Chế độ chạy Portable không cần cài đặt",
        desc: "Cho phép tạo bản chạy trực tiếp trên ổ USB để bạn có thể cắm vào bất kỳ máy tính nào và sử dụng ngay lập tức với đầy đủ cấu hình quen thuộc."
      },
      {
        title: "Duyệt web thông minh với Quick Navigation",
        desc: "Dùng các phím đơn chữ cái (H để duyệt tiêu đề, K để duyệt liên kết, T để duyệt bảng, F để duyệt ô nhập liệu) giúp lướt web nhanh gấp nhiều lần."
      }
    ],
    shortcuts: [
      { key: "NVDA + Mũi tên Xuống", action: "Bắt đầu đọc liên tục toàn bộ nội dung từ con trỏ (Say All)" },
      { key: "Phím Ctrl", action: "Ngắt/dừng giọng đọc ngay lập tức (Stop speech)" },
      { key: "NVDA + T", action: "Đọc tiêu đề của cửa sổ đang mở hiện tại" },
      { key: "NVDA + Tab", action: "Đọc đối tượng và vị trí đang được lấy nét (Focus)" },
      { key: "NVDA + F12 (1 lần / 2 lần)", action: "Đọc giờ hiện tại / Đọc ngày tháng năm" },
      { key: "NVDA + N", action: "Mở Menu chính của NVDA để cấu hình, cài Add-on và trợ giúp" },
      { key: "NVDA + Ctrl + S", action: "Mở hộp thoại chọn Bộ tổng hợp âm thanh (Synthesizer)" },
      { key: "NVDA + Ctrl + K", action: "Bật/Tắt chế độ trợ giúp phím (Input Help Mode)" },
      { key: "NVDA + Q", action: "Thoát trình đọc màn hình NVDA" }
    ],
    usageGuide: [
      "Bước 1: Bấm nút 'Tải về bản mới nhất' ở phía trên để tải bộ cài đặt NVDA chính hãng từ NV Access.",
      "Bước 2: Mở tệp nvda_*.exe vừa tải về. Ngay khi mở, âm thanh mở đầu của NVDA sẽ vang lên và giọng đọc bắt đầu hoạt động.",
      "Bước 3: Nhấn phím 'A' để đồng ý điều khoản, sau đó nhấn phím 'I' để Cài đặt trực tiếp vào máy tính (Install NVDA on this computer) hoặc nhấn phím 'C' để tạo bản Portable trên USB.",
      "Bước 4: Nhấn nút 'Continue' (Tiếp tục) và chờ vài giây. NVDA sẽ khởi động lại và sẵn sàng phục vụ bạn."
    ],
    faq: [
      {
        question: "Cập nhật NVDA lên bản mới có làm mất các add-on và cài đặt hiện có không?",
        answer: "Hoàn toàn KHÔNG. Bộ cài đặt NVDA luôn tự động sao lưu và bảo tồn nguyên vẹn toàn bộ thiết lập giọng đọc, phím tắt, từ điển phát âm và các tiện ích add-on đang hoạt động của bạn."
      },
      {
        question: "Làm thế nào để NVDA đọc tiếng Việt tự nhiên và mượt mà hơn?",
        answer: "Sau khi cài NVDA, bạn hãy cài thêm tiện ích 'Google TTS for NVDA' (có sẵn trên trang web này). Add-on này sẽ mang giọng đọc Google tiếng Việt tự nhiên, êm tai và đọc ngoại tuyến 100% vào NVDA của bạn."
      },
      {
        question: "NVDA có yêu cầu trả phí định kỳ hay bản quyền không?",
        answer: "NVDA là phần mềm mã nguồn mở hoàn toàn MIỄN PHÍ vĩnh viễn cho tất cả mọi người theo giấy phép GNU General Public License (GPLv2). Bạn có thể tự do sử dụng cho mục đích cá nhân, học tập hoặc làm việc tại các cơ quan, doanh nghiệp."
      }
    ],
    techSpecs: [
      { label: "Nhà phát triển chính", value: "NV Access Limited (Tổ chức phi lợi nhuận Úc)" },
      { label: "Nền tảng hỗ trợ", value: "Windows 7 SP1, 8.1, 10, 11 (32-bit & 64-bit)" },
      { label: "Dung lượng cài đặt", value: "Rất nhẹ (~40 MB)" },
      { label: "Giấy phép bản quyền", value: "Mã nguồn mở miễn phí (GNU GPLv2)" }
    ]
  },
  {
    slug: "radiotv",
    name: "RadioTV",
    subtitle: "Tiện ích (Add-on) nghe đài phát thanh và xem truyền hình thuần tiếp cận cho NVDA",
    tagline: "Giao diện siêu tối giản, điều khiển 100% bằng phím bấm, không quảng cáo, tương thích hoàn hảo với NVDA.",
    category: "Đa phương tiện tiếp cận",
    status: "Phiên bản 0.1.0 (Đã phát hành thử nghiệm)",
    author: "Võ Duy Khánh",
    iconName: "Radio",
    repoUrl: "https://github.com/voduykhanhmata-ctrl/radiotv",
    downloadUrl: "https://github.com/voduykhanhmata-ctrl/radiotv/releases/download/v0.1.0/RadioTV-0.1.0.nvda-addon",
    introduction: [
      "RadioTV ra đời từ nhu cầu thực tế của người khiếm thị và người cao tuổi tại Việt Nam: mong muốn thưởng thức tin tức thời sự, các chương trình ca nhạc, kịch truyền thanh và các kênh truyền hình thiết yếu một cách nhanh chóng mà không bị lạc trong mê cung giao diện web hiện đại.",
      "Trên các trang web xem truyền hình hoặc ứng dụng đa phương tiện thông thường, người dùng khiếm thị thường xuyên phải đối mặt với vô số pop-up quảng cáo, biểu ngữ che mất nội dung, các trình phát video tự động bật âm thanh hỗn loạn và các nút bấm không có nhãn tiếp cận (unlabelled buttons). Điều này khiến việc chọn một kênh radio yêu thích trở nên vô cùng vất vả.",
      "RadioTV giải quyết triệt để rào cản này bằng triết lý 'Tối giản vì con người'. Ứng dụng gom toàn bộ các luồng phát thanh và truyền hình chính thống vào một danh sách văn bản thuần túy, phản hồi tức thì với từng phím gõ, giúp bạn lắng nghe cả thế giới chỉ sau 2 giây mở ứng dụng."
    ],
    purpose: [
      "Xóa bỏ hoàn toàn rào cản tiếp cận thông tin thời sự, văn hóa và giải trí cho cộng đồng người mù và khiếm thị.",
      "Đem lại trải nghiệm nghe đài và xem truyền hình thuần khiết: 0% quảng cáo chèn ép, 0% phần mềm gián điệp, tải nhanh và tiết kiệm dung lượng mạng.",
      "Xây dựng một tiêu chuẩn ứng dụng mẫu về khả năng tiếp cận (Accessibility First), làm bằng chứng thực nghiệm rằng phần mềm đẹp và tiện ích có thể song hành cùng sự thân thiện với trình đọc màn hình."
    ],
    features: [
      {
        title: "Kênh phát thanh toàn quốc phong phú",
        desc: "Truy cập trực tiếp các kênh của Đài Tiếng nói Việt Nam (VOV1 - Thời sự, VOV2 - Văn hóa, VOV3 - Âm nhạc, VOV Giao thông Hà Nội & TP.HCM, VOV5 - Đối ngoại) và các đài phát thanh địa phương trên cả nước."
      },
      {
        title: "Truyền hình thiết yếu chất lượng cao",
        desc: "Truyền phát âm thanh và hình ảnh ổn định của các đài truyền hình quốc gia (VTV1, VTV2, VTV3, VTV Cần Thơ, HTV...) với máy chủ ổn định và độ trễ cực thấp."
      },
      {
        title: "Điều khiển bàn phím trực quan",
        desc: "Thiết kế hệ thống phím tắt tiêu chuẩn: phím Mũi tên để chọn kênh, Space/Enter để phát/dừng, phím số để chuyển đài nhanh và phím F để đánh dấu yêu thích."
      },
      {
        title: "Tương thích tuyệt đối với NVDA & Jaws",
        desc: "Mọi hành động như kết nối đài, gián đoạn mạng, tên bài hát/chương trình đang phát và mức âm lượng đều được phát âm rõ ràng qua giọng đọc của trình đọc màn hình."
      },
      {
        title: "Tiết kiệm tài nguyên và bộ nhớ",
        desc: "Phần mềm chạy cực nhẹ, không ngốn RAM, không sinh nhiệt cho máy tính và hoạt động ổn định ngay cả trên các máy tính cấu hình yếu."
      }
    ],
    shortcuts: [
      { key: "Mũi tên Lên / Xuống", action: "Duyệt lên hoặc xuống trong danh sách kênh" },
      { key: "Enter hoặc Space (Cách)", action: "Phát hoặc Tạm dừng kênh đang chọn" },
      { key: "Mũi tên Trái / Phải", action: "Giảm hoặc Tăng âm lượng phát thanh" },
      { key: "Phím M", action: "Tắt tiếng (Mute) hoặc Bật lại tiếng" },
      { key: "Phím F", action: "Thêm hoặc Xóa kênh hiện tại khỏi danh sách Yêu thích" },
      { key: "Phím Tab", action: "Chuyển đổi giữa danh sách Radio và danh sách Truyền hình" }
    ],
    usageGuide: [
      "Bước 1: Bấm nút 'Tải về bản mới nhất' ở đầu trang để tải tệp cài đặt RadioTV-0.1.0.nvda-addon từ GitHub Releases.",
      "Bước 2: Mở tệp vừa tải về, NVDA sẽ hiển thị hộp thoại xác nhận cài đặt, nhấn phím 'Yes' (hoặc nhấn phím Y).",
      "Bước 3: Khởi động lại NVDA khi được nhắc để add-on được nạp vào hệ thống.",
      "Bước 4: Mở menu RadioTV từ thanh công cụ NVDA, dùng phím Mũi tên Lên/Xuống để duyệt danh sách kênh và nhấn Enter để nghe đài ngay lập tức."
    ],
    faq: [
      {
        question: "RadioTV có yêu cầu kết nối Internet liên tục không?",
        answer: "Có, vì đây là ứng dụng truyền phát trực tiếp luồng âm thanh từ các đài phát thanh và truyền hình nên máy tính cần có kết nối mạng Internet (tốc độ từ 1 Mbps trở lên là đã nghe rất mượt)."
      },
      {
        question: "RadioTV có thu phí hay chèn quảng cáo không?",
        answer: "Hoàn toàn KHÔNG. RadioTV được phát triển phi lợi nhuận bởi Võ Duy Khánh vì cộng đồng người khiếm thị Việt Nam. Phần mềm vĩnh viễn miễn phí và không bao giờ chèn quảng cáo."
      },
      {
        question: "Tôi có thể đề xuất thêm đài phát thanh của tỉnh tôi không?",
        answer: "Rất hoan nghênh! Bạn có thể gửi thông tin luồng phát thanh đài tỉnh của bạn qua phần Góp ý cộng đồng hoặc GitHub để tôi cập nhật vào danh sách kênh chính thức."
      }
    ],
    techSpecs: [
      { label: "Phiên bản phát hành", value: "RadioTV 0.1.0 (Bản thử nghiệm)" },
      { label: "Tác giả phát triển", value: "Võ Duy Khánh" },
      { label: "Nền tảng hỗ trợ", value: "NVDA 2024.1 trở lên trên Windows 10 & 11" },
      { label: "Định dạng luồng âm thanh", value: "HLS (m3u8), AAC, MP3 Direct Stream" },
      { label: "Giấy phép mã nguồn", value: "Mã nguồn mở miễn phí trên GitHub" }
    ]
  },
  {
    slug: "nvda-network-optimizer",
    name: "NVDA Network Optimizer",
    subtitle: "Tiện ích bổ trợ (Add-on) tối ưu và chẩn đoán mạng toàn diện cho NVDA",
    tagline: "Kiểm tra ping, đổi DNS sạch/an toàn và khắc phục sự cố mạng với phản hồi giọng nói trực quan.",
    category: "Tiện ích hệ thống",
    status: "Đang hoàn thiện hồ sơ phát hành",
    author: "Võ Duy Khánh",
    iconName: "Wifi",
    repoUrl: "https://github.com/voduykhanhmata-ctrl/NVDA-Network-Optimizer",
    downloadUrl: "https://github.com/voduykhanhmata-ctrl/NVDA-Network-Optimizer/releases",
    introduction: [
      "NVDA Network Optimizer là một add-on thiết yếu dành riêng cho người dùng trình đọc màn hình NVDA trên Windows, mang đến giải pháp quản lý, chẩn đoán và tối ưu hóa kết nối Internet hoàn toàn thông qua bàn phím.",
      "Đối với người khiếm thị, mỗi khi máy tính gặp sự cố mạng (như không vào được một trang web, tốc độ mạng bị chậm, mất kết nối DNS), việc phải mở Control Panel, tìm Adapter Settings, chuột phải vào Ethernet/Wi-Fi để nhập từng dãy số IP tĩnh là một thử thách rất phức tạp và dễ nhầm lẫn.",
      "NVDA Network Optimizer sinh ra để thay đổi điều đó. Add-on cung cấp một bảng điều khiển ngay trong menu NVDA, tích hợp các trình thuật sĩ (Wizard) tự động đo ping, kiểm tra tình trạng kết nối tới các máy chủ trọng điểm, và cho phép chuyển đổi sang các dịch vụ DNS công cộng uy tín chỉ bằng một phím bấm duy nhất."
    ],
    purpose: [
      "Trao quyền tự chủ cho người khiếm thị trong việc chẩn đoán và xử lý các sự cố mạng phổ biến mà không phải phụ thuộc vào sự trợ giúp của người sáng mắt.",
      "Tăng tốc độ duyệt web, giảm độ trễ khi tải trang và bảo vệ người dùng trước các trang web độc hại thông qua hệ thống DNS bảo mật cao.",
      "Cung cấp thông tin tình trạng mạng bằng giọng nói tự nhiên, ngắn gọn, súc tích và báo cáo chi tiết khi có lỗi phát sinh."
    ],
    features: [
      {
        title: "Kiểm tra kết nối mạng & Đo Ping tức thì",
        desc: "Gửi gói tin kiểm tra độ trễ (latency) đến máy chủ trong nước (VNPT, Viettel, FPT) và quốc tế (Google, Cloudflare), thông báo rõ mạng đang ở mức Rất tốt, Trung bình hay Chậm."
      },
      {
        title: "Chuyển đổi máy chủ DNS an toàn 1 chạm",
        desc: "Hỗ trợ cấu hình nhanh các máy chủ DNS hàng đầu thế giới: Cloudflare 1.1.1.1 (tốc độ cao nhất), Google 8.8.8.8 (ổn định nhất), Quad9 9.9.9.9 (chặn mã độc) và AdGuard DNS (chặn quảng cáo)."
      },
      {
        title: "Xóa sạch bộ nhớ đệm DNS (Flush DNS)",
        desc: "Tự động dọn dẹp bộ nhớ đệm phân giải tên miền của Windows để giải quyết tức thì lỗi trang web không tải được sau khi đổi mạng."
      },
      {
        title: "Khôi phục cấu hình mặc định (DHCP Restore)",
        desc: "Chức năng an toàn cho phép bạn quay trở về thiết lập nhận DNS tự động từ nhà mạng bất cứ khi nào chỉ với một cú nhấn Enter."
      },
      {
        title: "Báo cáo âm thanh chuyên biệt cho NVDA",
        desc: "Tất cả các thông báo kết quả kiểm tra đều được đọc to qua giọng đọc NVDA và có âm báo ngắn (beeps) báo hiệu thành công hoặc thất bại."
      }
    ],
    shortcuts: [
      { key: "NVDA + N -> T -> N", action: "Mở menu nhanh NVDA Network Optimizer từ thanh công cụ" },
      { key: "Phím D", action: "Mở hộp thoại chọn và đổi máy chủ DNS" },
      { key: "Phím P", action: "Bắt đầu đo kiểm tra độ trễ Ping mạng tức thì" },
      { key: "Phím F", action: "Thực thi lệnh dọn dẹp Flush DNS hệ thống" },
      { key: "Phím R", action: "Khôi phục DNS về chế độ tự động mặc định" }
    ],
    usageGuide: [
      "Bước 1: Tải tệp cài đặt có đuôi .nvda-addon từ trang phát hành chính thức trên GitHub.",
      "Bước 2: Mở tệp vừa tải về, NVDA sẽ hiển thị hộp thoại xác nhận cài đặt, nhấn phím 'Yes' (hoặc nhấn phím Y).",
      "Bước 3: Khởi động lại NVDA khi được nhắc để tiện ích có hiệu lực.",
      "Bước 4: Nhấn phím NVDA + N, chọn mục 'Công cụ' (Tools) -> 'NVDA Network Optimizer' và bắt đầu trải nghiệm."
    ],
    faq: [
      {
        question: "Đổi DNS có làm ảnh hưởng đến tài khoản hay dữ liệu máy tính của tôi không?",
        answer: "Không. Đổi DNS chỉ thay đổi máy chủ phân giải tên miền (giống như đổi danh bạ điện thoại để tìm số nhanh hơn). Các máy chủ DNS như Cloudflare (1.1.1.1) và Google (8.8.8.8) là những dịch vụ an toàn, uy tín bậc nhất thế giới."
      },
      {
        question: "Nếu sau khi đổi DNS bị mất mạng thì tôi phải làm thế nào?",
        answer: "Bạn chỉ cần mở lại addon, chọn mục 'Khôi phục DNS mặc định' (Reset to DHCP), hệ thống sẽ ngay lập tức trả về trạng thái ban đầu của nhà mạng."
      },
      {
        question: "Addon có hỗ trợ cả mạng Wi-Fi và mạng dây LAN không?",
        answer: "Có, addon tự động quét tất cả các card mạng đang hoạt động (Ethernet, Wi-Fi) và áp dụng cấu hình tối ưu chính xác cho kết nối hiện tại."
      }
    ],
    techSpecs: [
      { label: "Phiên bản NVDA tương thích", value: "NVDA 2024.1, 2024.2, 2025.1 và các bản mới hơn" },
      { label: "Hệ điều hành yêu cầu", value: "Windows 10, Windows 11 (yêu cầu quyền Administrator khi đổi DNS)" },
      { label: "Ngôn ngữ giao diện", value: "Tiếng Việt chuẩn xác và Tiếng Anh" },
      { label: "Mã nguồn", value: "Mở hoàn toàn theo giấy phép GNU General Public License v2" }
    ]
  },
  {
    slug: "google-tts-for-nvda",
    name: "Google TTS for NVDA",
    subtitle: "Add-on tổng hợp tiếng nói Google TTS chạy ngoại tuyến chất lượng cao",
    tagline: "Giọng đọc tiếng Việt và quốc tế tự nhiên, phát âm mượt mà, độ trễ siêu thấp và hoạt động hoàn toàn offline.",
    category: "Bộ đọc tiếng nói (TTS)",
    status: "Dự án cộng đồng (Đã phát hành)",
    author: "Nguyễn Anh Đức (nguyenanhduc09)",
    coAuthors: ["Đào Đức Trung", "Phạm Hùng Vương"],
    iconName: "Volume2",
    repoUrl: "https://github.com/nguyenanhduc09/Google-TTS-For-NVDA",
    downloadUrl: "https://github.com/nguyenanhduc09/Google-TTS-For-NVDA/releases",
    introduction: [
      "Google TTS for NVDA là một bước tiến vượt bậc trong trải nghiệm tiếp cận kỹ thuật số của người khiếm thị tại Việt Nam, mang chất lượng tổng hợp tiếng nói tự nhiên, êm dịu và chính xác của Google vào trình đọc màn hình NVDA.",
      "Trong nhiều năm qua, người dùng NVDA tiếng Việt chủ yếu phải sử dụng các bộ đọc máy móc như eSpeak NG (phát âm cứng nhắc, gây mỏi tai khi đọc tài liệu dài) hoặc các giải pháp TTS đám mây đòi hỏi phải có mạng Internet liên tục và thường bị trễ tiếng khi thao tác phím nhanh.",
      "Được phát triển bởi lập trình viên Nguyễn Anh Đức cùng các cộng tác viên tài năng Đào Đức Trung và Phạm Hùng Vương, add-on này ứng dụng công nghệ WebAssembly (WASM Engine) hiện đại chạy trực tiếp trên nền tảng Chromium ngầm sẵn có trong Windows. Sau khi tải gói giọng đọc một lần duy nhất, toàn bộ quá trình đọc văn bản diễn ra 100% ngoại tuyến (Offline), không gửi bất kỳ dữ liệu nào ra bên ngoài và đảm bảo tốc độ phản hồi tức thì."
    ],
    purpose: [
      "Cung cấp giọng đọc tiếng Việt truyền cảm, phát âm tự nhiên, ngắt nghỉ đúng ngữ pháp, giúp học sinh, sinh viên và người đi làm khiếm thị đọc sách, giáo trình và tài liệu mà không bị căng thẳng thính giác.",
      "Đảm bảo khả năng làm việc liên tục ở mọi lúc, mọi nơi ngay cả khi không có kết nối Internet hoặc khi đang di chuyển trên tàu xe.",
      "Bảo vệ quyền riêng tư tuyệt đối cho người dùng khi toàn bộ văn bản cá nhân, mật khẩu và nội dung riêng tư được xử lý hoàn toàn cục bộ trên máy tính."
    ],
    features: [
      {
        title: "Chất lượng giọng đọc tự nhiên chuẩn Google",
        desc: "Sử dụng engine WASM cao cấp nhất của Google, hỗ trợ phát âm tiếng Việt chuẩn xác (cả giọng Bắc và Nam) cùng hơn 40 ngôn ngữ phổ biến trên toàn cầu."
      },
      {
        title: "Hoạt động Ngoại tuyến 100% (Offline)",
        desc: "Các gói dữ liệu giọng nói (Voice Packs) được lưu trữ ngay trên ổ cứng máy tính, không tiêu tốn băng thông mạng khi đọc văn bản."
      },
      {
        title: "Trình quản lý giọng đọc (Voice Manager) trực quan",
        desc: "Giao diện quản lý tiếp cận thông minh, cho phép người dùng dễ dàng tìm kiếm, tải về, cập nhật hoặc gỡ bỏ các gói ngôn ngữ chỉ với vài phím bấm."
      },
      {
        title: "Tối ưu độ trễ phản hồi siêu thấp (Low Latency)",
        desc: "Tích hợp thuật toán phân đoạn từ thông minh (Wordwise Phrase Pronounce) và bộ nhớ đệm phát âm, đảm bảo khi bạn gõ phím hoặc lướt mũi tên là âm thanh phát ra ngay tức thì."
      },
      {
        title: "Hỗ trợ đa ngôn ngữ và chuyển đổi linh hoạt",
        desc: "Tự động phát hiện và chuyển đổi giọng đọc phù hợp khi bạn đọc tài liệu song ngữ Anh - Việt hoặc các ngôn ngữ khác."
      }
    ],
    shortcuts: [
      { key: "NVDA + Ctrl + S", action: "Mở hộp thoại chọn Bộ tổng hợp âm (Synthesizer) để chọn Google TTS" },
      { key: "NVDA + Ctrl + V", action: "Mở cài đặt giọng đọc (tốc độ, cao độ, âm lượng, chọn giọng Nam/Nữ)" },
      { key: "NVDA + N -> T -> Google TTS", action: "Mở Trình quản lý giọng đọc (Voice Manager) để tải thêm giọng mới" }
    ],
    usageGuide: [
      "Bước 1: Tải bản phát hành mới nhất (.nvda-addon) từ trang GitHub chính thức của tác giả nguyenanhduc09.",
      "Bước 2: Mở file để NVDA tiến hành cài đặt và khởi động lại NVDA.",
      "Bước 3: Hộp thoại Voice Manager sẽ xuất hiện, chọn ngôn ngữ 'Vietnamese' và nhấn nút 'Download' để tải giọng đọc về máy.",
      "Bước 4: Nhấn phím NVDA + Ctrl + S, chọn 'Google TTS For NVDA', nhấn OK để tận hưởng giọng đọc tự nhiên mới."
    ],
    faq: [
      {
        question: "Máy tính của tôi cần có trình duyệt nào để chạy add-on này?",
        answer: "Add-on tận dụng nhân Chromium có sẵn trong các trình duyệt phổ biến như Microsoft Edge (có sẵn trên mọi máy Windows 10/11), Google Chrome hoặc Brave. Bạn không cần cài đặt thêm phần mềm phụ nào khác."
      },
      {
        question: "Tôi có thể điều chỉnh tốc độ đọc nhanh/chậm được không?",
        answer: "Hoàn toàn được. Bạn có thể nhấn phím NVDA + Ctrl + V để tăng giảm tốc độ đọc (Rate), cao độ (Pitch) và âm lượng (Volume) theo đúng sở thích của mình."
      },
      {
        question: "Dự án do ai phát triển và có được cập nhật thường xuyên không?",
        answer: "Dự án được sáng lập và phát triển chính bởi tác giả Nguyễn Anh Đức (nguyenanhduc09), cùng sự đồng phát triển nhiệt huyết của Đào Đức Trung và Phạm Hùng Vương. Dự án là mã nguồn mở và liên tục được cải tiến trên GitHub."
      }
    ],
    techSpecs: [
      { label: "Phiên bản NVDA tương thích", value: "NVDA 2024.1 trở lên (hỗ trợ đầy đủ kiến trúc mới)" },
      { label: "Nhân công nghệ", value: "Google WASM TTS Engine + Chromium Audio Bridge" },
      { label: "Chế độ hoạt động", value: "100% Ngoại tuyến (Offline sau khi tải voice pack)" },
      { label: "Tác giả & Đồng phát triển", value: "Nguyễn Anh Đức (nguyenanhduc09), Đào Đức Trung, Phạm Hùng Vương" }
    ]
  }
];
