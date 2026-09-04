import { ProjectDetailPageView } from "@/components/ProjectDetailPageView";
import type { Metadata } from "next";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Google TTS for NVDA — Hướng dẫn và tải xuống",
  description: "Cài giọng đọc Google cho NVDA, tải gói giọng và tìm hướng dẫn từ tác giả.",
  alternates: { canonical: "https://vdkvn.github.io/du-an/google-tts-for-nvda/" },
  openGraph: {
    title: "Google TTS for NVDA — Hướng dẫn và tải xuống",
    description: "Cài giọng đọc Google cho NVDA, tải gói giọng và tìm hướng dẫn từ tác giả.",
    url: "https://vdkvn.github.io/du-an/google-tts-for-nvda/",
    images: ["/og.png"],
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Google TTS for NVDA — Hướng dẫn và tải xuống",
    description: "Cài giọng đọc Google cho NVDA, tải gói giọng và tìm hướng dẫn từ tác giả.",
    images: ["/og.png"],
  },
};

export default function GoogleTTSPage() {
  return <ProjectDetailPageView slug="google-tts-for-nvda" />;
}
