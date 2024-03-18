import cartslice from "./cartslice";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
  reducer: {
    cart: cartslice,
  },
});
export default store;
