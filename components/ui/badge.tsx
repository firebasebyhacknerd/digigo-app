import { cn } from "@/lib/utils";
import * as React from "react";

export function Badge({
  className,
  children,
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/90 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-blue-700",
        className
      )}
    >
      {children}
    </span>
  );
}
