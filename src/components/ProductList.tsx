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
    <div className="grid grid-cols-2 gap-4 p-4">
      {products.map((product) => {
        const isAdded = cartIds.includes(product.id);

        return (
          <div
            key={product.id}
            className="border p-4 rounded shadow flex flex-col items-center"
          >
            <Image
              src={product.image}
              alt={product.name}
              width={150}
              height={150}
              className="mb-2"
            />

            <h2 className="font-semibold">{product.name}</h2>
            <p>BDT {product.price}</p>

            <button
              onClick={() => dispatch(addToCart(product.id))}
              disabled={isAdded}
              className={`mt-2 px-3 py-1 rounded text-white ${
                isAdded
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-500 hover:bg-blue-600"
              }`}
            >
              {isAdded ? "Added" : "Add to Cart"}
            </button>
          </div>
        );
      })}
    </div>
  );
}