import { useEffect, useState } from "react";
import Card from "./Card";
import Notfound from "./Notfound";
import { searchSvg } from "../config/config";
import Shimmereffect from "./Shimmer";
import { Link } from "react-router-dom";
const Body = () => {
  let [codeData, setcodeData] = useState([]);
  let [apidata, setapidata] = useState([]);
  let [searchvalue, setsearchvalue] = useState("");
  let [notfound, setnotFound] = useState(false);
  useEffect(() => {
    async function fetchData() {
      const apiData = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6110886&lng=77.2345184&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      if (!apiData.ok) {
        throw new Error("Failed to fetch data from the server");
      }

      const apijsonData = await apiData.json();
      const apiRestraunt =
        apijsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      setapidata(apiRestraunt);
    }
    fetchData();
  }, []);

  let searchFilter = () => {
    let filteredData = apidata?.filter((ele) =>
      ele.info.name
        .toLocaleLowerCase()
        .includes(searchvalue.toLocaleLowerCase())
    );

    if (filteredData.length <= 0) {
      setnotFound(true);
    } else if (filteredData.length > 0) {
      setnotFound(false);
    }
    setcodeData(filteredData);
  };
  return apidata?.length === 0 ? (
    <Shimmereffect />
  ) : (
    <div className="body_background_color_wrapper">
      <div className="bodyContainer">
        <div className="search_bar">
          <input
            type="text"
            placeholder="search..."
            title="search Bar"
            name="search bar"
            onChange={(e) => {
              setsearchvalue(e.target.value);
            }}
          ></input>
          <button onClick={searchFilter} className="searchIcon">
            {searchSvg}
          </button>
        </div>

        <div className="card_Wrapper">
          {notfound && <Notfound props={searchvalue} />}
          {codeData.length > 0
            ? codeData.map((item, index) => (
                <Link key={item.info.id} to={"/restrauntmenu/" + item.info.id}>
                  <Card {...item.info} key={index} {...item.cta} />
                </Link>
              ))
            : apidata &&
              apidata.length > 0 &&
              !notfound &&
              apidata.map((ele, index) => (
                <Link key={ele.info.id} to={"/restrauntmenu/" + ele.info.id}>
                  <Card {...ele.info} {...ele.cta} />
                </Link>
              ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
