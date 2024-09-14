import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const AuthCheck = ({ isAuthenticated, user, children }) => {
  const location = useLocation();
  if (
    !isAuthenticated &&
    !(
      location.pathname.includes("auth/login") ||
      location.pathname.includes("auth/register")
    )
  ) {
    alert("/auth/login")
    return <Navigate to="/auth/login" />;
  }

  if (
    (isAuthenticated && location.pathname.includes("auth/login")) ||
    location.pathname.includes("auth/register")
  ) {
    if (user?.role == "admin") {
      return <Navigate to="/admin/dashboard" />;
    } else if (user?.role == "user") {
      
      return <Navigate to="/shop/home" />;
    }
  }

  if (
    isAuthenticated &&
    location.pathname.includes("shop") &&
    user?.role == "admin"
  ) {
    return <Navigate to="/admin/dashboard" />;
  }
  if (
    isAuthenticated &&
    location.pathname.includes("admin") &&
    user?.role != "admin"
  ) {
    return <Navigate to="/shop/home" />;
  }

  return <>{children}</>;
};

export default AuthCheck;
