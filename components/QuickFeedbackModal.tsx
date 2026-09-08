"use client";

import { useState, useEffect } from "react";
import { AlertTriangle, CheckCircle2, MessageSquare, Send, X } from "lucide-react";

export function QuickFeedbackModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [reportType, setReportType] = useState<"link_error" | "addon_broken" | "screen_reader_issue" | "other">("link_error");
  const [pageUrl, setPageUrl] = useState("");
  const [description, setDescription] = useState("");
  const [contact, setContact] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setPageUrl(window.location.href);
    }
  }, []);

  const issueLabels: Record<string, string> = {
    link_error: "Đường dẫn hỏng (Link chết / lỗi 404)",
    addon_broken: "Tiện ích không tải được hoặc lỗi cài đặt",
    screen_reader_issue: "Trình đọc màn hình NVDA đọc khó khăn",
    other: "Góp ý hoặc đề xuất khác",
  };

  const handleOpen = () => {
    if (typeof window !== "undefined") {
      setPageUrl(window.location.href);
    }
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const subjectText = issueLabels[reportType] || "Báo lỗi chung";
  const emailSubject = encodeURIComponent(`[Báo lỗi vdk.is-a.dev] ${subjectText}`);
  const emailBody = encodeURIComponent(
    `Chào Khánh,\n\nTôi muốn báo lỗi / góp ý:\n- Vấn đề: ${subjectText}\n- Trang gặp lỗi: ${pageUrl}\n- Nội dung chi tiết:\n${description || "(Chưa có mô tả)"}\n\n- Thông tin liên hệ của tôi: ${contact || "(Không cung cấp)"}\n`
  );
  const mailtoUrl = `mailto:voduykhanh.mata@gmail.com?subject=${emailSubject}&body=${emailBody}`;
  const githubIssueUrl = `https://github.com/vdkvn/vdkvn.github.io/issues/new?title=${encodeURIComponent(
    `[Báo lỗi] ${subjectText}`
  )}&body=${emailBody}`;

  return (
    <>
      <div className="feedback-floating-wrapper" role="region" aria-label="Báo sự cố nhanh">
        <button
          type="button"
          onClick={handleOpen}
          className="feedback-floating-btn"
          aria-haspopup="dialog"
          aria-expanded={isOpen}
          title="Báo lỗi hoặc góp ý nhanh cho Khánh"
        >
          <AlertTriangle size={16} aria-hidden="true" />
          <span>Báo lỗi / Góp ý</span>
        </button>
      </div>

      {isOpen && (
        <div
          className="article-modal-backdrop"
          role="dialog"
          aria-modal="true"
          aria-labelledby="feedback-modal-heading"
          onClick={(e) => {
            if (e.target === e.currentTarget) handleClose();
          }}
        >
          <div className="article-modal-content" style={{ maxWidth: "560px" }}>
            <div className="article-modal-header">
              <div>
                <span className="eyebrow" style={{ marginBottom: "0.25rem", display: "block" }}>
                  Hỗ trợ trực tiếp
                </span>
                <h2 id="feedback-modal-heading" style={{ fontSize: "1.25rem", margin: 0 }}>
                  Báo lỗi & Góp ý cho Khánh
                </h2>
              </div>
              <button
                type="button"
                onClick={handleClose}
                className="article-modal-close"
                aria-label="Đóng biểu mẫu báo lỗi"
              >
                <X size={18} aria-hidden="true" />
              </button>
            </div>

            <form
              className="article-modal-body"
              onSubmit={(e) => {
                e.preventDefault();
                window.location.href = mailtoUrl;
              }}
            >
              <p style={{ fontSize: "0.9375rem", color: "var(--muted-ink)", marginBottom: "1.25rem" }}>
                Khánh sẽ kiểm tra và khắc phục ngay khi nhận được thông báo. Bạn có thể gửi nhanh qua Email hoặc đăng lên GitHub.
              </p>

              <div style={{ marginBottom: "1.1rem" }}>
                <label htmlFor="issue-type-select" style={{ display: "block", fontWeight: 650, marginBottom: "0.4rem", fontSize: "0.9375rem" }}>
                  Bạn đang gặp vấn đề gì?
                </label>
                <select
                  id="issue-type-select"
                  value={reportType}
                  onChange={(e) => setReportType(e.target.value as any)}
                  style={{ width: "100%", padding: "0.65rem 0.85rem", borderRadius: "0.5rem", border: "1px solid var(--line)", background: "var(--bg)", color: "var(--ink)", minHeight: "44px" }}
                >
                  <option value="link_error">Đường dẫn hỏng (Link chết / lỗi 404)</option>
                  <option value="addon_broken">Tiện ích không tải được hoặc lỗi cài đặt</option>
                  <option value="screen_reader_issue">Trình đọc màn hình NVDA khó thao tác trên trang</option>
                  <option value="other">Góp ý tính năng mới hoặc chia sẻ khác</option>
                </select>
              </div>

              <div style={{ marginBottom: "1.1rem" }}>
                <label htmlFor="issue-page-input" style={{ display: "block", fontWeight: 650, marginBottom: "0.4rem", fontSize: "0.9375rem" }}>
                  Trang gặp sự cố
                </label>
                <input
                  id="issue-page-input"
                  type="text"
                  value={pageUrl}
                  onChange={(e) => setPageUrl(e.target.value)}
                  style={{ width: "100%", padding: "0.65rem 0.85rem", borderRadius: "0.5rem", border: "1px solid var(--line)", background: "var(--bg)", color: "var(--ink)", minHeight: "44px" }}
                />
              </div>

              <div style={{ marginBottom: "1.1rem" }}>
                <label htmlFor="issue-desc-textarea" style={{ display: "block", fontWeight: 650, marginBottom: "0.4rem", fontSize: "0.9375rem" }}>
                  Mô tả sự cố (nếu có)
                </label>
                <textarea
                  id="issue-desc-textarea"
                  rows={3}
                  placeholder="Ví dụ: Bấm tải file addon nhưng báo không tìm thấy, hoặc phím nào khó bấm..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  style={{ width: "100%", padding: "0.65rem 0.85rem", borderRadius: "0.5rem", border: "1px solid var(--line)", background: "var(--bg)", color: "var(--ink)", resize: "vertical" }}
                />
              </div>

              <div style={{ marginBottom: "1.25rem" }}>
                <label htmlFor="issue-contact-input" style={{ display: "block", fontWeight: 650, marginBottom: "0.4rem", fontSize: "0.9375rem" }}>
                  Email hoặc Facebook của bạn (tùy chọn)
                </label>
                <input
                  id="issue-contact-input"
                  type="text"
                  placeholder="Để Khánh phản hồi lại khi đã xử lý xong"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  style={{ width: "100%", padding: "0.65rem 0.85rem", borderRadius: "0.5rem", border: "1px solid var(--line)", background: "var(--bg)", color: "var(--ink)", minHeight: "44px" }}
                />
              </div>

              <div className="article-modal-footer" style={{ margin: 0, padding: "1rem 0 0", display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
                <a
                  href={mailtoUrl}
                  className="button button-primary"
                  style={{ flex: "1 1 auto", justifyContent: "center" }}
                >
                  <Send size={16} aria-hidden="true" /> Gửi Email cho Khánh
                </a>
                <a
                  href={githubIssueUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="button button-secondary"
                  style={{ flex: "1 1 auto", justifyContent: "center" }}
                >
                  <MessageSquare size={16} aria-hidden="true" /> Đăng lên GitHub
                </a>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
