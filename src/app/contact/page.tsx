import { InstagramIcon, WhatsAppIcon } from "@/components/icons";
import { SectionHeading } from "@/components/ui/section-heading";
import { business } from "@/lib/business";
import { generalWhatsAppHref } from "@/lib/whatsapp";

export const metadata = {
  title: "Contact",
  description: "Get in touch with Everything Girlie World in Accra by phone, WhatsApp, or Instagram.",
};

export default function ContactPage() {
  return (
    <div className="section-pad">
      <div className="container-wide">
        <SectionHeading
          as="h1"
          title="Need a Little Help?"
          description="Have a question about a style, size, or order? Get in touch with Everything Girlie World."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          <div className="border border-ink/10 bg-paper p-7">
            <p className="eyebrow">Phone</p>
            <a href={`tel:${business.phone.tel}`} className="mt-4 block text-2xl font-medium hover:text-rose">
              {business.phone.display}
            </a>
            <p className="mt-3 text-sm leading-6 text-muted">
              Call to ask about a style, size, or order.
            </p>
          </div>

          <div className="border border-ink/10 bg-paper p-7">
            <p className="eyebrow">WhatsApp</p>
            <a
              href={generalWhatsAppHref}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-2xl font-medium hover:text-rose"
            >
              <WhatsAppIcon className="h-6 w-6 text-[#25D366]" />
              Message us
            </a>
            <p className="mt-3 text-sm leading-6 text-muted">
              Send product questions or place an order enquiry.
            </p>
          </div>

          <div className="border border-ink/10 bg-paper p-7">
            <p className="eyebrow">Instagram</p>
            <a
              href={business.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-2xl font-medium hover:text-rose"
            >
              <InstagramIcon className="h-6 w-6" />
              @{business.instagramHandle}
            </a>
            <p className="mt-3 text-sm leading-6 text-muted">
              Follow for outfit inspiration and new finds.
            </p>
          </div>
        </div>

        <div className="mt-10 border border-ink/10 bg-blush/40 p-8">
          <p className="eyebrow">Location</p>
          <p className="mt-4 font-display text-3xl sm:text-4xl">{business.location.display}</p>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-muted">
            {business.location.note} For directions, search for Everything Girlie World or contact
            the boutique for the best way to find the shop.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={generalWhatsAppHref} target="_blank" rel="noreferrer" className="btn btn-primary">
              <WhatsAppIcon className="h-4 w-4" />
              WhatsApp Us
            </a>
            <a href={business.instagramUrl} target="_blank" rel="noreferrer" className="btn btn-secondary">
              <InstagramIcon className="h-4 w-4" />
              Follow on Instagram
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
