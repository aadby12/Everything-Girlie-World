import Link from "next/link";
import { SectionHeading } from "@/components/ui/section-heading";
import { business } from "@/lib/business";
import { generalWhatsAppHref } from "@/lib/whatsapp";

export const metadata = {
  title: "Shopping Information",
  description: "Review ordering, availability, and refund information before shopping with Everything Girlie World.",
};

const sections = [
  {
    title: "Refunds",
    body: business.policies.refunds,
  },
  {
    title: "Ordering",
    body: "Orders on this website demo are arranged by contacting Everything Girlie World on WhatsApp or by phone. Sending a WhatsApp message does not complete a purchase. The boutique will confirm availability and the next ordering steps.",
  },
  {
    title: "Product availability",
    body: "Styles, colours, and sizes can change. Please confirm that your preferred piece is available before finalising an order.",
  },
  {
    title: "Sizes and colours",
    body: "Only confirmed sizes and colours are shown as selectable options on product pages. Where size or colour details are not listed, contact the business to confirm what is currently available.",
  },
  {
    title: "Delivery and collection",
    body: "Delivery options, fees, timelines, and collection arrangements should be confirmed directly with Everything Girlie World for your order.",
  },
  {
    title: "Exchanges or cancellations",
    body: "Please contact the boutique for clarification on exchanges, cancellations, or any other shopping questions before placing an order.",
  },
];

export default function ShoppingInformationPage() {
  return (
    <div className="section-pad">
      <div className="container-wide max-w-3xl">
        <SectionHeading
          as="h1"
          title="Before You Shop."
          description="Please take a moment to review our shopping information before placing an order."
        />

        <div className="mt-12 space-y-10">
          {sections.map((section) => (
            <section key={section.title} className="border-t border-ink/10 pt-8">
              <h2 className="font-display text-3xl">{section.title}</h2>
              <p className="mt-4 text-sm leading-7 text-muted sm:text-base">{section.body}</p>
            </section>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-3">
          <a href={generalWhatsAppHref} target="_blank" rel="noreferrer" className="btn btn-primary">
            Ask on WhatsApp
          </a>
          <Link href="/shop" className="btn btn-secondary">
            Continue shopping
          </Link>
        </div>
      </div>
    </div>
  );
}
