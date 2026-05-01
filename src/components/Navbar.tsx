"use client";

import { FiShoppingCart } from "react-icons/fi";

interface NavbarProps {
  cartCount: number;
}

export default function Navbar({ cartCount }: NavbarProps) {
  const handleScrollToCart = () => {
    document.getElementById("cart-section")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <nav className="fixed top-5 left-1/2 z-50 w-[92%] max-w-3xl -translate-x-1/2">
      <div className="flex items-center justify-between rounded-full border border-violet-100 bg-white/70 px-6 py-2 shadow-lg shadow-violet-300/40 backdrop-blur-xl">
        
        {/* Left Icon */}
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-violet-600 text-white font-semibold">
          C
        </div>

        {/* Title */}
        <h1 className="text-sm font-semibold text-violet-700 md:text-base">
          <span className="text-xl font-bold">C</span>ourse<span className="text-xl font-bold">C</span>art
        </h1>

        {/* Cart Button */}
        <button
          onClick={handleScrollToCart}
          className="relative flex h-9 w-9 items-center justify-center rounded-full bg-violet-100 text-violet-700 hover:bg-violet-200 transition-all duration-500 active:scale-[0.8]"
        >
          <FiShoppingCart size={18} />

          {/* Badge */}
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 flex h-5 min-w-[20px] items-center justify-center rounded-full bg-violet-600 px-1 text-xs font-medium text-white">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </nav>
  );
}