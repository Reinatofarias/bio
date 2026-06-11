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
      className="flex flex-col items-center text-center w-full mb-0 relative"
    >
      <div className="relative w-full flex justify-center">
        {/* Imagem de Fundo (Hero) com máscara mais suave para mostrar mais o rosto */}
        <motion.div 
          variants={fadeIn} 
          className="relative w-full max-w-3xl mx-auto aspect-[4/3] md:aspect-[16/9]"
          style={{ 
            WebkitMaskImage: 'radial-gradient(circle at 50% 40%, black 75%, transparent 100%)', 
            maskImage: 'radial-gradient(circle at 50% 40%, black 75%, transparent 100%)' 
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
            src="/images/logo-new.png"
            alt={profile.name}
            fill
            className="object-contain"
            priority
          />
        </motion.div>
      </div>

      {/* CTA Section */}
      <motion.div variants={slideUp} className="mt-16 md:mt-24 w-full flex flex-col items-center gap-4 z-30 px-4">
        <h3 className="text-zinc-200 text-sm md:text-base font-medium uppercase tracking-[0.1em]">
          Transforme sua carreira e negócio
        </h3>
        <a 
          href="https://wa.me/5581985647633?text=Olá%20Renato!%20Quero%20ser%20mentoreado."
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center gap-2 px-6 py-4 w-full max-w-[90%] md:max-w-md rounded-full bg-gradient-to-r from-[#de7c21] to-[#f4a946] border border-white/50 text-white font-bold text-base md:text-lg shadow-[0_0_30px_rgba(222,124,33,0.4)] transition-all hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(222,124,33,0.6)]"
        >
          Quero ser mentoreado por Renato
          <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </a>
      </motion.div>
    </motion.section>
  );
}
