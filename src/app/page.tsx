import ProductList from "@/components/ProductList";

export default function Home() {
  return (
    <main>
      <h1 className="text-2xl font-bold text-center mt-4">
        Product List
      </h1>

      <ProductList />
    </main>
  );
}