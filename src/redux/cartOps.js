import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://6708fccfaf1a3998ba9fef23.mockapi.io/";

export const fetchCart = createAsyncThunk("fetchCart", async (_, thunkApi) => {
  try {
    const { data } = await axios.get("products");
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const addToCart = createAsyncThunk(
  "addToCart",
  async (product, thunkApi) => {
    try {
      const { data } = await axios.post("/products", product);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const removeFromCart = createAsyncThunk(
  "removeFromCart",
  async (product, thunkApi) => {
    try {
      const { data } = await axios.delete(`products/${product.id}`);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
