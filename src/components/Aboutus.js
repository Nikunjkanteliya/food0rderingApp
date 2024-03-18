import React, { useState } from "react";
// const Accordian = ({ heading, details, isVisible, toggleto }) => {
//   return (
//     <div className="max-w-[900px] mx-auto p-5 border-[2px] my-3 border-red-400">
//       <h1 className="text-[22px] font-semibold">{heading}</h1>
//       {isVisible && <p className="text-[18px] ">{details}</p>}
//       <button
//         className="p-2 m-2 border-[2px] border-red-400 rounded-md"
//         onClick={() => {
//           toggleto();
//         }}
//       >
//         {isVisible ? "hide" : "show"}
//       </button>
//     </div>
//   );
// };

const Aboutus = () => {
  // let [isVisible, setisVisible] = useState(false);
  // const toggleValue = (vlaue) => {
  //   vlaue === isVisible ? setisVisible(false) : setisVisible(vlaue);
  // };
  return (
    <div>
      <p>about us</p>
      {/* <Accordian
        heading={"Acoordian1"}
        details={
          "Quisque commodo nunc diam, eget consequat massa consequat sed. Donec maximus lacus vitae justo pharetra, sit amet convallis augue venenatis. Aenean id quam libero. Vestibulum scelerisque fermentum ex vel tincidunt. Nunc a metus a lorem commodo fringilla sit amet"
        }
        isVisible={isVisible === "Acoordian1"}
        toggleto={() => {
          toggleValue("Acoordian1");
        }}
      />
      <Accordian
        heading={"Acoordian2"}
        details={
          "Quisque commodo nunc diam, eget consequat massa consequat sed. Donec maximus lacus vitae justo pharetra, sit amet convallis augue venenatis. Aenean id quam libero. Vestibulum scelerisque fermentum ex vel tincidunt. Nunc a metus a lorem commodo fringilla sit amet"
        }
        isVisible={isVisible === "Acoordian2"}
        toggleto={() => {
          toggleValue("Acoordian2");
        }}
      />
      <Accordian
        heading={"Acoordian3"}
        details={
          "Quisque commodo nunc diam, eget consequat massa consequat sed. Donec maximus lacus vitae justo pharetra, sit amet convallis augue venenatis. Aenean id quam libero. Vestibulum scelerisque fermentum ex vel tincidunt. Nunc a metus a lorem commodo fringilla sit amet"
        }
        isVisible={isVisible === "Acoordian3"}
        toggleto={() => {
          toggleValue("Acoordian3");
        }}
      />
      <Accordian
        heading={"Acoordian4"}
        details={
          "Quisque commodo nunc diam, eget consequat massa consequat sed. Donec maximus lacus vitae justo pharetra, sit amet convallis augue venenatis. Aenean id quam libero. Vestibulum scelerisque fermentum ex vel tincidunt. Nunc a metus a lorem commodo fringilla sit amet"
        }
        isVisible={isVisible === "Acoordian4"}
        toggleto={() => {
          toggleValue("Acoordian4");
        }}
      /> */}
    </div>
  );
};

export default Aboutus;
