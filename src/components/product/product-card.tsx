"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useBag } from "@/components/bag/bag-provider";
import { formatPrice } from "@/lib/format";
import { categoryLabel } from "@/lib/products";
import type { Product } from "@/lib/types";

type ProductCardProps = {
  product: Product;
  priority?: boolean;
};

export function ProductCard({ product, priority = false }: ProductCardProps) {
  const { addItem } = useBag();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addItem({
      slug: product.slug,
      quantity: 1,
      colour: product.colours[0]?.name,
    });
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1600);
  };

  return (
    <article className="group flex h-full flex-col transition duration-300 hover:-translate-y-1">
      <Link href={`/product/${product.slug}`} className="image-zoom relative block aspect-[3/4] bg-blush shadow-[0_0_0_rgba(0,0,0,0)] transition duration-300 group-hover:shadow-[0_16px_34px_rgba(18,18,20,0.12)]">
        <Image
          src={product.image}
          alt={product.name}
          fill
          priority={priority}
          className="object-cover"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
        {product.listingKind === "demo-illustration" ? (
          <span className="absolute top-3 left-3 bg-paper/90 px-2 py-1 text-[0.6rem] font-semibold tracking-[0.14em] uppercase">
            Demo look
          </span>
        ) : null}
      </Link>
      <div className="flex flex-1 flex-col pt-4">
        <p className="text-[0.65rem] tracking-[0.16em] uppercase text-muted">{categoryLabel(product.category)}</p>
        <Link href={`/product/${product.slug}`} className="mt-1.5 block font-medium leading-snug transition hover:text-rose">
          {product.name}
        </Link>
        <p className="mt-2 text-sm text-muted">{formatPrice(product.priceGhs)}</p>
        {product.colours.length > 0 ? (
          <div className="mt-3 flex items-center gap-2">
            {product.colours.map((colour) => (
              <span
                key={colour.name}
                title={colour.name}
                className="h-3.5 w-3.5 rounded-full border border-ink/15"
                style={{ backgroundColor: colour.hex }}
              />
            ))}
            <span className="text-xs text-muted">{product.colours.map((c) => c.name).join(", ")}</span>
          </div>
        ) : null}
        <div className="mt-auto flex items-center gap-3 pt-4">
          <Link href={`/product/${product.slug}`} className="btn-ghost text-[0.68rem]">
            View details
          </Link>
          <button type="button" onClick={handleAdd} className="btn btn-secondary min-h-10 px-3 text-[0.65rem]">
            {added ? "Added" : "Add to bag"}
          </button>
        </div>
      </div>
    </article>
  );
}
