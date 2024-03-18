import React from "react";
import { IMG_CDN_URL } from "../config/config";
import Shimmereffect from "./Shimmer";
import Foodmenu from "./Foodmenu";
import Crausoul from "./Crausoul";
// import { getPlaceFromCoordinates } from "../utilis/helper";
import useMenudata from "../utilis/useMenudata";
import { ratingStars } from "../utilis/helper";

const Restrauntmenu = () => {
  let { menucardata, menulist, crausouledata, particularAddress } =
    useMenudata();

  return menucardata.length === 0 && crausouledata.length === 0 ? (
    <Shimmereffect />
  ) : (
    <div>
      <div className="flex mx-auto my-[0px]  max-w-[1020px] p-[15px] items-center justify-center gap-[200px] ">
        <div>
          <img
            src={IMG_CDN_URL + menucardata.cloudinaryImageId}
            width={"100px"}
            className="rounded-md "
          />
        </div>
        <div>
          <div className="text-[1.43rem] font-[600] text-[#282c3f] uppercase">
            {" "}
            {menucardata.name}{" "}
          </div>
          <div>{menucardata?.cuisines.join(" , ")}</div>

          <div className="max-w-[400px]"> {particularAddress}</div>
          <div>
            {
              <div class="flex items-center">
                <div>
                  <div className="flex items-center">
                    {ratingStars(menucardata.avgRating)}
                  </div>
                </div>
              </div>
            }
          </div>
        </div>
      </div>

      <div className="w-[600px] mx-auto my-0">
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
