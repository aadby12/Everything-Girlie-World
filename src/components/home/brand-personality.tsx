import Image from "next/image";
import Link from "next/link";

export function BrandPersonality() {
  return (
    <section className="section-pad bg-blush/50">
      <div className="container-wide grid items-center gap-10 lg:grid-cols-2">
        <div className="relative aspect-[4/5] overflow-hidden bg-paper">
          <Image
            src="/images/about-mood.jpg"
            alt="Confident fashion mood"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
        <div className="max-w-lg">
          <h2 className="font-display text-[clamp(2.1rem,4vw,3.4rem)] leading-[1.05]">
            Because Every Girl Has Her Own Style.
          </h2>
          <p className="mt-5 text-base leading-7 text-muted">
            At Everything Girlie World, fashion is about finding pieces that make you feel good,
            express your personality, and give every outfit its own little moment.
          </p>
          <Link href="/shop" className="btn btn-primary mt-8">
            Shop Your Favourites
          </Link>
        </div>
      </div>
    </section>
  );
}
