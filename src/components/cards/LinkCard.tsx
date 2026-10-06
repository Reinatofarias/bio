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

  const handleClick = () => {
    trackClick(link.id, link.title);
  };

  const linkProps = link.external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  const isFeatured = link.variant === 'featured';

  if (link.variant === 'banner') {
    return (
      <motion.a
        href={link.href}
        onClick={handleClick}
        {...linkProps}
        whileHover={{ y: -3 }}
        whileTap={{ scale: 0.99 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        aria-label={link.description ? `${link.title}: ${link.description}` : link.title}
        className="relative block w-full aspect-[2/1] rounded-2xl overflow-hidden border border-white/[0.08] shadow-[0_20px_50px_-20px_rgba(0,0,0,0.9)] hover:border-[#d4a937]/40 hover:shadow-[0_24px_60px_-20px_rgba(212,169,55,0.25)] transition-[border-color,box-shadow] duration-500 group mt-4 mb-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4a937] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
      >
        {link.image && (
          <Image
            src={link.image}
            alt={link.title}
            fill
            sizes="(max-width: 768px) 100vw, 640px"
            priority={link.order <= 1}
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
        )}
        {/* Brilho único quando o banner entra na tela, e de novo no hover */}
        <motion.div
          initial={{ x: "-120%" }}
          whileInView={{ x: "120%" }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1.4, ease: "easeInOut", delay: 0.2 }}
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.12] to-transparent skew-x-[-20deg] pointer-events-none"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-white/[0.10] to-transparent skew-x-[-20deg] pointer-events-none"
        />
        {/* Filete interno para acabamento */}
        <div aria-hidden="true" className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/[0.06] pointer-events-none" />
      </motion.a>
    );
  }

  return (
    <motion.a
      href={link.href}
      onClick={handleClick}
      {...linkProps}
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
