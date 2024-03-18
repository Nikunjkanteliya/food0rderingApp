import React from "react";
import { IMG_CDN_URL } from "../config/config";
import { nonVeg, vegSign } from "../config/config";
import { useDispatch } from "react-redux";
import { addtocart } from "../utilis/cartslice";

const Foodmenu = ({
  name,
  price,
  imageId,
  itemAttribute,
  defaultPrice,
  id,
}) => {
  const dispatch = useDispatch();
  return (
    <div className="menu_items_wrapper">
      {imageId !== undefined ? (
        <img src={IMG_CDN_URL + imageId} width={"100px"} />
      ) : (
        <img
          src="https://c8.alamy.com/comp/2PGBJ8N/food-bowl-icon-outline-vector-meal-snack-kid-nutrition-2PGBJ8N.jpg"
          width={"100px"}
        />
      )}
      <li>
        {itemAttribute.vegClassifier === "VEG" ? (
          <img src={vegSign} width={"15px"} height={"15px"} />
        ) : (
          <img src={nonVeg} width={"15px"} height={"15px"} />
        )}
      </li>
      <li> {name}</li>
      <li>
        {Math.round(price !== undefined ? price / 100 : defaultPrice / 100)}
        {"RS"}
      </li>
      <button
        className="p-2 bg-gray-400 m-2 text-[#fff] font-semibold rounded-md"
        onClick={() => {
          dispatch(
            addtocart({
              name,
              price,
              imageId,
              itemAttribute,
              defaultPrice,
              id,
              quantity: 1,
            })
          );
        }}
      >
        add2Cart
      </button>
    </div>
  );
};

export default Foodmenu;
