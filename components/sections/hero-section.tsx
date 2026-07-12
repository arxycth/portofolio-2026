"use client";

import { motion } from "framer-motion";
import { HeroData, PersonalInfo } from "../../types";
import { buttonVariants } from "../ui/button";
import { Badge } from "../ui/badge";
import { ArrowRight, Download, Mail } from "lucide-react";

interface HeroSectionProps {
  hero: HeroData;
  personalInfo: PersonalInfo;
}

export function HeroSection({ hero, personalInfo }: HeroSectionProps) {
  // Memecah role "Full-stack Web Developer & AI Engineer" menjadi dua bagian
  const [role1, role2] = personalInfo.role.split(" & ");

  return (
    <section id="home" className="relative min-h-[85vh] flex flex-col justify-center items-start pt-20">
      
      {/* --- DEKORASI BACKGROUND (Glassmorphism & Blurs) --- */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        {/* Blob Kiri Atas */}
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] max-w-150 max-h-150 rounded-full bg-primary/10 blur-[100px] opacity-70 dark:opacity-40 animate-pulse" style={{ animationDuration: '8s' }} />
        {/* Blob Kanan Bawah */}
        <div className="absolute top-[40%] right-[-10%] w-[40vw] h-[40vw] max-w-125 max-h-125 rounded-full bg-blue-500/10 blur-[100px] opacity-70 dark:opacity-30 animate-pulse" style={{ animationDuration: '10s' }} />
      </div>
      {/* --------------------------------------------------- */}

      {/* Badge Status */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Badge variant="outline" className="mb-8 px-4 py-1.5 border-primary/30 bg-primary/5 text-primary backdrop-blur-md hover:bg-primary/10 transition-colors shadow-sm">
          <span className="relative flex h-2 w-2 mr-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          {personalInfo.freelanceStatus}
        </Badge>
      </motion.div>

      {/* Heading Utama */}
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1]"
      >
        Hi, I'm <span className="text-foreground">{personalInfo.name.split(" ")[0]}</span> <br />
        
        {/* Highlight Keyword Gradient */}
        <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-blue-500 dark:to-blue-400">
          {role1}
        </span>
        <br />
        <span className="text-muted-foreground/80">
          & {role2}
        </span>
      </motion.h1>

      {/* Sub-judul (Hero Title) & Deskripsi (Tagline) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-2xl mb-10"
      >
        <h2 className="text-xl md:text-2xl font-medium text-foreground mb-4">
          {hero.title}
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          {hero.tagline}
        </p>
      </motion.div>

      {/* Tombol Aksi */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
      >
        {/* Tombol 1: Menggunakan tag <a> dengan buttonVariants */}
        <a 
          href="#projects" 
          className={buttonVariants({ 
            size: "lg", 
            className: "rounded-full px-8 shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-shadow" 
          })}
        >
          Lihat Proyek <ArrowRight className="ml-2 h-4 w-4" />
        </a>
        
        {/* Tombol 2 */}
        <a 
          href={personalInfo.cvLink} 
          target="_blank" 
          rel="noreferrer"
          className={buttonVariants({ 
            variant: "outline",
            size: "lg", 
            className: "rounded-full px-8 bg-background/50 backdrop-blur-sm hover:bg-muted" 
          })}
        >
          <Download className="mr-2 h-4 w-4" /> Download CV
        </a>

        {/* Tombol 3 */}
        <a 
          href={`mailto:${personalInfo.email}`}
          className={buttonVariants({ 
            variant: "ghost",
            size: "lg", 
            className: "rounded-full px-8 hover:bg-muted/50" 
          })}
        >
          <Mail className="mr-2 h-4 w-4" /> Hubungi Saya
        </a>
      </motion.div>
      
    </section>
  );
}