import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva("inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-semibold transition-colors", {
  variants: {
    variant: {
      default: "border-cyan-300/30 bg-cyan-300/10 text-cyan-100",
      secondary: "border-white/10 bg-white/10 text-slate-200",
      success: "border-emerald-300/30 bg-emerald-300/10 text-emerald-100",
      warning: "border-amber-300/30 bg-amber-300/10 text-amber-100",
      danger: "border-red-300/30 bg-red-300/10 text-red-100",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
