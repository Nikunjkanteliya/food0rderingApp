import { ratingStart } from "../config/config";
import { IMG_CDN_URL } from "../config/config";
const Card = ({
  areaName,
  id,
  name,
  cloudinaryImageId,
  cuisines,
  avgRating,
}) => {
  return (
    <div className="w-72 mx-3 my-3 h-[350px] shadow-md shadow-slate-300 p-3 rounded-xl flex flex-col gap-3">
      <div className="w-[100%] overflow-hidden rounded-md ">
        <img
          src={`${IMG_CDN_URL}${cloudinaryImageId}`}
          alt="img"
          className="h-[230px] w-[100%]  ease-in-out duration-300 hover:scale-110 object-fill  "
        />
      </div>
      <div className=" text-center flex flex-col">
        <div>
          <h2
            className="font-Basis_Grotesque_Pro_Bold font-[700] text-[18px] leading-6 tracking-[-0.3px] text-[#02060cbf]
           opacity-[0.7]"
          >
            {name}
          </h2>
        </div>
        <div>
          <h3 className="flex flex-col">
            <span className="font-[200] font-Basis_Grotesque_Pro_Bold text-[16px] leading-6 tracking-[-0.3px] text-[#02060c99] ">
              {" "}
              {areaName}
            </span>
            {/* <span className="font-[200] font-Basis_Grotesque_Pro_Bold text-[16px] leading-6 tracking-[-0.3px] text-[#02060c99] ">
              cuisines
            </span> */}
            {/* <span className="font-[200] font-Basis_Grotesque_Pro_Bold text-[16px] leading-6 tracking-[-0.3px] text-[#02060c99] ">
              {cuisines.join(" , ")}
            </span> */}
            <span className="font-[200] font-Basis_Grotesque_Pro_Bold text-[16px] leading-6 tracking-[-0.3px] text-[#02060c99]  flex gap-1 justify-center">
              {ratingStart}
              {avgRating}
            </span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Card;
