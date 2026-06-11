"use client";

import { motion } from "framer-motion";
import { SocialLink } from "@/data/types";
import { SocialButton } from "@/components/social/SocialButton";
import { staggerContainer, staggerItem } from "@/lib/animations";

interface SocialSectionProps {
  socials: SocialLink[];
}

export function SocialSection({ socials }: SocialSectionProps) {
  const activeSocials = socials.filter(s => s.active).sort((a, b) => a.order - b.order);

  if (activeSocials.length === 0) return null;

  return (
    <motion.section 
      variants={staggerContainer}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-50px" }}
      className="flex justify-center gap-4 mb-8"
    >
      {activeSocials.map((social, idx) => (
        <motion.div key={idx} variants={staggerItem}>
          <SocialButton social={social} />
        </motion.div>
      ))}
    </motion.section>
  );
}
