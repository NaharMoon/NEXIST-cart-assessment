"use client";

import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { addToCart } from "@/redux/features/cart/cartSlice";
import { products } from "@/data/products";
import Image from "next/image";

export default function ProductList() {
    const dispatch = useDispatch<AppDispatch>();

    return (
        <div className="grid grid-cols-2 gap-4 p-4">
            {products.map((product) => (
                <div
                    key={product.id}
                    className="border p-4 rounded shadow flex flex-col items-center"
                >
                    {/* <img src={product.image} alt={product.name} className="mb-2" /> */}
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
                        onClick={() => dispatch(addToCart(product))}
                        className="mt-2 bg-blue-500 text-white px-3 py-1 rounded"
                    >
                        Add to Cart
                    </button>
                </div>
            ))}
        </div>
    );
}