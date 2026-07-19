"use client";

// Import Data JSON dan Types
import portfolioDataRaw from "../data/portofolio.json";
import { PortfolioData } from "../types";

// Import Komponen Navigasi & Footer
import { Navbar } from "../components/layout/navbar";
import { Footer } from "../components/layout/footer";

// Import Komponen Section
import { HeroSection } from "../components/sections/hero-section";
import { AboutSection } from "../components/sections/about-section";
import { ExperienceSection } from "../components/sections/experience-section";
import { EducationSection } from "../components/sections/education-section";
import { ProjectsSection } from "../components/sections/projects-section";
import { CertificationsSection } from "../components/sections/certifications-section";
import { ContactSection } from "@/components/sections/contact-section";

// Import UI Bantuan
import SupportCard from "@/components/ui/supportCard";
import FloatingSupportButton from "@/components/ui/floatingSupportButton";

const portfolioData = portfolioDataRaw as PortfolioData;

export default function Home() {
  return (
    // Tambahkan 'relative' di wrapper utama agar Floating Button tidak keluar jalur
    <div className="relative min-h-screen bg-background text-foreground transition-colors duration-300 font-sans selection:bg-primary/30 overflow-x-hidden">
      
      {/* Komponen Navigasi Global */}
      <Navbar 
        navItems={portfolioData.navbar} 
        personalInfo={portfolioData.personalInfo}
        themeOptions={portfolioData.themeOptions}
      />

      {/* Konten Utama Halaman */}
      <main className="max-w-6xl mx-auto px-6 pt-16">
        
        <HeroSection 
          hero={portfolioData.hero} 
          personalInfo={portfolioData.personalInfo} 
        />
        
        <AboutSection 
          about={portfolioData.about} 
        />
        
        <ExperienceSection 
          experience={portfolioData.experience} 
        />

        <EducationSection 
          education={portfolioData.education} 
        />
        
        <ProjectsSection 
          projects={portfolioData.projects} 
        />

        {/* <CertificationsSection 
          certifications={portfolioData.certifications} 
        /> */}

        <ContactSection
          contact={portfolioData.contact}
          personalInfo={portfolioData.personalInfo}
        />

      </main>

      {/* Komponen Footer Global */}
      <Footer 
        personalInfo={portfolioData.personalInfo} 
      />
      
    </div>
  );
}