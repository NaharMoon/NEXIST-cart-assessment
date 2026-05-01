"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { products } from "@/data/products";
import { FiShoppingCart } from "react-icons/fi";
import ProductCard from "./ProductCard";

export default function ProductList() {
  const cartIds = useSelector((state: RootState) => state.cart.items);

  return (
    <section className="px-10 lg:px-0">
      {/* main section */}
      <div className="mb-6 flex items-end justify-between gap-4 ">
        <div>
          <span className="mb-2 inline-block rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
            Online Courses
          </span>

          <h2 className="text-2xl font-bold text-slate-950">
            <span className="text-purple-900">Explore</span> Your <span className="text-purple-900">Learning</span> Options
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Browse courses, add what you need, and manage your learning — your cart stays saved.
          </p>
        </div>

        <span className="hidden rounded-full bg-violet-100 px-3 py-1 text-sm text-violet-700 font-bold shadow-sm  sm:inline-block">
          {products.length} Courses
        </span>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            isAdded={cartIds.includes(product.id)}
          />
        ))}
      </div>
    </section>
  );
}