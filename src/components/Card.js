const Card = ({ image, knownAs, nutrients, uri }) => {
  return (
    <div className="restrauntcard_items">
      <div>
        <img src={image} />
      </div>
      <div>
        <h2> {knownAs}</h2>
      </div>
      <div>
        <h3 className="nutri_wrapper">
          <span></span>
          <span>
            {" "}
            {`Calories: ${nutrients.ENERC_KCAL}
         `}
          </span>
          <span> {`Protein: ${nutrients.PROCNT}`}</span>
          <span>{`FAT: ${nutrients.FAT}`}</span>
        </h3>
      </div>
      <div>
        {" "}
        <a href={uri}>Measure Your Cal Here</a>
      </div>
    </div>
  );
};

export default Card;
