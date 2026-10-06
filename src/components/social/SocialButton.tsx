"use client";

import { motion } from "framer-motion";
import { Link as LinkIcon } from "lucide-react";
import { SocialLink } from "@/data/types";
import { trackClick } from "@/lib/supabase";

interface SocialButtonProps {
  social: SocialLink;
}

// O lucide-react 1.x não tem mais ícones de marcas, então os ícones das redes ficam aqui
const brandIcons: Record<string, React.ReactNode> = {
  instagram: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  ),
  youtube: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.2 3.6-6.2 3.6Z" />
    </svg>
  ),
  whatsapp: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
      <path d="M17.5 14.4c-.3-.1-1.8-.9-2-1s-.5-.1-.7.1-.8 1-.9 1.2-.3.2-.6.1a8.2 8.2 0 0 1-4.1-3.6c-.3-.5.3-.5.9-1.6.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6a1.1 1.1 0 0 0-.8.4 3.4 3.4 0 0 0-1 2.5 5.9 5.9 0 0 0 1.2 3.1 13.5 13.5 0 0 0 5.2 4.6c1.9.8 2.7.9 3.6.7a3.1 3.1 0 0 0 2-1.4 2.5 2.5 0 0 0 .2-1.4c-.1-.2-.3-.3-.6-.4ZM12 21.8a9.8 9.8 0 0 1-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A9.8 9.8 0 1 1 12 21.8Zm0-21.6A11.8 11.8 0 0 0 1.8 17.9L.1 24l6.3-1.6A11.8 11.8 0 1 0 12 .2Z" />
    </svg>
  ),
};

export function SocialButton({ social }: SocialButtonProps) {
  const icon = brandIcons[social.platform] ?? <LinkIcon size={20} aria-hidden="true" />;

  return (
    <motion.a
      href={social.href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackClick(`social-${social.platform}`, `Social: ${social.platform}`)}
      aria-label={social.ariaLabel}
      whileHover={{ scale: 1.1, y: -2 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center justify-center w-12 h-12 rounded-full bg-white/5 border border-white/10 text-zinc-300 hover:bg-[#d4a937]/15 hover:text-[#f5d77a] hover:border-[#d4a937]/50 transition-colors shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4a937] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
    >
      {icon}
    </motion.a>
  );
}
