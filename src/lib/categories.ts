import type { Category, CategoryId } from "@/lib/types";

export const categories: Category[] = [
  {
    id: "dresses",
    name: "Dresses",
    href: "/shop/dresses",
    navLabel: "Dresses",
    tagline: "Find a look that makes an entrance.",
    heading: "Dresses for Every Kind of Moment.",
    description:
      "Explore dresses for occasions, outings, and everyday looks that deserve a little extra attention.",
    image: "/images/category-dresses.jpg",
  },
  {
    id: "tops-sets",
    name: "Tops & Sets",
    href: "/shop/tops-sets",
    navLabel: "Tops & Sets",
    tagline: "Easy combinations with plenty of personality.",
    heading: "Put the Look Together.",
    description:
      "Discover tops and coordinated pieces that make styling your next outfit effortless.",
    image: "/images/category-tops.jpg",
  },
  {
    id: "skirts",
    name: "Skirts",
    href: "/shop/skirts",
    navLabel: "Skirts",
    tagline: "From playful everyday styles to statement pieces.",
    heading: "Skirts with Personality.",
    description:
      "From playful styles to statement pieces, explore skirts that bring something different to your wardrobe.",
    image: "/images/category-skirts.jpg",
  },
  {
    id: "jumpsuits",
    name: "Jumpsuits",
    href: "/shop/jumpsuits",
    navLabel: "Jumpsuits",
    tagline: "One piece. A whole look.",
    heading: "One Piece. All the Impact.",
    description: "Explore standout one-piece styles for an easy, confident outfit.",
    image: "/images/category-jumpsuits.jpg",
  },
];

export function getCategory(id: string): Category | undefined {
  return categories.find((category) => category.id === id);
}

export function isCategoryId(value: string): value is CategoryId {
  return categories.some((category) => category.id === value);
}
