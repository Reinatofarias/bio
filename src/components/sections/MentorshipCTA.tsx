"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function MentorshipCTA() {
  return (
    <motion.div
      variants={{
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
      }}
      className="mt-1 md:mt-2 w-full flex flex-col items-center gap-4 px-4 py-8"
    >
      <h3 className="text-zinc-200 text-sm md:text-base font-medium uppercase tracking-[0.1em]">
        Transforme sua carreira e negócio
      </h3>
      <a
        href="https://wa.me/5581985647633?text=Olá%20Renato!%20Quero%20ser%20mentoreado."
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center gap-2 px-6 py-4 w-full max-w-[90%] md:max-w-md rounded-md bg-white/10 backdrop-blur-md border border-white/30 bg-gradient-to-r from-[#ffd700]/30 to-[#ffdf00]/30 text-white font-bold text-base md:text-lg shadow-[0_0_30px_rgba(255,215,0,0.4)] hover:scale-[1.03] transition-all hover:shadow-[0_0_40px_rgba(255,215,0,0.7)]"
      >
        Quero ser mentoreado por Renato
        <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
      </a>
    </motion.div>
  );
}
