import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/theme-provider"; // Pastikan path ini benar

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dimas Adiluhur Panggarbesi | Full-Stack Web Developer",
  description: "Portofolio profesional Dimas Adiluhur Panggarbesi. Seorang mahasiswa Teknik Informatika dan Full-Stack Web Developer yang berpengalaman dalam membangun aplikasi modern berbasis React, Next.js, dan arsitektur Backend.",
  keywords: [
    "Dimas Adiluhur Panggarbesi",
    "Full-Stack Developer",
    "Backend Engineer",
    "Software Engineer",
    "Teknik Informatika",
    "Next.js",
    "Laravel",
    "React",
    "Portfolio"
  ],
  authors: [{ name: "Dimas Adiluhur Panggarbesi" }],
  creator: "Dimas Adiluhur Panggarbesi",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://arxy.my.id", // Ganti dengan URL domain asli kamu nanti
    title: "Dimas Adiluhur Panggarbesi | Portfolio",
    description: "Jelajahi proyek pengembangan web full-stack, pengalaman kerja, dan perjalanan karir saya di bidang Software Engineering.",
    siteName: "Dimas Adiluhur Portfolio",
    images: [
      {
        url: "https://arxy.my.id/images/og-image.png?v=new", // Opsional: Tambahkan gambar preview (1200x630px) di folder public
        width: 1200,
        height: 630,
        alt: "Dimas Adiluhur Panggarbesi - Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dimas Adiluhur Panggarbesi | Portfolio",
    description: "Jelajahi proyek pengembangan web full-stack dan perjalanan karir saya.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // suppressHydrationWarning wajib untuk next-themes
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
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