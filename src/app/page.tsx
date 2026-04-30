import Cart from "@/components/Cart";
import ProductList from "@/components/ProductList";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        Product Cart
      </h1>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <ProductList />
        </div>

        <Cart />
      </div>
    </main>
  );
}