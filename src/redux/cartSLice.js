import { createSlice } from "@reduxjs/toolkit";
import { fetchCart } from "./cartOps";

const initialState = {
  items: [],
};

const slice = createSlice({
  name: "cart",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchCart.fulfilled, (state, action) => {
      state.items = action.payload;
    });
  },
});

export const cartSlice = slice.reducer;

export const selectCart = (state) => state.cart.items;
