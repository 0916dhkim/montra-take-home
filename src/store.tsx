import { configureStore, createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: [],
  reducers: {},
});

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {},
});

export const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
    cart: cartSlice.reducer,
  },
});
