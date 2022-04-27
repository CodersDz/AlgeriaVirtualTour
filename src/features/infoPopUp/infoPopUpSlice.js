import { createSlice } from "@reduxjs/toolkit";
const initialValue = { show: false, type: 1, text: "" };
export const infoPopUpSlice = createSlice({
  name: "infoPopUp",
  initialState: { value: initialValue },
  reducers: {
    setHide: (state, action) => {
      state.value.show = false;
    },
    setShow: (state, action) => {
      state.value.show = true;
    },
    setType: (state, action) => {
      state.value.type = action.payload;
    },
    setText: (state, action) => {
      state.value.text = action.payload;
    },
  },
});

export const { setHide, setShow, setType, setText } = infoPopUpSlice.actions;
export default infoPopUpSlice.reducer;
