import { Suspense } from "react";
import { ProductFilters } from "@/components/product/product-filters";
import { ProductGrid } from "@/components/product/product-grid";
import { isCategoryId } from "@/lib/categories";
import { filterAndSortProducts } from "@/lib/products";
import type { CategoryId, SortOption } from "@/lib/types";

type ShopCatalogueProps = {
  searchParams: Promise<{
    q?: string;
    category?: string;
    sort?: string;
  }>;
  lockedCategory?: CategoryId;
  basePath?: string;
  emptyTitle?: string;
  emptyDescription?: string;
};

async function ShopCatalogueInner({
  searchParams,
  lockedCategory,
  basePath = "/shop",
  emptyTitle,
  emptyDescription,
}: ShopCatalogueProps) {
  const params = await searchParams;
  const query = params.q ?? "";
  const categoryParam = lockedCategory ?? params.category ?? "all";
  const category =
    lockedCategory ??
    (categoryParam === "all" || isCategoryId(categoryParam) ? categoryParam : "all");
  const sort = (params.sort as SortOption) || "featured";

  const products = filterAndSortProducts({
    category,
    query,
    sort,
  });

  return (
    <>
      <ProductFilters
        basePath={basePath}
        showCategoryFilter={!lockedCategory}
        resultCount={products.length}
      />
      <div className="mt-8">
        <ProductGrid
          products={products}
          emptyTitle={emptyTitle}
          emptyDescription={emptyDescription}
        />
      </div>
    </>
  );
}

export function ShopCatalogue(props: ShopCatalogueProps) {
  return (
    <Suspense fallback={<p className="text-sm text-muted">Loading the collection…</p>}>
      <ShopCatalogueInner {...props} />
    </Suspense>
  );
}
