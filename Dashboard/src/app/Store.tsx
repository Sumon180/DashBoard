import {
  configureStore,
  combineReducers,
  ThunkAction,
  Action,
} from "@reduxjs/toolkit";
import toggleSlice from "./toggleSlice";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};
const rootReducer = combineReducers({
  toggle: toggleSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const Store = configureStore({
  reducer: {
    toggle: persistedReducer,
  },
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
