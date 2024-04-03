import React, { useContext } from "react";
import contextCreated from "../utilis/context";
import Typewriter from "typewriter-effect";

const Options = () => {
  const { info } = useContext(contextCreated);

  return (
    <div className="text-center min-h-[100vh] max-w-[800px] mx-auto my-0 p-6 ">
      <h2 className="text-3xl font-bold leading-tight text-slate-600 dark:text-white sm:text-2xl sm:text-center lg:text-5xl p-4">
        <Typewriter
          options={{
            strings: ["Contact us"],
            autoStart: true,
            loop: true,
          }}
        />
      </h2>
      <div className="flex  flex-col shadow-md shadow-slate-500 p-5 rounded-xl ">
        <div className=" sm:w-[100%] flex justify-between">
          <div className="w-[50%]">
            <img
              src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="rounded-md"
            />
          </div>
        </div>
        <div className="flex justify-end  mt-5">
          {" "}
          <form className="flex flex-col  border rounded-md min-w-[400px] p-4 sm:min-w-[100%]">
            <label className="text-left p-2 font-bold text-[16px] leading-normal">
              Email
            </label>
            <input
              type="email"
              className="border rounded-md p-2"
              placeholder="Write your mail"
            ></input>
            <label className="text-left p-2 font-bold text-[16px] leading-normal">
              Name
            </label>
            <input
              type="text"
              className="border rounded-md p-2  "
              placeholder="Write your name"
            ></input>
            <label className="text-left p-2 font-bold text-[16px] leading-normal">
              Message For Us
            </label>
            <textarea
              placeholder="Message for us"
              className="border rounded-md p-2"
            ></textarea>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-3">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Options;
