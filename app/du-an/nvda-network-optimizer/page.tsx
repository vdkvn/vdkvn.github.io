import { ProjectDetailPageView } from "@/components/ProjectDetailPageView";
import type { Metadata } from "next";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "NVDA Network Optimizer | Chi tiết dự án & Mục đích",
  description: "Add-on tối ưu và chẩn đoán mạng cho NVDA trên Windows của Võ Duy Khánh.",
};

export default function NVDANetworkOptimizerPage() {
  return <ProjectDetailPageView slug="nvda-network-optimizer" />;
}
