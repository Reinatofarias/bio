"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FloatingBadgeProps {
  icon: string;
  text: string;
  className?: string;
  delay?: number;
}

export function FloatingBadge({ icon, text, className, delay = 0 }: FloatingBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.5, ease: "easeOut" }}
      className={cn(
        "flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-md border border-white/10 shadow-xl",
        "animate-[float_3s_ease-in-out_infinite]",
        className
      )}
      style={{ animationDelay: `${delay}s` }}
    >
      <span className="text-xl">{icon}</span>
      <span className="text-sm font-semibold text-white whitespace-nowrap font-mono">{text}</span>
    </motion.div>
  );
}
