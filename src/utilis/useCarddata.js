import { useState, useEffect } from "react";
import { api_restraunt_data } from "./helper";
const useCarddata = () => {
  let [apidata, setapidata] = useState([]);
  useEffect(() => {
    async function fetchData() {
      let apiRestraunt = await api_restraunt_data();
      setapidata(apiRestraunt);
    }
    fetchData();
  }, []);
  return { apidata };
};
export default useCarddata;
