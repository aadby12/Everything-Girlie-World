import { categories, getCategory } from "@/lib/categories";
import type { CategoryId, Product, SortOption } from "@/lib/types";

/**
 * Illustrative demonstration catalogue for the Everything Girlie World website demo.
 *
 * Product types and selected prices are drawn from publicly indexed Instagram posts
 * for @everything__girlieworld. Imagery is curated fashion photography used for
 * demonstration only — it does not represent confirmed live stock photos from the shop.
 * Always confirm availability, sizes, colours, and pricing with the business before ordering.
 */
export const products: Product[] = [
  {
    slug: "turtle-neck-bare-back-dress",
    name: "Turtle Neck Bare Back Dress",
    category: "dresses",
    image: "/images/dress-bareback.jpg",
    gallery: ["/images/dress-bareback.jpg", "/images/lifestyle-1.jpg", "/images/editorial-main.jpg"],
    shortDescription: "A confident bare-back dress with a refined turtle-neck finish.",
    description:
      "Featured on the Everything Girlie World Instagram as a turtle neck bare back dress, available in sizes as shown, for GH₵390. Confirm your preferred size and colour with the boutique before ordering.",
    priceGhs: 390,
    sizes: [],
    colours: [],
    featured: true,
    freshFind: true,
    listingKind: "instagram-priced",
    priceNote: "Price as listed on a public Instagram post for this style type.",
    related: ["soft-occasion-dress", "statement-occasion-dress", "coordinated-two-piece"],
  },
  {
    slug: "statement-occasion-dress",
    name: "Statement Occasion Dress",
    category: "dresses",
    image: "/images/dress-statement.jpg",
    gallery: ["/images/dress-statement.jpg", "/images/hero-secondary.jpg", "/images/lifestyle-2.jpg"],
    shortDescription: "A high-impact dress for moments that call for a little extra.",
    description:
      "Inspired by occasion dresses featured by Everything Girlie World. A public Instagram listing for a dress style of this kind showed GH₵890. Please confirm the exact piece, size, and current price before ordering.",
    priceGhs: 890,
    sizes: [],
    colours: [],
    featured: true,
    listingKind: "instagram-priced",
    priceNote: "Price drawn from a publicly indexed Instagram dress listing.",
    related: ["turtle-neck-bare-back-dress", "soft-occasion-dress", "bold-jumpsuit"],
  },
  {
    slug: "soft-occasion-dress",
    name: "Soft Occasion Dress",
    category: "dresses",
    image: "/images/dress-soft.jpg",
    gallery: ["/images/dress-soft.jpg", "/images/category-dresses.jpg", "/images/about-mood.jpg"],
    shortDescription: "An easy, flattering dress for outings and everyday elevation.",
    description:
      "A softer dress direction from the boutique’s Instagram-featured styles. A publicly indexed listing for a dress available as seen showed GH₵590. Confirm fit and colour with the business.",
    priceGhs: 590,
    sizes: [],
    colours: [],
    featured: true,
    freshFind: true,
    listingKind: "instagram-priced",
    related: ["turtle-neck-bare-back-dress", "statement-occasion-dress", "bubble-skirt"],
  },
  {
    slug: "green-accent-dress",
    name: "Green Accent Dress",
    category: "dresses",
    image: "/images/dress-green.jpg",
    gallery: ["/images/dress-green.jpg", "/images/hero-secondary.jpg", "/images/instagram-2.jpg"],
    shortDescription: "A vibrant green dress option for a bold wardrobe moment.",
    description:
      "An Instagram update from Everything Girlie World noted a green colourway available for GH₵350. This demonstration entry represents that colour direction — confirm the exact garment and size before ordering.",
    priceGhs: 350,
    sizes: [],
    colours: [{ name: "Green", hex: "#2F6B4F" }],
    listingKind: "instagram-priced",
    priceNote: "Colourway price referenced from a public Instagram update.",
    related: ["soft-occasion-dress", "statement-top", "playful-tennis-skirt"],
  },
  {
    slug: "bubble-skirt",
    name: "Bubble Skirt",
    category: "skirts",
    image: "/images/skirt-bubble.jpg",
    gallery: ["/images/skirt-bubble.jpg", "/images/category-skirts.jpg", "/images/lifestyle-1.jpg"],
    shortDescription: "A playful bubble silhouette with plenty of personality.",
    description:
      "Featured on Instagram as a bubble skirt available as seen in sizes for GH₵480. Confirm your preferred size with Everything Girlie World before ordering.",
    priceGhs: 480,
    sizes: [],
    colours: [],
    featured: true,
    freshFind: true,
    listingKind: "instagram-priced",
    related: ["pleated-everyday-skirt", "everyday-top", "playful-tennis-skirt"],
  },
  {
    slug: "pleated-everyday-skirt",
    name: "Pleated Everyday Skirt",
    category: "skirts",
    image: "/images/skirt-pleated.jpg",
    gallery: ["/images/skirt-pleated.jpg", "/images/skirt-tennis.jpg", "/images/category-tops.jpg"],
    shortDescription: "A refined pleated skirt for polished everyday styling.",
    description:
      "Illustrative demonstration piece inspired by pleated and everyday skirt styles associated with the boutique’s Instagram presentation. Price and available sizes should be confirmed directly with the business.",
    priceGhs: null,
    sizes: [],
    colours: [],
    listingKind: "demo-illustration",
    related: ["bubble-skirt", "playful-tennis-skirt", "everyday-top"],
  },
  {
    slug: "playful-tennis-skirt",
    name: "Playful Tennis Skirt",
    category: "skirts",
    image: "/images/skirt-tennis.jpg",
    gallery: ["/images/skirt-tennis.jpg", "/images/top-everyday.jpg", "/images/lifestyle-2.jpg"],
    shortDescription: "A sporty-cute tennis skirt for easy daytime looks.",
    description:
      "Illustrative demonstration product reflecting tennis-skirt styles often seen in youthful fashion edits. Confirm availability and pricing with Everything Girlie World.",
    priceGhs: null,
    sizes: [],
    colours: [],
    freshFind: true,
    listingKind: "demo-illustration",
    related: ["bubble-skirt", "everyday-top", "soft-jumpsuit"],
  },
  {
    slug: "everyday-top",
    name: "Everyday Top",
    category: "tops-sets",
    image: "/images/top-everyday.jpg",
    gallery: ["/images/top-everyday.jpg", "/images/category-tops.jpg", "/images/skirt-bubble.jpg"],
    shortDescription: "A versatile top to pair with skirts, denim, or statement bottoms.",
    description:
      "Publicly indexed Instagram content listed a top available as seen for GH₵100. Use this as a starting point and confirm the exact style with the boutique.",
    priceGhs: 100,
    sizes: [],
    colours: [],
    featured: true,
    listingKind: "instagram-priced",
    related: ["statement-top", "bubble-skirt", "two-piece-set"],
  },
  {
    slug: "statement-top",
    name: "Statement Top",
    category: "tops-sets",
    image: "/images/top-statement.jpg",
    gallery: ["/images/top-statement.jpg", "/images/lifestyle-1.jpg", "/images/set-coord.jpg"],
    shortDescription: "A bolder top for looks that need a little more attitude.",
    description:
      "An Instagram listing referenced a top available as seen in sizes for GH₵350. Confirm colourways and fit with Everything Girlie World.",
    priceGhs: 350,
    sizes: [],
    colours: [],
    featured: true,
    freshFind: true,
    listingKind: "instagram-priced",
    related: ["everyday-top", "coordinated-two-piece", "green-accent-dress"],
  },
  {
    slug: "two-piece-set",
    name: "Two Piece Set",
    category: "tops-sets",
    image: "/images/set-two-piece.jpg",
    gallery: ["/images/set-two-piece.jpg", "/images/set-coord.jpg", "/images/category-tops.jpg"],
    shortDescription: "A coordinated two-piece for an instantly finished outfit.",
    description:
      "Featured on Instagram as a 2-piece available as seen for GH₵250. Confirm sizes and colour before ordering.",
    priceGhs: 250,
    sizes: [],
    colours: [],
    featured: true,
    listingKind: "instagram-priced",
    related: ["coordinated-two-piece", "everyday-top", "soft-occasion-dress"],
  },
  {
    slug: "coordinated-two-piece",
    name: "Coordinated Two Piece",
    category: "tops-sets",
    image: "/images/set-coord.jpg",
    gallery: ["/images/set-coord.jpg", "/images/set-two-piece.jpg", "/images/editorial-main.jpg"],
    shortDescription: "A polished matching set with elevated everyday energy.",
    description:
      "A public Instagram listing showed a two piece available as seen in sizes for GH₵450. Please confirm current availability with the boutique.",
    priceGhs: 450,
    sizes: [],
    colours: [],
    freshFind: true,
    listingKind: "instagram-priced",
    related: ["two-piece-set", "statement-top", "turtle-neck-bare-back-dress"],
  },
  {
    slug: "bold-jumpsuit",
    name: "Bold Jumpsuit",
    category: "jumpsuits",
    image: "/images/jumpsuit-bold.jpg",
    gallery: ["/images/jumpsuit-bold.jpg", "/images/category-jumpsuits.jpg", "/images/lifestyle-2.jpg"],
    shortDescription: "One piece with full-look impact for confident dressing.",
    description:
      "Illustrative demonstration jumpsuit inspired by standout one-piece styles associated with the boutique’s fashion offering. Price and sizes are unconfirmed — enquire directly with Everything Girlie World.",
    priceGhs: null,
    sizes: [],
    colours: [],
    featured: true,
    listingKind: "demo-illustration",
    related: ["soft-jumpsuit", "statement-occasion-dress", "coordinated-two-piece"],
  },
  {
    slug: "soft-jumpsuit",
    name: "Soft Jumpsuit",
    category: "jumpsuits",
    image: "/images/jumpsuit-soft.jpg",
    gallery: ["/images/jumpsuit-soft.jpg", "/images/about-mood.jpg", "/images/lifestyle-1.jpg"],
    shortDescription: "An easy, fluid jumpsuit for effortless outfit days.",
    description:
      "Illustrative demonstration product for a softer one-piece direction. Confirm availability, colour, and pricing with the business before ordering.",
    priceGhs: null,
    sizes: [],
    colours: [],
    freshFind: true,
    listingKind: "demo-illustration",
    related: ["bold-jumpsuit", "soft-occasion-dress", "everyday-top"],
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export function getProductsByCategory(categoryId: CategoryId): Product[] {
  return products.filter((product) => product.category === categoryId);
}

export function getFeaturedProducts(limit = 8): Product[] {
  return products.filter((product) => product.featured).slice(0, limit);
}

export function getFreshFinds(limit = 8): Product[] {
  return products.filter((product) => product.freshFind).slice(0, limit);
}

export function getRelatedProducts(product: Product, limit = 4): Product[] {
  const related = product.related
    .map((slug) => getProduct(slug))
    .filter((item): item is Product => Boolean(item));

  if (related.length >= limit) return related.slice(0, limit);

  const extras = products.filter(
    (item) => item.category === product.category && item.slug !== product.slug && !related.includes(item),
  );

  return [...related, ...extras].slice(0, limit);
}

export function searchProducts(query: string): Product[] {
  const q = query.trim().toLowerCase();
  if (!q) return products;

  return products.filter((product) => {
    const category = getCategory(product.category);
    const haystack = [
      product.name,
      product.shortDescription,
      product.description,
      category?.name ?? "",
      ...product.colours.map((colour) => colour.name),
    ]
      .join(" ")
      .toLowerCase();
    return haystack.includes(q);
  });
}

export function filterAndSortProducts(options: {
  category?: CategoryId | "all";
  query?: string;
  sort?: SortOption;
}): Product[] {
  const { category = "all", query = "", sort = "featured" } = options;
  let list = query ? searchProducts(query) : [...products];

  if (category !== "all") {
    list = list.filter((product) => product.category === category);
  }

  switch (sort) {
    case "name-asc":
      return list.sort((a, b) => a.name.localeCompare(b.name));
    case "price-asc":
      return list.sort((a, b) => (a.priceGhs ?? Number.POSITIVE_INFINITY) - (b.priceGhs ?? Number.POSITIVE_INFINITY));
    case "price-desc":
      return list.sort((a, b) => (b.priceGhs ?? -1) - (a.priceGhs ?? -1));
    case "featured":
    default:
      return list.sort((a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)));
  }
}

export function categoryLabel(categoryId: CategoryId): string {
  return categories.find((category) => category.id === categoryId)?.name ?? categoryId;
}
