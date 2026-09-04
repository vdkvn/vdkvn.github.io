import { ProjectDetailPageView } from "@/components/ProjectDetailPageView";
import type { Metadata } from "next";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "RadioTV — Hướng dẫn và tải xuống",
  description: "Nghe radio và âm thanh kênh TV trong NVDA. Tải bản thử nghiệm 0.1.0, xem cách cài đặt và phím tắt.",
  alternates: { canonical: "https://vdk.is-a.dev/du-an/radiotv/" },
  openGraph: {
    title: "RadioTV — Hướng dẫn và tải xuống",
    description: "Nghe radio và âm thanh kênh TV trong NVDA. Tải bản thử nghiệm 0.1.0, xem cách cài đặt và phím tắt.",
    url: "https://vdk.is-a.dev/du-an/radiotv/",
    images: ["/og.png"],
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RadioTV — Hướng dẫn và tải xuống",
    description: "Nghe radio và âm thanh kênh TV trong NVDA. Tải bản thử nghiệm 0.1.0, xem cách cài đặt và phím tắt.",
    images: ["/og.png"],
  },
};

export default function RadioTVPage() {
  return <ProjectDetailPageView slug="radiotv" />;
}
