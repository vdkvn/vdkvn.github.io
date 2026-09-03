import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://vdkvn.github.io"),
  title: {
    default: "Võ Duy Khánh | Trang web mở dành cho người mù",
    template: "%s | Võ Duy Khánh",
  },
  description:
    "Nơi giới thiệu các dự án phần mềm dễ tiếp cận của Võ Duy Khánh dành cho cộng đồng người dùng NVDA.",
  applicationName: "Võ Duy Khánh",
  authors: [{ name: "Võ Duy Khánh" }],
  creator: "Võ Duy Khánh",
  keywords: ["Võ Duy Khánh", "NVDA", "RadioTV", "phần mềm tiếp cận"],
  openGraph: {
    title: "Chào mừng tới với Võ Duy Khánh",
    description:
      "Trang web mở dành cho người mù, giới thiệu RadioTV, NVDA Network Optimizer và các dự án của Võ Duy Khánh.",
    type: "website",
    url: "https://vdkvn.github.io",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Chào mừng tới với Võ Duy Khánh — Trang web mở dành cho người mù",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chào mừng tới với Võ Duy Khánh",
    description:
      "Trang web mở dành cho người mù, giới thiệu RadioTV, NVDA Network Optimizer và các dự án của Võ Duy Khánh.",
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
