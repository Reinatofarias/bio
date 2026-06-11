"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { StatItem } from "@/data/types";

interface StatCardProps {
  stat: StatItem;
}

export function StatCard({ stat }: StatCardProps) {
  const [count, setCount] = useState(0);

  // Simple count up effect
  useEffect(() => {
    let start = 0;
    const end = stat.numericValue;
    const duration = 2000;
    const incrementTime = Math.max(16, Math.floor(duration / end));
    
    const timer = setInterval(() => {
      start += Math.ceil(end / (duration / incrementTime));
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [stat.numericValue]);

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="flex flex-col items-center justify-center p-6 rounded-2xl bg-white/5 border border-white/10 text-center"
    >
      <div className="text-3xl md:text-4xl font-extrabold text-white mb-2 font-mono">
        {stat.prefix}
        {count}
        {stat.suffix}
      </div>
      <div className="text-sm text-zinc-400 font-medium tracking-wide uppercase">
        {stat.label}
      </div>
    </motion.div>
  );
}
