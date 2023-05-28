import todoSlice from "@/slice/todoSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    todoslice : todoSlice
  },
  devTools: process.env.NODE_ENV !== "production",
});
