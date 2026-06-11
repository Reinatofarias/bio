"use client";

import { motion } from "framer-motion";

export function GradientBackground() {
  const particles = [
    { top: "15%", left: "20%", size: 4, duration: 12, delay: 0 },
    { top: "35%", left: "80%", size: 6, duration: 18, delay: 2 },
    { top: "65%", left: "15%", size: 3, duration: 15, delay: 5 },
    { top: "25%", left: "50%", size: 5, duration: 14, delay: 1 },
    { top: "85%", left: "65%", size: 4, duration: 20, delay: 3 },
    { top: "45%", left: "90%", size: 7, duration: 22, delay: 4 },
    { top: "75%", left: "30%", size: 3, duration: 16, delay: 6 },
    { top: "55%", left: "45%", size: 5, duration: 19, delay: 2 },
  ];

  return (
    <div className="fixed inset-0 w-full h-full -z-10 bg-[#0a0a0a] overflow-hidden">
      {/* Custom Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-[center_top] md:bg-[center_20%] bg-no-repeat opacity-25"
        style={{ 
          backgroundImage: "url('/images/BG.png')",
          WebkitMaskImage: 'radial-gradient(50% 50% at 50% 50%, black 80%, transparent 100%)',
          maskImage: 'radial-gradient(50% 50% at 50% 50%, black 80%, transparent 100%)'
        }}
      />

      {/* Partículas Douradas Flutuantes (Premium Effect) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        {particles.map((p, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[#ffd700]"
            style={{
              top: p.top,
              left: p.left,
              width: p.size,
              height: p.size,
              boxShadow: "0 0 15px 3px rgba(255, 215, 0, 0.6)",
            }}
            animate={{
              y: [0, -150],
              x: [0, Math.random() * 50 - 25],
              opacity: [0, 0.8, 0],
              scale: [0.5, 1.5, 0.5],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: "linear",
              delay: p.delay,
            }}
          />
        ))}
      </div>

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
