"use client";

import { motion } from "framer-motion";
import { ArrowRight, Briefcase, Sparkles } from "lucide-react";
import { ContactData, PersonalInfo } from "../../types";

interface ContactSectionProps {
  contact: ContactData;
  personalInfo: PersonalInfo;
}

export function ContactSection({
  contact,
  personalInfo,
}: ContactSectionProps) {
  const primaryHref =
    contact.primaryButton.type === "email"
      ? `mailto:${personalInfo.email}`
      : contact.primaryButton.url ?? "#";

  return (
    <section
      id="contact"
      className="py-24 border-t border-border"
    >
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="relative overflow-hidden rounded-3xl border border-border bg-linear-to-br from-primary/10 via-background to-background p-8 md:p-14">
          
          {/* Decorative Blur */}
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

          <div className="relative z-10 max-w-3xl">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-4 py-2 backdrop-blur-sm mb-6">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">
                {contact.badge}
              </span>
            </div>

            {/* Title */}
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-6">
              {contact.highlight ? (
                <>
                  {contact.title.replace(
                    contact.highlight,
                    ""
                  )}
                  <span className="text-primary">
                    {contact.highlight}
                  </span>
                </>
              ) : (
                contact.title
              )}
            </h2>

            {/* Description */}
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {contact.description}
            </p>

            {/* Status Pills */}
            <div className="flex flex-wrap gap-3 mb-10">
              <div className="inline-flex items-center gap-2 rounded-full border bg-background px-4 py-2">
                <Briefcase className="h-4 w-4 text-primary" />
                <span className="text-sm">
                  {personalInfo.freelanceStatus}
                </span>
              </div>

              <div className="inline-flex items-center gap-2 rounded-full border bg-background px-4 py-2">
                <span className="h-2 w-2 rounded-full bg-green-500" />
                <span className="text-sm">
                  {contact.availability}
                </span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href={primaryHref}
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                {contact.primaryButton.label}
                <ArrowRight className="h-4 w-4" />
              </a>

              {contact.secondaryButton?.url && (
                <a
                  href={contact.secondaryButton.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-border px-6 py-3 font-medium transition-colors hover:bg-muted"
                >
                  {contact.secondaryButton.label}
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}