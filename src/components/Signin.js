import React, { useState } from "react";
import { Google_svg } from "../config/config";
import { Eye, EyeOff } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { GoogleAuthProvider } from "firebase/auth";
import {
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase/firebasecconfig";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { signinSchema } from "../schemas";

const initialValues = {
  email: "",
  password: "",
};
const Signin = () => {
  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signinSchema,
      onSubmit: async (value, action) => {
        try {
          await signInWithEmailAndPassword(auth, value.email, value.password);
        } catch (error) {
          toast(`${error}`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }

        action.resetForm();
      },
    });
  // const [email, setemail] = useState("");
  // const [pass, setpass] = useState("");
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

  // const signinEmailnPass = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await signInWithEmailAndPassword(auth, email, pass);
  //     navigate("/body");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
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
        <form className="flex flex-col p-4 sm:p-[31px]" onSubmit={handleSubmit}>
          <label className="m-2 block mb-2 text-sm font-bold text-gray-700 dark:text-white">
            Email
          </label>
          <input
            type="email"
            className="w-[350px] px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border shadow-sm appearance-none focus:outline-none focus:shadow-outline rounded-md md:w-[300px]"
            placeholder="Email"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            // onChange={(e) => {
            //   setemail(e.target.value);
            // }}
          />
          {errors.email && touched ? (
            <p className="text-[14px] text-red-700 font-semibold pl-2 text-left text-pretty">
              {errors.email}
            </p>
          ) : null}
          <div className="flex justify-between md:flex-col ">
            <div className="md:w-[300px]">
              <label className="m-2 block mb-2 text-sm font-bold text-gray-700 dark:text-white">
                Password
              </label>
              <input
                type={showpass ? "text" : "password"}
                className="w-[350px] px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded-md shadow-sm appearance-none focus:outline-none focus:shadow-outline absolute md:w-[300px] "
                placeholder="Password"
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                // onChange={(e) => {
                //   setpass(e.target.value);
                // }}
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
          {errors.password && touched ? (
            <p className="text-[14px] text-red-700 font-semibold pl-2 text-left text-pretty pt-3">
              {errors.password}
            </p>
          ) : null}
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
      <ToastContainer />
    </div>
  );
};

export default Signin;
