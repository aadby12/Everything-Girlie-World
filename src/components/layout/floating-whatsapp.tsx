import { WhatsAppIcon } from "@/components/icons";
import { generalWhatsAppHref } from "@/lib/whatsapp";

export function FloatingWhatsApp() {
  return (
    <a
      href={generalWhatsAppHref}
      target="_blank"
      rel="noreferrer"
      className="fixed right-4 bottom-4 z-30 inline-flex items-center gap-2 bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-lg transition hover:brightness-95 sm:right-6 sm:bottom-6"
      aria-label="Chat on WhatsApp"
    >
      <WhatsAppIcon className="h-5 w-5" />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
