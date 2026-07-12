"use client";

import { motion } from "framer-motion";
import { EducationData } from "../../types";
import { GraduationCap, Calendar, Award } from "lucide-react";

interface EducationSectionProps {
  education: EducationData[];
}

export function EducationSection({ education }: EducationSectionProps) {
  return (
    <section id="education" className="py-24 border-t border-border">
      
      {/* Header Section */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-16 flex items-center gap-3"
      >
        <div className="p-3 bg-primary/10 rounded-xl text-primary">
          <GraduationCap className="h-6 w-6" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Pendidikan</h2>
      </motion.div>

      {/* Timeline Container */}
      <div className="relative border-l-2 border-muted ml-3 md:ml-6 space-y-12">
        {education.map((edu, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative pl-8 md:pl-12"
          >
            {/* Timeline Dot (Bulatan pada garis) */}
            <span className="absolute -left-2.75 top-1.5 h-5 w-5 rounded-full bg-background border-4 border-primary ring-4 ring-background" />

            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
              <div>
                <h3 className="text-2xl font-bold text-foreground">
                  {edu.institution}
                </h3>
                <h4 className="text-lg font-medium text-primary mt-1">
                  {edu.degree}
                </h4>
              </div>
              
              <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground bg-muted/30 px-3 py-1.5 rounded-full w-fit">
                <Calendar className="h-4 w-4" />
                {edu.period}
              </div>
            </div>

            {/* GPA / IPK */}
            {edu.gpa && (
              <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-primary/5 text-primary border border-primary/20 rounded-md text-sm font-semibold">
                <Award className="h-4 w-4" />
                IPK: {edu.gpa}
              </div>
            )}

            {/* Detail Studi */}
            {edu.details && (
              <p className="text-muted-foreground leading-relaxed text-justify">
                {edu.details}
              </p>
            )}
          </motion.div>
        ))}
      </div>
      
    </section>
  );
}