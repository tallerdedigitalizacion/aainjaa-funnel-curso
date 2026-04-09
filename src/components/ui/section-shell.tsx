import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface SectionShellProps {
  id?: string;
  className?: string;
  children: ReactNode;
}

export function SectionShell({ id, className, children }: SectionShellProps) {
  return (
    <section
      id={id}
      className={cn("mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8", className)}
    >
      {children}
    </section>
  );
}
