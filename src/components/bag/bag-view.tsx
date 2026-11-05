"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";
import { useBag } from "@/components/bag/bag-provider";
import { MinusIcon, PlusIcon, WhatsAppIcon } from "@/components/icons";
import { formatPrice } from "@/lib/format";
import { getProduct } from "@/lib/products";
import { bagOrderMessage, whatsappUrl } from "@/lib/whatsapp";

export function BagView() {
  const { items, updateQuantity, removeItem, hydrated } = useBag();

  const lines = useMemo(
    () =>
      items
        .map((item) => {
          const product = getProduct(item.slug);
          if (!product) return null;
          return { product, item };
        })
        .filter((line): line is NonNullable<typeof line> => Boolean(line)),
    [items],
  );

  const pricedLines = lines.filter((line) => line.product.priceGhs != null);
  const allPriced = lines.length > 0 && pricedLines.length === lines.length;
  const subtotal = pricedLines.reduce(
    (sum, line) => sum + (line.product.priceGhs ?? 0) * line.item.quantity,
    0,
  );

  const orderHref = useMemo(() => whatsappUrl(bagOrderMessage(lines)), [lines]);

  if (!hydrated) {
    return <p className="text-sm text-muted">Loading your bag…</p>;
  }

  if (lines.length === 0) {
    return (
      <div className="border border-dashed border-ink/15 px-6 py-20 text-center">
        <p className="font-display text-3xl sm:text-4xl">Your bag is waiting for something cute.</p>
        <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-muted">
          Browse the collection and add the pieces you love. You can order them via WhatsApp when
          you&apos;re ready.
        </p>
        <Link href="/shop" className="btn btn-primary mt-8">
          Explore the Collection
        </Link>
      </div>
    );
  }

  return (
    <div className="grid gap-10 lg:grid-cols-[1.4fr_0.8fr]">
      <ul className="space-y-6">
        {lines.map(({ product, item }) => (
          <li key={`${product.slug}-${item.size ?? ""}-${item.colour ?? ""}`} className="flex gap-4 border-b border-ink/10 pb-6">
            <Link href={`/product/${product.slug}`} className="relative h-32 w-24 shrink-0 overflow-hidden bg-blush sm:h-40 sm:w-28">
              <Image src={product.image} alt={product.name} fill className="object-cover" sizes="112px" />
            </Link>
            <div className="flex min-w-0 flex-1 flex-col">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <Link href={`/product/${product.slug}`} className="font-medium hover:text-rose">
                    {product.name}
                  </Link>
                  <p className="mt-1 text-sm text-muted">{formatPrice(product.priceGhs)}</p>
                  <p className="mt-2 text-xs text-muted">
                    Size: {item.size || "To confirm"} · Colour: {item.colour || "To confirm"}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => removeItem(product.slug, item.size, item.colour)}
                  className="text-xs tracking-[0.12em] uppercase text-muted hover:text-ink"
                >
                  Remove
                </button>
              </div>
              <div className="mt-auto pt-4">
                <div className="inline-flex items-center border border-ink/15">
                  <button
                    type="button"
                    className="grid h-10 w-10 place-items-center"
                    aria-label="Decrease quantity"
                    onClick={() => updateQuantity(product.slug, item.quantity - 1, item.size, item.colour)}
                  >
                    <MinusIcon className="h-4 w-4" />
                  </button>
                  <span className="min-w-8 text-center text-sm">{item.quantity}</span>
                  <button
                    type="button"
                    className="grid h-10 w-10 place-items-center"
                    aria-label="Increase quantity"
                    onClick={() => updateQuantity(product.slug, item.quantity + 1, item.size, item.colour)}
                  >
                    <PlusIcon className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <aside className="h-fit border border-ink/10 bg-paper p-6">
        <h2 className="font-display text-2xl">Order summary</h2>
        {allPriced ? (
          <p className="mt-4 text-sm text-muted">
            Estimated total of confirmed prices:{" "}
            <span className="font-medium text-ink">{formatPrice(subtotal)}</span>
          </p>
        ) : (
          <p className="mt-4 text-sm leading-6 text-muted">
            Some pieces need a price confirmation. Your WhatsApp message will list confirmed prices
            where available and ask the boutique to confirm the rest.
          </p>
        )}
        <p className="mt-4 text-sm leading-6 text-muted">
          Ordering via WhatsApp does not complete a purchase. The boutique will confirm availability
          and the next steps.
        </p>
        <a href={orderHref} target="_blank" rel="noreferrer" className="btn btn-rose mt-6 w-full">
          <WhatsAppIcon className="h-4 w-4" />
          Order via WhatsApp
        </a>
        <Link href="/shop" className="btn btn-secondary mt-3 w-full">
          Continue shopping
        </Link>
      </aside>
    </div>
  );
}
