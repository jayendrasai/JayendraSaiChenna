import type { Variants } from "motion/react";

export const easeOut = [0.22, 1, 0.36, 1] as const;

export const revealVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: easeOut } }
};

export const heroVariants: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: easeOut } }
};

export const staggerContainer = (staggerChildren = 0.08, delayChildren = 0.08): Variants => ({
  hidden: {},
  visible: { transition: { staggerChildren, delayChildren } }
});
