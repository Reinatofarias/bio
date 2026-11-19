"use client";

import { motion } from "framer-motion";
import { Profile } from "@/data/types";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { trackClick } from "@/lib/supabase";

interface IntroCTAProps {
  profile: Profile;
}

export function IntroCTA({ profile }: IntroCTAProps) {
  const { cta, proof } = profile;

  return (
    <motion.section
      variants={staggerContainer}
      initial="initial"
      animate="animate"
      className="w-full flex flex-col items-center text-center gap-4 mt-12 sm:mt-14 md:mt-16 px-2"
    >
      <motion.p
        variants={staggerItem}
        className="text-zinc-200 text-[15px] md:text-lg leading-relaxed max-w-md text-balance"
      >
        {profile.tagline}
      </motion.p>

      <motion.a
        variants={staggerItem}
        href={cta.href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackClick("cta-diagnostico", cta.text)}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
        className="group flex w-full max-w-md items-center justify-center gap-3 rounded-xl bg-[#25D366] px-5 py-4 text-[15px] md:text-base font-bold text-[#04170b] shadow-[0_12px_30px_-12px_rgba(37,211,102,0.6)] transition-shadow hover:shadow-[0_16px_40px_-12px_rgba(37,211,102,0.8)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
      >
        <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true" className="flex-shrink-0">
          <path d="M17.5 14.4c-.3-.1-1.8-.9-2-1s-.5-.1-.7.1-.8 1-.9 1.2-.3.2-.6.1a8.2 8.2 0 0 1-4.1-3.6c-.3-.5.3-.5.9-1.6.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6a1.1 1.1 0 0 0-.8.4 3.4 3.4 0 0 0-1 2.5 5.9 5.9 0 0 0 1.2 3.1 13.5 13.5 0 0 0 5.2 4.6c1.9.8 2.7.9 3.6.7a3.1 3.1 0 0 0 2-1.4 2.5 2.5 0 0 0 .2-1.4c-.1-.2-.3-.3-.6-.4ZM12 21.8a9.8 9.8 0 0 1-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A9.8 9.8 0 1 1 12 21.8Zm0-21.6A11.8 11.8 0 0 0 1.8 17.9L.1 24l6.3-1.6A11.8 11.8 0 1 0 12 .2Z" />
        </svg>
        <span>{cta.text}</span>
      </motion.a>

      {proof && (
        <motion.a
          variants={staggerItem}
          href={proof.href}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackClick("prova-google", "Avaliações no Google")}
          className="flex flex-wrap items-center justify-center gap-x-1.5 gap-y-1 text-[12.5px] sm:text-[13px] md:text-sm text-zinc-400 hover:text-zinc-200 transition-colors focus-visible:outline-none focus-visible:underline"
        >
          <span className="text-[#f5d77a] tracking-[1px]" aria-hidden="true">★★★★★</span>
          <span><strong className="text-zinc-100 font-semibold">{proof.rating}</strong> no Google</span>
          <span aria-hidden="true" className="w-1 h-1 rounded-full bg-zinc-600" />
          <span><strong className="text-zinc-100 font-semibold">{proof.clients}</strong> empresas atendidas</span>
        </motion.a>
      )}
    </motion.section>
  );
}
