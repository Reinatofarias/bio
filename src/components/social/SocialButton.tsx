"use client";

import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import { SocialLink } from "@/data/types";
import { trackClick } from "@/lib/supabase";

interface SocialButtonProps {
  social: SocialLink;
}

export function SocialButton({ social }: SocialButtonProps) {
  // @ts-expect-error - Dynamic import from lucide-react
  const IconComponent = LucideIcons[social.platform.charAt(0).toUpperCase() + social.platform.slice(1)] || LucideIcons.Link;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    trackClick(`social-${social.platform}`, `Social: ${social.platform}`);
    window.open(social.href, '_blank', 'noopener,noreferrer');
  };

  return (
    <motion.a
      href={social.href}
      onClick={handleClick}
      aria-label={social.ariaLabel}
      whileHover={{ scale: 1.1, y: -2 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center justify-center w-12 h-12 rounded-full bg-white/5 border border-white/10 text-zinc-300 hover:bg-brand-primary/20 hover:text-white hover:border-brand-primary/50 transition-colors shadow-lg"
    >
      <IconComponent size={20} />
    </motion.a>
  );
}
