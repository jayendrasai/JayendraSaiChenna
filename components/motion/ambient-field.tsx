"use client";

import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";
import { useRef } from "react";

export function AmbientField() {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const progress = useSpring(scrollYProgress, { stiffness: 80, damping: 28 });
  const firstY = useTransform(progress, [0, 1], [0, reducedMotion ? 0 : 90]);
  const secondY = useTransform(progress, [0, 1], [0, reducedMotion ? 0 : -60]);
  const firstOpacity = useTransform(progress, [0, .8], [.8, .2]);
  return <div ref={ref} aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
    <motion.div className="absolute -left-[12%] -top-[10%] h-[55%] w-[68%] rounded-full bg-gold/30 blur-[90px]" style={{ y: firstY, opacity: firstOpacity }} />
    <motion.div className="absolute -right-[14%] top-[12%] h-[56%] w-[62%] rounded-full bg-accent/20 blur-[110px]" style={{ y: secondY, opacity: firstOpacity }} />
    <div className="cinematic-grid absolute inset-0 opacity-70" />
  </div>;
}
