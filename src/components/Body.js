import { useState } from "react";
import Card from "./Card";
import { filteredData } from "../utilis/helper";
import Notfound from "./Notfound";
// import { searchSvg } from "../config/config";
import Shimmereffect from "./Shimmer";
import { Link } from "react-router-dom";
import useCarddata from "../utilis/useCarddata";
const Body = () => {
  let [codeData, setcodeData] = useState([]);
  let [searchvalue, setsearchvalue] = useState("");
  let [notfound, setnotFound] = useState(false);

  let { apidata } = useCarddata();
  let searchFilter = () => {
    let filter_Data = filteredData(apidata, searchvalue);

    if (filter_Data.length <= 0) {
      setnotFound(true);
    } else if (filter_Data.length > 0) {
      setnotFound(false);
    }
    setcodeData(filter_Data);
  };
  return apidata?.length === 0 ? (
    <Shimmereffect data-testid="shimmerEffect" />
  ) : (
    <div>
      <div>
        <div className="ml-auto mr-auto mt-0 mb-0 max-w-[1200px] p-2 flex justify-center items-center">
          <div className="relative max-w-sm mx-auto w-[300px]">
            <input
              className="w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              type="search"
              placeholder="Search"
              onChange={(e) => {
                setsearchvalue(e.target.value);
              }}
              value={searchvalue}
            ></input>
            <button
              className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-700 bg-gray-100 border border-gray-300 rounded-r-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              onClick={searchFilter}
            >
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M14.795 13.408l5.204 5.204a1 1 0 01-1.414 1.414l-5.204-5.204a7.5 7.5 0 111.414-1.414zM8.5 14A5.5 5.5 0 103 8.5 5.506 5.506 0 008.5 14z"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="max-w-[1020px] ml-auto mr-auto mt-0 mb-0 px-4 py-0 flex items-center justify-center flex-wrap ">
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
