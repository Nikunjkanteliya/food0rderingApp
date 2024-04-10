import React, { useState } from "react";
import { Google_svg } from "../config/config";
import { Eye, EyeOff } from "lucide-react";
// import { GoogleAuthProvider } from "firebase/auth";
import {
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase/firebasecconfig";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");
  const [showpass, setShowpass] = useState(false);
  const navigate = useNavigate();
  const handlegoogleauth = async (e) => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      navigate("/body");
    } catch (error) {
      console.log(error);
    }
  };

  const signinEmailnPass = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, pass);
      navigate("/body");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex max-w-[1400px] ml-auto mr-auto px-4 py-0 justify-between items-center sm:flex-col ">
      <div
        className=" w-[60%]   sm:flex sm:items-center sm:justify-center sm:w-[100%] sm:p-[15px]
      sm:pt-[26px]"
      >
        <img
          src="https://images.unsplash.com/photo-1518709911915-712d5fd04677"
          className="h-[690px] w-[700px] object-cover sm:rounded-md md:h-auto"
          alt="Sign in"
        />
      </div>

      <div className="w-40 p-4 sm:flex sm:items-center sm:justify-center sm:flex-col">
        <form
          className="flex flex-col p-4 sm:p-[31px]"
          onSubmit={signinEmailnPass}
        >
          <label className="m-2 block mb-2 text-sm font-bold text-gray-700 dark:text-white">
            Email
          </label>
          <input
            type="email"
            className="w-[350px] px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border shadow-sm appearance-none focus:outline-none focus:shadow-outline rounded-md md:w-[300px]"
            placeholder="Email"
            onChange={(e) => {
              setemail(e.target.value);
            }}
          />
          <div className="flex justify-between md:flex-col ">
            <div className="md:w-[300px]">
              <label className="m-2 block mb-2 text-sm font-bold text-gray-700 dark:text-white">
                Password
              </label>
              <input
                type={showpass ? "text" : "password"}
                className="w-[350px] px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded-md shadow-sm appearance-none focus:outline-none focus:shadow-outline absolute md:w-[300px] "
                placeholder="Password"
                onChange={(e) => {
                  setpass(e.target.value);
                }}
              />
              <p
                className="relative float-right left-[16rem] top-[5px] md:left-0 md:pr-4"
                onClick={() => {
                  setShowpass(!showpass);
                }}
              >
                {showpass ? <EyeOff /> : <Eye />}
              </p>
            </div>
          </div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md mt-5 w-[350px] md:w-[300px]">
            Register
          </button>
        </form>
        <div className="w-[350px]">
          <p className="text-center font-bold"> Already Registered ?</p>

          <div className="flex items-center justify-center">
            <span className="flex mt-3">
              {Google_svg}
              &nbsp;
              <span onClick={handlegoogleauth} className="hover:cursor-pointer">
                Continue with Google
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
