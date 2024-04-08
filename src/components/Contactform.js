import React from "react";
import { useForm, ValidationError } from "@formspree/react";

function Contactform() {
  const [state, handleSubmit] = useForm("xayrpgzp");
  if (state.succeeded) {
    return (
      <p className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md mt-3">
        Form Submitted Successfuly👍
      </p>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col  border rounded-md min-w-[400px] p-4 sm:min-w-[100%]"
    >
      <label
        htmlFor="email"
        className="text-left p-2 font-bold text-[16px] leading-normal"
      >
        Email Address
      </label>
      <input
        id="email"
        type="email"
        name="email"
        className="border rounded-md p-2"
        placeholder="Write your mail"
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />

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
      ></input>
      <ValidationError prefix="Name" field="name" errors={state.errors} />
      <label
        htmlFor="message"
        className="text-left p-2 font-bold text-[16px] leading-normal"
      >
        Message For Us
      </label>
      <textarea className="border rounded-md p-2" id="message" name="message" />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-3"
        disabled={state.submitting}
      >
        Submit
      </button>
    </form>
  );
}

export default Contactform;
