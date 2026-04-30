import Cart from "@/components/Cart";
import ProductList from "@/components/ProductList";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100 px-4 py-8">
      <section className="mx-auto max-w-7xl">
        <div className="mb-8 text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-wider text-blue-600">
            Simple Shopping Experience
          </p>
          <h1 className="text-4xl font-bold text-slate-900">
            Product Cart
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-slate-600">
            Select products from the list and manage your chosen items in the cart.
            Your cart will stay saved even after refreshing the page.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
          <ProductList />
          <Cart />
        </div>
      </section>
    </main>
  );
}