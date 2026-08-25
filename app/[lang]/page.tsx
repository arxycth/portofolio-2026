import { notFound } from "next/navigation";

import { PortfolioData } from "@/types";
import { i18n } from "@/i18n.config";

// Data bahasa
import idData from "@/data/id.json";
import enData from "@/data/en.json";
import jaData from "@/data/ja.json";

// Layout
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

// Sections
import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { EducationSection } from "@/components/sections/education-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { CertificationsSection } from "@/components/sections/certifications-section";
import { ContactSection } from "@/components/sections/contact-section";

// Mapping data berdasarkan locale
const portfolioDataMap = {
  id: idData,
  en: enData,
  ja: jaData,
} as const;

// Generate halaman untuk setiap locale
export function generateStaticParams() {
  return i18n.locales.map((lang) => ({
    lang,
  }));
}

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  // Pastikan locale valid
  if (!i18n.locales.includes(lang as (typeof i18n.locales)[number])) {
    notFound();
  }

  // Ambil data sesuai bahasa
  const portfolioData = portfolioDataMap[
    lang as keyof typeof portfolioDataMap
  ] as PortfolioData;

  return (
    <div className="relative min-h-screen bg-background text-foreground transition-colors duration-300 font-sans selection:bg-primary/30 overflow-x-hidden">
      <Navbar
        navItems={portfolioData.navbar}
        personalInfo={portfolioData.personalInfo}
        themeOptions={portfolioData.themeOptions}
        currentLang={lang}
      />

      <main className="max-w-6xl mx-auto px-6 pt-16">
        <HeroSection
          hero={portfolioData.hero}
          personalInfo={portfolioData.personalInfo}
        />

        <AboutSection about={portfolioData.about} />

        <ExperienceSection experience={portfolioData.experience} />

        <EducationSection education={portfolioData.education} />

        <ProjectsSection projects={portfolioData.projects} />

        {/* <CertificationsSection 
          certifications={portfolioData.certifications} 
        /> */}

        <ContactSection
          contact={portfolioData.contact}
          personalInfo={portfolioData.personalInfo}
        />
      </main>

      <Footer
        personalInfo={portfolioData.personalInfo}
        footer={portfolioData.footer}
      />
    </div>
  );
}
