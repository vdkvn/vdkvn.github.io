import { projectsDetailList } from "@/lib/projects-data";
import { SiteFooter, SiteHeader } from "@/components/SiteNavigation";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Download, ExternalLink } from "lucide-react";

export function ProjectDetailPageView({ slug }: { slug: string }) {
  const project = projectsDetailList.find((item) => item.slug === slug);
  if (!project) notFound();
  const sections = [
    { id: "intro-heading", label: "Giới thiệu" },
    { id: "guide-heading", label: "Cài đặt" },
    ...(project.shortcuts.length ? [{ id: "shortcuts-heading", label: "Phím tắt" }] : []),
    { id: "features-heading", label: "Chức năng" },
    { id: "faq-heading", label: "Câu hỏi thường gặp" },
  ];
  return (
    <>
      <SiteHeader />
      <main id="noi-dung-chinh" tabIndex={-1}>
        <section className="project-detail-hero" aria-labelledby="project-title">
          <div className="shell">
            <nav className="breadcrumb" aria-label="Đường dẫn trang">
              <ol>
                <li><Link href="/">Trang chủ</Link></li>
                <li><Link href="/#chuyen-muc">Dự án</Link></li>
                <li aria-current="page">{project.name}</li>
              </ol>
            </nav>
            <p className="eyebrow">{project.category}</p>
            <h1 id="project-title">{project.name}</h1>
            <p className="project-subtitle">{project.subtitle}</p>
            <p className="project-status">{project.status}</p>
            <div className="project-action-bar">
              {project.downloadUrl && <a className="button button-primary" href={project.downloadUrl}>
                <Download size={18} aria-hidden="true" /> {project.downloadLabel}
              </a>}
              {project.repoUrl && <a className="button button-secondary" href={project.repoUrl}>
                <ExternalLink size={18} aria-hidden="true" /> Mã nguồn {project.name}
              </a>}
            </div>
          </div>
        </section>

        <div className="shell detail-grid section">
          <nav className="article-toc" aria-label={`Mục lục ${project.name}`}>
            <p className="toc-label">Trong bài này</p>
            <ul>{sections.map((section) => <li key={section.id}><a href={`#${section.id}`}>{section.label}</a></li>)}</ul>
          </nav>
          <div className="main-content-col">
            <section className="content-block" aria-labelledby="intro-heading">
              <h2 id="intro-heading" tabIndex={-1}>Giới thiệu</h2>
              {project.introduction.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </section>
            <section className="content-block" aria-labelledby="guide-heading">
              <h2 id="guide-heading" tabIndex={-1}>Cài đặt và bắt đầu</h2>
              <ol className="usage-steps">{project.usageGuide.map((step) => <li key={step}>{step}</li>)}</ol>
            </section>
            {project.shortcuts.length > 0 && <section className="content-block" aria-labelledby="shortcuts-heading">
              <h2 id="shortcuts-heading" tabIndex={-1}>Phím tắt</h2>
              {project.shortcutNote && <p className="section-note">{project.shortcutNote}</p>}
              <table className="shortcuts-table">
                <caption className="sr-only">Phím tắt và chức năng của {project.name}</caption>
                <thead><tr><th scope="col">Phím</th><th scope="col">Chức năng</th></tr></thead>
                <tbody>{project.shortcuts.map((shortcut) => <tr key={shortcut.key}>
                  <th scope="row"><kbd>{shortcut.key}</kbd></th><td>{shortcut.action}</td>
                </tr>)}</tbody>
              </table>
            </section>}
            <section className="content-block" aria-labelledby="features-heading">
              <h2 id="features-heading" tabIndex={-1}>Chức năng chính</h2>
              <ul className="feature-list">{project.features.map((feature) => <li key={feature.title}>
                <h3>{feature.title}</h3><p>{feature.desc}</p>
              </li>)}</ul>
            </section>
            <section className="content-block" aria-labelledby="faq-heading">
              <h2 id="faq-heading" tabIndex={-1}>Câu hỏi thường gặp</h2>
              {project.faq.map((item) => <div className="faq-item" key={item.question}>
                <h3>{item.question}</h3><p>{item.answer}</p>
              </div>)}
            </section>
            <section className="content-block project-facts" aria-labelledby="project-info-heading">
              <h2 id="project-info-heading">Thông tin dự án</h2>
              <dl>
                <div><dt>Tác giả</dt><dd>{project.author}</dd></div>
                {project.coAuthors?.length ? <div><dt>Cộng tác</dt><dd>{project.coAuthors.join(", ")}</dd></div> : null}
                {project.techSpecs.map((spec) => <div key={spec.label}><dt>{spec.label}</dt><dd>{spec.value}</dd></div>)}
              </dl>
              <p className="section-note">Tham khảo <a href={project.docsUrl}>hướng dẫn từ tác giả {project.name}</a> để xem thông tin đầy đủ cho bản đang dùng.</p>
            </section>
            <Link href="/#chuyen-muc" className="text-link">Về danh sách dự án</Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
