import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartState {
  items: number[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<number>) => {
      const productId = action.payload;
      const alreadyExists = state.items.includes(productId);

      if (!alreadyExists) {
        state.items.push(productId);
      }
    },

    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((id) => id !== action.payload);
    },

    setCart: (state, action: PayloadAction<number[]>) => {
      state.items = action.payload;
    },
  },
});

export const { addToCart, removeFromCart, setCart } = cartSlice.actions;
export default cartSlice.reducer;