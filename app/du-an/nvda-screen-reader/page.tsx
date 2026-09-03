import { ProjectDetailPageView } from "@/components/ProjectDetailPageView";
import type { Metadata } from "next";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "NVDA Screen Reader (Bản mới nhất) | Giới thiệu & Tải về",
  description: "Trình đọc màn hình NVDA phiên bản mới nhất, hỗ trợ tiếng Việt, tối ưu cho Windows 11 và Office 365.",
};

export default function NVDAScreenReaderPage() {
  return <ProjectDetailPageView slug="nvda-screen-reader" />;
}
