"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ProductItem } from "@/data/types";
import { Button } from "@/components/Button";

interface ProductCardProps {
  product: ProductItem;
}

export function ProductCard({ product }: ProductCardProps) {
  const isFeatured = product.featured;

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={cn(
        "relative flex flex-col w-full p-6 md:p-8 rounded-3xl border overflow-hidden",
        isFeatured 
          ? "bg-[#000000]/80 border-brand-primary/30 shadow-[0_10px_40px_rgba(99,102,241,0.15)]" 
          : "bg-[#000000]/80 border-white/10"
      )}
    >
      {/* Background Image if exists */}
      {product.image && (
        <>
          <Image 
            src={product.image} 
            alt={product.title} 
            fill 
            className="object-cover opacity-20 transition-opacity duration-500 hover:opacity-30" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-[#000000]/80 to-transparent" />
        </>
      )}

      {/* Background glow for featured */}
      {isFeatured && !product.image && (
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-brand-primary/30 rounded-full blur-[60px] pointer-events-none" />
      )}

      <div className="flex flex-col h-full relative z-10">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-bold text-white pr-4">
            {product.title}
          </h3>
          {product.badge && (
            <span className={cn(
              "px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full shrink-0",
              isFeatured ? "bg-brand-primary text-white" : "bg-white/10 text-zinc-300"
            )}>
              {product.badge}
            </span>
          )}
        </div>

        <p className="text-zinc-400 mb-6 line-clamp-3 min-h-[4rem]">
          {product.description}
        </p>

        <ul className="space-y-3 mb-8 flex-1">
          {product.features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-brand-primary/20 text-brand-primary mt-0.5 shrink-0">
                <Check size={12} strokeWidth={3} />
              </span>
              <span className="text-sm text-zinc-300">{feature}</span>
            </li>
          ))}
        </ul>

        {product.price && (
          <div className="mb-6">
            <span className="text-sm text-zinc-500 block mb-1">Investimento</span>
            <span className="text-2xl font-bold text-white">{product.price}</span>
          </div>
        )}

        <Button 
          variant={product.cta.variant as "primary" | "secondary" | "ghost"} 
          href={product.cta.href}
          className="w-full mt-auto"
        >
          {product.cta.text}
        </Button>
      </div>
    </motion.div>
  );
}
