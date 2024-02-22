import React from "react";
import { nonVeg, vegSign } from "../config/config";

const Foodmenu = ({ name, price, imageId, itemAttribute, defaultPrice }) => {
  const IMG_CDN_URL = "https://res.cloudinary.com/swiggy/image/upload/";
  return (
    <div className="menu_items_wrapper">
      {<img src={IMG_CDN_URL + imageId} width={"100px"} />}
      <li>
        {itemAttribute.vegClassifier === "VEG" ? (
          <img src={vegSign} width={"15px"} height={"15px"} />
        ) : (
          <img src={nonVeg} width={"15px"} height={"15px"} />
        )}
      </li>
      <li> {name}</li>
      <li>
        {price !== undefined ? price / 100 : defaultPrice / 100}
        {"RS"}
      </li>
    </div>
  );
};

export default Foodmenu;
