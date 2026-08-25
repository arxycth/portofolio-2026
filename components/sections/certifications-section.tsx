"use client";

import { motion } from "framer-motion";
import { CertificationsData } from "../../types"; // Menggunakan tipe data utuh
import { Award, ExternalLink, CalendarDays } from "lucide-react";

interface CertificationsSectionProps {
  certifications: CertificationsData; // Menerima seluruh objek data
}

export function CertificationsSection({ certifications }: CertificationsSectionProps) {
  // Cek apakah ada data items, jika tidak ada tidak usah render
  if (!certifications?.items || certifications.items.length === 0) return null;

  return (
    <section id="certifications" className="py-24 border-t border-border">
      
      {/* Header Section */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-16 flex items-center gap-3"
      >
        <div className="p-3 bg-primary/10 rounded-xl text-primary">
          <Award className="h-6 w-6" />
        </div>
        {/* Menggunakan title dari JSON agar mendukung multi-bahasa */}
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          {certifications.title}
        </h2>
      </motion.div>

      {/* Grid Sertifikasi */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Mapping data dari certifications.items */}
        {certifications.items.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col p-6 rounded-2xl border border-border bg-muted/10 hover:bg-muted/30 transition-colors"
          >
            <div className="flex justify-between items-start gap-4 mb-4">
              <h3 className="text-xl font-bold text-foreground leading-tight">
                {cert.title}
              </h3>
              {cert.credentialUrl && (
                <a 
                  href={cert.credentialUrl} 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors shrink-0"
                  aria-label="Verifikasi Kredensial"
                >
                  <ExternalLink className="h-5 w-5" />
                </a>
              )}
            </div>
            
            <div className="mt-auto pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-border/50">
              <span className="text-primary font-medium">
                {cert.issuer}
              </span>
              <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <CalendarDays className="h-4 w-4" />
                {cert.date}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
      
    </section>
  );
}