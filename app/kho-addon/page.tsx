"use client";

import { useMemo, useState } from "react";
import {
  Compass,
  Download,
  ExternalLink,
  HelpCircle,
  Keyboard,
  Search,
  Sparkles,
  Store,
} from "lucide-react";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "@/components/SiteNavigation";
import { AddonItem, addonsList } from "@/lib/addons-data";

export default function KhoAddonPage() {
  const [search, setSearch] = useState("");
  const [storeFilter, setStoreFilter] = useState<"all" | "inStore" | "notInStore">("all");
  const [langFilter, setLangFilter] = useState<"all" | "vi" | "other">("all");
  const [originFilter, setOriginFilter] = useState<string>("all");

  const filteredAddons = useMemo(() => {
    return addonsList.filter((item) => {
      const query = search.toLowerCase().trim();
      const matchQuery =
        !query ||
        item.name.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        item.author.toLowerCase().includes(query) ||
        (item.shortcuts && item.shortcuts.toLowerCase().includes(query));

      const matchStore =
        storeFilter === "all" ||
        (storeFilter === "inStore" && item.inStore) ||
        (storeFilter === "notInStore" && !item.inStore);

      const matchLang =
        langFilter === "all" ||
        (langFilter === "vi" && item.hasVietnamese) ||
        (langFilter === "other" && !item.hasVietnamese);

      const matchOrigin = originFilter === "all" || item.origin === originFilter;

      return matchQuery && matchStore && matchLang && matchOrigin;
    });
  }, [search, storeFilter, langFilter, originFilter]);

  return (
    <>
      <SiteHeader />
      <main id="noi-dung-chinh" tabIndex={-1} className="addon-hub-main">
        {/* Header giới thiệu */}
        <section className="section" aria-labelledby="hub-title" style={{ paddingBottom: "1rem" }}>
          <div className="shell">
            <nav className="breadcrumb" aria-label="Đường dẫn phân cấp">
              <ol>
                <li><Link href="/">Trang chủ</Link></li>
                <li aria-current="page">Kho Add-on NVDA</li>
              </ol>
            </nav>

            <div className="section-heading">
              <p className="eyebrow">Tra cứu & Tuyển chọn toàn diện</p>
              <h1 id="hub-title">Kho Tiện Ích NVDA (Việt Nam & Quốc Tế)</h1>
              <p className="hero-lead" style={{ fontSize: "1.0625rem" }}>
                Tổng hợp đầy đủ tiện ích trên Cửa hàng Add-on Store chính thức cùng các công cụ xuất sắc từ cộng đồng Tây Ban Nha (NVDA.es), Nga (NVDA.ru) và Việt Nam. Phân biệt rõ tiện ích đã có trên Store hay phát hành độc lập, ghi nhận bản quyền và GitHub cá nhân của tác giả.
              </p>
            </div>

            {/* Bảng Hướng Dẫn Phân Biệt Nhanh */}
            <div className="store-notice-card" role="region" aria-label="Lưu ý về nguồn cài đặt">
              <div className="notice-item">
                <Store size={22} aria-hidden="true" color="#165b45" />
                <div>
                  <strong>🏪 Đã có trên Cửa hàng Add-on Store:</strong>
                  <p>Có thể tìm thấy và cài trực tiếp ngay trong Menu NVDA &rarr; Cửa hàng Add-on (NVDA Store) hoặc tải file bên dưới.</p>
                </div>
              </div>
              <div className="notice-item">
                <Sparkles size={22} aria-hidden="true" color="#c26100" />
                <div>
                  <strong>🌟 Cộng đồng phát hành độc lập (Chưa có trên Store):</strong>
                  <p>Các dự án mới hoặc độc quyền của cộng đồng. Bạn hãy bấm nút <strong>Tải tệp .nvda-addon</strong> bên dưới, sau đó mở file để cài đặt vào máy.</p>
                </div>
              </div>
            </div>

            {/* Khung tìm kiếm & bộ lọc */}
            <div className="addon-controls" role="search" aria-label="Tìm kiếm và lọc tiện ích">
              <div className="search-box-wrap">
                <Search size={20} className="search-icon" aria-hidden="true" />
                <input
                  type="search"
                  className="search-input"
                  placeholder="Gõ từ khóa tìm tiện ích: 'radio', 'toán', 'bluetooth', 'pin', 'chuột'..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  aria-label="Ô tìm kiếm tiện ích theo tên, tác giả hoặc phím tắt"
                />
                {search && (
                  <button
                    type="button"
                    className="clear-search-btn"
                    onClick={() => setSearch("")}
                    aria-label="Xóa nội dung tìm kiếm"
                  >
                    ✕
                  </button>
                )}
              </div>

              {/* Hàng nút lọc */}
              <div className="filter-button-rows">
                <div className="filter-group" role="group" aria-label="Lọc theo trạng thái Cửa hàng">
                  <span className="filter-label">Cửa hàng:</span>
                  <button
                    type="button"
                    className={`filter-chip ${storeFilter === "all" ? "active" : ""}`}
                    onClick={() => setStoreFilter("all")}
                  >
                    Tất cả ({addonsList.length})
                  </button>
                  <button
                    type="button"
                    className={`filter-chip ${storeFilter === "inStore" ? "active" : ""}`}
                    onClick={() => setStoreFilter("inStore")}
                  >
                    🏪 Trên Cửa hàng ({addonsList.filter((a) => a.inStore).length})
                  </button>
                  <button
                    type="button"
                    className={`filter-chip ${storeFilter === "notInStore" ? "active" : ""}`}
                    onClick={() => setStoreFilter("notInStore")}
                  >
                    🌟 Cộng đồng độc lập ({addonsList.filter((a) => !a.inStore).length})
                  </button>
                </div>

                <div className="filter-group" role="group" aria-label="Lọc theo ngôn ngữ">
                  <span className="filter-label">Ngôn ngữ:</span>
                  <button
                    type="button"
                    className={`filter-chip ${langFilter === "all" ? "active" : ""}`}
                    onClick={() => setLangFilter("all")}
                  >
                    Tất cả ngôn ngữ
                  </button>
                  <button
                    type="button"
                    className={`filter-chip ${langFilter === "vi" ? "active" : ""}`}
                    onClick={() => setLangFilter("vi")}
                  >
                    🇻🇳 Có Tiếng Việt ({addonsList.filter((a) => a.hasVietnamese).length})
                  </button>
                  <button
                    type="button"
                    className={`filter-chip ${langFilter === "other" ? "active" : ""}`}
                    onClick={() => setLangFilter("other")}
                  >
                    🌐 Tiếng Anh / Quốc tế
                  </button>
                </div>

                <div className="filter-group" role="group" aria-label="Lọc theo cộng đồng">
                  <span className="filter-label">Cộng đồng:</span>
                  <button
                    type="button"
                    className={`filter-chip ${originFilter === "all" ? "active" : ""}`}
                    onClick={() => setOriginFilter("all")}
                  >
                    Mọi nguồn
                  </button>
                  <button
                    type="button"
                    className={`filter-chip ${originFilter === "vietnam" ? "active" : ""}`}
                    onClick={() => setOriginFilter("vietnam")}
                  >
                    🇻🇳 Việt Nam
                  </button>
                  <button
                    type="button"
                    className={`filter-chip ${originFilter === "spain" ? "active" : ""}`}
                    onClick={() => setOriginFilter("spain")}
                  >
                    🇪🇸 Tây Ban Nha (NVDA.es)
                  </button>
                  <button
                    type="button"
                    className={`filter-chip ${originFilter === "russia" ? "active" : ""}`}
                    onClick={() => setOriginFilter("russia")}
                  >
                    🇷🇺 Nga (NVDA.ru)
                  </button>
                  <button
                    type="button"
                    className={`filter-chip ${originFilter === "international" ? "active" : ""}`}
                    onClick={() => setOriginFilter("international")}
                  >
                    🌐 Quốc tế
                  </button>
                </div>
              </div>

              {/* Thông báo kết quả cho trình đọc màn hình */}
              <p className="search-result-count" aria-live="polite">
                Tìm thấy <strong>{filteredAddons.length}</strong> tiện ích phù hợp. Nhấn phím H để duyệt qua tiêu đề từng tiện ích.
              </p>
            </div>
          </div>
        </section>

        {/* Danh sách thẻ Addon */}
        <section className="section" style={{ paddingTop: 0 }} aria-label="Danh sách tiện ích">
          <div className="shell">
            {filteredAddons.length > 0 ? (
              <div className="addon-grid">
                {filteredAddons.map((item) => (
                  <article className="addon-card" key={item.id} aria-labelledby={`addon-${item.id}`}>
                    <div className="addon-card-badges">
                      {item.inStore ? (
                        <span className="badge-instore">
                          <Store size={14} aria-hidden="true" /> Trên Store NVDA
                        </span>
                      ) : (
                        <span className="badge-external">
                          <Sparkles size={14} aria-hidden="true" /> Cộng đồng độc lập
                        </span>
                      )}

                      {item.hasVietnamese ? (
                        <span className="badge-vi">🇻🇳 Có Tiếng Việt</span>
                      ) : (
                        <span className="badge-intl">🌐 Quốc tế</span>
                      )}

                      <span className="badge-origin">{item.originLabel}</span>
                    </div>

                    <h3 id={`addon-${item.id}`} className="addon-title">{item.name}</h3>
                    <p className="addon-desc">{item.description}</p>

                    {item.shortcuts && (
                      <div className="addon-shortcut-box">
                        <Keyboard size={15} aria-hidden="true" />
                        <span><strong>Phím tắt:</strong> {item.shortcuts}</span>
                      </div>
                    )}

                    <div className="addon-meta">
                      <p><strong>Tác giả:</strong> {item.author}</p>
                      <p><strong>Giấy phép:</strong> {item.license}</p>
                      <p><strong>Tương thích:</strong> {item.testedVersion}</p>
                    </div>

                    <div className="addon-card-actions">
                      <a href={item.downloadUrl} className="button button-primary">
                        <Download size={17} aria-hidden="true" /> Tải tệp .nvda-addon
                      </a>

                      {item.authorGithub && (
                        <a
                          href={item.authorGithub}
                          target="_blank"
                          rel="noreferrer"
                          className="button button-secondary"
                        >
                          <ExternalLink size={16} aria-hidden="true" /> GitHub tác giả
                          <span className="sr-only"> (mở trong thẻ mới)</span>
                        </a>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="no-result-box" role="status">
                <HelpCircle size={40} aria-hidden="true" />
                <h3>Không tìm thấy tiện ích phù hợp với bộ lọc</h3>
                <p>Hãy thử xóa bớt từ khóa tìm kiếm hoặc chọn "Tất cả" trên thanh lọc ở phía trên.</p>
                <button
                  type="button"
                  className="button button-primary"
                  onClick={() => {
                    setSearch("");
                    setStoreFilter("all");
                    setLangFilter("all");
                    setOriginFilter("all");
                  }}
                >
                  Đặt lại toàn bộ bộ lọc
                </button>
              </div>
            )}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
