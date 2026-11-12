import { createFileRoute } from "@tanstack/react-router";
import { CartProvider } from "@/components/menu/cart-context";
import { CartButton } from "@/components/menu/cart-sheet";
import { CatMugLogo } from "@/components/menu/cat-mug-logo";
import { ProductCard } from "@/components/menu/product-card";
import { menu } from "@/lib/menu";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gato E Grão — Cardápio de Cafés, Bolos e Bebidas" },
      {
        name: "description",
        content:
          "Monte seu pedido no cardápio da Gato E Grão: cafés, bebidas, croissants, bolos e salgados.",
      },
      { property: "og:title", content: "Gato E Grão — Cardápio" },
      {
        property: "og:description",
        content: "Cafés, bolos e bebidas. Escolha seus favoritos e veja o total na hora.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <CartProvider>
      <div className="min-h-screen">
        <header className="sticky top-0 z-40 border-b border-primary/10 bg-background/90 backdrop-blur">
          <div className="checker-strip checker-strip-sm" />
          <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
            <a href="#top" className="flex items-center gap-2">
              <CatMugLogo className="size-10" />
              <span className="font-display text-xl uppercase tracking-wide text-primary">
                Gato E Grão
              </span>
            </a>
            <CartButton />
          </div>
        </header>

        <main id="top">
          <section className="mx-auto max-w-4xl px-4 pb-10 pt-14 text-center">
            <p className="text-sm text-foreground">Gato E Grão</p>
            <h1 className="mt-4 font-display text-7xl uppercase leading-none text-primary sm:text-9xl">
              Menu
            </h1>
            <p className="mt-2 font-script text-5xl text-primary sm:text-7xl">
              Cafés, bolos e Bebidas
            </p>
            <CatMugLogo className="mx-auto mt-8 size-28" />
            <nav className="mt-8 flex flex-wrap justify-center gap-2">
              {menu.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="rounded-full border-2 border-primary px-5 py-2 text-sm font-bold uppercase tracking-wider text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  {s.title}
                </a>
              ))}
            </nav>
          </section>

          {menu.map((section) => (
            <section key={section.id} id={section.id} className="scroll-mt-24">
              <div className="checker-strip" />
              <div className="mx-auto max-w-6xl px-4 py-14">
                <h2 className="text-center font-script text-6xl text-primary sm:text-7xl">
                  {section.title}
                </h2>
                <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {section.products.map((p, i) => (
                    <ProductCard key={p.id} product={p} index={i} />
                  ))}
                </div>
              </div>
            </section>
          ))}
        </main>

        <footer className="text-center">
          <p className="pb-6 font-script text-3xl text-primary">Gato E Grão</p>
          <div className="checker-strip" />
        </footer>
      </div>
    </CartProvider>
  );
}
