"use client";

import { motion } from "framer-motion";
import { StatItem } from "@/data/types";
import { StatCard } from "@/components/cards/StatCard";
import { staggerContainer, staggerItem } from "@/lib/animations";

interface StatsSectionProps {
  stats: StatItem[];
}

export function StatsSection({ stats }: StatsSectionProps) {
  const sortedStats = [...stats].sort((a, b) => a.order - b.order);

  if (sortedStats.length === 0) return null;

  return (
    <motion.section 
      variants={staggerContainer}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-50px" }}
      className="w-full mb-16"
    >
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {sortedStats.map((stat) => (
          <motion.div key={stat.id} variants={staggerItem} className={sortedStats.length === 3 ? "col-span-1" : "col-span-2 md:col-span-1"}>
            <StatCard stat={stat} />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
