import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-xl text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-surface disabled:cursor-not-allowed disabled:opacity-60",
  {
    variants: {
      variant: {
        default:
          "border border-blue-700/30 bg-gradient-to-r from-blue-700 to-cyan-600 text-white shadow-[0_10px_30px_rgba(13,77,145,0.28)] hover:-translate-y-[1px] hover:shadow-[0_16px_36px_rgba(13,77,145,0.32)] focus-visible:ring-blue-300",
        outline:
          "border border-blue-300 bg-white text-blue-800 hover:bg-blue-50 hover:border-blue-400 focus-visible:ring-blue-200",
        ghost:
          "border border-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus-visible:ring-slate-200",
      },
      size: {
        default: "px-6 py-3",
        sm: "px-4 py-2 text-xs",
        lg: "px-8 py-4 text-base",
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
