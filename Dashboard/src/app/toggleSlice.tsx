import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "./Store";

interface CounterState {
  state: boolean;
  active: string;
}

const initialState: CounterState = {
  state: false,
  active: "Links",
};

export const toggleSlice = createSlice({
  name: "toggle",

  initialState,
  reducers: {
    toggleHandle: (state) => {
      state.state = !state.state;
    },
    setActive: (state) => {
      state.state = !state.state;
    },
  },
});

export const { toggleHandle } = toggleSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const toggleState = (state: RootState) => state.toggle.state;

export default toggleSlice.reducer;
