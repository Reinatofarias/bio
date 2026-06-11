"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Profile } from "@/data/types";
import { Button } from "@/components/Button";
import { fadeIn, slideUp, staggerContainer } from "@/lib/animations";

interface HeroSectionProps {
  profile: Profile;
}

export function HeroSection({ profile }: HeroSectionProps) {
  return (
    <motion.section 
      variants={staggerContainer}
      initial="initial"
      animate="animate"
      className="flex flex-col items-center text-center w-full mb-0 relative overflow-hidden"
    >
      <div className="relative w-full flex justify-center">
        {/* Imagem de Fundo (Hero) com máscara mais suave para mostrar mais o rosto */}
        <motion.div 
          variants={fadeIn} 
          className="relative w-full max-w-3xl mx-auto aspect-[4/3] md:aspect-[16/9]"
          style={{ 
            WebkitMaskImage: 'radial-gradient(50% 50% at 50% 50%, black 80%, transparent 100%)', 
            maskImage: 'radial-gradient(50% 50% at 50% 50%, black 80%, transparent 100%)' 
          }}
        >
          <Image
            src="/images/Image-hero.png"
            alt="Hero background"
            fill
            className="object-cover object-[50%_20%]"
            priority
          />
        </motion.div>

        {/* Logo sobreposta com posicionamento absoluto */}
        <motion.div 
          variants={slideUp} 
          className="absolute bottom-0 translate-y-[25%] md:translate-y-[20%] w-[110%] md:w-[100%] max-w-[550px] md:max-w-[800px] h-32 md:h-48 z-20 pointer-events-none"
        >
          <Image
            src="/images/logo-renato.png"
            alt={profile.name}
            fill
            className="object-contain"
            priority
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
