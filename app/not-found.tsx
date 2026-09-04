import { AlertCircle, Compass, Home, Mail } from "lucide-react";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "@/components/SiteNavigation";

export const metadata = {
  title: "404 — Không tìm thấy trang | Võ Duy Khánh",
  description: "Trang bạn tìm kiếm không tồn tại hoặc đã bị di chuyển. Hãy quay về trang chủ Võ Duy Khánh.",
};

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main id="noi-dung-chinh" tabIndex={-1} className="not-found-main">
        <section className="section" aria-labelledby="not-found-title">
          <div className="shell not-found-card">
            <div className="not-found-icon" aria-hidden="true">
              <AlertCircle size={48} />
            </div>
            <p className="eyebrow">Thông báo lỗi 404</p>
            <h1 id="not-found-title">Không tìm thấy trang bạn yêu cầu</h1>
            <p className="not-found-lead">
              Đường dẫn bạn vừa truy cập có thể đã bị thay đổi, bị xóa, hoặc bạn đã vô tình gõ nhầm một ký tự trên thanh địa chỉ.
            </p>

            <div className="not-found-actions">
              <Link href="/" className="button button-primary">
                <Home size={18} aria-hidden="true" /> Về Trang chủ của Khánh
              </Link>
              <Link href="/#chuyen-muc" className="button button-secondary">
                <Compass size={18} aria-hidden="true" /> Khám phá các dự án
              </Link>
              <a
                href="mailto:voduykhanh.mata@gmail.com?subject=[VDK-Website]%20Báo%20lỗi%20đường%20dẫn%20404"
                className="button button-secondary"
              >
                <Mail size={18} aria-hidden="true" /> Báo lỗi đường dẫn qua Email
              </a>
            </div>

            <div className="not-found-tip" role="note">
              <p>
                <strong>Mẹo tiếp cận:</strong> Nhấn phím <code>H</code> trên NVDA để đọc tiêu đề, hoặc nhấn phím <code>Tab</code> để di chuyển nhanh tới các nút điều hướng phía trên.
              </p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
