import React from "react";
import { useRouteError } from "react-router-dom";
const Errorpage = () => {
  let no = useRouteError();
  let { status, error } = useRouteError();
  console.log(no);
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>
        {status} {error.message}
      </h1>
    </div>
  );
};

export default Errorpage;
