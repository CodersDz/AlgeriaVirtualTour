import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = [];

export const animatedHomeSlice = createSlice({
  name: "animated",
  initialState: { value: initialStateValue },
  reducers: {
    setAnimated: (state, action) => {
      state.value = [...state.value, action.payload];
    },
    resetAnimated: (state, action) => {
      state.value = initialStateValue;
    },
  },
});

export const { setAnimated, resetAnimated } = animatedHomeSlice.actions;

export default animatedHomeSlice.reducer;
