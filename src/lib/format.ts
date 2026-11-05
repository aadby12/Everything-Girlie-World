export function formatPrice(priceGhs: number | null | undefined): string {
  if (priceGhs == null) return "Enquire for price";
  return `GH₵${priceGhs.toLocaleString("en-GH")}`;
}

export function formatPriceShort(priceGhs: number | null | undefined): string {
  if (priceGhs == null) return "Enquire";
  return `GH₵${priceGhs.toLocaleString("en-GH")}`;
}
