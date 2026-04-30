"use client";

import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/redux/features/cart/cartSlice";
import { AppDispatch, RootState } from "@/redux/store";
import { products } from "@/data/products";

export default function ProductList() {
  const dispatch = useDispatch<AppDispatch>();
  const cartIds = useSelector((state: RootState) => state.cart.items);

  return (
    <section>
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Products</h2>
          <p className="text-sm text-slate-500">
            Choose any product to add it to your cart.
          </p>
        </div>

        <span className="rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm">
          {products.length} Products
        </span>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        {products.map((product) => {
          const isAdded = cartIds.includes(product.id);

          return (
            <article
              key={product.id}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-4 flex justify-center">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={180}
                  height={140}
                  className="h-36 w-full max-w-56 rounded-xl object-cover"
                />
              </div>

              <div className="text-center">
                <h3 className="text-lg font-bold text-slate-900">
                  {product.name}
                </h3>
                <p className="mt-1 text-slate-500">BDT {product.price}</p>

                <button
                  onClick={() => dispatch(addToCart(product.id))}
                  disabled={isAdded}
                  className={`mt-4 w-full rounded-xl px-4 py-2.5 text-sm font-semibold transition ${
                    isAdded
                      ? "cursor-not-allowed bg-emerald-100 text-emerald-700"
                      : "bg-blue-600 text-white hover:bg-blue-700"
                  }`}
                >
                  {isAdded ? "Added ✓" : "Add to Cart"}
                </button>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}