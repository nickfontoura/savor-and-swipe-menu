import { describe, expect, it } from "vitest";
import { addToCart, changeQuantity, itemCount, subtotal } from "./cart";
import { menu } from "./menu";

const find = (id: string) => menu.flatMap((s) => s.products).find((p) => p.id === id)!;

describe("cart", () => {
  it("adds product prices into the subtotal", () => {
    let items = addToCart([], find("cha-gelado")); // 15,50
    items = addToCart(items, find("cafe-personalizado")); // 20,90
    items = addToCart(items, find("pao-de-queijo")); // 3,50
    expect(subtotal(items)).toBe(39.9);
  });

  it("adding the same product twice increases its quantity", () => {
    let items = addToCart([], find("brownie"));
    items = addToCart(items, find("brownie"));
    expect(items).toHaveLength(1);
    expect(itemCount(items)).toBe(2);
    expect(subtotal(items)).toBe(29.8);
  });

  it("charges the rocambole by size: P 15, M 25, G 40", () => {
    const rocambole = find("rocambole");
    const [p, m, g] = rocambole.options!;
    let items = addToCart([], rocambole, p);
    items = addToCart(items, rocambole, m);
    items = addToCart(items, rocambole, g);
    expect(subtotal(items)).toBe(80);
  });

  it("removing the last unit takes the item out of the cart", () => {
    const items = addToCart([], find("coxinha"));
    expect(changeQuantity(items, items[0].key, -1)).toEqual([]);
  });
});
