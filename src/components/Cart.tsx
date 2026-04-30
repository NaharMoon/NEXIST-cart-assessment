"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, setCart, clearCart } from "@/redux/features/cart/cartSlice";
import { AppDispatch, RootState } from "@/redux/store";
import { products } from "@/data/products";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { FiTrash2 } from "react-icons/fi";

export default function Cart() {
  const dispatch = useDispatch<AppDispatch>();
  const cartIds = useSelector((state: RootState) => state.cart.items);

  useEffect(() => {
    const data = localStorage.getItem("cart");

    if (data) {
      try {
        dispatch(setCart(JSON.parse(data)));
      } catch {
        dispatch(setCart([]));
      }
    }
  }, [dispatch]);

  const cartItems = cartIds
    .map((id) => products.find((product) => product.id === id))
    .filter((product) => product !== undefined);

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  const handleClearCart = () => {
    Swal.fire({
      title: "Clear all items?",
      text: "This will remove every product from your cart.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, clear cart",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#ef4444",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(clearCart());
        toast.success("Cart cleared");
      }
    });
  };

  return (
    <aside className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm lg:sticky lg:top-6 lg:self-start">
      <div className="mb-5 flex items-start justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Your Cart</h2>
          <p className="text-sm text-slate-500">
            Review and manage selected products.
          </p>
        </div>

        <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-700">
          {cartItems.length} item{cartItems.length !== 1 ? "s" : ""}
        </span>
      </div>

      {cartItems.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-6 text-center">
          <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-2xl">
            🛒
          </div>
          <h3 className="font-bold text-slate-800">Your cart is empty</h3>
          <p className="mt-2 text-sm text-slate-500">
            Click “Add to Cart” from any product to select it.
          </p>
        </div>
      ) : (
        <>
          <div className="space-y-3">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between gap-4 rounded-xl border border-slate-200 bg-slate-50 p-4"
              >
                <div>
                  <h3 className="font-semibold text-slate-900">{item.name}</h3>
                  <p className="text-sm text-slate-500">BDT {item.price}</p>
                </div>

                <button
                  onClick={() => {
                    dispatch(removeFromCart(item.id));
                    toast.info("Removed from cart");
                  }}
                  className="flex items-center gap-1 rounded-lg bg-red-500 px-3 py-2 text-sm font-semibold text-white transition hover:bg-red-600"
                >
                  <FiTrash2 /> Remove
                </button>
              </div>
            ))}
          </div>

          <div className="mt-5 rounded-xl bg-slate-900 p-4 text-white">
            <div className="flex items-center justify-between text-sm">
              <span>Total selected</span>
              <span>{cartItems.length}</span>
            </div>
            <div className="mt-2 flex items-center justify-between text-lg font-bold">
              <span>Total price</span>
              <span>BDT {totalPrice}</span>
            </div>
          </div>
          <button
            onClick={handleClearCart}
            className="mt-4 w-full rounded-xl border border-red-200 bg-red-50 px-4 py-2 text-sm font-semibold text-red-700 transition hover:bg-red-100"
          >
            Clear Cart
          </button>
        </>
      )}
    </aside>
  );
}