"use client";

import { motion } from "framer-motion";
import { LinkItem } from "@/data/types";
import { LinkCard } from "@/components/cards/LinkCard";
import { staggerContainer, staggerItem } from "@/lib/animations";

interface LinksSectionProps {
  links: LinkItem[];
}

export function LinksSection({ links }: LinksSectionProps) {
  const activeLinks = links.filter((link) => link.active).sort((a, b) => a.order - b.order);

  if (activeLinks.length === 0) return null;

  return (
    <motion.section 
      variants={staggerContainer}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-50px" }}
      className="w-full flex flex-col gap-4 mb-16"
    >
      <motion.div variants={staggerItem} className="w-full flex items-center justify-center gap-4 mb-2 mt-4">
        <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent flex-1" />
        <h2 className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 to-zinc-500">
          Links Úteis
        </h2>
        <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent flex-1" />
      </motion.div>

      {activeLinks.map((link) => (
        <motion.div key={link.id} variants={staggerItem} className="w-full">
          <LinkCard link={link} />
        </motion.div>
      ))}
    </motion.section>
  );
}
