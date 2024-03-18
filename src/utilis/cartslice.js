import { createSlice } from "@reduxjs/toolkit";

const cartslice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    totalBill: 0,
    totalItems: 0,
  },

  reducers: {
    addtocart: (state, action) => {
      const newItem = action.payload;
      let existingItem = state.cartItems.find((item) => item.id === newItem.id);
      if (!existingItem) {
        state.cartItems.push({ ...newItem, quantity: 1 });
      } else {
        // existingItem.quantity++;
      }
      state.totalBill +=
        newItem.price !== undefined
          ? newItem.price / 100
          : newItem.defaultPrice / 100;
      state.totalItems++;
    },
    additem(state, action) {
      const newItem = action.payload;
      let existingItem = state.cartItems.find((item) => item.id === newItem.id);
      if (!existingItem) {
        state.cartItems.push({ ...newItem, quantity: 1 });
      } else {
        existingItem.quantity++;
      }
      state.totalBill +=
        newItem.price !== undefined
          ? newItem.price / 100
          : newItem.defaultPrice / 100;
      state.totalItems++;
    },
    removeitem(state, action) {
      let id = action.payload;
      let existingItem = state.cartItems.find((item) => item.id === id);
      if (existingItem) {
        state.totalBill -=
          existingItem.price !== undefined
            ? existingItem.price / 100
            : existingItem.defaultPrice / 100;
        state.totalItems--;
        if (existingItem.quantity === 1) {
          state.cartItems = state.cartItems.filter((item) => item.id !== id);
        } else {
          existingItem.quantity--;
        }
      }
    },
  },
});

export const { addtocart, removeitem, additem } = cartslice.actions;
export default cartslice.reducer;
