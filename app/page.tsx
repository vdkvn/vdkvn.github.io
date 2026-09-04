import {
  Accessibility,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Clock,
  Code2,
  Compass,
  Download,
  ExternalLink,
  GitCommit,
  Heart,
  MessagesSquare,
  Radio,
  ShieldCheck,
  Sparkles,
  Volume2,
  Wifi,
} from "lucide-react";
import Link from "next/link";
import updatesData from "../lib/updates.json";

export default function Home() {
  const radiotvUpdate = updatesData.items.find((item) => item.slug === "radiotv");
  const nvdaUpdate = updatesData.items.find((item) => item.slug === "nvda-screen-reader");
  const googleTtsUpdate = updatesData.items.find((item) => item.slug === "google-tts-for-nvda");
  const netOptimizerUpdate = updatesData.items.find((item) => item.slug === "nvda-network-optimizer");

  const principles = [
    "Điều khiển đầy đủ 100% bằng bàn phím (Keyboard First)",
    "Tiêu đề và vùng nội dung phân cấp chuẩn ngữ nghĩa (H2, H3, Landmarks)",
    "Độ tương phản màu sắc cao, trạng thái lấy nét (Focus) rõ ràng",
    "Tuyệt đối không tự động phát âm thanh gây hỗn loạn cho trình đọc màn hình",
  ];

  return (
    <>
      <a className="skip-link" href="#noi-dung-chinh">
        Chuyển đến nội dung chính
      </a>

      {/* Header chính */}
      <header className="site-header">
        <div className="shell header-inner">
          <nav aria-label="Điều hướng chính của trang">
            <ul className="nav-list">
              <li><a href="#chuyen-muc">Chuyên mục dự án</a></li>
              <li><a href="#radiotv-section">RadioTV 0.1.0</a></li>
              <li><a href="#nhat-ky">Tiến độ tự động</a></li>
              <li><a href="#cong-dong">Tải xuống & Góp ý</a></li>
              <li><a href="#tiep-can">Chuẩn tiếp cận</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Thanh Menu Nhảy Nhanh Dành Cho Trình Đọc Màn Hình & Phím Tắt */}
      <nav className="quick-jump-nav" aria-label="Mục lục di chuyển nhanh đến các chuyên mục">
        <div className="shell">
          <div className="quick-jump-inner">
            <span className="quick-jump-label">
              <Compass size={17} aria-hidden="true" />
              <strong>Di chuyển nhanh:</strong>
            </span>
            <ul className="quick-jump-list">
              <li>
                <a href="#radiotv-section" className="quick-jump-link highlight-link">
                  📻 RadioTV 0.1.0 <span className="pill-mini">Mới ra mắt</span>
                </a>
              </li>
              <li>
                <a href="#nvda-section" className="quick-jump-link">
                  💻 Trình đọc NVDA
                </a>
              </li>
              <li>
                <a href="#google-tts-section" className="quick-jump-link">
                  🗣️ Giọng đọc Google TTS
                </a>
              </li>
              <li>
                <a href="#network-optimizer-section" className="quick-jump-link">
                  ⚡ Tối ưu mạng NVDA
                </a>
              </li>
              <li>
                <a href="#nhat-ky" className="quick-jump-link">
                  ⏱️ Tiến độ tự động
                </a>
              </li>
              <li>
                <a href="#cong-dong" className="quick-jump-link">
                  🤝 Cam kết cộng đồng
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <main id="noi-dung-chinh">
        {/* Phần Hero Giới Thiệu */}
        <section className="hero" id="dau-trang" aria-labelledby="hero-title">
          <div className="shell hero-grid">
            <div className="hero-copy">
              <h1 id="hero-title">Võ Duy Khánh — Không gian công nghệ tiếp cận cho người khiếm thị</h1>
              <p className="hero-lead">
                Trang web mở tập hợp các phần mềm, tiện ích bổ trợ (add-ons) và giải pháp số thiết thực
                dành cho cộng đồng NVDA Việt Nam. Được thiết kế tối ưu hóa cho bàn phím, giao diện tinh gọn, không quảng cáo và minh bạch mã nguồn.
              </p>
              <div className="hero-actions" aria-label="Hành động nhanh">
                <a className="button button-primary" href="#chuyen-muc">
                  Khám phá các chuyên mục <ArrowRight size={19} aria-hidden="true" />
                </a>
                <a
                  className="button button-secondary"
                  href="https://github.com/voduykhanhmata-ctrl"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Code2 size={19} aria-hidden="true" /> GitHub cá nhân
                  <span className="sr-only"> (mở trong thẻ mới)</span>
                </a>
              </div>
            </div>

            <aside className="status-card" aria-labelledby="status-title">
              <div className="status-icon" aria-hidden="true"><CheckCircle2 size={26} /></div>
              <p className="status-label">Trạng thái hệ thống</p>
              <h2 id="status-title">Hoạt động ổn định</h2>
              <p>
                Dự án RadioTV phiên bản 0.1.0 đã chính thức ra mắt và có sẵn bản cài đặt Add-on cho NVDA.
              </p>
              <div className="status-row">
                <span className="status-dot" aria-hidden="true" />
                Đang trực tuyến & cập nhật tự động
              </div>
            </aside>
          </div>
        </section>

        {/* TIÊU ĐIỂM NỔI BẬT: BẢN RA MẮT RADIOTV 0.1.0 */}
        <section className="spotlight-release-section" aria-labelledby="spotlight-title">
          <div className="shell">
            <div className="spotlight-card">
              <div className="spotlight-badge-row">
                <span className="badge-new-release">
                  <Sparkles size={15} aria-hidden="true" /> Vừa chính thức ra mắt!
                </span>
                <span className="badge-version">Phiên bản 0.1.0 thử nghiệm</span>
                <span className="badge-platform">Add-on cho NVDA</span>
              </div>
              <div className="spotlight-content">
                <div className="spotlight-icon-wrap" aria-hidden="true">
                  <Radio size={42} />
                </div>
                <div className="spotlight-text">
                  <h2 id="spotlight-title">RadioTV 0.1.0 — Ứng dụng nghe đài & truyền hình thuần tiếp cận</h2>
                  <p>
                    Phát triển bởi Võ Duy Khánh: Gom toàn bộ các kênh phát thanh quốc gia (VOV1, VOV2, VOV3, VOV Giao thông, VOV5),
                    đài tỉnh (VOH...) và các kênh truyền hình thiết yếu vào danh sách văn bản tối giản.
                    Thao tác 100% bằng phím mũi tên và Enter, không quảng cáo, tương thích hoàn hảo với NVDA.
                  </p>
                </div>
              </div>
              <div className="spotlight-actions">
                <a
                  href="https://github.com/voduykhanhmata-ctrl/radiotv/releases/download/v0.1.0/RadioTV-0.1.0.nvda-addon"
                  className="button button-primary"
                >
                  <Download size={19} aria-hidden="true" /> Tải về RadioTV-0.1.0.nvda-addon
                  <span className="sr-only"> (tải trực tiếp tệp cài đặt)</span>
                </a>
                <Link href="/du-an/radiotv" className="button button-secondary">
                  <BookOpen size={18} aria-hidden="true" /> Đọc bài giới thiệu & phím tắt
                </Link>
                <a
                  href="https://github.com/voduykhanhmata-ctrl/radiotv"
                  target="_blank"
                  rel="noreferrer"
                  className="button button-secondary"
                >
                  <ExternalLink size={18} aria-hidden="true" /> Kho mã nguồn GitHub
                  <span className="sr-only"> (mở trong thẻ mới)</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* KHU VỰC PHÂN ĐỀ MỤC DỰ ÁN KHOA HỌC */}
        <section className="section" id="chuyen-muc" aria-labelledby="categories-heading">
          <div className="shell">
            <div className="section-heading">
              <p className="eyebrow">Cấu trúc rõ ràng</p>
              <h2 id="categories-heading">Các chuyên mục công nghệ tiếp cận</h2>
              <p>
                Được phân nhóm theo từng mục đích sử dụng. Nhấn phím H hoặc dùng Menu di chuyển nhanh để tới đúng phần bạn cần.
              </p>
            </div>

            <div className="categories-container">
              {/* ĐỀ MỤC 1: ĐA PHƯƠNG TIỆN TIẾP CẬN */}
              <article className="category-block" id="radiotv-section" aria-labelledby="cat1-heading">
                <div className="category-block-header">
                  <div className="category-block-header-left">
                    <Radio size={24} aria-hidden="true" color="#165b45" />
                    <h3 id="cat1-heading">1. Đa phương tiện & Giải trí tiếp cận</h3>
                  </div>
                  <span className="category-tag-badge">RadioTV 0.1.0 mới ra mắt</span>
                </div>
                <div className="category-card-body">
                  <div>
                    <h4 className="category-project-name">RadioTV (NVDA Add-on)</h4>
                    <p className="category-project-desc">
                      Tiện ích giúp người khiếm thị nghe thời sự, âm nhạc và theo dõi truyền hình quốc gia
                      ngay trong NVDA mà không bị gián đoạn bởi quảng cáo, biểu ngữ hay trình phát video phức tạp.
                    </p>
                    <div className="category-actions-row">
                      <a
                        href="https://github.com/voduykhanhmata-ctrl/radiotv/releases/download/v0.1.0/RadioTV-0.1.0.nvda-addon"
                        className="button button-primary"
                      >
                        <Download size={17} aria-hidden="true" /> Tải RadioTV-0.1.0.nvda-addon
                      </a>
                      <Link href="/du-an/radiotv" className="button button-secondary">
                        Xem chi tiết, mục đích & phím tắt <ArrowRight size={16} aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                  <div className="category-side-info">
                    <p><strong>Tác giả:</strong> Võ Duy Khánh</p>
                    <p><strong>Trạng thái:</strong> Bản thử nghiệm 0.1.0</p>
                    {radiotvUpdate?.date && (
                      <p>
                        <Clock size={14} aria-hidden="true" /> <strong>Cập nhật:</strong> {radiotvUpdate.date}
                      </p>
                    )}
                    <p><strong>Điều khiển:</strong> Mũi tên & Enter</p>
                  </div>
                </div>
              </article>

              {/* ĐỀ MỤC 2: TRÌNH ĐỌC MÀN HÌNH CỐT LÕI */}
              <article className="category-block" id="nvda-section" aria-labelledby="cat2-heading">
                <div className="category-block-header">
                  <div className="category-block-header-left">
                    <Accessibility size={24} aria-hidden="true" color="#165b45" />
                    <h3 id="cat2-heading">2. Nền tảng Trình đọc màn hình</h3>
                  </div>
                  <span className="category-tag-badge">Phần mềm cốt lõi</span>
                </div>
                <div className="category-card-body">
                  <div>
                    <h4 className="category-project-name">NVDA Screen Reader (Bản mới nhất)</h4>
                    <p className="category-project-desc">
                      Phần mềm đọc màn hình miễn phí mã nguồn mở hàng đầu thế giới cho Windows.
                      Hỗ trợ tối ưu Windows 11, Office 365, kho Add-on Store tích hợp và bảng mã chữ nổi Braille.
                    </p>
                    <div className="category-actions-row">
                      <a
                        href="https://www.nvaccess.org/download/"
                        target="_blank"
                        rel="noreferrer"
                        className="button button-primary"
                      >
                        <Download size={17} aria-hidden="true" /> Tải NVDA chính thức từ NV Access
                        <span className="sr-only"> (mở trong thẻ mới)</span>
                      </a>
                      <Link href="/du-an/nvda-screen-reader" className="button button-secondary">
                        Hướng dẫn cài đặt & bảng phím tắt <ArrowRight size={16} aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                  <div className="category-side-info">
                    <p><strong>Tổ chức:</strong> NV Access Limited (Úc)</p>
                    <p><strong>Trạng thái:</strong> Bản chính thức mới nhất</p>
                    {nvdaUpdate?.date && (
                      <p>
                        <Clock size={14} aria-hidden="true" /> <strong>Mã nguồn:</strong> {nvdaUpdate.date}
                      </p>
                    )}
                    <p><strong>Bản quyền:</strong> Mã nguồn mở GPLv2</p>
                  </div>
                </div>
              </article>

              {/* ĐỀ MỤC 3: BỘ ĐỌC TIẾNG NÓI & GIỌNG ĐỌC */}
              <article className="category-block" id="google-tts-section" aria-labelledby="cat3-heading">
                <div className="category-block-header">
                  <div className="category-block-header-left">
                    <Volume2 size={24} aria-hidden="true" color="#165b45" />
                    <h3 id="cat3-heading">3. Bộ đọc tiếng nói & Giọng đọc tự nhiên</h3>
                  </div>
                  <span className="category-tag-badge">Giọng đọc ngoại tuyến</span>
                </div>
                <div className="category-card-body">
                  <div>
                    <h4 className="category-project-name">Google TTS for NVDA (WASM Engine)</h4>
                    <p className="category-project-desc">
                      Add-on tích hợp giọng đọc Google TTS tiếng Việt tự nhiên, êm ái, ngắt nghỉ câu chuẩn xác
                      và chạy hoàn toàn ngoại tuyến (Offline) với độ trễ siêu thấp trên nền tảng Chromium.
                    </p>
                    <div className="category-actions-row">
                      <a
                        href="https://github.com/nguyenanhduc09/Google-TTS-For-NVDA/releases"
                        target="_blank"
                        rel="noreferrer"
                        className="button button-primary"
                      >
                        <Download size={17} aria-hidden="true" /> Tải add-on từ tác giả
                        <span className="sr-only"> (mở trong thẻ mới)</span>
                      </a>
                      <Link href="/du-an/google-tts-for-nvda" className="button button-secondary">
                        Xem chi tiết & cách cài đặt <ArrowRight size={16} aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                  <div className="category-side-info">
                    <p><strong>Tác giả:</strong> Nguyễn Anh Đức</p>
                    <p><strong>Đồng phát triển:</strong> Đào Đức Trung, Phạm Hùng Vương</p>
                    {googleTtsUpdate?.date && (
                      <p>
                        <Clock size={14} aria-hidden="true" /> <strong>Cập nhật:</strong> {googleTtsUpdate.date}
                      </p>
                    )}
                    <p><strong>Chế độ:</strong> 100% Offline</p>
                  </div>
                </div>
              </article>

              {/* ĐỀ MỤC 4: TIỆN ÍCH HỆ THỐNG & MẠNG */}
              <article className="category-block" id="network-optimizer-section" aria-labelledby="cat4-heading">
                <div className="category-block-header">
                  <div className="category-block-header-left">
                    <Wifi size={24} aria-hidden="true" color="#165b45" />
                    <h3 id="cat4-heading">4. Tiện ích hệ thống & Quản lý mạng</h3>
                  </div>
                  <span className="category-tag-badge">Tiện ích quản trị</span>
                </div>
                <div className="category-card-body">
                  <div>
                    <h4 className="category-project-name">NVDA Network Optimizer</h4>
                    <p className="category-project-desc">
                      Tiện ích bổ trợ trong menu NVDA giúp người khiếm thị tự đo ping mạng,
                      xóa cache Flush DNS và chuyển đổi sang các máy chủ DNS an toàn (Cloudflare, Google, Quad9) chỉ với 1 phím bấm.
                    </p>
                    <div className="category-actions-row">
                      <a
                        href="https://github.com/voduykhanhmata-ctrl/NVDA-Network-Optimizer"
                        target="_blank"
                        rel="noreferrer"
                        className="button button-primary"
                      >
                        <ExternalLink size={17} aria-hidden="true" /> Kho mã nguồn trên GitHub
                        <span className="sr-only"> (mở trong thẻ mới)</span>
                      </a>
                      <Link href="/du-an/nvda-network-optimizer" className="button button-secondary">
                        Xem chi tiết & danh sách DNS <ArrowRight size={16} aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                  <div className="category-side-info">
                    <p><strong>Tác giả:</strong> Võ Duy Khánh</p>
                    <p><strong>Trạng thái:</strong> Hoàn thiện hồ sơ phát hành</p>
                    {netOptimizerUpdate?.date && (
                      <p>
                        <Clock size={14} aria-hidden="true" /> <strong>Cập nhật:</strong> {netOptimizerUpdate.date}
                      </p>
                    )}
                    <p><strong>Hỗ trợ:</strong> Windows 10 & 11</p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* NHẬT KÝ TIẾN ĐỘ TỰ ĐỘNG */}
        <section className="section updates-section" id="nhat-ky" aria-labelledby="updates-title">
          <div className="shell">
            <div className="section-heading">
              <p className="eyebrow">Đồng bộ tự động</p>
              <h2 id="updates-title">Nhật ký tiến độ các dự án</h2>
              <p>
                Hệ thống tự động kiểm tra và ghi nhận các commit mã nguồn mới nhất từ các kho GitHub lúc 07:00 sáng hàng ngày.
              </p>
            </div>

            <div className="update-grid">
              {updatesData.items.map((item) => (
                <article className="update-card" key={item.projectName + item.sha}>
                  <div className="update-meta">
                    <span className="update-badge">
                      <GitCommit size={14} aria-hidden="true" />
                      {item.type}
                    </span>
                    <span className="update-date" aria-label={`Ngày cập nhật: ${item.date}`}>
                      {item.date}
                    </span>
                  </div>
                  <h3>{item.projectName}</h3>
                  <p>{item.summary}</p>
                  <a href={item.url} target="_blank" rel="noreferrer">
                    Xem thay đổi trên GitHub <ExternalLink size={16} aria-hidden="true" />
                    <span className="sr-only"> (mở trong thẻ mới)</span>
                  </a>
                </article>
              ))}
            </div>

            <div className="update-sync-info" role="status">
              <Clock size={18} aria-hidden="true" />
              <span>
                Kiểm tra tự động lần cuối: <strong>{updatesData.lastCheckedVN}</strong>. Lịch kiểm tra định kỳ: 07:00 sáng hàng ngày.
              </span>
            </div>
          </div>
        </section>

        {/* TẢI XUỐNG VÀ ĐỒNG HÀNH CÙNG CỘNG ĐỒNG */}
        <section className="section resource-section" id="cong-dong" aria-labelledby="community-title">
          <div className="shell">
            <div className="section-heading">
              <p className="eyebrow">Tải xuống và đồng hành</p>
              <h2 id="community-title">Một điểm đến rõ ràng, an toàn</h2>
              <p>
                Tất cả bản phát hành, mã nguồn và phản hồi đều được dẫn về các kênh chính thức của tác giả để bạn dễ kiểm tra.
              </p>
            </div>
            <div className="resource-grid">
              <article className="resource-card">
                <div className="resource-heading">
                  <div className="project-icon" aria-hidden="true"><Download size={25} /></div>
                  <h3>Kho lưu trữ chính thức</h3>
                </div>
                <p>
                  Mọi tệp phần mềm và add-on đều được lưu trữ trực tiếp trên GitHub của Võ Duy Khánh. Minh bạch mã nguồn, miễn phí vĩnh viễn.
                </p>
                <a
                  href="https://github.com/voduykhanhmata-ctrl?tab=repositories"
                  target="_blank"
                  rel="noreferrer"
                >
                  Mở danh sách kho GitHub <ExternalLink size={17} aria-hidden="true" />
                  <span className="sr-only"> (mở trong thẻ mới)</span>
                </a>
              </article>
              <article className="resource-card">
                <div className="resource-heading">
                  <div className="project-icon" aria-hidden="true"><MessagesSquare size={25} /></div>
                  <h3>Đóng góp ý kiến & Báo lỗi</h3>
                </div>
                <p>
                  Báo lỗi, đề xuất thêm kênh phát thanh/truyền hình hoặc tính năng mới. Mọi phản hồi của bạn đều là động lực cải tiến sản phẩm.
                </p>
                <a
                  href="https://github.com/voduykhanhmata-ctrl/radiotv/issues"
                  target="_blank"
                  rel="noreferrer"
                >
                  Gửi góp ý cho RadioTV <ExternalLink size={17} aria-hidden="true" />
                  <span className="sr-only"> (mở trong thẻ mới)</span>
                </a>
              </article>
              <aside className="trust-note" aria-label="Cam kết nguồn phát hành">
                <ShieldCheck size={28} aria-hidden="true" />
                <div>
                  <h3>Cam kết an toàn & phi lợi nhuận</h3>
                  <p>Tác giả dự án: Võ Duy Khánh. Tuyệt đối không chèn quảng cáo, không mã độc và hoàn toàn miễn phí vì cộng đồng.</p>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* TIÊU CHUẨN TIẾP CẬN */}
        <section className="section accessibility-section" id="tiep-can" aria-labelledby="access-title">
          <div className="shell access-grid">
            <div>
              <div className="large-icon" aria-hidden="true"><Accessibility size={34} /></div>
              <p className="eyebrow">Tiếp cận là nền tảng</p>
              <h2 id="access-title">Thiết kế để không ai bị bỏ lại phía sau</h2>
              <p className="section-copy">
                Website được thiết kế tuân thủ nghiêm ngặt tiêu chuẩn WCAG 2.1 AAA: phân cấp tiêu đề rõ ràng,
                hỗ trợ phím tắt chuyển vùng nhanh, độ tương phản chuẩn và không gây nhiễu cho người dùng trình đọc màn hình.
              </p>
            </div>
            <ul className="principle-list">
              {principles.map((principle) => (
                <li key={principle}><CheckCircle2 size={21} aria-hidden="true" />{principle}</li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="site-footer">
        <div className="shell footer-inner">
          <p>© 2026 Võ Duy Khánh. Các dự án vì một môi trường số bình đẳng và dễ tiếp cận hơn.</p>
          <p className="footer-note"><Heart size={16} aria-hidden="true" /> Xây dựng cùng sự đồng hành của cộng đồng khiếm thị.</p>
        </div>
      </footer>
    </>
  );
}
