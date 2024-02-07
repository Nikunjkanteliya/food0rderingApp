import { hardcodeData } from "../config/config";
import { useState } from "react";
import Card from "./Card";
const Body = () => {
  let [codeData, setcodeData] = useState(hardcodeData);
  let [searchvalue, setsearchvalue] = useState("");

  let searchFilter = () => {
    let filteredData = codeData.filter((ele) =>
      ele.knownAs.includes(searchvalue)
    );
    setcodeData(filteredData);
  };

  return (
    <div className="body_background_color_wrapper">
      <div className="bodyContainer">
        <div className="search_bar">
          <input
            type="text"
            onChange={(e) => {
              setsearchvalue(e.target.value);
            }}
          ></input>
          <button onClick={searchFilter}> search </button>
        </div>

        <div className="card_Wrapper">
          {codeData.map((ele) => {
            return <Card {...ele} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Body;
