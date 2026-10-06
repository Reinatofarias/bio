"use client";

import { motion } from "framer-motion";

// Poucos pontos de "poeira dourada", pequenos e lentos: dão vida sem chamar atenção
const specks = [
  { top: "18%", left: "12%", size: 2, duration: 26, delay: 0, drift: 10 },
  { top: "32%", left: "86%", size: 3, duration: 32, delay: 4, drift: -12 },
  { top: "58%", left: "8%", size: 2, duration: 28, delay: 9, drift: 8 },
  { top: "72%", left: "92%", size: 2, duration: 34, delay: 2, drift: -6 },
  { top: "86%", left: "22%", size: 3, duration: 30, delay: 12, drift: 12 },
  { top: "46%", left: "70%", size: 2, duration: 36, delay: 6, drift: -10 },
];

export function GradientBackground() {
  return (
    <div aria-hidden="true" className="fixed inset-0 w-full h-full -z-10 bg-[#050505] overflow-hidden">
      {/* Luz quente vinda de cima, atrás da foto principal */}
      <div
        className="absolute inset-x-0 top-0 h-[70vh]"
        style={{
          background:
            "radial-gradient(ellipse 60% 55% at 50% 0%, rgba(212,169,55,0.14) 0%, rgba(212,169,55,0.04) 45%, transparent 75%)",
        }}
      />

      {/* Reflexo frio bem discreto no rodapé, para dar profundidade */}
      <div
        className="absolute inset-x-0 bottom-0 h-[50vh]"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 100%, rgba(120,130,160,0.06) 0%, transparent 70%)",
        }}
      />

      {/* Linhas verticais finas, como colunas de uma página editorial */}
      <div
        className="absolute inset-0 hidden md:block"
        style={{
          backgroundImage:
            "linear-gradient(to right, transparent calc(50% - 360px), rgba(255,255,255,0.04) calc(50% - 360px), rgba(255,255,255,0.04) calc(50% - 359px), transparent calc(50% - 359px), transparent calc(50% + 359px), rgba(255,255,255,0.04) calc(50% + 359px), rgba(255,255,255,0.04) calc(50% + 360px), transparent calc(50% + 360px))",
          maskImage: "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
        }}
      />

      {/* Poeira dourada */}
      <div className="absolute inset-0 pointer-events-none">
        {specks.map((p, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[#f5d77a]"
            style={{
              top: p.top,
              left: p.left,
              width: p.size,
              height: p.size,
              boxShadow: "0 0 6px 1px rgba(245,215,122,0.35)",
            }}
            animate={{
              y: [0, -80],
              x: [0, p.drift],
              opacity: [0, 0.45, 0],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: p.delay,
            }}
          />
        ))}
      </div>

      {/* Vinheta: escurece as bordas e centraliza o olhar */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 85% 80% at 50% 40%, transparent 55%, rgba(0,0,0,0.75) 100%)",
        }}
      />

      {/* Granulado sutil, textura de papel fotográfico */}
      <div
        className="absolute inset-0 opacity-[0.04] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
