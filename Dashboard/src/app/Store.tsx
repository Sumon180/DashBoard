import { configureStore } from "@reduxjs/toolkit";
import toggleSlice from "./toggleSlice";

export const Store = configureStore({
  reducer: {
    toggle: toggleSlice,
  },
});

export type RootState = ReturnType<typeof Store.getState>;

export type AppDispatch = typeof Store.dispatch;

