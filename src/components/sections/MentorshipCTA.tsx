"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, Check } from "lucide-react";
import { trackClick } from "@/lib/supabase";

const WHATSAPP_MENTORIA =
  "https://wa.me/5581985647633?text=Oi%20Renato%2C%20eu%20vim%20pelo%20teu%20perfil%20e%20gostaria%20de%20saber%20mais%20da%20sua%20mentoria%20individual%2C%20pode%20me%20dar%20mais%20detalhes%3F";

const itens = [
  "Diagnóstico do marketing da sua empresa hoje",
  "Plano de ação feito para o seu negócio",
  "Acompanhamento direto comigo, sem intermediários",
];

export function MentorshipCTA() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="w-full mt-8 mb-6"
      aria-labelledby="mentoria-titulo"
    >
      {/* Borda dourada em degradê: o card fica "dentro" de um filete de ouro */}
      <div className="relative rounded-[22px] p-px bg-gradient-to-br from-[#f5d77a]/70 via-[#d4a937]/15 to-[#b8862b]/60 shadow-[0_30px_80px_-30px_rgba(212,169,55,0.35)]">
        <div className="relative overflow-hidden rounded-[21px] bg-[#0a0805] px-6 pt-8 pb-6 md:px-9 md:pt-10 md:pb-8">
          {/* Luz dourada no canto e reflexo frio do lado oposto */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 -right-20 h-72 w-72 rounded-full"
            style={{ background: "radial-gradient(circle, rgba(245,215,122,0.22), transparent 65%)" }}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-28 -left-24 h-72 w-72 rounded-full"
            style={{ background: "radial-gradient(circle, rgba(212,169,55,0.10), transparent 65%)" }}
          />
          {/* Linhas finas de grade, só no topo */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(245,215,122,1) 1px, transparent 1px), linear-gradient(90deg, rgba(245,215,122,1) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
              maskImage: "radial-gradient(ellipse 80% 55% at 85% 0%, black, transparent 70%)",
              WebkitMaskImage: "radial-gradient(ellipse 80% 55% at 85% 0%, black, transparent 70%)",
            }}
          />
          {/* Reflexo que passa uma vez quando o card aparece */}
          <motion.div
            aria-hidden="true"
            initial={{ x: "-130%" }}
            whileInView={{ x: "130%" }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.6, ease: "easeInOut", delay: 0.4 }}
            className="pointer-events-none absolute inset-0 skew-x-[-20deg] bg-gradient-to-r from-transparent via-[#f5d77a]/[0.08] to-transparent"
          />

          <div className="relative">
            <h2
              id="mentoria-titulo"
              className="text-[28px] md:text-[34px] font-semibold leading-[1.1] tracking-[-0.02em] text-zinc-50"
            >
              Mentoria{" "}
              <span className="bg-gradient-to-r from-[#f5d77a] via-[#e6be5a] to-[#c9973a] bg-clip-text text-transparent">
                individual
              </span>
            </h2>
            <p className="mt-3 max-w-[30ch] text-[15px] md:text-base leading-relaxed text-zinc-400">
              Para donos de negócio que querem dominar o marketing da própria empresa, de ponta a ponta.
            </p>

            <ul className="mt-6 flex flex-col gap-3">
              {itens.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] text-zinc-200">
                  <span className="mt-[1px] flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border border-[#d4a937]/50 bg-[#d4a937]/10">
                    <Check aria-hidden="true" className="h-3 w-3 text-[#f5d77a]" strokeWidth={3} />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <a
              href={WHATSAPP_MENTORIA}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackClick("mentoria", "Mentoria Individual")}
              className="group mt-7 flex w-full items-center justify-center gap-2 rounded-xl border border-[#f5d77a]/60 bg-gradient-to-r from-[#f5d77a] via-[#d4a937] to-[#b8862b] px-5 py-4 text-[15px] md:text-base font-bold text-black shadow-[0_0_30px_rgba(212,169,55,0.3)] transition-all hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(212,169,55,0.55)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f5d77a] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              <span>Quero entrar na mentoria</span>
              <ArrowUpRight
                aria-hidden="true"
                className="h-5 w-5 flex-shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>

            <div className="mt-5 flex items-center justify-between gap-4">
              <p className="text-[13px] text-zinc-500">Você fala direto comigo no WhatsApp.</p>
              <Image
                src="/images/assinatura.webp"
                alt="Assinatura de Renato Farias"
                width={900}
                height={284}
                sizes="140px"
                className="h-auto w-[120px] md:w-[140px] opacity-70"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
