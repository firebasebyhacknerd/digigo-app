import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-surface focus-visible:ring-neon disabled:opacity-60 disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-b from-[#3bf7a6]/30 to-[#3bf7a6]/12 text-white border border-white/10 shadow-soft-glow hover:border-neon/70 hover:-translate-y-[1px]",
        outline:
          "border border-white/14 bg-white/5 text-white hover:border-neon/70 hover:-translate-y-[1px]",
        ghost:
          "border border-transparent text-white hover:border-white/14 hover:bg-white/4",
      },
      size: {
        default: "px-5 py-3",
        sm: "px-3.5 py-2 text-xs",
        lg: "px-6 py-3.5 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size }), className)}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { buttonVariants };
