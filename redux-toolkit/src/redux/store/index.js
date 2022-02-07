import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slice/index";
import themeReducer from "../slice/theme";

export const store = configureStore({
  reducer: { user: userReducer, theme: themeReducer },
});
