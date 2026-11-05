"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { CloseIcon, SearchIcon } from "@/components/icons";
import { formatPrice } from "@/lib/format";
import { categoryLabel, searchProducts } from "@/lib/products";

type SearchDialogProps = {
  open: boolean;
  onClose: () => void;
};

export function SearchDialog({ open, onClose }: SearchDialogProps) {
  const [query, setQuery] = useState("");
  const activeQuery = open ? query : "";

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const results = useMemo(() => searchProducts(activeQuery).slice(0, 8), [activeQuery]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-ink/45 px-4 pt-[12vh]" role="dialog" aria-modal="true" aria-label="Search products">
      <button type="button" className="absolute inset-0 cursor-default" aria-label="Close search" onClick={onClose} />
      <div className="relative w-full max-w-2xl border border-ink/10 bg-paper shadow-[0_30px_80px_rgba(18,18,20,0.25)]">
        <div className="flex items-center gap-3 border-b border-ink/10 px-4 py-3">
          <SearchIcon className="h-5 w-5 text-muted" />
          <input
            autoFocus
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search dresses, skirts, sets..."
            className="w-full bg-transparent text-base outline-none placeholder:text-muted"
            aria-label="Search the collection"
          />
          <button
            type="button"
            onClick={() => {
              setQuery("");
              onClose();
            }}
            className="grid h-9 w-9 place-items-center"
            aria-label="Close search"
          >
            <CloseIcon className="h-5 w-5" />
          </button>
        </div>
        <div className="max-h-[55vh] overflow-y-auto p-3">
          {!activeQuery.trim() ? (
            <p className="px-2 py-6 text-sm text-muted">Start typing to find a style.</p>
          ) : results.length === 0 ? (
            <div className="px-2 py-8 text-center">
              <p className="font-display text-2xl">No matches found.</p>
              <p className="mt-2 text-sm text-muted">Try another keyword or browse the full collection.</p>
              <Link
                href="/shop"
                onClick={() => {
                  setQuery("");
                  onClose();
                }}
                className="btn btn-primary mt-5"
              >
                Shop All
              </Link>
            </div>
          ) : (
            <ul className="space-y-1">
              {results.map((product) => (
                <li key={product.slug}>
                  <Link
                    href={`/product/${product.slug}`}
                    onClick={() => {
                      setQuery("");
                      onClose();
                    }}
                    className="flex items-center gap-4 px-2 py-2 transition hover:bg-blush/60"
                  >
                    <div className="relative h-16 w-12 shrink-0 overflow-hidden bg-blush">
                      <Image src={product.image} alt={product.name} fill className="object-cover" sizes="48px" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-medium">{product.name}</p>
                      <p className="mt-0.5 text-xs text-muted">
                        {categoryLabel(product.category)} · {formatPrice(product.priceGhs)}
                      </p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
