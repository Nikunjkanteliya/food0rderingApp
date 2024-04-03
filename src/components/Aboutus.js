import React, { useState } from "react";
import aboutusimg from "../images/aboutus.png";
import Typewriter from "typewriter-effect";
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
    <div className="min-h-[100vh]">
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
      <section className="pt-10 overflow-hidden bg-gray-50 dark:bg-gray-800 md:pt-0 sm:pt-16 2xl:pt-16 ">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex items-start justify-center sm:flex-col sm:items-center">
            <div className="min-w-[500px] sm:min-w-[300px] ">
              <h2 className="text-3xl font-bold leading-tight text-black dark:text-white sm:text-2xl sm:text-center lg:text-5xl">
                Hey 👋 I am
                <br className="block " />
                <Typewriter
                  options={{
                    strings: ["Nikunj Kanteliya"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h2>

              <p className="max-w-lg mt-3 text-xl leading-relaxed text-gray-600 dark:text-gray-300 md:mt-8 sm:text-[16px] sm:text-center">
                As a front end developer, I am passionate about creating
                visually appealing and engaging user experiences on the web. I
                have a deep understanding of HTML, CSS, and JavaScript,
                Reactjs,Redux and I use my skills to design and develop
                intuitive websites and applications that meet the needs of
                users. Ultimately, my goal as a front end developer is to create
                web experiences that are not only functional and effective, but
                also beautiful and engaging.
              </p>

              <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 md:mt-8 sm:text-center">
                <span className="relative inline-block ">
                  <span className="absolute inline-block w-full bottom-0.5 h-2 bg-yellow-300 dark:bg-gray-900"></span>
                  <span className="relative "> Have a question? </span>
                </span>
                <br className="block sm:hidden " />
                Ask me on{" "}
                <a
                  href="https://www.linkedin.com/in/nikunj-kanteliya-043859209"
                  title=""
                  class="transition-all duration-200 text-sky-500 dark:text-sky-400 hover:text-sky-600 dark:hover:text-sky-500 hover:underline "
                >
                  Linkedin
                </a>
              </p>
            </div>

            <div className="relative">
              <img
                className="absolute inset-x-0 bottom-0 -mb-48 -translate-x-1/2 left-1/2"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/blob-shape.svg"
                alt=""
              />

              <img
                className="relative w-auto h-[100vh] xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110"
                src={aboutusimg}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Aboutus;
