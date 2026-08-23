import { expertise, siteContent } from "@/constants/site";
import { CapabilityIndex } from "@/components/common/capability-index";

export function Expertise() {
  return <section id="expertise" className="scroll-mt-16 border-y border-border py-20 sm:py-28 lg:py-36"><div className="page-shell"><div className="mb-14 flex flex-col justify-between gap-6 border-t border-border pt-5 sm:flex-row sm:items-end"><div><span className="font-mono text-[.6875rem] uppercase tracking-[.16em] text-accent">{siteContent.expertise.sectionLabel}</span><h2 className="mt-6 max-w-[9ch] text-5xl font-semibold leading-[.9] tracking-[-.075em] sm:text-6xl">{siteContent.expertise.heading}</h2></div><p className="max-w-sm text-base leading-7 text-black/60">{siteContent.expertise.description}</p></div><CapabilityIndex groups={expertise} /></div></section>;
}
