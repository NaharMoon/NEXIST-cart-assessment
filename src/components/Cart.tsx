"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  setCart,
  clearCart,
} from "@/redux/features/cart/cartSlice";
import { AppDispatch, RootState } from "@/redux/store";
import { products } from "@/data/products";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { FiTrash2, FiX } from "react-icons/fi";
import Image from "next/image";

export default function Cart() {
  const dispatch = useDispatch<AppDispatch>();
  const cartIds = useSelector((state: RootState) => state.cart.items);

  // Load saved cart from localStorage after page refresh
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

  // Convert cart ids into full course/product details
  const cartItems = cartIds
    .map((id) => products.find((product) => product.id === id))
    .filter((product) => product !== undefined);

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  const handleClearCart = () => {
    Swal.fire({
      title: "Clear learning cart?",
      text: "This will remove all selected courses from your cart.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, clear cart",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#7c3aed",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(clearCart());
        toast.success("Cart cleared");
      }
    });
  };

  return (
    <aside
      id="cart-section"
      className=" mt-5 rounded-2xl border border-violet-100/80 bg-white/80 hover:bg-violet-200 p-5 shadow-[0_20px_60px_rgba(109,40,217,0.12)] backdrop-blur-xl lg:sticky lg:top-6 lg:self-start"
    >
      {/* Cart header */}
      <div className="mb-5 flex items-start justify-between gap-4">
        <div>
          <p className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-violet-500">
            Learning Cart
          </p>
          <h2 className="text-2xl font-bold text-slate-950">Your <span className="text-purple-900">Courses</span></h2>
        </div>

        <span className="rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-sm font-semibold text-violet-700">
          {cartItems.length}
        </span>
      </div>

      {cartItems.length === 0 ? (
        <div className="rounded-3xl border border-dashed border-violet-200 bg-violet-50/60 p-6 text-center">
          <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-white text-2xl shadow-sm">
            🛒
          </div>
          <h3 className="font-bold text-slate-900">Your cart is empty</h3>
          <p className="mt-2 text-sm text-slate-500">
            Add a course to start your learning journey.
          </p>
        </div>
      ) : (
        <>
          {/* Selected course list */}
          <div className="space-y-3">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="group flex items-center gap-3 rounded-xl border border-violet-100 bg-gradient-to-br from-white to-violet-50/70 p-3 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-200 hover:shadow-[0_14px_35px_rgba(124,58,237,0.14)]"
              >
                {/* Course image */}
                <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-md bg-violet-100">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Course info */}
                <div className="min-w-0 flex-1">
                  <h3 className="truncate text-sm font-bold text-slate-950">
                    {item.name}
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-violet-700">
                    BDT {item.price}
                  </p>
                </div>

                {/* Remove action: simple cross first, full remove button on hover */}
                {/* Remove action: expands only when this button is hovered */}
                <button
                  onClick={() => {
                    dispatch(removeFromCart(item.id));
                    toast.info("Course removed from cart");
                  }}
                  className="group/remove flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border border-violet-100 bg-white text-slate-400 shadow-sm transition-all duration-300 hover:w-[92px] hover:border-red-100 hover:bg-red-50 hover:px-3 hover:text-red-600"
                  aria-label="Remove course"
                >
                  <FiX className="text-lg transition-all duration-300 group-hover/remove:hidden" />

                  <span className="hidden items-center gap-1 text-xs font-semibold group-hover/remove:flex">
                    <FiTrash2 className="text-sm" />
                    Remove
                  </span>
                </button>
              </div>
            ))}
          </div>

          {/* Cart summary */}
          <div className="mt-5 rounded-3xl bg-gradient-to-br from-violet-700 via-purple-700 to-indigo-800 px-6 py-4 text-white shadow-[0_18px_45px_rgba(109,40,217,0.28)]">
            <div className="flex items-center justify-between text-sm text-violet-100">
              <span>Selected courses</span>
              <span className="font-bold">{cartItems.length}</span>
            </div>

            <div className="mt-2 flex items-center justify-between text-lg font-bold">
              <span>Total</span>
              <span>BDT {totalPrice}</span>
            </div>
          </div>

          {/* Clear cart button */}
          <button
            onClick={handleClearCart}
            className="mt-4 w-full rounded-2xl border border-violet-200 bg-violet-50 px-4 py-2.5 text-sm font-bold text-violet-700 transition-all duration-500 active:scale-[0.9] hover:border-red-200 hover:bg-red-50 hover:text-red-600"
          >
            Clear Cart
          </button>
        </>
      )}
    </aside>
  );
}