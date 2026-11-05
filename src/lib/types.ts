export type CategoryId = "dresses" | "tops-sets" | "skirts" | "jumpsuits";

export type ListingKind = "instagram-priced" | "demo-illustration";

export type ProductColour = {
  name: string;
  hex: string;
};

export type Product = {
  slug: string;
  name: string;
  category: CategoryId;
  image: string;
  gallery: string[];
  shortDescription: string;
  description: string;
  /** Confirmed Ghana cedi price from public Instagram posts, when available. */
  priceGhs: number | null;
  /** Confirmed sizes only. Empty means sizes must be confirmed with the business. */
  sizes: string[];
  colours: ProductColour[];
  featured?: boolean;
  freshFind?: boolean;
  listingKind: ListingKind;
  priceNote?: string;
  related: string[];
};

export type Category = {
  id: CategoryId;
  name: string;
  href: string;
  navLabel: string;
  tagline: string;
  heading: string;
  description: string;
  image: string;
};

export type BagItem = {
  slug: string;
  quantity: number;
  size?: string;
  colour?: string;
};

export type SortOption = "featured" | "name-asc" | "price-asc" | "price-desc";
