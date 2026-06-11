import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeader({ title, subtitle, className }: SectionHeaderProps) {
  return (
    <div className={cn("flex flex-col items-center justify-center mb-8 text-center", className)}>
      <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white mb-2">
        {title}
      </h2>
      {subtitle && (
        <p className="text-zinc-400 text-sm md:text-base max-w-[80%] mx-auto">
          {subtitle}
        </p>
      )}
      <div className="w-12 h-1 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full mt-4 opacity-80" />
    </div>
  );
}
