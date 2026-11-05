import { ProductGrid } from "@/components/product/product-grid";
import { SectionHeading } from "@/components/ui/section-heading";
import { getFreshFinds } from "@/lib/products";

export function FreshFinds() {
  const products = getFreshFinds(8);

  return (
    <section className="section-pad">
      <div className="container-wide">
        <SectionHeading
          title="Fresh Finds."
          description="Take a look at the latest styles featured by Everything Girlie World."
        />
        <p className="mt-4 max-w-2xl text-sm leading-6 text-muted">
          These looks are part of the website demo catalogue and are not labelled as confirmed new
          arrivals unless verified with the boutique.
        </p>
        <div className="mt-10">
          <ProductGrid products={products} />
        </div>
      </div>
    </section>
  );
}
