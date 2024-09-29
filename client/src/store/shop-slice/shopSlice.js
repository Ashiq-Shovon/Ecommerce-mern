import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: true,
  productList: [],
};
export const fetchAllProduct = createAsyncThunk(
  "/shop/fetchAllProduct",
  async () => {
    const products = await axios.get(
      "http://localhost:5000/api/shop/fetchAllProduct"
    );
    return products.data;
  }
);

export const fetchAllFilterProduct = createAsyncThunk(
  "/shop/fetchAllFilterProduct",
  async ({ filterParams, sortParams }) => {

    const query = new URLSearchParams({
      ...filterParams,
      sortBy: sortParams,
    });
    console.log(filterParams.category );
    const res = await axios.get(
      `http://localhost:5000/api/shop/fetchAllFilterProduct?${query}`
    );
    console.log(res.data);
    return res.data;
  }
);

const shopSlice = createSlice({
  name: "shop",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.productList = action.payload.productList;
      })
      .addCase(fetchAllProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAllProduct.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(fetchAllFilterProduct.fulfilled, (state, action) => {
        state.productList = action.payload.products;
        state.isLoading = false;
        console.log(action.payload.products);
      })
      .addCase(fetchAllFilterProduct.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchAllFilterProduct.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

export default shopSlice.reducer;
