import { WhatsAppIcon } from "@/components/icons";
import { generalWhatsAppHref } from "@/lib/whatsapp";

export function FloatingWhatsApp() {
  return (
    <a
      href={generalWhatsAppHref}
      target="_blank"
      rel="noreferrer"
      className="whatsapp-float"
      aria-label="Chat on WhatsApp"
    >
      <WhatsAppIcon className="h-5 w-5" />
      <span className="hidden sm:inline">Chat with us</span>
    </a>
  );
}
