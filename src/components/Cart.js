import React from "react";
import { useSelector } from "react-redux";
import Cartlist from "./Cartlist";

const Cart = () => {
  const cardData = useSelector((state) => state.cart.cartItems);
  const totalbill = useSelector((state) => state.cart.totalBill);

  return (
    <div className="max-w-[560px] mx-auto my-0 p-4">
      Cart
      {cardData.map((item) => {
        {
          return <Cartlist {...item} />;
        }
      })}
      <h1 className="text-[22px] text-center ">
        Total : {Math.round(totalbill)}RS
      </h1>
    </div>
  );
};
export default Cart;
