import { Eye, EyeOff } from "lucide-react";
import { Google_svg } from "../config/config";
import React, { useState } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase/firebasecconfig";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [showpass, setShowpass] = useState(false);
  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");
  const navigate = useNavigate();
  const handlegoogleauth = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      navigate("/signin");
    } catch (error) {
      console.log(error);
    }
  };
  const handle_EmailnPass = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, pass);
      navigate("/signin");
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
          src="https://source.unsplash.com/Mv9hjnEUHR4/600x690"
          className="sm:rounded-md"
        />
      </div>
      <div className="w-[40%]  sm:flex sm:items-center sm:justify-center sm:flex-col ">
        <form
          className="flex flex-col  p-4 sm:p-[31px] "
          onSubmit={handle_EmailnPass}
        >
          <label className="m-2 block mb-2 text-sm font-bold text-gray-700 dark:text-white ">
            {" "}
            Email
          </label>
          <input
            type="email"
            className="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border  shadow-sm appearance-none focus:outline-none focus:shadow-outline rounded-md md:w-[300px]"
            placeholder="Email"
            onChange={(e) => {
              setemail(e.target.value);
            }}
          ></input>
          <div className="flex justify-between md:flex-col">
            <div className="md:w-[300px]">
              <label className="m-2 block mb-2 text-sm font-bold text-gray-700 dark:text-white ">
                Password
              </label>
              <input
                type={showpass ? "text" : "password"}
                className="w-[200px] px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded-md shadow-sm appearance-none focus:outline-none focus:shadow-outline absolute md:w-[300px] "
                placeholder="Password"
                onChange={(e) => {
                  setpass(e.target.value);
                }}
              ></input>
              <p
                className="relative float-right left-[7rem] top-[5px] md:left-0 md:pr-4"
                onClick={() => {
                  setShowpass(!showpass);
                }}
              >
                {showpass ? <EyeOff /> : <Eye />}
              </p>
            </div>

            <div className="md:pt-[10px] md:md:w-[300px]">
              <label className="m-2 block mb-2 text-sm font-bold text-gray-700 dark:text-white ">
                Confirm Password
              </label>
              <input
                type="password"
                className="w-[200px] px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded-md shadow-sm appearance-none focus:outline-none focus:shadow-outline md:w-[300px]  "
                placeholder="Confirm Password"
              ></input>
            </div>
          </div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-3 md:w-[300px] ">
            Register{" "}
          </button>
        </form>
        <div className="md:w-[350px]">
          <p className="text-center font-bold"> Already Registered ?</p>

          <div className="flex items-center justify-center mb-5 ">
            <span className="flex  mt-3 ">
              {Google_svg}
              &nbsp;
              <span className="hover:cursor-pointer" onClick={handlegoogleauth}>
                Continue with Google
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
