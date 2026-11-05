import Image from "next/image";
import Link from "next/link";

export function EditorialFeature() {
  return (
    <section className="bg-ink text-paper">
      <div className="grid lg:grid-cols-2">
        <div className="relative min-h-[520px] lg:min-h-[680px]">
          <Image
            src="/images/editorial-main.jpg"
            alt="Editorial fashion look"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
        <div className="flex items-center px-6 py-16 sm:px-10 lg:px-16">
          <div className="max-w-md reveal">
            <p className="eyebrow text-paper/55">Editorial</p>
            <h2 className="mt-4 font-display text-[clamp(2.2rem,4vw,3.6rem)] leading-[1.05]">
              Made for Your Main Character Moments.
            </h2>
            <p className="mt-5 text-base leading-7 text-paper/75">
              Whether you&apos;re dressing up or keeping it effortlessly cute, find pieces that let
              your personal style speak.
            </p>
            <Link href="/shop" className="btn mt-8 bg-paper text-ink hover:bg-blush">
              Discover Your Style
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
