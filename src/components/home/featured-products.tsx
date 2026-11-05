import Link from "next/link";
import { ProductGrid } from "@/components/product/product-grid";
import { SectionHeading } from "@/components/ui/section-heading";
import { getFeaturedProducts } from "@/lib/products";

export function FeaturedProducts() {
  const products = getFeaturedProducts(8);

  return (
    <section className="section-pad bg-paper">
      <div className="container-wide">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            title="Currently on Our Radar."
            description="Explore some of the styles worth adding to your wardrobe."
          />
          <Link href="/shop" className="btn btn-secondary shrink-0">
            Shop All
          </Link>
        </div>
        <div className="mt-10">
          <ProductGrid products={products} />
        </div>
      </div>
    </section>
  );
}
