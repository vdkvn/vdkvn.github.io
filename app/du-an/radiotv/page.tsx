import { ProjectDetailPageView } from "@/components/ProjectDetailPageView";
import type { Metadata } from "next";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "RadioTV | Chi tiết dự án & Mục đích",
  description: "Ứng dụng nghe đài phát thanh và xem truyền hình tiếp cận cho người khiếm thị của Võ Duy Khánh.",
};

export default function RadioTVPage() {
  return <ProjectDetailPageView slug="radiotv" />;
}
