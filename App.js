import React from "react";
import ReactDOM from "react-dom";

import Header from "./src/components/Header";
import Body from "./src/components/Body";
import Footer from "./src/components/Footer";

const Foodapp = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

let targetedRoot = ReactDOM.createRoot(document.querySelector("#root"));

targetedRoot.render(<Foodapp />);
