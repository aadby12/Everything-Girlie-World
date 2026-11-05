import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";

export function HomeHero() {
  return (
    <section className="relative min-h-[88vh] overflow-hidden bg-ink text-paper">
      <div className="hero-media absolute inset-0">
        <Image
          src="/images/hero-main.jpg"
          alt="Fashion editorial portrait for Everything Girlie World"
          fill
          priority
          className="object-cover object-[center_20%] opacity-80"
          sizes="100vw"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-ink/88 via-ink/55 to-ink/25" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink/50 to-transparent" />

      <div className="relative container-wide flex min-h-[88vh] items-end pb-28 pt-28 md:items-center md:pb-24">
        <div className="max-w-xl">
          <p className="reveal font-display text-[clamp(2.6rem,8vw,5.6rem)] leading-[0.95] tracking-[-0.03em]">
            Everything Girlie World
          </p>
          <h1 className="reveal reveal-delay mt-6 max-w-lg text-[clamp(1.35rem,3vw,1.85rem)] font-medium leading-snug">
            Every Girl Deserves a Little Extra.
          </h1>
          <p className="reveal reveal-delay-2 mt-4 max-w-md text-sm leading-7 text-paper/85 sm:text-base">
            From statement outfits to everyday favourites, discover fashion pieces that make getting
            dressed feel exciting.
          </p>
          <div className="reveal reveal-delay-3 mt-8 flex w-full max-w-md flex-col gap-3 sm:max-w-none sm:flex-row sm:flex-wrap">
            <Link href="/shop" className="btn btn-hero-primary w-full sm:w-auto">
              Shop the Collection
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
            <Link href="/shop?sort=featured" className="btn btn-hero-secondary w-full sm:w-auto">
              Explore New Finds
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
