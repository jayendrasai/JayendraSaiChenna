import { achievements, siteContent } from "@/constants/site";
import { Reveal } from "@/components/common/reveal";
import { AnimatedNumber } from "@/components/common/animated-number";

export function Achievements() {
  return <section id="achievements" className="section-anchor section-space"><div className="page-shell"><div className="mb-14 flex flex-col justify-between gap-6 border-t border-border pt-5 sm:flex-row sm:items-end"><div><span className="font-mono text-[.6875rem] uppercase tracking-[.16em] text-accent">{siteContent.achievements.sectionLabel}</span><h2 className="mt-6 text-5xl font-semibold leading-[.9] tracking-[-.075em] sm:text-6xl">{siteContent.achievements.heading}</h2></div><p className="max-w-sm text-base leading-7 text-foreground/60">{siteContent.achievements.description}</p></div><div className="grid gap-8 border-y border-border py-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-foreground/10">{achievements.map((item, index) => <Reveal key={item.label} delay={index * .05} className="lg:px-7 first:lg:pl-0"><p className="text-5xl font-semibold tracking-[-.08em]"><AnimatedNumber value={item.value} /></p><h3 className="mt-4 text-sm font-semibold">{item.label}</h3><p className="mt-2 max-w-[14rem] text-sm leading-6 text-foreground/55">{item.detail}</p></Reveal>)}</div></div></section>;
}
