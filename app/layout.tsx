import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://vdkvn.github.io";
const siteTitle = "Võ Duy Khánh | Phần mềm và tiện ích cho NVDA";
const siteDescription =
  "Tìm phần mềm và tiện ích cho NVDA: RadioTV, giọng đọc Google TTS và công cụ kiểm tra mạng. Có hướng dẫn tiếng Việt và liên kết tải từ tác giả.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | Võ Duy Khánh",
  },
  description: siteDescription,
  applicationName: "Võ Duy Khánh - Accessibility Hub",
  authors: [{ name: "Võ Duy Khánh", url: siteUrl }],
  creator: "Võ Duy Khánh",
  publisher: "Võ Duy Khánh",
  keywords: ["NVDA", "RadioTV", "Google TTS for NVDA", "NVDA Network Optimizer", "phần mềm tiếp cận", "Võ Duy Khánh"],
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    type: "website",
    url: siteUrl,
    siteName: "Võ Duy Khánh - Công nghệ tiếp cận cho người khiếm thị",
    locale: "vi_VN",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Võ Duy Khánh — Trang web công nghệ tiếp cận & Dự án NVDA cho người khiếm thị",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/og.png"],
    creator: "@vdkvn",
  },
  category: "technology",
};

const jsonLdSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://vdkvn.github.io/#website",
      url: "https://vdkvn.github.io/",
      name: "Võ Duy Khánh - Công nghệ tiếp cận cho người khiếm thị",
      description: siteDescription,
      inLanguage: "vi",
      publisher: {
        "@id": "https://vdkvn.github.io/#person",
      },
    },
    {
      "@type": "Person",
      "@id": "https://vdkvn.github.io/#person",
      name: "Võ Duy Khánh",
      url: "https://vdkvn.github.io/",
      sameAs: ["https://github.com/voduykhanhmata-ctrl", "https://github.com/vdkvn"],
      jobTitle: "Accessibility Developer & NVDA Community Contributor",
      description: "Nhà phát triển phần mềm tiếp cận và tiện ích bổ trợ cho cộng đồng người khiếm thị Việt Nam.",
    },
    {
      "@type": "ItemList",
      itemListElement: [
        {
          "@type": "SoftwareApplication",
          position: 1,
          name: "NVDA Screen Reader",
          applicationCategory: "AccessibilityApplication",
          operatingSystem: "Windows 10, Windows 11",
          url: "https://vdkvn.github.io/du-an/nvda-screen-reader/",
          description: "Trình đọc màn hình miễn phí, mã nguồn mở cho Windows của NV Access.",
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "VND",
          },
        },
        {
          "@type": "SoftwareApplication",
          position: 2,
          name: "Google TTS for NVDA",
          applicationCategory: "UtilitiesApplication",
          operatingSystem: "Windows 10, Windows 11",
          url: "https://vdkvn.github.io/du-an/google-tts-for-nvda/",
          description: "Add-on tổng hợp giọng đọc Google TTS tiếng Việt tự nhiên chạy ngoại tuyến cho NVDA.",
          author: {
            "@type": "Person",
            name: "Nguyễn Anh Đức (nguyenanhduc09)",
          },
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "VND",
          },
        },
        {
          "@type": "SoftwareApplication",
          position: 3,
          name: "NVDA Network Optimizer",
          applicationCategory: "UtilitiesApplication",
          operatingSystem: "Windows 10, Windows 11",
          url: "https://vdkvn.github.io/du-an/nvda-network-optimizer/",
          description: "Tiện ích kiểm tra kết nối, đo phản hồi DNS và hỗ trợ đổi DNS trong NVDA.",
          author: {
            "@type": "Person",
            name: "Võ Duy Khánh",
          },
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "VND",
          },
        },
        {
          "@type": "SoftwareApplication",
          position: 4,
          name: "RadioTV",
          applicationCategory: "MultimediaApplication",
          operatingSystem: "Windows 10, Windows 11",
          url: "https://vdkvn.github.io/du-an/radiotv/",
          description: "Tiện ích nghe radio và âm thanh kênh TV ngay trong NVDA.",
          author: {
            "@type": "Person",
            name: "Võ Duy Khánh",
          },
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "VND",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
