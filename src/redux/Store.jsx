import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./Slice/CartSlice";
const store = configureStore({
  reducer: {
    cart: cardReducer,
  },
});

// subscribe
store.subscribe(() => {
  console.log("change cart : ", store.getState());
});

export default store;
