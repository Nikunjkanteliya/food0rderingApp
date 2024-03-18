import React, { useContext } from "react";
import contextCreated from "../utilis/context";

const Options = () => {
  const { info } = useContext(contextCreated);

  return (
    <div className="text-center">
      Options
      <h1 className="p-2 m-2 ">{info.name}</h1>
      <h3
        className="p-2 m-2 
     "
      >
        {info.date}
      </h3>
    </div>
  );
};

export default Options;
