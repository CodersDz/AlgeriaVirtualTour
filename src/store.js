import { configureStore } from "@reduxjs/toolkit";
import animatedHomeReducer from "./features/animation/animatedHomeSlice";
import infoPopUpReducer from "./features/infoPopUp/infoPopUpSlice";
export default configureStore({
  reducer: {
    animatedHome: animatedHomeReducer,
    infoPopUp: infoPopUpReducer,
  },
});
