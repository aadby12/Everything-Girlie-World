import Link from "next/link";
import { notFound } from "next/navigation";
import { AddToBagPanel } from "@/components/product/add-to-bag-panel";
import { ProductGallery } from "@/components/product/product-gallery";
import { ProductGrid } from "@/components/product/product-grid";
import { getCategory } from "@/lib/categories";
import { getProduct, getRelatedProducts, products } from "@/lib/products";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Product" };
  return {
    title: product.name,
    description: product.shortDescription,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const category = getCategory(product.category);
  const related = getRelatedProducts(product);

  return (
    <div className="section-pad">
      <div className="container-wide">
        <nav className="text-xs tracking-[0.08em] uppercase text-muted" aria-label="Breadcrumb">
          <Link href="/shop" className="hover:text-ink">
            Shop
          </Link>
          <span className="mx-2">/</span>
          {category ? (
            <>
              <Link href={category.href} className="hover:text-ink">
                {category.name}
              </Link>
              <span className="mx-2">/</span>
            </>
          ) : null}
          <span className="text-ink">{product.name}</span>
        </nav>

        <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:gap-14">
          <ProductGallery name={product.name} images={product.gallery} />
          <div>
            <p className="eyebrow">{category?.name}</p>
            <h1 className="mt-3 font-display text-[clamp(2.2rem,4vw,3.5rem)] leading-[1.05]">
              {product.name}
            </h1>
            <p className="mt-4 text-base leading-7 text-muted">{product.shortDescription}</p>
            {product.listingKind === "demo-illustration" ? (
              <p className="mt-4 border border-ink/10 bg-blush/40 px-4 py-3 text-sm leading-6 text-muted">
                Illustrative demonstration look for this website demo. Confirm the exact style,
                availability, and pricing with Everything Girlie World.
              </p>
            ) : null}
            <div className="mt-8">
              <AddToBagPanel product={product} />
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-10 border-t border-ink/10 pt-12 md:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl">About this piece</h2>
            <p className="mt-4 text-sm leading-7 text-muted sm:text-base">{product.description}</p>
          </div>
          <div className="space-y-8">
            <div>
              <h3 className="eyebrow text-ink">Size information</h3>
              <p className="mt-3 text-sm leading-7 text-muted">
                {product.sizes.length > 0
                  ? `Confirmed sizes shown for selection: ${product.sizes.join(", ")}.`
                  : "Specific available sizes should be confirmed with the boutique before ordering."}
              </p>
            </div>
            <div>
              <h3 className="eyebrow text-ink">Colour options</h3>
              <p className="mt-3 text-sm leading-7 text-muted">
                {product.colours.length > 0
                  ? `Noted colourways: ${product.colours.map((colour) => colour.name).join(", ")}.`
                  : "Available colours should be confirmed directly with Everything Girlie World."}
              </p>
            </div>
            <div>
              <h3 className="eyebrow text-ink">Ordering information</h3>
              <p className="mt-3 text-sm leading-7 text-muted">
                Please confirm the availability of your preferred size and colour before completing
                your order. Ordering is arranged via WhatsApp with the boutique.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <h2 className="font-display text-3xl sm:text-4xl">You may also like</h2>
          <div className="mt-8">
            <ProductGrid products={related} />
          </div>
        </div>
      </div>
    </div>
  );
}
