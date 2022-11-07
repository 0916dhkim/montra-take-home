import { configureStore, createSlice } from "@reduxjs/toolkit";

import cartReducer from "./cart";
import productsReducer from "./products";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
  },
});
