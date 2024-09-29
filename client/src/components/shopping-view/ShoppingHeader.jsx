import React from "react";
import { Link } from "react-router-dom";

const ShoppingHeader = () => {
  return (
    <>
      <div className="flex py-3 mx-10 justify-between gap-2 border-b-2">
        <div><Link to="/shop/home">icon</Link></div>
        <div className="flex gap-3">
          <Link to="/shop/home" className="text-black">Home</Link>

          <Link to="/shop/listing">Listing</Link>
          <Link to="/shop/account">Account</Link>
        </div>
        <div>
          <Link to="/shop/checkout">Checkout</Link>
        </div>
      </div>
    </>
  );
};

export default ShoppingHeader;
