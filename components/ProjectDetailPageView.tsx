import { projectsDetailList, ProjectDetail } from "@/lib/projects-data";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  CheckCircle2,
  Download,
  ExternalLink,
  Radio,
  Volume2,
  Wifi,
  Sparkles,
  Target,
  BookOpen,
  Settings,
  ShieldCheck,
  User,
  Heart,
  Keyboard,
  HelpCircle,
  Users,
} from "lucide-react";

const iconMap = {
  Radio: Radio,
  Wifi: Wifi,
  Volume2: Volume2,
};

export function ProjectDetailPageView({ slug }: { slug: string }) {
  const project = projectsDetailList.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const Icon = iconMap[project.iconName] || Radio;

  return (
    <>
      <a className="skip-link" href="#noi-dung-chinh">
        Chuyển đến nội dung chính
      </a>

      <header className="site-header">
        <div className="shell header-inner">
          <nav aria-label="Điều hướng chính">
            <ul className="nav-list">
              <li>
                <Link href="/" className="back-home-link">
                  <ArrowLeft size={18} aria-hidden="true" />
                  <span>Trang chủ</span>
                </Link>
              </li>
              <li>
                <Link href="/#du-an">Tất cả dự án</Link>
              </li>
              <li>
                <Link href="/#nhat-ky">Tiến độ</Link>
              </li>
              <li>
                <Link href="/#cong-dong">Cộng đồng</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main id="noi-dung-chinh">
        {/* Header Hero của Dự án */}
        <section className="project-detail-hero" aria-labelledby="project-title">
          <div className="shell">
            <nav className="breadcrumb" aria-label="Đường dẫn trang">
              <Link href="/">Trang chủ</Link>
              <span aria-hidden="true"> / </span>
              <Link href="/#du-an">Dự án</Link>
              <span aria-hidden="true"> / </span>
              <span aria-current="page">{project.name}</span>
            </nav>

            <div className="project-hero-header">
              <div className="project-icon-large" aria-hidden="true">
                <Icon size={40} />
              </div>
              <div>
                <div className="project-tags">
                  <span className="project-badge">{project.category}</span>
                  <span className="project-badge-status">{project.status}</span>
                </div>
                <h1 id="project-title">{project.name}</h1>
                <p className="project-subtitle">{project.subtitle}</p>
              </div>
            </div>

            <p className="project-lead">{project.tagline}</p>

            <div className="project-action-bar">
              {project.downloadUrl && (
                <a
                  className="button button-primary"
                  href={project.downloadUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Download size={19} aria-hidden="true" /> Tải về bản mới nhất
                  <span className="sr-only"> (mở trong thẻ mới)</span>
                </a>
              )}
              {project.repoUrl && (
                <a
                  className="button button-secondary"
                  href={project.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  <ExternalLink size={19} aria-hidden="true" /> Xem kho mã nguồn trên GitHub
                  <span className="sr-only"> (mở trong thẻ mới)</span>
                </a>
              )}
              <Link href="/#du-an" className="button button-secondary">
                <ArrowLeft size={18} aria-hidden="true" /> Quay lại danh sách dự án
              </Link>
            </div>
          </div>
        </section>

        {/* Nội dung chi tiết */}
        <section className="section project-detail-content">
          <div className="shell detail-grid">
            <div className="main-content-col">
              {/* 1. Giới thiệu tổng quan */}
              <article className="content-block" aria-labelledby="intro-heading">
                <div className="block-header">
                  <div className="block-icon" aria-hidden="true">
                    <BookOpen size={24} />
                  </div>
                  <h2 id="intro-heading">1. Giới thiệu tổng quan & Bối cảnh</h2>
                </div>
                {project.introduction.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </article>

              {/* 2. Mục đích & Ý nghĩa */}
              <article className="content-block" aria-labelledby="purpose-heading">
                <div className="block-header">
                  <div className="block-icon" aria-hidden="true">
                    <Target size={24} />
                  </div>
                  <h2 id="purpose-heading">2. Mục đích & Ý nghĩa đối với cộng đồng</h2>
                </div>
                <ul className="purpose-list">
                  {project.purpose.map((item, index) => (
                    <li key={index}>
                      <CheckCircle2 size={20} aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>

              {/* 3. Các tính năng nổi bật */}
              <article className="content-block" aria-labelledby="features-heading">
                <div className="block-header">
                  <div className="block-icon" aria-hidden="true">
                    <Sparkles size={24} />
                  </div>
                  <h2 id="features-heading">3. Các tính năng nổi bật</h2>
                </div>
                <div className="features-detail-grid">
                  {project.features.map((feat, index) => (
                    <div className="feature-detail-card" key={index}>
                      <h3>{feat.title}</h3>
                      <p>{feat.desc}</p>
                    </div>
                  ))}
                </div>
              </article>

              {/* 4. Bảng phím tắt điều khiển */}
              {project.shortcuts && project.shortcuts.length > 0 && (
                <article className="content-block" aria-labelledby="shortcuts-heading">
                  <div className="block-header">
                    <div className="block-icon" aria-hidden="true">
                      <Keyboard size={24} />
                    </div>
                    <h2 id="shortcuts-heading">4. Bảng phím tắt thao tác nhanh</h2>
                  </div>
                  <p className="shortcut-note">
                    Dành riêng cho người dùng bàn phím và trình đọc màn hình NVDA:
                  </p>
                  <div className="shortcuts-table-wrapper">
                    <table className="shortcuts-table">
                      <thead>
                        <tr>
                          <th scope="col">Phím tắt</th>
                          <th scope="col">Hành động / Chức năng</th>
                        </tr>
                      </thead>
                      <tbody>
                        {project.shortcuts.map((sc, index) => (
                          <tr key={index}>
                            <td>
                              <kbd className="kbd-key">{sc.key}</kbd>
                            </td>
                            <td>{sc.action}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </article>
              )}

              {/* 5. Hướng dẫn sử dụng cơ bản */}
              <article className="content-block" aria-labelledby="guide-heading">
                <div className="block-header">
                  <div className="block-icon" aria-hidden="true">
                    <Settings size={24} />
                  </div>
                  <h2 id="guide-heading">5. Hướng dẫn cài đặt & Sử dụng</h2>
                </div>
                <ol className="usage-steps">
                  {project.usageGuide.map((step, index) => (
                    <li key={index}>
                      <span className="step-num" aria-hidden="true">
                        {index + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </article>

              {/* 6. Câu hỏi thường gặp */}
              {project.faq && project.faq.length > 0 && (
                <article className="content-block" aria-labelledby="faq-heading">
                  <div className="block-header">
                    <div className="block-icon" aria-hidden="true">
                      <HelpCircle size={24} />
                    </div>
                    <h2 id="faq-heading">6. Câu hỏi thường gặp (FAQ)</h2>
                  </div>
                  <div className="faq-list">
                    {project.faq.map((item, index) => (
                      <div className="faq-card" key={index}>
                        <h3>{item.question}</h3>
                        <p>{item.answer}</p>
                      </div>
                    ))}
                  </div>
                </article>
              )}
            </div>

            {/* Cột thông tin phụ bên phải */}
            <aside className="sidebar-col" aria-label="Thông tin kỹ thuật và tác giả">
              <div className="sidebar-card">
                <div className="sidebar-header">
                  <Users size={22} aria-hidden="true" />
                  <h3>Nhóm phát triển</h3>
                </div>
                <div className="author-details">
                  <p className="author-name">
                    <strong>Tác giả chính:</strong>
                    <br />
                    {project.author}
                  </p>
                  {project.coAuthors && project.coAuthors.length > 0 && (
                    <p className="co-authors">
                      <strong>Đồng phát triển:</strong>
                      <br />
                      {project.coAuthors.join(", ")}
                    </p>
                  )}
                </div>
                <div className="specs-list">
                  {project.techSpecs.map((spec, index) => (
                    <div className="spec-row" key={index}>
                      <span className="spec-label">{spec.label}</span>
                      <span className="spec-value">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="sidebar-card trust-card">
                <div className="sidebar-header">
                  <ShieldCheck size={22} aria-hidden="true" />
                  <h3>Cam kết cộng đồng</h3>
                </div>
                <p>
                  Mọi sản phẩm được chia sẻ trên website đều hoàn toàn miễn phí,
                  không chứa phần mềm độc hại, mã nguồn mở minh bạch và ưu tiên tối đa khả năng tiếp cận cho người khiếm thị.
                </p>
              </div>
            </aside>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="shell footer-inner">
          <p>© 2026 Võ Duy Khánh. Các dự án vì một môi trường số dễ tiếp cận hơn.</p>
          <p className="footer-note">
            <Heart size={16} aria-hidden="true" /> Xây dựng cùng phản hồi của cộng đồng.
          </p>
        </div>
      </footer>
    </>
  );
}
