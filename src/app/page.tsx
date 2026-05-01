"use client";

import Cart from "@/components/Cart";
import Navbar from "@/components/Navbar";
import ProductList from "@/components/ProductList";

import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import Footer from "@/components/Footer";

export default function Home() {
  const cart = useSelector((state: RootState) => state.cart.items);

  return (
    <main className="min-h-screen pt-24">
      <Navbar cartCount={cart.length} />

      <section className="mx-auto max-w-7xl">
        <div className="mb-8 text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-wider text-blue-600">
            SMART LEARNING EXPERIENCE
          </p>
          <h1 className="text-4xl font-bold text-slate-900">
           <span className="text-5xl text-purple-500">C</span>hoose <span className="text-5xl text-purple-500">C</span>ourses
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-violet-300 text-xl font-semibold">
            Pick your courses, build your path, and never lose your progress.
          </p>
        </div>

        <div className="grid gap-9 lg:grid-cols-[2fr_1fr] mt-16">
          <ProductList />
          <Cart />
        </div>
      </section>
      <Footer></Footer>
    </main>
  );
}