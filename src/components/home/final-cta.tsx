import Link from "next/link";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-ink px-6 py-24 text-center text-paper">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(201,107,132,0.28),transparent_55%)]" />
      <div className="relative mx-auto max-w-2xl">
        <h2 className="font-display text-[clamp(2.4rem,6vw,4.2rem)] leading-[1.02]">Your Wardrobe Called.</h2>
        <p className="mt-4 text-base text-paper/75">It&apos;s time to discover something new.</p>
        <Link href="/shop" className="btn mt-8 bg-paper text-ink hover:bg-blush">
          Start Shopping
        </Link>
      </div>
    </section>
  );
}
