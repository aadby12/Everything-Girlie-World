"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useMemo, useTransition } from "react";
import { categories } from "@/lib/categories";
import type { SortOption } from "@/lib/types";

const sortOptions: Array<{ value: SortOption; label: string }> = [
  { value: "featured", label: "Featured" },
  { value: "name-asc", label: "Name A–Z" },
  { value: "price-asc", label: "Price · Low to high" },
  { value: "price-desc", label: "Price · High to low" },
];

type ProductFiltersProps = {
  basePath?: string;
  showCategoryFilter?: boolean;
  resultCount: number;
};

export function ProductFilters({
  basePath = "/shop",
  showCategoryFilter = true,
  resultCount,
}: ProductFiltersProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [pending, startTransition] = useTransition();

  const query = searchParams.get("q") ?? "";
  const category = searchParams.get("category") ?? "all";
  const sort = (searchParams.get("sort") as SortOption) || "featured";

  const update = useMemo(
    () => (patch: Record<string, string | null>) => {
      const params = new URLSearchParams(searchParams.toString());
      Object.entries(patch).forEach(([key, value]) => {
        if (!value || value === "all") params.delete(key);
        else params.set(key, value);
      });
      const next = params.toString();
      startTransition(() => {
        router.push(next ? `${basePath}?${next}` : basePath);
      });
    },
    [basePath, router, searchParams],
  );

  return (
    <div className={`space-y-4 ${pending ? "opacity-70" : ""}`}>
      <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
        <form
          className="block w-full max-w-md"
          onSubmit={(event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const nextQuery = String(formData.get("q") ?? "").trim();
            update({ q: nextQuery || null });
          }}
        >
          <label className="block">
            <span className="eyebrow">Search</span>
            <input
              name="q"
              defaultValue={query}
              placeholder="Search the collection"
              className="mt-2 w-full border border-ink/15 bg-paper px-4 py-3 text-sm outline-none focus:border-ink"
            />
          </label>
        </form>
        <div className="flex flex-wrap items-center gap-3">
          {showCategoryFilter ? (
            <label className="text-sm">
              <span className="sr-only">Category</span>
              <select
                value={category}
                onChange={(event) => update({ category: event.target.value })}
                className="border border-ink/15 bg-paper px-3 py-3 text-sm outline-none"
              >
                <option value="all">All categories</option>
                {categories.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                ))}
              </select>
            </label>
          ) : null}
          <label className="text-sm">
            <span className="sr-only">Sort</span>
            <select
              value={sort}
              onChange={(event) => update({ sort: event.target.value })}
              className="border border-ink/15 bg-paper px-3 py-3 text-sm outline-none"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>
        </div>
      </div>
      <p className="text-sm text-muted">
        {resultCount} {resultCount === 1 ? "style" : "styles"}
      </p>
    </div>
  );
}
