import * as React from "react";
import { cn } from "@/lib/utils";
import { trackClick } from "@/lib/supabase";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "default" | "sm" | "lg" | "icon";
  asChild?: boolean;
  href?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "default", href, onClick, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary disabled:pointer-events-none disabled:opacity-50";
    
    const variants = {
      primary: "bg-gradient-to-r from-brand-primary to-brand-secondary text-white shadow-lg shadow-brand-primary/25 hover:shadow-brand-primary/40 hover:scale-[1.02] active:scale-[0.98]",
      secondary: "bg-white/10 text-white hover:bg-white/20 backdrop-blur-md border border-white/10 shadow-sm hover:scale-[1.02] active:scale-[0.98]",
      ghost: "hover:bg-white/10 hover:text-white text-zinc-300",
    };

    const sizes = {
      default: "h-12 px-6 py-2",
      sm: "h-9 rounded-lg px-3",
      lg: "h-14 rounded-xl px-8 text-base",
      icon: "h-12 w-12",
    };

    const combinedClassName = cn(baseStyles, variants[variant], sizes[size], className);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (href) {
        trackClick(href, typeof props.children === 'string' ? props.children : 'Button Click');
        if (href.startsWith('http')) {
          window.open(href, '_blank', 'noopener,noreferrer');
        } else {
          window.location.href = href;
        }
      }
      if (onClick) {
        onClick(e);
      }
    };

    return (
      <button
        className={combinedClassName}
        ref={ref}
        onClick={handleClick}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
