import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import AuthLayout from "./components/auth/AuthLayout";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import AdmitLayout from "./components/admin-view/AdmitLayout";
import Dashboard from "./pages/admin-view/Dashboard";
import Products from "./pages/admin-view/Products";
import Order from "./pages/admin-view/Order";
import Features from "./pages/admin-view/Features";
import ShoppingLayout from "./components/shopping-view/ShoppingLayout";
import NotFound from "./pages/not-found/NotFound";
import ShoppingHome from "./pages/shopping-view/ShoppingHome";
import ShoppingListing from "./pages/shopping-view/shop-listing/ShoppingListing";
import ShoppingCheckout from "./pages/shopping-view/ShoppingCheckout";
import ShoppingAccount from "./pages/shopping-view/ShoppingAccount";
import AuthCheck from "./components/common/AuthCheck";
import { useDispatch, useSelector } from "react-redux";
import { authCheck } from "./store/auth-slice";

function App() {
  const { isAuthenticated, user, isLoading } = useSelector(
    (state) => state.auth
  );
  // console.log(user)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authCheck());
  }, [dispatch]);
  console.log(isAuthenticated);
  if (isLoading) {
    return <div>loading....</div>;
  }
  return (
    <>
      <div className="flex flex-col overflow-hidden bg-white">
        <Routes>
          <Route
            path="auth"
            element={
              <AuthCheck isAuthenticated={isAuthenticated} user={user}>
                <AuthLayout />
              </AuthCheck>
            }
          >
            <Route path="login" element={<Login />}></Route>
            <Route path="register" element={<Register />}></Route>
          </Route>
          <Route
            path="admin"
            element={
              <AuthCheck isAuthenticated={isAuthenticated} user={user}>
                <AdmitLayout />
              </AuthCheck>
            }
          >
            <Route path="dashboard" element={<Dashboard />}></Route>
            <Route path="products" element={<Products />}></Route>
            <Route path="orders" element={<Order />}></Route>
            <Route path="features" element={<Features />}></Route>
          </Route>
          <Route
            path="shop"
            element={
              <AuthCheck isAuthenticated={isAuthenticated} user={user}>
                <ShoppingLayout />
              </AuthCheck>
            }
          >
            <Route path="home" element={<ShoppingHome />}></Route>
            <Route path="listing" element={<ShoppingListing />}></Route>
            <Route path="checkout" element={<ShoppingCheckout />}></Route>
            <Route path="account" element={<ShoppingAccount />}></Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
