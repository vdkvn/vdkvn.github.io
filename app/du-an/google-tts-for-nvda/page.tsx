import { ProjectDetailPageView } from "@/components/ProjectDetailPageView";
import type { Metadata } from "next";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Google TTS for NVDA | Chi tiết dự án & Mục đích",
  description: "Add-on tổng hợp tiếng nói Google TTS chạy ngoại tuyến cho NVDA.",
};

export default function GoogleTTSPage() {
  return <ProjectDetailPageView slug="google-tts-for-nvda" />;
}
