import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
const useMenudata = () => {
  let [menucardata, setMenucardata] = useState([]);
  let [menulist, setMenulist] = useState([]);
  let [crausouledata, setCrausouledata] = useState([]);
  let [particularAddress, setparticularAddress] = useState([]);

  let { id } = useParams();
  const menu_url =
    "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=" +
    id;


    
  useEffect(() => {
    async function fetchMenu() {
      const fetchedMenu = await fetch(menu_url);
      const fetchedMenujson = await fetchedMenu.json();
      setMenucardata(fetchedMenujson?.data?.cards[2]?.card?.card?.info);

      setparticularAddress(
        fetchedMenujson?.data?.cards[2]?.card?.card?.info?.labels[1]?.message
      );

      {
        fetchedMenujson?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR
          ?.cards[2].card.card.itemCards === undefined
          ? setMenulist(
              fetchedMenujson?.data?.cards[4]?.groupedCard?.cardGroupMap
                ?.REGULAR?.cards[1].card.card.itemCards
            )
          : setMenulist(
              fetchedMenujson?.data?.cards[4]?.groupedCard?.cardGroupMap
                ?.REGULAR?.cards[2].card.card.itemCards
            );
      }

      setCrausouledata(
        fetchedMenujson?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR
          ?.cards[4].card.card.carousel
      );
      console.log(fetchedMenujson?.data);
    }

    fetchMenu();
  }, []);
  return { menucardata, menulist, crausouledata, particularAddress };
};
export default useMenudata;
