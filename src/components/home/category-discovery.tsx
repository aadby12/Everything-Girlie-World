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
              className="group relative block aspect-[3/4] overflow-hidden bg-blush reveal"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/15 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-paper">
                <p className="font-display text-3xl leading-none">{category.name}</p>
                <p className="mt-3 text-sm leading-6 text-paper/80">{category.tagline}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
