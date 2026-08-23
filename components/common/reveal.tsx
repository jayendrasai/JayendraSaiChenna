"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "motion/react";
import type { ReactNode } from "react";
import { revealVariants } from "@/components/motion/motion-config";

export function Reveal({ children, delay = 0, className, ...props }: HTMLMotionProps<"div"> & { children: ReactNode; delay?: number }) {
  const reducedMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reducedMotion ? false : "hidden"}
      whileInView={reducedMotion ? undefined : "visible"}
      variants={revealVariants}
      viewport={{ once: true, amount: 0.18 }}
      transition={reducedMotion ? { duration: 0 } : { delay }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
