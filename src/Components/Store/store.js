import { configureStore } from "@reduxjs/toolkit";
import pizzaReducer from "./PizzaSlice.js";

export const store = configureStore({
  reducer: {
    pizzaReducer,
  },
});
