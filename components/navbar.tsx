"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, LayoutGroup, motion, useReducedMotion } from "motion/react";
import { navLinks, RESUME_URL, siteConfig, siteInitials } from "@/constants/site";
import { useActiveSection } from "@/hooks/use-active-section";
import { cn } from "@/lib/utils";

const SECTION_IDS = navLinks.map((link) => link.href.slice(1));

export function Navbar() {
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const reducedMotion = useReducedMotion();
  const { activeId, setActiveId } = useActiveSection(SECTION_IDS);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => { if (event.key === "Escape") { setOpen(false); menuButtonRef.current?.focus(); } };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const navigate = (id: string) => { setActiveId(id); setOpen(false); };
  return <header className="fixed inset-x-0 top-0 z-50 border-b border-black/10 bg-background/90 backdrop-blur-md">
    <div className="page-shell flex h-16 items-center justify-between gap-6">
      <a href="#home" onClick={() => navigate("home")} aria-label={`${siteConfig.name}, back to top`} className="font-mono text-sm font-bold tracking-[-0.12em] text-foreground">{siteInitials}<span className="text-accent">.</span></a>
      <LayoutGroup id="primary-navigation"><nav aria-label="Primary navigation" className="hidden items-center gap-5 lg:flex">{navLinks.map((link) => { const id = link.href.slice(1); const active = activeId === id; return <a key={link.href} href={link.href} onClick={() => navigate(id)} className={cn("relative py-5 font-mono text-[.6875rem] uppercase tracking-[.12em] text-black/50 transition-colors hover:text-foreground", active && "text-foreground")} aria-current={active ? "location" : undefined}>{link.label}{active ? <motion.span layoutId="nav-underline" className="absolute inset-x-0 bottom-0 h-0.5 bg-accent" transition={{ duration: reducedMotion ? 0 : .22 }} /> : null}</a>; })}</nav></LayoutGroup>
      <div className="flex items-center gap-4"><a href={RESUME_URL} target="_blank" rel="noopener noreferrer" className="hidden border border-foreground px-3 py-2 font-mono text-[.6875rem] font-semibold uppercase tracking-[.1em] transition-colors hover:bg-foreground hover:text-white sm:inline-flex" aria-label="Open resume in a new tab">Resume</a><button ref={menuButtonRef} type="button" className="inline-flex size-10 items-center justify-center border border-black/15 text-foreground lg:hidden" aria-label={open ? "Close navigation menu" : "Open navigation menu"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen((value) => !value)}>{open ? <X aria-hidden="true" className="size-5" /> : <Menu aria-hidden="true" className="size-5" />}</button></div>
    </div>
    <AnimatePresence initial={false}>{open ? <motion.nav id="mobile-navigation" aria-label="Mobile navigation" initial={reducedMotion ? false : { opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={reducedMotion ? undefined : { opacity: 0, height: 0 }} transition={{ duration: reducedMotion ? 0 : .2 }} className="border-t border-black/10 bg-background lg:hidden"><div className="page-shell flex flex-col py-3">{navLinks.map((link) => { const id = link.href.slice(1); const active = activeId === id; return <a key={link.href} href={link.href} onClick={() => navigate(id)} aria-current={active ? "location" : undefined} className={cn("border-b border-black/10 py-3 font-mono text-xs uppercase tracking-[.12em] text-black/55 last:border-b-0", active && "text-foreground")}>{link.label}{active ? <span aria-hidden="true" className="ml-2 text-accent">•</span> : null}</a>; })}<a href={RESUME_URL} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)} className="mt-4 inline-flex w-fit border border-foreground px-3 py-2 font-mono text-[.6875rem] font-semibold uppercase tracking-[.1em]" aria-label="Open resume in a new tab">Resume ↗</a></div></motion.nav> : null}</AnimatePresence>
  </header>;
}
