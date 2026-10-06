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
      <h2 className="text-zinc-200 text-sm md:text-base font-medium uppercase tracking-[0.1em] text-center">
        Transforme sua carreira e negócio
      </h2>
      <a
        href="https://wa.me/5581985647633?text=Oi%20Renato%2C%20eu%20vim%20pelo%20teu%20perfil%20e%20gostaria%20de%20saber%20mais%20da%20sua%20mentoria%20individual%2C%20pode%20me%20dar%20mais%20detalhes%3F"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center gap-2 px-4 md:px-6 py-4 w-full max-w-[95%] md:max-w-md rounded-xl border border-[#f5d77a]/60 bg-gradient-to-r from-[#f5d77a] via-[#d4a937] to-[#b8862b] text-black font-bold text-sm md:text-lg shadow-[0_0_30px_rgba(212,169,55,0.35)] hover:scale-[1.03] transition-all hover:shadow-[0_0_40px_rgba(212,169,55,0.6)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f5d77a] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
      >
        <span className="text-center">Mentoria Individual | Inscrições</span>
        <ArrowUpRight aria-hidden="true" className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
      </a>
    </motion.div>
  );
}
