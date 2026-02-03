import { cn } from "@/lib/utils";
import * as React from "react";

export function Badge({
  className,
  children,
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-lg border border-white/14 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-white",
        className
      )}
    >
      {children}
    </span>
  );
}
