import * as yup from "yup";
export const aboutusSchema = yup.object({
  name: yup.string().min(2).max(25).required("Name field cant be empty"),
  email: yup.string().email().required("Email field cant be empty"),
  message: yup.string().min(5).max(200).required("Message field cant be empty"),
});
