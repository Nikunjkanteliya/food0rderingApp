import React from "react";
import { useSelector } from "react-redux";
import Cartlist from "./Cartlist";
import { Link } from "react-router-dom";

const Cart = () => {
  const cardData = useSelector((state) => state.cart.cartItems);
  const totalbill = useSelector((state) => state.cart.totalBill);

  return (
    <div className="max-w-[560px] mx-auto my-0 p-4 min-h-[100vh]">
      {cardData.map((item) => {
        {
          return <Cartlist {...item} />;
        }
      })}
      {totalbill > 0 ? (
        <div className="text-center">
          <span className="text-[#282c3f] font-[600] text-[14px]">TO PAY</span>{" "}
          :
          <span
            className="text-[#282c3f;
] font-[600]"
          >
            {" "}
            {" \u20B9 " + Math.round(totalbill)}
          </span>
        </div>
      ) : (
        <div className="mx-auto my-0 max-w-[300px] p-3">
          {" "}
          <div className="w-[270px] h-[256px]">
            {" "}
            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0" />{" "}
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="text-[#535665] font-[600] text-[20px] text-center">
              Your cart is empty
            </p>
            <Link to={"/body"}>
              <button className="py-[11px] px-[20px] uppercase text-[#fff] text-center text-[15px] font-[600] bg-[#fc8019] mt-7 rounded-md opacity-100 hover:opacity-80">
                {" "}
                See restaurants near you
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
export default Cart;
