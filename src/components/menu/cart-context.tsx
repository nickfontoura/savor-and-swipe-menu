import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { addToCart, changeQuantity, itemCount, subtotal, type CartItem } from "@/lib/cart";
import type { Product, ProductOption } from "@/lib/menu";

type CartContextValue = {
  items: CartItem[];
  count: number;
  total: number;
  /** Increments on each add so the cart icon can play a bump animation. */
  pulse: number;
  add: (product: Product, option?: ProductOption) => void;
  change: (key: string, delta: number) => void;
  clear: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = "gato-e-grao-cart";

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [pulse, setPulse] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) setItems(JSON.parse(raw) as CartItem[]);
    } catch {
      /* ignore corrupt storage */
    }
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (loaded) window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items, loaded]);

  const add = useCallback((product: Product, option?: ProductOption) => {
    setItems((prev) => addToCart(prev, product, option));
    setPulse((p) => p + 1);
  }, []);
  const change = useCallback((key: string, delta: number) => {
    setItems((prev) => changeQuantity(prev, key, delta));
  }, []);
  const clear = useCallback(() => setItems([]), []);

  const value = useMemo(
    () => ({ items, count: itemCount(items), total: subtotal(items), pulse, add, change, clear }),
    [items, pulse, add, change, clear],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}
