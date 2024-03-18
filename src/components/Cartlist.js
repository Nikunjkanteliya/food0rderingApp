import React from "react";
import { IMG_CDN_URL, notfoundImg } from "../config/config";
import { useDispatch } from "react-redux";
import { additem, removeitem } from "../utilis/cartslice";

const Cartlist = ({ name, price, imageId, defaultPrice, id, quantity }) => {
  let dispatch = useDispatch();
  return (
    <div>
      <button
        onClick={() => {
          dispatch(removeitem(id));
        }}
      >
        remove
      </button>
      <button
        onClick={() => {
          dispatch(additem({ id, price, defaultPrice }));
        }}
      >
        add
      </button>
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
        <h1 className="font-light text-[22px]">{name}</h1>
        <span>{quantity}</span>
      </div>
    </div>
  );
};

export default Cartlist;
