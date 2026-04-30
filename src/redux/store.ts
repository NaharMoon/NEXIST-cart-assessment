import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice";

//  Load from localStorage
const loadCart = () => {
    if (typeof window === "undefined") return [];

    try {
        const data = localStorage.getItem("cart");
        return data ? JSON.parse(data) : [];
    } catch {
        return [];
    }
};

//  Save to localStorage
const saveCart = (state: any) => {
    try {
        localStorage.setItem("cart", JSON.stringify(state.cart.items));
    } catch { }
};

export const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
    preloadedState: {
        cart: {
            items: loadCart(),
        },
    },
});

//  Subscribe to store changes
store.subscribe(() => {
    saveCart(store.getState());
});

// Types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;