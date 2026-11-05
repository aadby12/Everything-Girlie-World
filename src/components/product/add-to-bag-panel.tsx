"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useBag } from "@/components/bag/bag-provider";
import { MinusIcon, PlusIcon, WhatsAppIcon } from "@/components/icons";
import { formatPrice } from "@/lib/format";
import { productEnquiryMessage, whatsappUrl } from "@/lib/whatsapp";
import type { Product } from "@/lib/types";

type AddToBagPanelProps = {
  product: Product;
};

export function AddToBagPanel({ product }: AddToBagPanelProps) {
  const { addItem } = useBag();
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState(product.sizes[0] ?? "");
  const [colour, setColour] = useState(product.colours[0]?.name ?? "");
  const [error, setError] = useState("");
  const [added, setAdded] = useState(false);

  const requiresSize = product.sizes.length > 0;
  const requiresColour = product.colours.length > 0;

  const enquiryHref = useMemo(
    () =>
      whatsappUrl(
        productEnquiryMessage(product, {
          quantity,
          size: size || undefined,
          colour: colour || undefined,
        }),
      ),
    [product, quantity, size, colour],
  );

  const handleAdd = () => {
    if (requiresSize && !size) {
      setError("Please select a size before adding this piece to your bag.");
      return;
    }
    if (requiresColour && !colour) {
      setError("Please select a colour before adding this piece to your bag.");
      return;
    }
    setError("");
    addItem({
      slug: product.slug,
      quantity,
      size: size || undefined,
      colour: colour || undefined,
    });
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1800);
  };

  return (
    <div className="space-y-6">
      <div>
        <p className="text-2xl font-medium tracking-tight">{formatPrice(product.priceGhs)}</p>
        {product.priceNote ? <p className="mt-2 text-xs leading-5 text-muted">{product.priceNote}</p> : null}
      </div>

      {requiresSize ? (
        <fieldset>
          <legend className="eyebrow">Size</legend>
          <div className="mt-3 flex flex-wrap gap-2">
            {product.sizes.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setSize(option)}
                className={`min-w-12 border px-3 py-2 text-sm ${
                  size === option ? "border-ink bg-ink text-paper" : "border-ink/15 bg-paper"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </fieldset>
      ) : (
        <div>
          <p className="eyebrow">Size information</p>
          <p className="mt-2 text-sm leading-6 text-muted">
            Specific sizes for this piece should be confirmed with Everything Girlie World before ordering.
          </p>
        </div>
      )}

      {requiresColour ? (
        <fieldset>
          <legend className="eyebrow">Colour</legend>
          <div className="mt-3 flex flex-wrap gap-2">
            {product.colours.map((option) => (
              <button
                key={option.name}
                type="button"
                onClick={() => setColour(option.name)}
                className={`inline-flex items-center gap-2 border px-3 py-2 text-sm ${
                  colour === option.name ? "border-ink bg-ink text-paper" : "border-ink/15 bg-paper"
                }`}
              >
                <span className="h-3 w-3 rounded-full border border-white/30" style={{ backgroundColor: option.hex }} />
                {option.name}
              </button>
            ))}
          </div>
        </fieldset>
      ) : (
        <div>
          <p className="eyebrow">Colour options</p>
          <p className="mt-2 text-sm leading-6 text-muted">
            Confirm available colours directly with the boutique for this style.
          </p>
        </div>
      )}

      <div>
        <p className="eyebrow">Quantity</p>
        <div className="mt-3 inline-flex items-center border border-ink/15">
          <button
            type="button"
            className="grid h-11 w-11 place-items-center"
            aria-label="Decrease quantity"
            onClick={() => setQuantity((value) => Math.max(1, value - 1))}
          >
            <MinusIcon className="h-4 w-4" />
          </button>
          <span className="min-w-10 text-center text-sm font-medium">{quantity}</span>
          <button
            type="button"
            className="grid h-11 w-11 place-items-center"
            aria-label="Increase quantity"
            onClick={() => setQuantity((value) => value + 1)}
          >
            <PlusIcon className="h-4 w-4" />
          </button>
        </div>
      </div>

      {error ? <p className="text-sm text-rose-deep">{error}</p> : null}

      <div className="flex flex-col gap-3 sm:flex-row">
        <button type="button" onClick={handleAdd} className="btn btn-primary flex-1">
          {added ? "Added to bag" : "Add to Bag"}
        </button>
        <a href={enquiryHref} target="_blank" rel="noreferrer" className="btn btn-secondary flex-1">
          <WhatsAppIcon className="h-4 w-4" />
          WhatsApp enquire
        </a>
      </div>

      {added ? (
        <p className="text-sm text-muted">
          Added.{" "}
          <Link href="/bag" className="underline underline-offset-4 hover:text-rose">
            View your bag
          </Link>
        </p>
      ) : null}

      <p className="text-sm leading-6 text-muted">
        Please confirm the availability of your preferred size and colour before completing your order.
      </p>
    </div>
  );
}
