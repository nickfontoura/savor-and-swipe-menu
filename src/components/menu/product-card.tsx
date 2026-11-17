import { useState } from "react";
import { ImageIcon, Plus } from "lucide-react";
import { formatBRL, priceFor } from "@/lib/cart";
import type { Product } from "@/lib/menu";
import { useCart } from "./cart-context";
import { cn } from "@/lib/utils";

export function ProductCard({ product, index }: { product: Product; index: number }) {
  const { add } = useCart();
  const [optionIndex, setOptionIndex] = useState(0);
  const option = product.options?.[optionIndex];
  const price = priceFor(product, option);

  return (
    <article
      className="group relative flex flex-col overflow-hidden rounded-2xl border-2 border-primary/15 bg-card shadow-card transition-transform duration-300 hover:-translate-y-1 animate-rise-in"
      style={{ animationDelay: `${index * 60}ms` }}
    >
      {product.badge && (
        <span className="starburst absolute -right-1 -top-1 z-10 flex size-20 items-center justify-center bg-primary p-3 text-center font-display text-[0.8rem] uppercase leading-[0.95] text-primary-foreground">
          {product.badge}
        </span>
      )}

      {/* Foto do produto (ou espaço reservado enquanto não há foto) */}
      {product.image ? (
        <div className="m-3 mb-0 overflow-hidden rounded-xl">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      ) : (
        <div className="photo-slot m-3 mb-0 flex aspect-square items-center justify-center rounded-xl border-2 border-dashed border-border">
          <ImageIcon className="size-8 text-border" aria-hidden="true" />
          <span className="sr-only">Foto de {product.name} em breve</span>
        </div>
      )}

      <div className="flex flex-1 flex-col gap-2 p-4">
        <h3 className="text-lg font-bold leading-tight text-primary">{product.name}</h3>
        <p className="line-clamp-2 text-sm text-muted-foreground">{product.description}</p>

        {product.options && (
          <div className="mt-1" role="radiogroup" aria-label={product.optionLabel}>
            <p className="mb-1.5 text-xs font-semibold uppercase tracking-wider text-coffee">
              {product.optionLabel}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {product.options.map((o, i) => (
                <button
                  key={o.label}
                  type="button"
                  role="radio"
                  aria-checked={i === optionIndex}
                  onClick={() => setOptionIndex(i)}
                  className={cn(
                    "rounded-full border px-2.5 py-1 text-xs font-medium transition-colors",
                    i === optionIndex
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-background text-foreground hover:border-primary/60",
                  )}
                >
                  {o.label}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="mt-auto flex items-end justify-between pt-3">
          <span className="font-display text-2xl tracking-wide text-primary">{formatBRL(price)}</span>
          <button
            type="button"
            onClick={() => add(product, option)}
            aria-label={`Adicionar ${product.name}${option ? ` (${option.label})` : ""} ao carrinho`}
            className="flex size-11 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-pop transition-transform hover:scale-110 active:scale-95"
          >
            <Plus className="size-6" strokeWidth={3} />
          </button>
        </div>
      </div>
    </article>
  );
}
