import Image from "next/image";
import Link from "next/link";
import { business } from "@/lib/business";

export const metadata = {
  title: "About",
  description: "Welcome to Everything Girlie World — fashion finds with personality in Accra.",
};

export default function AboutPage() {
  return (
    <div>
      <section className="relative min-h-[48vh] overflow-hidden bg-ink text-paper">
        <Image
          src="/images/lifestyle-1.jpg"
          alt="Everything Girlie World fashion mood"
          fill
          priority
          className="object-cover opacity-55"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/75 via-ink/45 to-ink/20" />
        <div className="relative container-wide flex min-h-[48vh] items-end pb-14 pt-24">
          <div className="max-w-2xl">
            <p className="eyebrow text-paper/60">{business.tagline}</p>
            <h1 className="mt-4 font-display text-[clamp(2.6rem,7vw,4.8rem)] leading-[1.02]">
              Welcome to Your Girlie World.
            </h1>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-wide grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-base leading-8 text-muted sm:text-lg">
              Everything Girlie World is a fashion destination for girls who enjoy discovering styles
              that express their personality. From dresses and skirts to standout outfits and
              everyday favourites, our goal is to make finding your next look an enjoyable
              experience.
            </p>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden bg-blush">
            <Image
              src="/images/about-mood.jpg"
              alt="Personal style moment"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      <section className="bg-paper section-pad">
        <div className="container-wide max-w-3xl">
          <h2 className="font-display text-[clamp(2.1rem,4vw,3.4rem)] leading-[1.05]">
            Fashion Should Feel Like You.
          </h2>
          <p className="mt-5 text-base leading-8 text-muted">
            We believe a great outfit is more than what you wear. It&apos;s how you express yourself,
            feel confident, and enjoy your own style.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/shop" className="btn btn-primary">
              Shop the Collection
            </Link>
            <Link href="/contact" className="btn btn-secondary">
              Visit & Contact
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
