import { ProjectDetailPageView } from "@/components/ProjectDetailPageView";
import type { Metadata } from "next";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "NVDA — Hướng dẫn và tải xuống",
  description: "Làm quen với trình đọc màn hình NVDA: cách cài đặt, phím tắt cơ bản và liên kết tải từ NV Access.",
  alternates: { canonical: "https://vdk.is-a.dev/du-an/nvda-screen-reader/" },
  openGraph: {
    title: "NVDA — Hướng dẫn và tải xuống",
    description: "Làm quen với trình đọc màn hình NVDA: cách cài đặt, phím tắt cơ bản và liên kết tải từ NV Access.",
    url: "https://vdk.is-a.dev/du-an/nvda-screen-reader/",
    images: ["/og.png"],
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NVDA — Hướng dẫn và tải xuống",
    description: "Làm quen với trình đọc màn hình NVDA: cách cài đặt, phím tắt cơ bản và liên kết tải từ NV Access.",
    images: ["/og.png"],
  },
};

export default function NVDAPage() {
  return <ProjectDetailPageView slug="nvda-screen-reader" />;
}
