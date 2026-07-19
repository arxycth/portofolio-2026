"use client";

import { motion } from "framer-motion";
import { HeroData, PersonalInfo } from "../../types";
import { buttonVariants } from "../ui/button";
import { Badge } from "../ui/badge";
import { ArrowRight, Download, Mail } from "lucide-react";
// PERBAIKAN: Impor cn utilitas jika kamu menggunakannya untuk gabungan class
// import { cn } from "@/lib/utils"; 

interface HeroSectionProps {
  hero: HeroData;
  personalInfo: PersonalInfo;
}

export function HeroSection({ hero, personalInfo }: HeroSectionProps) {
  // Memecah role "Full-stack Web Developer & AI Engineer" menjadi dua bagian
  const [role1, role2] = personalInfo.role.split(" & ");

  return (
    // FIX IMPLEMENTED: Class 'overflow-hidden' telah dihapus dari section ini.
    // Pastikan parent element di file induk memiliki class 'overflow-x-hidden'.
    <section id="home" className="relative min-h-[85vh] flex flex-col justify-center items-start pt-20">
      
      {/* --- DEKORASI BACKGROUND (Glassmorphism & Blurs) --- */}
      {/* z-0 agar tetap di dalam section ini dan tidak tenggelam di belakang body */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
        {/* Blob Kiri Atas */}
        <div 
          // PERBAIKAN 2: Sesuaikan posisi negatif agar blob tidak terlalu banyak keluar batas
          // Ganti 'bg-primary/20' dengan opasitas yang sedikit lebih tinggi agar gradien teks 'developer' lebih kontras
          className="absolute top-[-15%] left-[-15%] w-[45vw] h-[45vw] rounded-full bg-primary/25 blur-[120px] dark:bg-primary/10 animate-pulse" 
          style={{ animationDuration: '8s' }} 
        />
        {/* Blob Kanan Bawah */}
        <div 
          // PERBAIKAN 2: Sesuaikan posisi negatif.
          // Ganti 'bg-secondary/40' menjadi opasitas yang sedikit lebih rendah agar lebih menyatu
          className="absolute top-[45%] right-[-15%] w-[35vw] h-[35vw] rounded-full bg-secondary/35 blur-[120px] dark:bg-secondary/20 animate-pulse" 
          style={{ animationDuration: '10s' }} 
        />
      </div>
      {/* --------------------------------------------------- */}

      {/* --- KONTEN UTAMA --- */}
      {/* Wrapper dengan relative z-10 agar semua teks & tombol selalu berada di atas efek blob */}
      <div className="relative z-10 w-full">
        {/* Badge Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Efek Glassmorphism di Badge: bg-background/50 + backdrop-blur-md */}
          <Badge variant="outline" className="mb-8 px-4 py-1.5 border-primary/30 bg-background/50 text-primary backdrop-blur-md hover:bg-background/80 transition-colors shadow-sm">
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
          // PERBAIKAN 3: Pastikan 'text-foreground' digunakan sebagai warna default teks heading untuk kontras di mode terang/gelap
          className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1] text-foreground"
        >
          Hi, I'm <span className="text-foreground">{personalInfo.name.split(" ")[0]}</span> <br />
          
          {/* Highlight Keyword Gradient (Dari primary ke primary/70) */}
          <span 
            // PERBAIKAN 3: Ganti 'to-secondary' menjadi 'to-primary/70' atau warna aksen lain yang lebih kontras.
            // Pastikan gradien ini tidak terlalu cerah sehingga menyatu dengan blob.
            className="text-transparent bg-clip-text bg-linear-to-r from-primary to-muted-foreground/30"
          >
            {role1}
          </span>
          {role2 && (
            <>
              <br />
              <span className="text-muted-foreground/80">
                & {role2}
              </span>
            </>
          )}
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
          {/* Tombol 1 */}
          <a 
            href="#projects" 
            className={buttonVariants({ 
              size: "lg", 
              className: "rounded-full px-8 shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-shadow" 
            })}
          >
            Lihat Proyek <ArrowRight className="ml-2 h-4 w-4" />
          </a>
          
          {/* Tombol 2 - Efek Glassmorphism: bg-background/50 + backdrop-blur-sm */}
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
      </div>
    </section>
  );
}