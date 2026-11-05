import { ShopCatalogue } from "@/components/product/shop-catalogue";
import { SectionHeading } from "@/components/ui/section-heading";

type ShopPageProps = {
  searchParams: Promise<{
    q?: string;
    category?: string;
    sort?: string;
  }>;
};

export const metadata = {
  title: "Shop All",
  description: "Explore the Everything Girlie World collection and find pieces that fit your personal style.",
};

export default function ShopPage({ searchParams }: ShopPageProps) {
  return (
    <div className="section-pad">
      <div className="container-wide">
        <SectionHeading
          as="h1"
          title="Shop All"
          description="Explore the Everything Girlie World collection and find pieces that fit your personal style."
        />
        <div className="demo-banner mt-8 px-4 py-3">
          This website demo uses an illustrative catalogue inspired by styles featured on the
          Everything Girlie World Instagram. Confirmed prices shown are drawn from publicly indexed
          posts where available. Please confirm availability and current pricing with the boutique
          before ordering.
        </div>
        <div className="mt-8">
          <ShopCatalogue
            searchParams={searchParams}
            emptyTitle="No styles match your search."
            emptyDescription="Try a different keyword or clear your filters to browse the full collection."
          />
        </div>
      </div>
    </div>
  );
}
