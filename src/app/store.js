import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/useSlices";

export default configureStore({
  reducer: {
    user: userReducer,
  },
});
