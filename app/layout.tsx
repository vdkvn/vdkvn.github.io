import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
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
