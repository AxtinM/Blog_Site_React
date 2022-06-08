import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: { user: null, isLoggedIn: false, error: null },
  reducers: {
    handleError: (state, action) => {
      state.error = action.payload;
    },
    login: (state, action) => {
      let { isLoggedIn, ...data } = action.payload;
      console.log("data : ", data);
      state.user = data;
      state.isLoggedIn = isLoggedIn;
    },
    logout: (state) => {
      state.user = null;
      state.isLoggedIn = false;
    },
  },
});

export const { login, logout, handleError } = userSlice.actions;
export const selectUser = (state) => state.user.user;
export const selectAuthState = (state) => state.user.isLoggedIn;
export const selectError = (state) => state.user.error;

export default userSlice.reducer;
