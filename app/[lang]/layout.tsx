import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

import { ThemeProvider } from "../../components/theme-provider";

import idData from "@/data/id.json";
import enData from "@/data/en.json";
import jaData from "@/data/ja.json";

import { i18n, type Locale } from "@/i18n.config";

const inter = Inter({
  subsets: ["latin"],
});

const portfolioDataMap = {
  id: idData,
  en: enData,
  ja: jaData,
} as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;

  const locale = i18n.locales.includes(
    lang as Locale
  )
    ? (lang as Locale)
    : i18n.defaultLocale;

  const portfolioData = portfolioDataMap[locale];
  const metadata = portfolioData.metadata;

  return {
    metadataBase: new URL("https://arxy.my.id"),

    title: metadata.title,

    description: metadata.description,

    keywords: metadata.keywords,

    authors: [
      {
        name: portfolioData.personalInfo.name,
      },
    ],

    creator: portfolioData.personalInfo.name,

    alternates: {
      canonical: `/${locale}`,

      languages: {
        id: "/id",
        en: "/en",
        ja: "/ja",
      },
    },

    openGraph: {
      type: "website",
      locale: metadata.locale,
      url: `/${locale}`,
      title: metadata.openGraphTitle,
      description: metadata.description,
      siteName: "Dimas Adiluhur Portfolio",

      images: [
        {
          url: "/images/og-image.png",
          width: 1200,
          height: 630,
          alt: metadata.openGraphTitle,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: metadata.openGraphTitle,
      description: metadata.description,
      images: ["/images/og-image.png"],
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;

  const currentLocale = i18n.locales.includes(
    lang as Locale
  )
    ? lang
    : i18n.defaultLocale;

  return (
    <html
      lang={currentLocale}
      suppressHydrationWarning
      className="motion-safe:scroll-smooth"
    >
      <body
        className={`${inter.className} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
