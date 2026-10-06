"use client";

import { MotionConfig } from "framer-motion";

// Respeita a preferência "reduzir movimento" do sistema do visitante
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
