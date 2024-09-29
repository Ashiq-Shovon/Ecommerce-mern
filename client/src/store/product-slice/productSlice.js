import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: true,
  data: [],
};

export const addProduct = createAsyncThunk(
  "/admin/addProduct",
  async (formData) => {
    const res = await axios.post(
      "http://localhost:5000/api/admin/add-product",
      formData,
      {
        withCredentials: true,
      }
    );
    console.log(res);
    return res.data;
  }
);

export const getAllProducts = createAsyncThunk(
  "/admin/get/getAllProduct",
  async () => {
    const res = await axios.get(
      "http://localhost:5000/api/admin/getAllProducts"
    );
    console.log(res);
    return res.data;
  }
);

export const deleteProductById = createAsyncThunk(
  "/product/deleteById",
  async (productId) => {
    const res = await axios.delete(
      `http://localhost:5000/api/admin/deleteProduct/${productId}`
    );
    console.log(res.data);
    return res.data;
  }
);

export const editProduct = createAsyncThunk(
  "/product/edit",
  async (formData) => {
    const res = await axios.put(
      "http://localhost:5000/api/admin/editProduct",
      formData
    );
    console.log(res)
    return res.data;
  }
);
const productSlice = createSlice({
  name: "product",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(addProduct.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(addProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addProduct.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        console.log(action.payload.productList);
        state.data = action?.payload.productList;
      })
      .addCase(getAllProducts.pending, (state) => { })
      .addCase(getAllProducts.rejected, (state) => { })
      .addCase(deleteProductById.fulfilled, (state, action) => {
        // state.data = action?.payload;
      })
      .addCase(deleteProductById.pending, (state) => { })
      .addCase(deleteProductById.rejected, (state) => { })
      .addCase(editProduct.fulfilled, (state) => { })
      .addCase(editProduct.pending, (state) => { })
      .addCase(editProduct.rejected, (state) => { });
  },
});

export default productSlice.reducer;
