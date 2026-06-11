"use client";

import { motion } from "framer-motion";
import { ProductItem } from "@/data/types";
import { ProductCard } from "@/components/cards/ProductCard";
import { SectionHeader } from "@/components/SectionHeader";
import { staggerContainer, staggerItem } from "@/lib/animations";

interface ProductsSectionProps {
  products: ProductItem[];
}

export function ProductsSection({ products }: ProductsSectionProps) {
  const activeProducts = products.filter((p) => p.active).sort((a, b) => a.order - b.order);

  if (activeProducts.length === 0) return null;

  return (
    <motion.section 
      variants={staggerContainer}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-50px" }}
      className="w-full mb-16"
    >
      <SectionHeader 
        title="Soluções & Serviços" 
        subtitle="Escolha o melhor formato para impulsionar seus resultados"
      />
      
      <div className="flex flex-col gap-6 w-full">
        {activeProducts.map((product) => (
          <motion.div key={product.id} variants={staggerItem}>
            <ProductCard product={product} />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
