import Link from "next/link";

export function SiteHeader() {
  return (
    <>
      <a className="skip-link" href="#noi-dung-chinh">Đến nội dung chính</a>
      <header className="site-header">
        <div className="shell header-inner">
          <Link className="site-brand" href="/" aria-label="Võ Duy Khánh — Trang chủ">
            <span className="brand-mark" aria-hidden="true">VDK</span>
            <span>Võ Duy Khánh</span>
          </Link>
          <nav aria-label="Điều hướng chính">
            <ul className="nav-list">
              <li><Link href="/kho-addon">Kho Add-on</Link></li>
              <li><Link href="/#chuyen-muc">Dự án</Link></li>
              <li><Link href="/#hoi-dap">Hỏi đáp NVDA</Link></li>
              <li><Link href="/#nhat-ky">Cập nhật</Link></li>
              <li><Link href="/#cong-dong">Góp ý</Link></li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-inner">
        <p>© 2026 Võ Duy Khánh</p>
        <nav aria-label="Liên kết cuối trang">
          <ul className="footer-links">
            <li><Link href="/kho-addon">Kho Add-on NVDA</Link></li>
            <li><Link href="/#tiep-can">Khả năng tiếp cận</Link></li>
            <li><a href="https://www.facebook.com/vo.voduykhanh.12/" target="_blank" rel="noreferrer">Facebook của Khánh</a></li>
            <li><a href="mailto:voduykhanh.mata@gmail.com">Email: voduykhanh.mata@gmail.com</a></li>
            <li><a href="https://github.com/voduykhanhmata-ctrl" target="_blank" rel="noreferrer">GitHub của Khánh</a></li>
            <li><a href="#noi-dung-chinh">Về đầu nội dung</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
