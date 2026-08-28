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

export function HeroSection({
  hero,
  personalInfo,
}: HeroSectionProps) {
  const [role1, role2] = personalInfo.role.split(" & ");

  return (
    <section
      id="home"
      className="relative min-h-[85vh] flex flex-col justify-center items-start pt-20"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
        {/* Blob Kiri Atas */}
        <div
          className="absolute top-[-15%] left-[-15%] w-[45vw] h-[45vw] rounded-full bg-primary/25 blur-[120px] dark:bg-primary/10 animate-pulse"
          style={{ animationDuration: "8s" }}
        />

        {/* Blob Kanan Bawah */}
        <div
          className="absolute top-[45%] right-[-15%] w-[35vw] h-[35vw] rounded-full bg-secondary/35 blur-[120px] dark:bg-secondary/20 animate-pulse"
          style={{ animationDuration: "10s" }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full">
        {/* Freelance Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Badge
            variant="outline"
            className="mb-8 px-4 py-1.5 border-primary/30 bg-background/50 text-primary backdrop-blur-md hover:bg-background/80 transition-colors shadow-sm"
          >
            <span className="relative flex h-2 w-2 mr-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>

            {personalInfo.freelanceStatus}
          </Badge>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1] text-foreground"
        >
          {hero.greeting}{" "}
          <span className="text-foreground">
            {personalInfo.name.split(" ")[0]}
          </span>

          <br />

          <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-muted-foreground/30">
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

        {/* Hero Title & Tagline */}
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

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          {/* Projects */}
          <a
            href="#projects"
            className={buttonVariants({
              size: "lg",
              className:
                "rounded-full px-8 shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-shadow",
            })}
          >
            {hero.actions.projects}

            <ArrowRight className="ml-2 h-4 w-4" />
          </a>

          <a
            href={personalInfo.cvLink}
            download="CV Dimas Adiluhur Panggarbesi Fullstack Developer.pdf"
            className={buttonVariants({
              variant: "outline",
              size: "lg",
              className:
                "rounded-full px-8 bg-background/50 backdrop-blur-sm hover:bg-muted",
            })}
          >
            <Download className="mr-2 h-4 w-4" />

            {hero.actions.cv}
          </a>

          {/* Contact */}
          <a
            href={`mailto:${personalInfo.email}`}
            className={buttonVariants({
              variant: "ghost",
              size: "lg",
              className:
                "rounded-full px-8 hover:bg-muted/50",
            })}
          >
            <Mail className="mr-2 h-4 w-4" />

            {hero.actions.contact}
          </a>
        </motion.div>
      </div>
    </section>
  );
}