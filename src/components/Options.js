import React, { useContext } from "react";
import contextCreated from "../utilis/context";
import Typewriter from "typewriter-effect";
import Contactform from "./Contactform";
// import { useFormik } from "formik";
// import { aboutusSchema } from "../schemas";

// const initialValues = { name: "", email: "", message: "" };
const Options = () => {
  const { info } = useContext(contextCreated);

  // const { values, handleSubmit, handleBlur, handleChange, errors, touched } =
  // useFormik({
  //   initialValues: initialValues,
  //   validationSchema: aboutusSchema,
  //   onSubmit: (vlaues, action) => {
  //     console.log(vlaues);
  //     action.resetForm();
  //   },
  // });

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
          <div className="w-[50%] sm:w-[100%]">
            <img
              src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="rounded-md"
            />
          </div>
        </div>
        <div className="flex justify-end  mt-5">
          {" "}
          {/* <form
            className="flex flex-col  border rounded-md min-w-[400px] p-4 sm:min-w-[100%]"
            onSubmit={handleSubmit}
          >
            <label
              htmlFor="email"
              className="text-left p-2 font-bold text-[16px] leading-normal"
            >
              Email
            </label>
            <input
              type="email"
              className="border rounded-md p-2"
              placeholder="Write your mail"
              id="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            ></input>
            {errors.email && touched ? (
              <p className="text-[14px] text-red-700 font-semibold pl-2 text-left text-pretty">
                {errors.email}
              </p>
            ) : null}

            <label
              htmlFor="name"
              className="text-left p-2 font-bold text-[16px] leading-normal"
            >
              Name
            </label>
            <input
              type="text"
              className="border rounded-md p-2  "
              placeholder="Write your name"
              id="name"
              name="name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
            ></input>
            {errors.name && touched ? (
              <p className="text-[14px] text-red-700 font-semibold pl-2 text-left text-pretty">
                {errors.name}
              </p>
            ) : null}
            <label
              htmlFor="message"
              className="text-left p-2 font-bold text-[16px] leading-normal"
            >
              Message For Us
            </label>
            <textarea
              placeholder="Message for us"
              className="border rounded-md p-2"
              id="message"
              name="message"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.message}
            ></textarea>
            {errors.message && touched ? (
              <p className="text-[14px] text-red-700 font-semibold pl-2 text-left text-pretty">
                {errors.message}
              </p>
            ) : null}
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-3"
              type="submit"
            >
              Send Message
            </button>
          </form> */}
          <Contactform />
        </div>
      </div>
    </div>
  );
};

export default Options;
