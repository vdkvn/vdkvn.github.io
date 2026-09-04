import { ProjectDetailPageView } from "@/components/ProjectDetailPageView";
import type { Metadata } from "next";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "NVDA Network Optimizer — Hướng dẫn và tải xuống",
  description: "Kiểm tra kết nối và phản hồi DNS trong NVDA. Xem hướng dẫn cài đặt và tải tiện ích từ tác giả.",
  alternates: { canonical: "https://vdkvn.github.io/du-an/nvda-network-optimizer/" },
  openGraph: {
    title: "NVDA Network Optimizer — Hướng dẫn và tải xuống",
    description: "Kiểm tra kết nối và phản hồi DNS trong NVDA. Xem hướng dẫn cài đặt và tải tiện ích từ tác giả.",
    url: "https://vdkvn.github.io/du-an/nvda-network-optimizer/",
    images: ["/og.png"],
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NVDA Network Optimizer — Hướng dẫn và tải xuống",
    description: "Kiểm tra kết nối và phản hồi DNS trong NVDA. Xem hướng dẫn cài đặt và tải tiện ích từ tác giả.",
    images: ["/og.png"],
  },
};

export default function NetworkOptimizerPage() {
  return <ProjectDetailPageView slug="nvda-network-optimizer" />;
}
