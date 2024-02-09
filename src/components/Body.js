import { hardcodeData, notfoundImg } from "../config/config";
import { useState } from "react";
import Card from "./Card";
import Notfound from "./Notfound";
const Body = () => {
  let [codeData, setcodeData] = useState(hardcodeData);
  let [searchvalue, setsearchvalue] = useState("");
  let [notfound, setnotFound] = useState(false);

  let searchFilter = () => {
    let filteredData = hardcodeData.filter((ele) =>
      ele.knownAs.toLocaleLowerCase().includes(searchvalue.toLocaleLowerCase())
    );

    if (filteredData.length <= 0) {
      setnotFound(true);
    } else if (filteredData.length > 0) {
      setnotFound(false);
    }
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
          {notfound && <Notfound props={searchvalue} />}
          {codeData.map((ele) => {
            return <Card {...ele} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Body;
