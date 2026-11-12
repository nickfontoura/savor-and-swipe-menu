import { Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { formatBRL } from "@/lib/cart";
import { useCart } from "./cart-context";

export function CartButton() {
  const { items, count, total, pulse, change, clear } = useCart();

  return (
    <div className="flex items-center gap-3">
      <div className="text-right leading-tight">
        <p className="text-[0.65rem] font-semibold uppercase tracking-widest text-muted-foreground">
          Subtotal
        </p>
        <p className="font-display text-xl tracking-wide text-primary" aria-live="polite">
          {formatBRL(total)}
        </p>
      </div>

      <Sheet>
        <SheetTrigger asChild>
          <button
            type="button"
            aria-label={`Abrir carrinho, ${count} ${count === 1 ? "item" : "itens"}`}
            className="relative flex size-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-pop transition-transform hover:scale-105"
          >
            <span key={pulse} className={pulse ? "animate-cart-bump" : undefined}>
              <ShoppingBag className="size-6" />
            </span>
            {count > 0 && (
              <span className="absolute -right-1 -top-1 flex h-6 min-w-6 items-center justify-center rounded-full border-2 border-background bg-coffee px-1 text-xs font-bold text-primary-foreground">
                {count}
              </span>
            )}
          </button>
        </SheetTrigger>

        <SheetContent className="flex w-full flex-col bg-background sm:max-w-md">
          <SheetHeader>
            <SheetTitle className="font-display text-4xl uppercase tracking-wide text-primary">
              Carrinho
            </SheetTitle>
            <SheetDescription className="font-script text-2xl text-primary">
              Gato E Grão
            </SheetDescription>
          </SheetHeader>

          {items.length === 0 ? (
            <div className="flex flex-1 flex-col items-center justify-center gap-2 text-center text-muted-foreground">
              <ShoppingBag className="size-10 text-border" />
              <p>Seu carrinho está vazio.</p>
              <p className="text-sm">Toque no “+” de um produto para adicionar.</p>
            </div>
          ) : (
            <ul className="-mx-2 flex-1 space-y-2 overflow-y-auto px-2">
              {items.map((item) => (
                <li
                  key={item.key}
                  className="flex items-center gap-3 rounded-xl border border-border bg-card p-3"
                >
                  <div className="min-w-0 flex-1">
                    <p className="font-bold leading-tight text-primary">{item.name}</p>
                    {item.option && (
                      <p className="truncate text-xs text-muted-foreground">{item.option}</p>
                    )}
                    <p className="text-sm text-foreground">
                      {formatBRL(item.unitPrice * item.quantity)}
                    </p>
                  </div>
                  <div className="flex items-center gap-1">
                    <button
                      type="button"
                      onClick={() => change(item.key, -1)}
                      aria-label={`Remover um ${item.name}`}
                      className="flex size-8 items-center justify-center rounded-full border border-primary/40 text-primary hover:bg-secondary"
                    >
                      {item.quantity === 1 ? <Trash2 className="size-4" /> : <Minus className="size-4" />}
                    </button>
                    <span className="w-6 text-center font-bold">{item.quantity}</span>
                    <button
                      type="button"
                      onClick={() => change(item.key, 1)}
                      aria-label={`Adicionar mais um ${item.name}`}
                      className="flex size-8 items-center justify-center rounded-full bg-primary text-primary-foreground"
                    >
                      <Plus className="size-4" />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}

          {items.length > 0 && (
            <div className="border-t-2 border-dashed border-primary/30 pt-4">
              <div className="flex items-baseline justify-between">
                <span className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                  Total
                </span>
                <span className="font-display text-3xl tracking-wide text-primary">
                  {formatBRL(total)}
                </span>
              </div>
              <button
                type="button"
                onClick={clear}
                className="mt-3 w-full rounded-full border border-primary/40 py-2 text-sm font-medium text-primary hover:bg-secondary"
              >
                Esvaziar carrinho
              </button>
            </div>
          )}
        </SheetContent>
      </Sheet>
    </div>
  );
}
