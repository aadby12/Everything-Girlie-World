import Image from "next/image";
import { notFound } from "next/navigation";
import { ShopCatalogue } from "@/components/product/shop-catalogue";
import { categories, getCategory, isCategoryId } from "@/lib/categories";

type CategoryPageProps = {
  params: Promise<{ category: string }>;
  searchParams: Promise<{ q?: string; sort?: string }>;
};

export function generateStaticParams() {
  return categories.map((category) => ({ category: category.id }));
}

export async function generateMetadata({ params }: CategoryPageProps) {
  const { category: categoryId } = await params;
  const category = getCategory(categoryId);
  if (!category) return { title: "Category" };
  return {
    title: category.name,
    description: category.description,
  };
}

export default async function CategoryPage({ params, searchParams }: CategoryPageProps) {
  const { category: categoryId } = await params;
  if (!isCategoryId(categoryId)) notFound();

  const category = getCategory(categoryId);
  if (!category) notFound();

  return (
    <div>
      <section className="relative min-h-[42vh] overflow-hidden bg-ink text-paper">
        <Image
          src={category.image}
          alt={category.name}
          fill
          priority
          className="object-cover opacity-55"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/40 to-ink/25" />
        <div className="relative container-wide flex min-h-[42vh] items-end pb-12 pt-24">
          <div className="max-w-2xl">
            <p className="eyebrow text-paper/60">{category.name}</p>
            <h1 className="mt-3 font-display text-[clamp(2.4rem,6vw,4.2rem)] leading-[1.02]">
              {category.heading}
            </h1>
            <p className="mt-4 max-w-xl text-sm leading-7 text-paper/80 sm:text-base">
              {category.description}
            </p>
          </div>
        </div>
      </section>

      <div className="section-pad">
        <div className="container-wide">
          <ShopCatalogue
            searchParams={searchParams}
            lockedCategory={category.id}
            basePath={category.href}
            emptyTitle={`No ${category.name.toLowerCase()} to show yet.`}
            emptyDescription="This category currently has no matching demo catalogue pieces. Browse Shop All or enquire on WhatsApp."
          />
        </div>
      </div>
    </div>
  );
}
