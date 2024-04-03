import React from "react";
import { IMG_CDN_URL, notfoundImg } from "../config/config";
import { useDispatch } from "react-redux";
import { additem, removeitem } from "../utilis/cartslice";

const Cartlist = ({ name, price, imageId, defaultPrice, id, quantity }) => {
  let dispatch = useDispatch();
  return (
    <div>
      <div className="flex items-center justify-start p-2 shadow-md border m-2 rounded-tl-[20px] rounded-br-[20px]">
        {imageId !== undefined ? (
          <img
            src={IMG_CDN_URL + imageId}
            className="w-24 p-2 m-2 rounded-2xl"
            alt={name}
          />
        ) : (
          <img
            src={
              "https://c8.alamy.com/comp/2PGBJ8N/food-bowl-icon-outline-vector-meal-snack-kid-nutrition-2PGBJ8N.jpg"
            }
            className="w-24 p-2 m-2 rounded-2xl"
            alt={name}
          />
        )}
        <h1 className="text-[#7e808c] text-[16px] font-[400] leading-[1.22] w-80">
          {name}
        </h1>
        <div className="h-[30px] border-[1px] border-[#d4d5d9] w-[70px] flex justify-center items-center">
          <div className="flex justify-center items-center">
            <button
              onClick={() => {
                dispatch(removeitem(id));
              }}
              className="text-[1.5rem] font-[600] text-[#bebfc5] hover:scale-110"
            >
              -
            </button>{" "}
            <span className="px-1 text-[#60b246] font-[600] cursor-pointer">
              {quantity}
            </span>
            <button
              onClick={() => {
                dispatch(additem({ id, price, defaultPrice }));
              }}
              className="text-[1.5rem] font-[600] text-[#60b246] hover:scale-110"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cartlist;
