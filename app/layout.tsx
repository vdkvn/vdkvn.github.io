import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://vdk-projects.voduykhanh150.chatgpt.site"),
  title: {
    default: "VDK Projects | Võ Duy Khánh",
    template: "%s | VDK Projects",
  },
  description:
    "Nơi giới thiệu các dự án phần mềm dễ tiếp cận của Võ Duy Khánh dành cho cộng đồng người dùng NVDA.",
  applicationName: "VDK Projects",
  authors: [{ name: "Võ Duy Khánh" }],
  creator: "Võ Duy Khánh",
  keywords: ["Võ Duy Khánh", "NVDA", "RadioTV", "phần mềm tiếp cận"],
  openGraph: {
    title: "VDK Projects | Võ Duy Khánh",
    description:
      "Công nghệ dễ tiếp cận cho cộng đồng: RadioTV, NVDA Network Optimizer và các dự án của Võ Duy Khánh.",
    type: "website",
    url: "https://vdk-projects.voduykhanh150.chatgpt.site",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "VDK Projects — Công nghệ dễ tiếp cận cho cộng đồng",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VDK Projects | Võ Duy Khánh",
    description:
      "Công nghệ dễ tiếp cận cho cộng đồng: RadioTV, NVDA Network Optimizer và các dự án của Võ Duy Khánh.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
