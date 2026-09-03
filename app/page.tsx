import {
  Accessibility,
  ArrowRight,
  CheckCircle2,
  Code2,
  Download,
  ExternalLink,
  Heart,
  MessageCircle,
  MessagesSquare,
  Radio,
  ShieldCheck,
  Wifi,
} from "lucide-react";

const projects = [
  {
    name: "RadioTV",
    description:
      "Nghe đài phát thanh và xem truyền hình trong một giao diện đơn giản, ưu tiên thao tác bằng bàn phím và trình đọc màn hình.",
    status: "Phiên bản 0.1 đang thử nghiệm",
    icon: Radio,
    link: null,
    linkText: "Trang chi tiết sắp có",
  },
  {
    name: "NVDA Network Optimizer",
    description:
      "Tiện ích NVDA hỗ trợ kiểm tra và tối ưu một số thiết lập mạng trên Windows bằng quy trình có hướng dẫn.",
    status: "Đang hoàn thiện hồ sơ phát hành",
    icon: Wifi,
    link: "https://github.com/voduykhanhmata-ctrl/NVDA-Network-Optimizer",
    linkText: "Xem mã nguồn",
  },
  {
    name: "ZaloAccess",
    description:
      "Dự án hướng đến trải nghiệm Zalo thuận tiện hơn cho người dùng bàn phím và công nghệ hỗ trợ.",
    status: "Đang phát triển",
    icon: MessageCircle,
    link: "https://github.com/voduykhanhmata-ctrl?tab=repositories",
    linkText: "Theo dõi trên GitHub",
  },
];

