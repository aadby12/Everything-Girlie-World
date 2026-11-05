import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import { BagProvider } from "@/components/bag/bag-provider";
import { FloatingWhatsApp } from "@/components/layout/floating-whatsapp";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { business } from "@/lib/business";
import "./globals.css";

const sans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const display = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: `${business.name} · ${business.tagline}`,
    template: `%s · ${business.name}`,
  },
  description:
    "Premium fashion boutique demo for Everything Girlie World in Accra — dresses, tops & sets, skirts, and jumpsuits. Browse styles and order via WhatsApp.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: `${business.name} · ${business.tagline}`,
    description:
      "Discover fashion pieces that make getting dressed feel exciting. Shop the Everything Girlie World collection and order via WhatsApp.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-ivory font-sans text-ink">
        <BagProvider>
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
          <FloatingWhatsApp />
        </BagProvider>
      </body>
    </html>
  );
}
