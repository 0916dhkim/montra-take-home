import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { Product } from "./products";

export type CartItem = {
  product: Product;
  quantity: number;
};

const INITIAL_CART: CartItem[] = [];

const cartSlice = createSlice({
  name: "cart",
  initialState: INITIAL_CART,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existing = state.find(
        (each) => each.product.id === action.payload.product.id
      );
      if (existing) {
        existing.quantity += action.payload.quantity;
      } else {
        state.push(action.payload);
      }
    },
    deleteItem: (state, action: PayloadAction<number>) => {
      const itemIndex = state.findIndex(
        (each) => each.product.id === action.payload
      );
      if (itemIndex !== -1) {
        // Delete item
        state.splice(itemIndex, 1);
      }
    },
  },
});

export const { addToCart, deleteItem } = cartSlice.actions;

export default cartSlice.reducer;
