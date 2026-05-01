"use client";

import Image from "next/image";
import { toast } from "react-toastify";
import { FiClock, FiShoppingCart } from "react-icons/fi";
import { GiCheckMark } from "react-icons/gi";
import { Product } from "@/types/product";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/features/cart/cartSlice";
import { AppDispatch } from "@/redux/store";

interface ProductCardProps {
  product: Product;
  isAdded: boolean;
}

export default function ProductCard({ product, isAdded }: ProductCardProps) {
  const dispatch = useDispatch<AppDispatch>();

  const handleAddToCart = () => {
    dispatch(addToCart(product.id));
    toast.success("Course added to cart");
  };

  return (
    <article
      className={`group overflow-hidden rounded-2xl p-4 transition-all duration-300 hover:-translate-y-1 ${isAdded
        ? "bg-emerald-50/90 ring-1 ring-emerald-200 shadow-sm"
        : "bg-white/80 ring-1 ring-violet-100 shadow-sm backdrop-blur hover:bg-violet-950 hover:shadow-xl"
        }`}
    >
      {/* Top Content */}
      <div className="mb-4">
        <span
          className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${isAdded
            ? "bg-emerald-100 text-emerald-700"
            : "bg-violet-100 text-violet-700 group-hover:bg-white/15 group-hover:text-white"
            }`}
        >
          {product.category}
        </span>

        <h3
          className={`mt-4 text-lg font-bold leading-snug transition ${isAdded
            ? "text-emerald-950"
            : "text-slate-900 group-hover:text-white"
            }`}
        >
          {product.name}
        </h3>

        <p
          className={`mt-2 min-h-10 text-sm transition ${isAdded
            ? "text-emerald-800/70"
            : "text-slate-500 group-hover:text-violet-100/80"
            }`}
        >
          {product.description}
        </p>
      </div>

      {/* price */}
      <div
        className={`mt-4 flex items-center justify-between rounded-t-lg px-4 py-3 text-sm ${isAdded
          ? "bg-white/70 text-emerald-900"
          : "bg-violet-50 text-slate-700 group-hover:bg-white/10 group-hover:text-white"
          }`}
      >
        <span className="font-medium">Course Price</span>
        <span className="font-bold">BDT {product.price}</span>
      </div>

      {/* Image */}
      <div className="relative h-44 overflow-hidden rounded-2xl bg-violet-50">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />

        <span className="absolute bottom-3 right-3 flex items-center gap-1 rounded-full bg-yellow-950/80 px-3 py-1 text-xs font-medium text-white backdrop-blur">
          <FiClock />
          {product.duration}
        </span>
      </div>

      {/* Button */}
      <button
        onClick={handleAddToCart}
        disabled={isAdded}
        className={`mt-2 flex w-full items-center justify-center gap-2 rounded-2xl px-4 py-3 text-sm font-semibold ${isAdded
          ? "text-green-700"
          : "transition-all duration-500 active:scale-[0.9] bg-linear-to-r from-indigo-600/90 to-violet-700/90 text-white shadow-lg shadow-violet-500/20 backdrop-blur hover:from-indigo-500 hover:to-violet-500 hover:shadow-xl hover:shadow-violet-500/30"
          }`}
      >
        {isAdded ? (
          <>
            <GiCheckMark /> Course Added in Cart
          </>
        ) : (
          <>
            <FiShoppingCart /> Add Course
          </>
        )}
      </button>
    </article>
  );
}