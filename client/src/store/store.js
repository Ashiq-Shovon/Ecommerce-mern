import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./auth-slice/index";
import productReducer from "./product-slice/productSlice";
import shopReducer from "./shop-slice/shopSlice";
const store = configureStore({
  reducer: {
    auth: authReducer,
    product: productReducer,
    shop: shopReducer,
  },
});

export default store;
