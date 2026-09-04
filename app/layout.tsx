import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://vdk.is-a.dev";
const siteTitle = "Võ Duy Khánh | Kho Tiện Ích NVDA Việt Nam & Quốc Tế";
const siteDescription =
  "Kho tiện ích bổ trợ NVDA dành cho người khiếm thị: hơn 530+ add-on từ Cửa hàng chính thức và cộng đồng quốc tế. Tải NVDA mới nhất, tìm phím tắt và xem hướng dẫn sử dụng tiếng Việt.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | Võ Duy Khánh",
  },
  description: siteDescription,
  applicationName: "Võ Duy Khánh - NVDA Accessibility Hub",
  authors: [{ name: "Võ Duy Khánh", url: siteUrl }],
  creator: "Võ Duy Khánh",
  publisher: "Võ Duy Khánh",
  keywords: [
    "NVDA",
    "kho addon NVDA",
    "tải addon NVDA",
    "tải NVDA",
    "tải NVDA mới nhất",
    "NVDA tiếng việt",
    "addon NVDA tiếng việt",
    "tiện ích NVDA",
    "kho tiện ích NVDA",
    "tải tiện ích NVDA",
    "RadioTV NVDA",
    "Google TTS for NVDA",
    "NVDA Network Optimizer",
    "tiện ích tiếp cận",
    "người khiếm thị",
    "Võ Duy Khánh",
    "NVDA Add-on Store",
    "vdk is a dev",
    "vdk",
    "vdkvn",
    "vdk addon",
    // Từ khóa quốc tế (International & Multilingual search queries)
    "NVDA addons",
    "download NVDA addons",
    "NVDA addon store",
    "NVDA screen reader download",
    "free NVDA addons",
    "complementos NVDA",
    "descargar complementos NVDA",
    "дополнения NVDA",
    "скачать дополнения NVDA"
  ],
  verification: {
    google: "google-site-verification-token",
  },
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
        alt: "Võ Duy Khánh — Trang web công nghệ tiếp cận & Kho Tiện Ích NVDA cho người khiếm thị",
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
      "@id": "https://vdk.is-a.dev/#website",
      url: "https://vdk.is-a.dev/",
      name: "Võ Duy Khánh - Kho Tiện Ích NVDA & Công nghệ tiếp cận",
      description: siteDescription,
      inLanguage: ["vi", "en", "es", "ru"],
      publisher: {
        "@id": "https://vdk.is-a.dev/#person",
      },
      potentialAction: {
        "@type": "SearchAction",
        target: "https://vdk.is-a.dev/kho-addon/?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "Person",
      "@id": "https://vdk.is-a.dev/#person",
      name: "Võ Duy Khánh",
      url: "https://vdk.is-a.dev/",
      sameAs: [
        "https://github.com/voduykhanhmata-ctrl",
        "https://github.com/vdkvn",
        "https://www.facebook.com/vo.voduykhanh.12/"
      ],
      jobTitle: "Accessibility Developer & NVDA Community Contributor",
      description: "Nhà phát triển phần mềm tiếp cận và tiện ích bổ trợ cho cộng đồng người khiếm thị Việt Nam.",
    },
    {
      "@type": "ItemList",
      name: "Dự án tiếp cận và tiện ích NVDA",
      itemListElement: [
        {
          "@type": "SoftwareApplication",
          position: 1,
          name: "Kho Add-on NVDA (Việt Nam & Quốc Tế)",
          applicationCategory: "UtilitiesApplication",
          operatingSystem: "Windows 10, Windows 11",
          url: "https://vdk.is-a.dev/kho-addon/",
          description: "Kho lưu trữ hơn 530 tiện ích bổ trợ cho NVDA với phân loại tự động và AI đánh giá chuyên sâu.",
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "VND",
          },
        },
        {
          "@type": "SoftwareApplication",
          position: 2,
          name: "RadioTV",
          applicationCategory: "MultimediaApplication",
          operatingSystem: "Windows 10, Windows 11",
          url: "https://vdk.is-a.dev/du-an/radiotv/",
          description: "Tiện ích nghe radio và âm thanh kênh TV trực tiếp trong NVDA.",
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
          position: 3,
          name: "Google TTS for NVDA",
          applicationCategory: "UtilitiesApplication",
          operatingSystem: "Windows 10, Windows 11",
          url: "https://vdk.is-a.dev/du-an/google-tts-for-nvda/",
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
          position: 4,
          name: "NVDA Network Optimizer",
          applicationCategory: "UtilitiesApplication",
          operatingSystem: "Windows 10, Windows 11",
          url: "https://vdk.is-a.dev/du-an/nvda-network-optimizer/",
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
          position: 5,
          name: "NVDA Screen Reader",
          applicationCategory: "AccessibilityApplication",
          operatingSystem: "Windows 10, Windows 11",
          url: "https://vdk.is-a.dev/du-an/nvda-screen-reader/",
          description: "Trình đọc màn hình miễn phí, mã nguồn mở cho Windows của NV Access.",
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
