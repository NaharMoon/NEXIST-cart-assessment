"use client";

import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "@/redux/features/cart/cartSlice";
import { AppDispatch, RootState } from "@/redux/store";

export default function Cart() {
  const dispatch = useDispatch<AppDispatch>();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  return (
    <section className="p-4 border rounded">
      <h2 className="text-xl font-bold mb-4">Selected Cart Items</h2>

      {cartItems.length === 0 ? (
        <p className="text-gray-500">
          Your cart is empty. Add products from the list to see them here.
        </p>
      ) : (
        <div className="space-y-3">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border p-3 rounded"
            >
              <div>
                <h3 className="font-semibold">{item.name}</h3>
                <p>BDT {item.price}</p>
              </div>

              <button
                onClick={() => dispatch(removeFromCart(item.id))}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}