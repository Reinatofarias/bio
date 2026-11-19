"use client";

import { motion } from "framer-motion";

// Poeira dourada: pontos pequenos e lentos que sobem e somem
const specks = [
  { top: "12%", left: "10%", size: 2, duration: 24, delay: 0, drift: 10 },
  { top: "22%", left: "84%", size: 3, duration: 30, delay: 3, drift: -12 },
  { top: "35%", left: "18%", size: 2, duration: 27, delay: 8, drift: 6 },
  { top: "44%", left: "72%", size: 2, duration: 33, delay: 5, drift: -10 },
  { top: "55%", left: "6%", size: 3, duration: 29, delay: 11, drift: 8 },
  { top: "62%", left: "90%", size: 2, duration: 31, delay: 1, drift: -6 },
  { top: "74%", left: "28%", size: 2, duration: 26, delay: 14, drift: 12 },
  { top: "80%", left: "64%", size: 3, duration: 35, delay: 7, drift: -9 },
  { top: "90%", left: "14%", size: 2, duration: 28, delay: 4, drift: 7 },
  { top: "94%", left: "82%", size: 2, duration: 32, delay: 10, drift: -11 },
];

export function GradientBackground() {
  return (
    <div aria-hidden="true" className="fixed inset-0 w-full h-full -z-10 bg-[#050505] overflow-hidden">
      {/* Feixe de luz vindo de cima, atrás da foto principal */}
      <div
        className="absolute left-1/2 top-0 h-[85vh] w-[140vw] max-w-[1400px] -translate-x-1/2"
        style={{
          background:
            "conic-gradient(from 180deg at 50% 0%, transparent 152deg, rgba(245,215,122,0.12) 172deg, rgba(245,215,122,0.20) 180deg, rgba(245,215,122,0.12) 188deg, transparent 208deg)",
          maskImage: "linear-gradient(to bottom, black 0%, black 35%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 35%, transparent 100%)",
        }}
      />

      {/* Duas luzes quentes que se movem devagar (aurora) */}
      <div className="bg-aurora bg-aurora-1 absolute -top-[20vh] left-1/2 h-[70vh] w-[70vh] max-h-[720px] max-w-[720px] rounded-full" />
      <div className="bg-aurora bg-aurora-2 absolute top-[45vh] -left-[20vh] h-[60vh] w-[60vh] max-h-[620px] max-w-[620px] rounded-full" />
      <div className="bg-aurora bg-aurora-3 absolute bottom-[-25vh] -right-[15vh] h-[65vh] w-[65vh] max-h-[680px] max-w-[680px] rounded-full" />

      {/* Grade de pontos bem fina, só no centro */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(rgba(245,215,122,0.22) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage: "radial-gradient(ellipse 55% 45% at 50% 30%, black 0%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse 55% 45% at 50% 30%, black 0%, transparent 75%)",
          opacity: 0.35,
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
              boxShadow: "0 0 8px 1px rgba(245,215,122,0.45)",
            }}
            animate={{
              y: [0, -110],
              x: [0, p.drift],
              opacity: [0, 0.6, 0],
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
          background: "radial-gradient(ellipse 85% 80% at 50% 40%, transparent 50%, rgba(0,0,0,0.8) 100%)",
        }}
      />

      {/* Granulado sutil, textura de papel fotográfico */}
      <div
        className="absolute inset-0 opacity-[0.05] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
