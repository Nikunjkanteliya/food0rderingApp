import * as yup from "yup";
export const aboutusSchema = yup.object({
  name: yup.string().min(2).max(25).required("Name field cant be empty"),
  email: yup.string().email().required("Email field cant be empty"),
  message: yup.string().min(5).max(200).required("Message field cant be empty"),
});
// email: "", password: "", confirmpassword: ""
export const signupSchema = yup.object({
  email: yup.string().email().required("Email field cant be empty"),
  password: yup
    .string()
    .min(5)
    .max(15)
    .required("Password field cant be empty"),
  confirmpassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

export const signinSchema = yup.object({
  email: yup.string().email().required("Email field cant be empty"),
  password: yup
    .string()
    .min(5)
    .max(15)
    .required("Password field cant be empty"),
});
