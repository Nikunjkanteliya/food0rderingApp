import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmereffect from "./Shimmer";
import Foodmenu from "./Foodmenu";
import Crausoul from "./Crausoul";
const Restrauntmenu = () => {
  let [menucardata, setMenucardata] = useState([]);
  let [menulist, setMenulist] = useState([]);
  let [crausouledata, setCrausouledata] = useState([]);

  let { id } = useParams();
  const menu_url = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6110886&lng=77.2345184&restaurantId=${id}`;

  useEffect(() => {
    async function fetchMenu() {
      const fetchedMenu = await fetch(menu_url);
      const fetchedMenujson = await fetchedMenu.json();
      setMenucardata(fetchedMenujson.data.cards[2].card.card.info);

      setMenulist(
        fetchedMenujson?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR
          ?.cards[2].card.card.itemCards
      );

      setCrausouledata(
        fetchedMenujson?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR
          ?.cards[1].card.card.carousel
      );
    }
    fetchMenu();
  }, []);

  const IMG_CDN_URL = "https://res.cloudinary.com/swiggy/image/upload/";

  return menucardata.length === 0 && crausouledata.length === 0 ? (
    <Shimmereffect />
  ) : (
    <div className="restrauntmenu_wrapper">
      <div>
        <img
          src={IMG_CDN_URL + menucardata.cloudinaryImageId}
          width={"100px"}
        />
      </div>
      <div> {menucardata.name} </div>
      <div> {`${menucardata.city} , ${menucardata.areaName}`}</div>

      <div>
        {
          <Crausoul>
            {crausouledata?.map((ele, index) => {
              return (
                <div key={index} img={ele.creativeId} {...ele.dish.info}></div>
              );
            })}
          </Crausoul>
        }
      </div>

      <ul>
        {menulist?.map((ele, indx) => {
          return <Foodmenu {...ele.card.info} key={indx} />;
        })}
      </ul>
    </div>
  );
};
export default Restrauntmenu;
