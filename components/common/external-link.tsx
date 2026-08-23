import { ArrowUpRight } from "lucide-react";
import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ExternalLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & { children: ReactNode; showIcon?: boolean };

export function ExternalLink({ children, className, showIcon = true, ...props }: ExternalLinkProps) {
  return (
    <a className={cn("group inline-flex items-center gap-1.5 text-sm font-semibold text-foreground transition-colors hover:text-accent", className)} target="_blank" rel="noopener noreferrer" {...props}>
      {children}
      {showIcon ? <ArrowUpRight aria-hidden="true" className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /> : null}
    </a>
  );
}
