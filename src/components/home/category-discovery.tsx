import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/section-heading";
import { categories } from "@/lib/categories";

export function CategoryDiscovery() {
  return (
    <section className="section-pad">
      <div className="container-wide">
        <SectionHeading
          title="Find Your Next Look."
          description="Explore styles for every mood, moment, and occasion."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category, index) => (
            <Link
              key={category.id}
              href={category.href}
              className="group relative block aspect-[3/4] overflow-hidden bg-blush shadow-[0_0_0_rgba(0,0,0,0)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(18,18,20,0.14)] reveal"
              style={{ animationDelay: `${0.1 + index * 0.08}s` }}
            >
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-cover transition duration-700 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent transition duration-500 group-hover:from-ink/90" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-paper transition duration-500 group-hover:translate-y-[-2px]">
                <p className="font-display text-3xl leading-none">{category.name}</p>
                <p className="mt-3 text-sm leading-6 text-paper/80">{category.tagline}</p>
                <p className="mt-3 text-[0.68rem] font-semibold tracking-[0.16em] uppercase text-paper/0 transition group-hover:text-paper/90">
                  Shop now →
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
