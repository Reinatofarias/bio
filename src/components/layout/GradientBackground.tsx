"use client";

import { motion } from "framer-motion";

export function GradientBackground() {
  return (
    <div className="fixed inset-0 -z-10 h-full w-full bg-[#000000]">
      {/* Custom Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-[center_top] md:bg-[center_20%] bg-no-repeat opacity-25"
        style={{ 
          backgroundImage: "url('/images/BG.png')",
          WebkitMaskImage: 'radial-gradient(ellipse at 50% 50%, black 50%, transparent 100%)',
          maskImage: 'radial-gradient(ellipse at 50% 50%, black 50%, transparent 100%)'
        }}
      />

      {/* Top right gradient - animated (Cyan/Blue to match the right side of the hero image) */}
      <motion.div 
        animate={{ 
          scale: [1, 1.5, 1],
          opacity: [0.6, 1, 0.6],
          x: [0, -50, 0],
          y: [0, 40, 0]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 blur-[100px] z-10 pointer-events-none"
      >
        <div className="h-[400px] w-[400px] rounded-full bg-gradient-to-bl from-cyan-600/70 to-blue-600/50 md:h-[600px] md:w-[600px]" />
      </motion.div>

      {/* Bottom left gradient - animated (Orange/Amber to match the left side of the hero image) */}
      <motion.div 
        animate={{ 
          scale: [1, 1.6, 1],
          opacity: [0.5, 0.9, 0.5],
          x: [0, 60, 0],
          y: [0, -40, 0]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 1 
        }}
        className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 blur-[100px] z-10 pointer-events-none"
      >
        <div className="h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-orange-500/60 to-amber-600/40 md:h-[700px] md:w-[700px]" />
      </motion.div>

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-10" 
        style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '32px 32px'
        }}
      />

      {/* Noise Texture Overlay - subtle and premium */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />
    </div>
  );
}
