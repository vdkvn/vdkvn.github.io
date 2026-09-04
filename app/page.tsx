import { Accessibility, ArrowRight, Download, Mail, Radio, Store, Volume2, Wifi } from "lucide-react";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "@/components/SiteNavigation";
import { projectsDetailList } from "@/lib/projects-data";
import updatesData from "@/lib/updates.json";

function FacebookIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

const icons = { Radio, Accessibility, Volume2, Wifi };
const projectOrder = ["nvda-screen-reader", "radiotv", "google-tts-for-nvda", "nvda-network-optimizer"];
const sectionIds: Record<string, string> = {
  "nvda-screen-reader": "nvda-section",
  radiotv: "radiotv-section",
  "google-tts-for-nvda": "google-tts-section",
  "nvda-network-optimizer": "network-optimizer-section",
};

export default function Home() {
  const projects = projectOrder.map((slug) => projectsDetailList.find((project) => project.slug === slug)!);
  return (
    <>
      <SiteHeader />
      <main id="noi-dung-chinh" tabIndex={-1}>
        <section className="hero" aria-labelledby="hero-title">
          <div className="shell hero-copy">
            <p className="eyebrow">Dự án của Khánh · Phần mềm cộng đồng</p>
            <h1 id="hero-title">Công nghệ dễ tiếp cận,<br />bắt đầu từ việc hằng ngày.</h1>
            <p className="hero-lead">Tìm phần mềm, tải trực tiếp phiên bản NVDA mới nhất và xem hướng dẫn sử dụng bằng tiếng Việt. Tra cứu hơn 530+ add-on được phân loại tự động và hỗ trợ bởi AI.</p>
            
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.85rem", marginTop: "1rem" }}>
              <a 
                className="button button-primary" 
                href="https://github.com/nvaccess/nvda/releases/download/release-2026.2/nvda_2026.2.exe"
                title="Tải bộ cài đặt chính thức NVDA 2026.2 cho Windows"
              >
                <Download size={18} aria-hidden="true" /> Tải NVDA 2026.2 mới nhất (61.5 MB)
              </a>
              <Link className="button button-secondary" href="/kho-addon">
                🔥 Khám phá Kho 530+ Add-on <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </div>

            {/* Banner nổi bật phiên bản NVDA mới nhất */}
            <div className="nvda-hero-banner" role="region" aria-label="Thông tin phát hành NVDA mới nhất">
              <div className="nvda-hero-info">
                <span className="nvda-hero-tag">
                  <Accessibility size={15} aria-hidden="true" /> Phiên bản chính thức mới nhất
                </span>
                <h2 className="nvda-hero-title">NVDA 2026.2 dành cho Windows</h2>
                <p className="nvda-hero-desc">
                  Trình đọc màn hình miễn phí, mã nguồn mở hàng đầu thế giới. Bản 2026.2 mang đến nâng cấp lớn về khả năng đọc trình duyệt web tốc độ cao, hỗ trợ chuẩn Unicode mới và tối ưu độ ổn định cho Windows 10/11 64-bit.
                </p>
              </div>
              <div className="nvda-hero-actions">
                <a 
                  href="https://github.com/nvaccess/nvda/releases/download/release-2026.2/nvda_2026.2.exe" 
                  className="btn-nvda-download"
                >
                  <Download size={18} aria-hidden="true" /> Tải bộ cài đặt ngay
                </a>
                <Link href="/du-an/nvda-screen-reader" className="btn-nvda-info">
                  Xem hướng dẫn & phím tắt <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="section projects-section" id="chuyen-muc" tabIndex={-1} aria-labelledby="projects-title">
          <span id="du-an" className="anchor-alias" aria-hidden="true" />
          <div className="shell">
            <div className="section-heading">
              <h2 id="projects-title">Bạn muốn làm gì?</h2>
              <p>Chọn dự án để xem cách cài đặt, phím tắt và nơi tải phần mềm.</p>
            </div>
            <div className="project-grid">
              {/* Thẻ nổi bật: Kho 530+ Tiện Ích NVDA Toàn Diện */}
              <article
                className="project-card"
                style={{ border: "2px solid var(--green)", background: "linear-gradient(to bottom, #f0fdf4, #ffffff)" }}
                tabIndex={-1}
                aria-labelledby="addon-hub-spotlight-title"
              >
                <div className="project-card-top">
                  <span className="project-icon" style={{ background: "var(--green)", color: "#fff" }} aria-hidden="true">
                    <Store size={24} />
                  </span>
                  <p className="project-category" style={{ color: "var(--green-dark)", fontWeight: 700 }}>
                    530+ Tiện Ích Tự Động & AI
                  </p>
                </div>
                <h3 id="addon-hub-spotlight-title">
                  <Link href="/kho-addon">Kho Add-on NVDA (Việt Nam & Quốc Tế)</Link>
                </h3>
                <p className="project-description">
                  Tra cứu, tìm kiếm và tải trực tiếp hơn 530 tiện ích từ Cửa hàng chính thức và cộng đồng Tây Ban Nha, Nga, Việt Nam. Sắp xếp thông minh mới cập nhật lên đầu và có AI phân tích chuyên sâu.
                </p>
                <p className="project-status" style={{ color: "#166534", background: "#dcfce7" }}>
                  ⚡ Cập nhật tự động liên tục
                </p>
                <div className="project-card-actions">
                  <Link href="/kho-addon" className="button button-primary" style={{ width: "100%", justifyContent: "center" }}>
                    Vào Kho Add-on ngay <ArrowRight size={17} aria-hidden="true" />
                  </Link>
                </div>
              </article>

              {projects.map((project) => {
                const Icon = icons[project.iconName];
                const isNVDA = project.slug === "nvda-screen-reader";
                return (
                  <article 
                    className={`project-card ${isNVDA ? "nvda-featured-card" : ""}`} 
                    id={sectionIds[project.slug]} 
                    key={project.slug} 
                    tabIndex={-1} 
                    aria-labelledby={`${project.slug}-title`}
                  >
                    <div className="project-card-top">
                      <span className="project-icon" style={isNVDA ? { background: "var(--green)", color: "#fff" } : undefined} aria-hidden="true">
                        <Icon size={24} />
                      </span>
                      <p className="project-category" style={isNVDA ? { color: "var(--green-dark)", fontWeight: 700 } : undefined}>
                        {isNVDA ? "Trình đọc màn hình tiêu chuẩn · 2026.2" : project.category}
                      </p>
                    </div>
                    <h3 id={`${project.slug}-title`}><Link href={`/du-an/${project.slug}`}>{project.name}</Link></h3>
                    <p className="project-description">{project.subtitle}</p>
                    <p className="project-status">{project.status}</p>
                    <div className="project-card-actions">
                      {project.downloadUrl && (
                        <a 
                          href={project.downloadUrl} 
                          className={isNVDA ? "button button-primary" : "download-link"}
                          style={isNVDA ? { marginBottom: "0.5rem", width: "100%", justifyContent: "center" } : undefined}
                        >
                          <Download size={17} aria-hidden="true" /> {project.downloadLabel}
                        </a>
                      )}
                      <Link href={`/du-an/${project.slug}`} className="text-link">
                        Hướng dẫn & Phím tắt {project.name} <ArrowRight size={17} aria-hidden="true" />
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section updates-section" id="nhat-ky" tabIndex={-1} aria-labelledby="updates-title">
          <div className="shell">
            <div className="section-heading">
              <h2 id="updates-title">Cập nhật từ các dự án</h2>
              <p>Thay đổi trên GitHub, có thể chưa nằm trong bản cài đặt.</p>
            </div>
            {updatesData.items.length > 0 ? <ul className="update-list">
              {updatesData.items.map((item) => <li className="update-item" key={item.slug}>
                <div>
                  <h3><a href={item.url}>Thay đổi của {item.projectName}</a></h3>
                  <p lang={Array.from(item.summary).every((character) => character.charCodeAt(0) < 128) ? "en" : undefined}>{item.summary}</p>
                </div>
                <time dateTime={item.timestamp}>{item.date}</time>
              </li>)}
            </ul> : <p>Chưa có dữ liệu cập nhật. Bạn có thể mở trang dự án để xem thông tin từ tác giả.</p>}
            <p className="section-note">Lần kiểm tra gần nhất: <time dateTime={updatesData.lastChecked}>{updatesData.lastCheckedVN}</time>. Nội dung thay đổi giữ theo thông báo của từng dự án.</p>
          </div>
        </section>

        <section className="section" id="cong-dong" tabIndex={-1} aria-labelledby="feedback-title">
          <div className="shell feedback-grid">
            <div>
              <p className="eyebrow">Cùng cải thiện</p>
              <h2 id="feedback-title">Có điều gì chưa thuận tiện?</h2>
              <p>Hãy cho tác giả biết bạn gặp khó khăn ở bước nào, phiên bản đang dùng và kết quả mong muốn.</p>
              <div className="email-feedback-card">
                <h3>Góp ý nhanh qua Email & Facebook</h3>
                <p>Không cần tài khoản GitHub. Bạn có thể nhắn tin hoặc gửi email trực tiếp cho Khánh:</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: ".6rem" }}>
                  <a
                    href="mailto:voduykhanh.mata@gmail.com?subject=[VDK-Website]%20Góp%20ý%20cùng%20Võ%20Duy%20Khánh&body=Chào%20Khánh,%0D%0A%0D%0ATôi%20muốn%20góp%20ý/báo%20lỗi%20về:%0D%0A-%20Dự%20án:%20%0D%0A-%20Nội%20dung:%20%0D%0A-%20Phiên%20bản%20NVDA%20đang%20dùng:%20"
                    className="email-button"
                  >
                    <Mail size={18} aria-hidden="true" /> Gửi email cho Khánh
                  </a>
                  <a
                    href="https://www.facebook.com/vo.voduykhanh.12/"
                    target="_blank"
                    rel="noreferrer"
                    className="facebook-button"
                  >
                    <FacebookIcon size={18} /> Facebook Võ Duy Khánh
                    <span className="sr-only"> (mở trong thẻ mới)</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="feedback-links">
              <p className="section-note" style={{ marginTop: 0, fontWeight: 700 }}>Hoặc theo dõi và báo lỗi công khai trên GitHub:</p>
              <a href="https://www.facebook.com/vo.voduykhanh.12/" target="_blank" rel="noreferrer">
                Nhắn tin qua Facebook Võ Duy Khánh <ArrowRight size={18} aria-hidden="true" />
                <span className="sr-only"> (mở trong thẻ mới)</span>
              </a>
              <a href="https://github.com/vdkvn/vdkvn.github.io/issues">Góp ý về website trên GitHub <ArrowRight size={18} aria-hidden="true" /></a>
              <a href="https://github.com/voduykhanhmata-ctrl/radiotv/issues">Báo lỗi hoặc đề xuất kênh RadioTV <ArrowRight size={18} aria-hidden="true" /></a>
              <a href="https://github.com/voduykhanhmata-ctrl/nvda-network-optimizer/issues">Góp ý NVDA Network Optimizer <ArrowRight size={18} aria-hidden="true" /></a>
              <p className="section-note">Gửi góp ý qua GitHub cần có tài khoản.</p>
            </div>
          </div>
        </section>

        <section className="section access-section" id="tiep-can" tabIndex={-1} aria-labelledby="access-title">
          <div className="shell access-grid">
            <div>
              <h2 id="access-title">Dùng website bằng bàn phím</h2>
              <p>Nhấn Tab để đi tới liên kết, Shift+Tab để quay lại và Enter để mở. Liên kết đầu trang giúp bỏ qua menu.</p>
            </div>
            <div>
              <p>Với NVDA ở chế độ duyệt, nhấn H để đi qua tiêu đề hoặc NVDA+F7 để mở danh sách liên kết.</p>
              <p>Website không tự phát âm thanh. Nếu gặp nội dung khó đọc hoặc khó thao tác, bạn có thể <a href="https://github.com/vdkvn/vdkvn.github.io/issues">gửi góp ý về khả năng tiếp cận</a>.</p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