const principles = [
  "Điều khiển đầy đủ bằng bàn phím",
  "Tiêu đề và vùng nội dung có cấu trúc rõ ràng",
  "Độ tương phản cao, trạng thái lấy nét dễ nhận biết",
  "Không tự phát âm thanh hoặc tạo chuyển động gây mất tập trung",
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#noi-dung-chinh">
        Chuyển đến nội dung chính
      </a>

      <header className="site-header">
        <div className="shell header-inner">
          <nav aria-label="Điều hướng chính">
            <ul className="nav-list">
              <li><a href="#du-an">Dự án</a></li>
              <li><a href="#cong-dong">Cộng đồng</a></li>
              <li><a href="#tiep-can">Tiếp cận</a></li>
              <li><a href="#tro-giup">Trợ giúp</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main id="noi-dung-chinh">
        <section className="hero" id="dau-trang" aria-labelledby="hero-title">
          <div className="shell hero-grid">
            <div className="hero-copy">
              <h1 id="hero-title">Chào mừng tới với Võ Duy Khánh, trang web mở dành cho người mù</h1>
              <p className="hero-lead">
                Các phần mềm thiết thực dành cho cộng đồng, được xây dựng với ưu tiên rõ ràng:
                dễ dùng bằng bàn phím, thân thiện với NVDA và minh bạch về tiến độ.
              </p>
              <div className="hero-actions" aria-label="Liên kết nổi bật">
                <a className="button button-primary" href="#du-an">
                  Khám phá dự án <ArrowRight size={19} aria-hidden="true" />
                </a>
                <a
                  className="button button-secondary"
                  href="https://github.com/voduykhanhmata-ctrl"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Code2 size={19} aria-hidden="true" /> GitHub của tôi
                  <span className="sr-only"> (mở trong thẻ mới)</span>
                </a>
              </div>
            </div>

            <aside className="status-card" aria-labelledby="status-title">
              <div className="status-icon" aria-hidden="true"><CheckCircle2 size={26} /></div>
              <p className="status-label">Trạng thái website</p>
              <h2 id="status-title">Website đang mở</h2>
              <p>
                Bạn đã có thể khám phá các dự án. Nội dung và hướng dẫn sẽ tiếp tục được hoàn thiện.
              </p>
              <div className="status-row">
                <span className="status-dot" aria-hidden="true" />
                Đang cập nhật
              </div>
            </aside>
          </div>
        </section>

        <section className="section" id="du-an" aria-labelledby="projects-title">
          <div className="shell">
            <div className="section-heading">
              <p className="eyebrow">Đang thực hiện</p>
              <h2 id="projects-title">Các dự án nổi bật</h2>
              <p>Mỗi dự án giải quyết một nhu cầu cụ thể và sẽ có trang hướng dẫn riêng.</p>
            </div>

            <div className="project-grid">
              {projects.map((project) => {
                const Icon = project.icon;
                return (
                  <article className="project-card" key={project.name}>
                    <div className="project-icon" aria-hidden="true"><Icon size={26} /></div>
                    <p className="project-status"><span aria-hidden="true" />{project.status}</p>
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                    {project.link ? (
                      <a href={project.link} target="_blank" rel="noreferrer">
                        {project.linkText} <ExternalLink size={17} aria-hidden="true" />
                        <span className="sr-only"> (mở trong thẻ mới)</span>
                      </a>
                    ) : (
                      <span className="coming-soon">{project.linkText}</span>
                    )}
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section resource-section" id="cong-dong" aria-labelledby="community-title">
          <div className="shell">
            <div className="section-heading">
              <p className="eyebrow">Tải xuống và đồng hành</p>
              <h2 id="community-title">Một điểm đến rõ ràng, an toàn</h2>
              <p>
                Bản phát hành, mã nguồn và phản hồi đều được dẫn về các kênh chính thức để bạn dễ kiểm tra.
              </p>
            </div>
            <div className="resource-grid">
              <article className="resource-card">
                <div className="resource-heading">
                  <div className="project-icon" aria-hidden="true"><Download size={25} /></div>
                  <h3>Tải xuống dự án</h3>
                </div>
                <p>
                  Chỉ tải tệp từ kho GitHub của Võ Duy Khánh. Mỗi dự án sẽ ghi rõ phiên bản, hướng dẫn và giấy phép.
                </p>
                <a
                  href="https://github.com/voduykhanhmata-ctrl?tab=repositories"
                  target="_blank"
                  rel="noreferrer"
                >
                  Mở danh sách dự án <ExternalLink size={17} aria-hidden="true" />
                  <span className="sr-only"> (mở trong thẻ mới)</span>
                </a>
              </article>
              <article className="resource-card">
                <div className="resource-heading">
                  <div className="project-icon" aria-hidden="true"><MessagesSquare size={25} /></div>
                  <h3>Góp ý từ cộng đồng</h3>
                </div>
                <p>
                  Báo lỗi, đề xuất tính năng hoặc theo dõi tiến độ công khai. Phản hồi của người dùng là một phần của sản phẩm.
                </p>
                <a
                  href="https://github.com/voduykhanhmata-ctrl/NVDA-Network-Optimizer/issues"
                  target="_blank"
                  rel="noreferrer"
                >
                  Mở khu vực góp ý <ExternalLink size={17} aria-hidden="true" />
                  <span className="sr-only"> (mở trong thẻ mới)</span>
                </a>
              </article>
              <aside className="trust-note" aria-label="Cam kết nguồn phát hành">
                <ShieldCheck size={28} aria-hidden="true" />
                <div>
                  <h3>Nguồn chính thức</h3>
                  <p>Tác giả dự án: Võ Duy Khánh. Không yêu cầu tải tệp từ trang trung gian.</p>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section className="section accessibility-section" id="tiep-can" aria-labelledby="access-title">
          <div className="shell access-grid">
            <div>
              <div className="large-icon" aria-hidden="true"><Accessibility size={34} /></div>
              <p className="eyebrow">Tiếp cận là nền tảng</p>
              <h2 id="access-title">Thiết kế để không ai bị bỏ lại</h2>
              <p className="section-copy">
                Website được kiểm tra từ cấu trúc nội dung trước, rồi mới đến phần trang trí. Mục tiêu là
                thao tác nhanh, dễ hiểu và ít gây nhiễu cho cả người dùng mới lẫn người dùng lâu năm.
              </p>
            </div>
            <ul className="principle-list">
              {principles.map((principle) => (
                <li key={principle}><CheckCircle2 size={21} aria-hidden="true" />{principle}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section help-section" id="tro-giup" aria-labelledby="help-title">
          <div className="shell help-card">
            <div>
              <p className="eyebrow">Góp ý và hỗ trợ</p>
              <h2 id="help-title">Bạn gặp lỗi hoặc có ý tưởng mới?</h2>
              <p>
                Hãy gửi mô tả rõ các bước đã làm, kết quả mong đợi và phiên bản NVDA đang sử dụng.
                Thông tin đó giúp tôi kiểm tra nhanh hơn.
              </p>
            </div>
            <div className="help-actions">
              <a
                className="button button-light"
                href="https://github.com/voduykhanhmata-ctrl/NVDA-Network-Optimizer/issues"
                target="_blank"
                rel="noreferrer"
              >
                Gửi báo lỗi <ExternalLink size={18} aria-hidden="true" />
                <span className="sr-only"> (mở trong thẻ mới)</span>
              </a>
              <a
                className="text-link-light"
                href="https://github.com/voduykhanhmata-ctrl?tab=repositories"
                target="_blank"
                rel="noreferrer"
              >
                Xem tất cả kho mã nguồn
                <span className="sr-only"> (mở trong thẻ mới)</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="shell footer-inner">
          <p>© 2026 Võ Duy Khánh. Các dự án vì một môi trường số dễ tiếp cận hơn.</p>
          <p className="footer-note"><Heart size={16} aria-hidden="true" /> Xây dựng cùng phản hồi của cộng đồng.</p>
        </div>
      </footer>
    </>
  );
}
