import { ratingStart } from "../config/config";

const Card = ({
  areaName,
  id,
  name,
  cloudinaryImageId,
  cuisines,
  avgRating,
  link,
}) => {
  const IMG_CDN_URL = "https://res.cloudinary.com/swiggy/image/upload/";
  return (
    <div className="restrauntcard_items" key={id}>
      <div>
        <a href={link}>
          <img src={`${IMG_CDN_URL}${cloudinaryImageId}`} alt="img" />
        </a>
      </div>
      <div className="context_wrapper">
        <div>
          <h2 className="restraunt-names">{name}</h2>
        </div>
        <div>
          <h3 className="nutri_wrapper">
            <span> {areaName}</span>
            <span>cuisines</span>
            <span>{cuisines.join(" , ")}</span>
            <span className="rating_starts">
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
