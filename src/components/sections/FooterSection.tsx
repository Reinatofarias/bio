import { Config } from "@/data/types";

interface FooterSectionProps {
  footer: Config['footer'];
  instagram?: string;
}

export function FooterSection({ footer, instagram }: FooterSectionProps) {
  return (
    <footer className="w-full pt-8 pb-4 mt-6 border-t border-white/[0.06] text-center flex flex-col items-center gap-2">
      {instagram && (
        <a
          href={instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[13px] text-zinc-400 hover:text-[#f5d77a] transition-colors focus-visible:outline-none focus-visible:underline"
        >
          @reinatofarias no Instagram
        </a>
      )}
      <p className="text-xs text-zinc-600">{footer.copyright}</p>
      {footer.cnpj && <p className="text-[10px] text-zinc-700">CNPJ: {footer.cnpj}</p>}
    </footer>
  );
}
