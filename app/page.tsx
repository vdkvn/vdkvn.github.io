import { Accessibility, ArrowRight, Download, Mail, Radio, Volume2, Wifi } from "lucide-react";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "@/components/SiteNavigation";
import { projectsDetailList } from "@/lib/projects-data";
import updatesData from "@/lib/updates.json";

const icons = { Radio, Accessibility, Volume2, Wifi };
const projectOrder = ["radiotv", "nvda-screen-reader", "google-tts-for-nvda", "nvda-network-optimizer"];
const sectionIds: Record<string, string> = {
  radiotv: "radiotv-section",
  "nvda-screen-reader": "nvda-section",
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
            <p className="hero-lead">Tìm phần mềm, tải tiện ích và xem hướng dẫn sử dụng NVDA bằng tiếng Việt.</p>
            <a className="button button-primary" href="#chuyen-muc">
              Chọn phần mềm <ArrowRight size={18} aria-hidden="true" />
            </a>
          </div>
        </section>

        <section className="section projects-section" id="chuyen-muc" tabIndex={-1} aria-labelledby="projects-title">
          <span id="du-an" className="anchor-alias" aria-hidden="true" />
          <div className="shell">
            <div className="section-heading">
              <h2 id="projects-title">Bạn muốn làm gì?</h2>
              <p>Chọn dự án để xem cách cài đặt, phím tắt và nơi tải.</p>
            </div>
            <div className="project-grid">
              {projects.map((project) => {
                const Icon = icons[project.iconName];
                return (
                  <article className="project-card" id={sectionIds[project.slug]} key={project.slug} tabIndex={-1} aria-labelledby={`${project.slug}-title`}>
                    <div className="project-card-top">
                      <span className="project-icon" aria-hidden="true"><Icon size={24} /></span>
                      <p className="project-category">{project.category}</p>
                    </div>
                    <h3 id={`${project.slug}-title`}><Link href={`/du-an/${project.slug}`}>{project.name}</Link></h3>
                    <p className="project-description">{project.subtitle}</p>
                    <p className="project-status">{project.status}</p>
                    <div className="project-card-actions">
                      <Link href={`/du-an/${project.slug}`} className="text-link">
                        Hướng dẫn {project.name} <ArrowRight size={17} aria-hidden="true" />
                      </Link>
                      {project.downloadUrl && <a href={project.downloadUrl} className="download-link">
                        <Download size={17} aria-hidden="true" /> {project.downloadLabel}
                      </a>}
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
                <h3>Góp ý nhanh qua hộp thư điện tử</h3>
                <p>Không cần tài khoản GitHub. Bấm nút bên dưới để gửi email trực tiếp cho Khánh:</p>
                <a
                  href="mailto:voduykhanh.mata@gmail.com?subject=[VDK-Website]%20Góp%20ý%20cùng%20Võ%20Duy%20Khánh&body=Chào%20Khánh,%0D%0A%0D%0ATôi%20muốn%20góp%20ý/báo%20lỗi%20về:%0D%0A-%20Dự%20án:%20%0D%0A-%20Nội%20dung:%20%0D%0A-%20Phiên%20bản%20NVDA%20đang%20dùng:%20"
                  className="email-button"
                >
                  <Mail size={18} aria-hidden="true" /> Gửi email: voduykhanh.mata@gmail.com
                </a>
              </div>
            </div>
            <div className="feedback-links">
              <p className="section-note" style={{ marginTop: 0, fontWeight: 700 }}>Hoặc theo dõi và báo lỗi công khai trên GitHub:</p>
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
