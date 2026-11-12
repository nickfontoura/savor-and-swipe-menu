import type { Product, ProductOption } from "./menu";

export type CartItem = {
  key: string;
  productId: string;
  name: string;
  option?: string | undefined;
  unitPrice: number;
  quantity: number;
};

export function priceFor(product: Product, option?: ProductOption): number {
  return option?.price ?? product.price;
}

export function cartKey(productId: string, option?: string): string {
  return option ? `${productId}|${option}` : productId;
}

export function addToCart(items: CartItem[], product: Product, option?: ProductOption): CartItem[] {
  const key = cartKey(product.id, option?.label);
  const existing = items.find((i) => i.key === key);
  if (existing) {
    return items.map((i) => (i.key === key ? { ...i, quantity: i.quantity + 1 } : i));
  }
  return [
    ...items,
    {
      key,
      productId: product.id,
      name: product.name,
      option: option && product.optionLabel ? `${product.optionLabel}: ${option.label}` : option?.label,
      unitPrice: priceFor(product, option),
      quantity: 1,
    },
  ];
}

export function changeQuantity(items: CartItem[], key: string, delta: number): CartItem[] {
  return items
    .map((i) => (i.key === key ? { ...i, quantity: i.quantity + delta } : i))
    .filter((i) => i.quantity > 0);
}

export function subtotal(items: CartItem[]): number {
  // Work in cents to avoid floating point drift (e.g. 15.5 + 18.5 + 20.9).
  const cents = items.reduce((sum, i) => sum + Math.round(i.unitPrice * 100) * i.quantity, 0);
  return cents / 100;
}

export function itemCount(items: CartItem[]): number {
  return items.reduce((sum, i) => sum + i.quantity, 0);
}

export function formatBRL(value: number): string {
  return new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(value);
}
