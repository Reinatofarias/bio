"use client";

import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { LinkItem } from "@/data/types";
import { trackClick } from "@/lib/supabase";

interface LinkCardProps {
  link: LinkItem;
}

export function LinkCard({ link }: LinkCardProps) {
  // Dynamically get the icon component from lucide-react
  // @ts-expect-error - Dynamic import from lucide-react
  const IconComponent = LucideIcons[link.icon] || LucideIcons.Link;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    trackClick(link.id, link.title);
    window.open(link.href, link.external ? '_blank' : '_self', 'noopener,noreferrer');
  };

  const isFeatured = link.variant === 'featured';

  if (link.variant === 'banner') {
    return (
      <motion.a
        href={link.href}
        onClick={handleClick}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="relative block w-full aspect-[2/1] rounded-2xl overflow-hidden shadow-lg border border-white/10 group mt-4 mb-2"
      >
        {link.image && (
          <Image
            src={link.image}
            alt={link.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={link.order <= 3}
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}
        {/* Efeito de Glare Automático (Funciona no Mobile!) */}
        <motion.div 
          animate={{ x: ["-150%", "250%"] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3, ease: "easeInOut" }}
          className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 pointer-events-none" 
        />
      </motion.a>
    );
  }

  return (
    <motion.a
      href={link.href}
      onClick={handleClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "relative flex items-center w-full p-4 rounded-2xl border transition-all duration-300 overflow-hidden group backdrop-blur-md",
        isFeatured 
          ? "bg-gradient-to-r from-brand-primary/20 to-brand-secondary/20 border-brand-primary/30 shadow-[0_8px_32px_rgba(99,102,241,0.25)]" 
          : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20 shadow-[0_4px_30px_rgba(0,0,0,0.1)]"
      )}
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/0 via-brand-primary/10 to-brand-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-x-[-100%] group-hover:translate-x-[100%]" />
      
      <div className={cn(
        "flex items-center justify-center rounded-xl mr-4 shrink-0 transition-colors relative overflow-hidden",
        isFeatured ? "w-14 h-14 bg-brand-primary text-white" : "w-12 h-12 bg-white/10 text-zinc-300 group-hover:text-white group-hover:bg-brand-primary/20"
      )}>
        {link.image ? (
          <Image src={link.image} alt={link.title} fill className="object-cover" />
        ) : (
          <IconComponent size={isFeatured ? 28 : 24} />
        )}
      </div>
      
      <div className="flex flex-col flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <h3 className={cn(
            "font-bold truncate text-zinc-100",
            isFeatured ? "text-lg" : "text-base"
          )}>
            {link.title}
          </h3>
          {link.badge && (
            <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white bg-red-500 rounded-full shrink-0">
              {link.badge}
            </span>
          )}
        </div>
        {link.description && (
          <p className="text-sm text-zinc-400 truncate mt-0.5 group-hover:text-zinc-300 transition-colors">
            {link.description}
          </p>
        )}
      </div>

      <div className="shrink-0 ml-2 text-zinc-500 group-hover:text-zinc-300 transition-colors">
        <LucideIcons.ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
      </div>
    </motion.a>
  );
}
