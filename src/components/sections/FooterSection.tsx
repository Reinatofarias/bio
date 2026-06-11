import { Config } from "@/data/types";

interface FooterSectionProps {
  footer: Config['footer'];
}

export function FooterSection({ footer }: FooterSectionProps) {
  return (
    <footer className="w-full py-8 mt-auto border-t border-white/10 text-center flex flex-col items-center">
      <p className="text-sm text-zinc-500 mb-2 font-medium">
        {footer.copyright}
      </p>
      <p className="text-xs text-zinc-600">
        {footer.tagline}
      </p>
      {footer.cnpj && (
        <p className="text-[10px] text-zinc-700 mt-4">
          CNPJ: {footer.cnpj}
        </p>
      )}
    </footer>
  );
}
