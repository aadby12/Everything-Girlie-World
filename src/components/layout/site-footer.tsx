import Link from "next/link";
import { Logo } from "@/components/brand/logo";
import { InstagramIcon } from "@/components/icons";
import { business, siteCredit } from "@/lib/business";
import { categories } from "@/lib/categories";

const footerNav = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop All" },
  ...categories.map((category) => ({ href: category.href, label: category.name })),
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/shopping-information", label: "Shopping Information" },
];

export function SiteFooter() {
  return (
    <footer className="mt-auto bg-charcoal text-paper">
      <div className="container-wide grid gap-12 py-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <Logo inverted />
          <p className="mt-6 max-w-sm text-sm leading-7 text-paper/70">{business.supportingLine}</p>
          <a
            href={business.instagramUrl}
            className="mt-6 inline-flex items-center gap-2 text-sm text-paper/80 transition hover:text-rose"
            target="_blank"
            rel="noreferrer"
          >
            <InstagramIcon className="h-4 w-4" />
            @{business.instagramHandle}
          </a>
        </div>

        <div className="md:col-span-3">
          <p className="eyebrow text-paper/50">Explore</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            {footerNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition hover:text-rose">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <p className="eyebrow text-paper/50">Visit & contact</p>
          <p className="mt-4 text-sm leading-7 text-paper/80">{business.location.display}</p>
          <a href={`tel:${business.phone.tel}`} className="mt-4 block text-sm transition hover:text-rose">
            {business.phone.display}
          </a>
          <a
            href={`https://wa.me/${business.phone.whatsapp}`}
            className="btn btn-secondary mt-6 border-paper/25 text-paper hover:bg-paper hover:text-ink"
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp Us
          </a>
        </div>
      </div>

      <div className="border-t border-paper/10">
        <div className="container-wide flex flex-col gap-3 py-5 text-xs tracking-[0.06em] text-paper/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © 2026 {business.name}. All rights reserved.
          </p>
          <p className="sm:text-right">{siteCredit}</p>
        </div>
      </div>
    </footer>
  );
}
