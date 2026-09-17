import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export const buttonVariants = cva("inline-flex min-h-11 items-center justify-center gap-2 rounded-sm px-5 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50", {
  variants: {
    variant: {
      default: "bg-primary text-primary-foreground hover:bg-primary/90",
      primary: "bg-primary text-primary-foreground hover:bg-primary/90",
      destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/90",
      link: "text-primary underline-offset-4 hover:underline",
      outline: "border border-border bg-transparent text-foreground hover:bg-accent",
      ghost: "text-foreground hover:bg-accent",
      whatsapp: "bg-success text-success-foreground hover:bg-success/90",
    },
    size: { default: "h-11", sm: "min-h-9 px-3", icon: "size-11 p-0", lg: "min-h-12 px-7" },
  },
  defaultVariants: { variant: "primary", size: "default" },
});

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> { asChild?: boolean }

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";
  return <Comp ref={ref} className={cn(buttonVariants({ variant, size }), className)} {...props} />;
});
Button.displayName = "Button";