import Image from "next/image";
import Link from "next/link";

export function HomeHero() {
  return (
    <section className="relative min-h-[88vh] overflow-hidden bg-ink text-paper">
      <Image
        src="/images/hero-main.jpg"
        alt="Fashion editorial portrait for Everything Girlie World"
        fill
        priority
        className="object-cover object-[center_20%] opacity-80"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/45 to-ink/20" />
      <div className="relative container-wide flex min-h-[88vh] items-end pb-16 pt-28 md:items-center md:pb-24">
        <div className="max-w-xl reveal">
          <p className="font-display text-[clamp(2.6rem,8vw,5.6rem)] leading-[0.95] tracking-[-0.03em]">
            Everything Girlie World
          </p>
          <h1 className="mt-6 max-w-lg text-[clamp(1.35rem,3vw,1.85rem)] font-medium leading-snug">
            Every Girl Deserves a Little Extra.
          </h1>
          <p className="mt-4 max-w-md text-sm leading-7 text-paper/80 sm:text-base">
            From statement outfits to everyday favourites, discover fashion pieces that make getting
            dressed feel exciting.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/shop" className="btn bg-paper text-ink hover:bg-blush">
              Shop the Collection
            </Link>
            <Link href="/shop?sort=featured" className="btn border border-paper/40 text-paper hover:bg-paper/10">
              Explore New Finds
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
