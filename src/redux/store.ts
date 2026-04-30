import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

// Types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Save to localStorage
const saveCart = (state: RootState) => {
  try {
    localStorage.setItem("cart", JSON.stringify(state.cart.items));
  } catch {}
};

// Subscribe
store.subscribe(() => {
  saveCart(store.getState());
});