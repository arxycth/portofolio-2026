"use client";

import { motion } from "framer-motion";
import { AboutData } from "../../types";
import { Badge } from "../ui/badge";
import { 
  User2, 
  Code2, 
  Database, 
  BrainCircuit, 
  Wrench, 
  Globe2 
} from "lucide-react";

interface AboutSectionProps {
  about: AboutData;
}

export function AboutSection({ about }: AboutSectionProps) {
  // Animasi standar untuk efek fade-up saat scroll
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="about" className="py-24 border-t border-border overflow-hidden">
      
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUpVariant}
        className="mb-12 flex items-center gap-3"
      >
        <div className="p-3 bg-primary/10 rounded-xl text-primary">
          <User2 className="h-6 w-6" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Tentang Saya</h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        
        {/* KOLOM KIRI: Biografi & Bahasa */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariant}
          className="space-y-10"
        >
          {/* Biografi */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-foreground">Sekilas Profil</h3>
            <p className="text-muted-foreground text-lg leading-relaxed text-justify">
              {about.biography}
            </p>
          </div>

          {/* Bahasa */}
          <div>
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2 text-foreground">
              <Globe2 className="h-5 w-5 text-muted-foreground" />
              Kemampuan Bahasa
            </h3>
            <div className="space-y-4">
              {about.languages.map((lang) => (
                <div key={lang.name} className="flex justify-between items-center p-4 rounded-xl border border-border bg-muted/20 hover:bg-muted/40 transition-colors">
                  <span className="font-medium text-foreground">{lang.name}</span>
                  <span className="text-sm text-muted-foreground bg-background px-3 py-1 rounded-full border border-border">
                    {lang.level}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* KOLOM KANAN: Keahlian Teknis (Skills) */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariant}
          className="bg-muted/10 border border-border rounded-2xl p-6 md:p-8"
        >
          <h3 className="text-2xl font-semibold mb-8 text-foreground">Keahlian Teknis</h3>
          
          <div className="space-y-8">
            
            {/* Frontend */}
            <div>
              <div className="flex items-center gap-2 mb-4 text-foreground">
                <Code2 className="h-5 w-5 text-primary" />
                <h4 className="font-medium">Frontend Development</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {about.skills.frontend.map((skill) => (
                  <Badge key={skill} variant="secondary" className="bg-background text-foreground border border-border hover:border-primary transition-colors font-normal text-sm px-3 py-1">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div>
              <div className="flex items-center gap-2 mb-4 text-foreground">
                <Database className="h-5 w-5 text-primary" />
                <h4 className="font-medium">Backend & Database</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {about.skills.backend.map((skill) => (
                  <Badge key={skill} variant="secondary" className="bg-background text-foreground border border-border hover:border-primary transition-colors font-normal text-sm px-3 py-1">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            {/* AI Tools */}
            <div>
              <div className="flex items-center gap-2 mb-4 text-foreground">
                <BrainCircuit className="h-5 w-5 text-primary" />
                <h4 className="font-medium">AI & Integrasi Model</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {about.skills.web3_blockchain.map((skill) => (
                  <Badge key={skill} variant="secondary" className="bg-background text-foreground border border-border hover:border-primary transition-colors font-normal text-sm px-3 py-1">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Others */}
            <div>
              <div className="flex items-center gap-2 mb-4 text-foreground">
                <Wrench className="h-5 w-5 text-primary" />
                <h4 className="font-medium">Lainnya (Tools & Ekosistem)</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {about.skills.others.map((skill) => (
                  <Badge key={skill} variant="secondary" className="bg-background text-foreground border border-border hover:border-primary transition-colors font-normal text-sm px-3 py-1">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}