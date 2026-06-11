"use client";

import { motion } from "framer-motion";
import { AboutSection as AboutType } from "@/data/types";
import { SectionHeader } from "@/components/SectionHeader";
import { staggerContainer, staggerItem } from "@/lib/animations";

interface AboutSectionProps {
  about: AboutType;
}

export function AboutSection({ about }: AboutSectionProps) {
  return (
    <motion.section 
      variants={staggerContainer}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-50px" }}
      className="w-full mb-16"
    >
      <SectionHeader title="Sobre Mim" />
      
      <motion.div 
        variants={staggerItem}
        className="relative overflow-hidden p-6 md:p-8 rounded-3xl bg-white/5 border border-white/10"
      >
        <p className="text-zinc-300 text-base md:text-lg leading-relaxed mb-8 whitespace-pre-line">
          {about.text}
        </p>

        <div className="flex flex-wrap gap-3">
          {about.highlights.map((highlight, idx) => (
            <span 
              key={idx} 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-sm font-medium text-white border border-white/5"
            >
              <span>{highlight.icon}</span>
              {highlight.text}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}
