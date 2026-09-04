"use client";

import { useMemo, useState } from "react";
import {
  BookOpen,
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
import { AddonItem, allAddonsList } from "@/lib/addons-data";
import articlesJson from "@/lib/articles.json";

export default function KhoAddonPage() {
  const [search, setSearch] = useState("");
  const [storeFilter, setStoreFilter] = useState<"all" | "inStore" | "notInStore">("all");
  const [langFilter, setLangFilter] = useState<"all" | "vi" | "other">("all");
  const [originFilter, setOriginFilter] = useState<string>("all");
  const [sortBy, setSortBy] = useState<"newest" | "name">("newest");
  const [visibleCount, setVisibleCount] = useState(48);
  const [selectedArticle, setSelectedArticle] = useState<any | null>(null);

  const filteredAddons = useMemo(() => {
    const list = allAddonsList.filter((item) => {
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

    if (sortBy === "name") {
      return [...list].sort((a, b) => a.name.localeCompare(b.name, "vi"));
    }

    // Mặc định: MỚI CẬP NHẬT LÊN ĐẦU TIÊN (Newest update first)
    return [...list].sort((a, b) => {
      const timeA = a.updatedAt ? new Date(a.updatedAt).getTime() : 0;
      const timeB = b.updatedAt ? new Date(b.updatedAt).getTime() : 0;
      return timeB - timeA;
    });
  }, [search, storeFilter, langFilter, originFilter, sortBy]);

  const displayedAddons = useMemo(() => {
    return filteredAddons.slice(0, visibleCount);
  }, [filteredAddons, visibleCount]);

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
              <p className="eyebrow">Kho tiện ích NVDA</p>
              <h1 id="hub-title">Kho Tiện Ích NVDA (Việt Nam & Quốc Tế)</h1>
              <p className="hero-lead" style={{ fontSize: "1.0625rem" }}>
                Tổng hợp add-on từ Cửa hàng NVDA chính thức và các cộng đồng Tây Ban Nha, Nga, Việt Nam. Bạn có thể tìm nhanh phím tắt, tải trực tiếp tệp cài đặt và xem ghi chú từ tác giả.
              </p>
            </div>

            {/* Bảng Hướng Dẫn Phân Biệt Nhanh */}
            <div className="store-notice-card" role="region" aria-label="Lưu ý về nguồn cài đặt">
              <div className="notice-item">
                <Store size={22} aria-hidden="true" color="#165b45" />
                <div>
                  <strong>Có trên Cửa hàng NVDA Store:</strong>
                  <p>Bạn có thể cài trực tiếp trong Menu NVDA &rarr; Cửa hàng Add-on, hoặc bấm tải tệp tại đây.</p>
                </div>
              </div>
              <div className="notice-item">
                <Sparkles size={22} aria-hidden="true" color="#c26100" />
                <div>
                  <strong>Cộng đồng phát hành độc lập:</strong>
                  <p>Các tiện ích riêng của cộng đồng. Bạn nhấn nút <strong>Tải tệp .nvda-addon</strong>, sau đó mở tệp để cài vào máy.</p>
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

              {/* Hàng nút lọc & Sắp xếp */}
              <div className="filter-button-rows">
                <div className="filter-group" role="group" aria-label="Sắp xếp danh sách">
                  <span className="filter-label">Sắp xếp:</span>
                  <button
                    type="button"
                    className={`filter-chip ${sortBy === "newest" ? "active" : ""}`}
                    onClick={() => setSortBy("newest")}
                  >
                    ⚡ Mới cập nhật nhất (Mặc định)
                  </button>
                  <button
                    type="button"
                    className={`filter-chip ${sortBy === "name" ? "active" : ""}`}
                    onClick={() => setSortBy("name")}
                  >
                    🔤 Tên từ A - Z
                  </button>
                </div>

                <div className="filter-group" role="group" aria-label="Lọc theo trạng thái Cửa hàng">
                  <span className="filter-label">Cửa hàng:</span>
                  <button
                    type="button"
                    className={`filter-chip ${storeFilter === "all" ? "active" : ""}`}
                    onClick={() => setStoreFilter("all")}
                  >
                    Tất cả ({allAddonsList.length})
                  </button>
                  <button
                    type="button"
                    className={`filter-chip ${storeFilter === "inStore" ? "active" : ""}`}
                    onClick={() => setStoreFilter("inStore")}
                  >
                    🏪 Trên Cửa hàng ({allAddonsList.filter((a) => a.inStore).length})
                  </button>
                  <button
                    type="button"
                    className={`filter-chip ${storeFilter === "notInStore" ? "active" : ""}`}
                    onClick={() => setStoreFilter("notInStore")}
                  >
                    🌟 Cộng đồng độc lập ({allAddonsList.filter((a) => !a.inStore).length})
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
                    🇻🇳 Có Tiếng Việt ({allAddonsList.filter((a) => a.hasVietnamese).length})
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
                    Mọi nguồn ({allAddonsList.length})
                  </button>
                  <button
                    type="button"
                    className={`filter-chip ${originFilter === "vietnam" ? "active" : ""}`}
                    onClick={() => setOriginFilter("vietnam")}
                  >
                    🇻🇳 Việt Nam ({allAddonsList.filter((a) => a.origin === "vietnam").length})
                  </button>
                  <button
                    type="button"
                    className={`filter-chip ${originFilter === "spain" ? "active" : ""}`}
                    onClick={() => setOriginFilter("spain")}
                  >
                    🇪🇸 Tây Ban Nha ({allAddonsList.filter((a) => a.origin === "spain").length})
                  </button>
                  <button
                    type="button"
                    className={`filter-chip ${originFilter === "russia" ? "active" : ""}`}
                    onClick={() => setOriginFilter("russia")}
                  >
                    🇷🇺 Nga ({allAddonsList.filter((a) => a.origin === "russia").length})
                  </button>
                  <button
                    type="button"
                    className={`filter-chip ${originFilter === "international" ? "active" : ""}`}
                    onClick={() => setOriginFilter("international")}
                  >
                    🌐 Quốc tế ({allAddonsList.filter((a) => a.origin === "international").length})
                  </button>
                </div>
              </div>

              {/* Thông báo kết quả cho trình đọc màn hình */}
              <p className="search-result-count" aria-live="polite">
                Tìm thấy <strong>{filteredAddons.length}</strong> tiện ích phù hợp (đang hiển thị {Math.min(displayedAddons.length, filteredAddons.length)} tiện ích xếp theo thứ tự {sortBy === "newest" ? "mới cập nhật nhất" : "tên A-Z"}). Nhấn phím H để duyệt qua tiêu đề từng tiện ích.
              </p>
            </div>
          </div>
        </section>

        {/* Danh sách thẻ Addon */}
        <section className="section" style={{ paddingTop: 0 }} aria-label="Danh sách tiện ích">
          <div className="shell">
            {displayedAddons.length > 0 ? (
              <>
                <div className="addon-grid">
                  {displayedAddons.map((item) => (
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

                        {item.version && (
                          <span className="badge-version">v{item.version}</span>
                        )}
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
                        {item.updatedAtVN && (
                          <p><strong>Cập nhật:</strong> {item.updatedAtVN}</p>
                        )}
                        <p><strong>Tác giả:</strong> {item.author}</p>
                        <p><strong>Giấy phép:</strong> {item.license}</p>
                        <p><strong>Tương thích:</strong> {item.testedVersion}</p>
                      </div>

                      <div className="addon-card-actions">
                        <a href={item.downloadUrl} className="button button-primary">
                          <Download size={17} aria-hidden="true" /> Tải tệp .nvda-addon
                        </a>

                        {(() => {
                          const article = (articlesJson as any[]).find((a) => a.addonId === item.id);
                          if (article) {
                            return (
                              <button
                                type="button"
                                className="button button-secondary"
                                style={{ background: "#f0fdf4", borderColor: "#bbf7d0", color: "#166534" }}
                                onClick={() => setSelectedArticle(article)}
                              >
                                <BookOpen size={16} aria-hidden="true" /> AI Đánh giá
                              </button>
                            );
                          }
                          return null;
                        })()}

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

                {visibleCount < filteredAddons.length && (
                  <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
                    <button
                      type="button"
                      className="button button-primary"
                      style={{ padding: "0.85rem 2rem", fontSize: "1rem" }}
                      onClick={() => setVisibleCount((prev) => prev + 48)}
                    >
                      Tải thêm 48 tiện ích khác (còn lại {filteredAddons.length - visibleCount})
                    </button>
                  </div>
                )}
              </>
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
                    setSortBy("newest");
                  }}
                >
                  Đặt lại toàn bộ bộ lọc
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Modal Đọc Bài Viết AI Đánh Giá Chi Tiết */}
        {selectedArticle && (
          <div
            className="article-modal-backdrop"
            role="dialog"
            aria-modal="true"
            aria-labelledby="article-modal-title"
            onClick={(e) => {
              if (e.target === e.currentTarget) setSelectedArticle(null);
            }}
          >
            <div className="article-modal-content">
              <div className="article-modal-header">
                <div>
                  <p className="eyebrow" style={{ margin: 0, color: "var(--green-dark)" }}>Ghi chú & Đánh giá tiện ích</p>
                  <h2 id="article-modal-title" style={{ fontSize: "1.45rem", margin: "0.35rem 0" }}>
                    {selectedArticle.title}
                  </h2>
                  <p style={{ margin: 0, fontSize: "0.875rem", color: "var(--muted-ink)" }}>
                    Cập nhật: {selectedArticle.publishedDate}
                  </p>
                </div>
                <button
                  type="button"
                  className="article-modal-close"
                  onClick={() => setSelectedArticle(null)}
                  aria-label="Đóng bài viết"
                >
                  ✕ Đóng
                </button>
              </div>

              <div className="article-modal-body">
                <p className="hero-lead" style={{ fontSize: "1rem", marginBottom: "1.5rem" }}>
                  {selectedArticle.summary}
                </p>

                {selectedArticle.sections.map((sec: any, idx: number) => (
                  <section key={idx} style={{ marginBottom: "1.5rem" }}>
                    <h3 style={{ fontSize: "1.15rem", marginBottom: "0.5rem", color: "var(--ink)" }}>
                      {sec.heading}
                    </h3>
                    <div
                      style={{ whiteSpace: "pre-line", lineHeight: "1.65", color: "#334155", fontSize: "0.95rem" }}
                    >
                      {sec.content}
                    </div>
                  </section>
                ))}

                <div className="article-modal-footer">
                  <a href={selectedArticle.downloadUrl} className="button button-primary">
                    <Download size={17} aria-hidden="true" /> Tải tiện ích ngay
                  </a>
                  {selectedArticle.repoUrl && (
                    <a
                      href={selectedArticle.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="button button-secondary"
                    >
                      <ExternalLink size={16} aria-hidden="true" /> Mã nguồn GitHub
                    </a>
                  )}
                  <button
                    type="button"
                    className="button button-secondary"
                    onClick={() => setSelectedArticle(null)}
                  >
                    Đóng cửa sổ
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
      <SiteFooter />
    </>
  );
}
