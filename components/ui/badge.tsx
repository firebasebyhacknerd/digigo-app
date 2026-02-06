import { cn } from "@/lib/utils";
import * as React from "react";

export function Badge({
  className,
  children,
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-2xl border border-neon/20 bg-surface-3/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-neon",
        className
      )}
    >
      {children}
    </span>
  );
}
