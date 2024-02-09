import { notfoundImg } from "../config/config";

notfoundImg;
let Notfound = (searchvalue) => {
  return (
    <div className="nostfoind_Masterdiv">
      <p> No match found for "{searchvalue.props}"</p>
      <img src={notfoundImg}></img>
    </div>
  );
};
export default Notfound;
