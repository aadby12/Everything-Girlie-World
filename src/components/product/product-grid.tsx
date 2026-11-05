import { ProductCard } from "@/components/product/product-card";
import type { Product } from "@/lib/types";

type ProductGridProps = {
  products: Product[];
  emptyTitle?: string;
  emptyDescription?: string;
};

export function ProductGrid({
  products,
  emptyTitle = "Nothing to show here yet.",
  emptyDescription = "Try another filter or browse the full collection.",
}: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="border border-dashed border-ink/15 px-6 py-16 text-center">
        <p className="font-display text-3xl">{emptyTitle}</p>
        <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-muted">{emptyDescription}</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 md:gap-x-6 lg:grid-cols-4">
      {products.map((product, index) => (
        <ProductCard key={product.slug} product={product} priority={index < 4} />
      ))}
    </div>
  );
}
