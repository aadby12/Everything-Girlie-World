import { business } from "@/lib/business";
import { formatPrice } from "@/lib/format";
import type { BagItem, Product } from "@/lib/types";

function encodeMessage(message: string) {
  return encodeURIComponent(message);
}

export function whatsappUrl(message: string, phone = business.phone.whatsapp) {
  return `https://wa.me/${phone}?text=${encodeMessage(message)}`;
}

export function generalEnquiryMessage() {
  return `Hello ${business.name}! I would like to ask about a style or place an order. Please let me know the next steps. Thank you.`;
}

export function productEnquiryMessage(
  product: Product,
  options?: { quantity?: number; size?: string; colour?: string },
) {
  const quantity = options?.quantity ?? 1;
  const size = options?.size || "To be confirmed";
  const colour = options?.colour || "To be confirmed";
  const price = formatPrice(product.priceGhs);

  return `Hello ${business.name}! I'm interested in this piece:

Product: ${product.name}
Quantity: ${quantity}
Size: ${size}
Colour: ${colour}
Price: ${price}

Please confirm availability and the next ordering steps. Thank you.`;
}

export function bagOrderMessage(
  lines: Array<{ product: Product; item: BagItem }>,
) {
  const productBlock = lines
    .map(({ product, item }, index) => {
      const size = item.size || "To be confirmed";
      const colour = item.colour || "To be confirmed";
      const price = formatPrice(product.priceGhs);
      return `${index + 1}. ${product.name}
Quantity: ${item.quantity}
Size: ${size}
Colour: ${colour}
Price: ${price}`;
    })
    .join("\n\n");

  return `Hello ${business.name}! I would like to order the following from my bag:

${productBlock}

Please confirm availability and the next ordering steps. Thank you.`;
}

export const generalWhatsAppHref = whatsappUrl(generalEnquiryMessage());
