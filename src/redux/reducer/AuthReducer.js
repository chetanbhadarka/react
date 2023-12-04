import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  loginState: false,
};

export const AuthReducer = createSlice({
  name: "auth",
  initialState,
  reducers: {
    onLoading: (state, { payload }) => {
      state.loading = payload;
    },
    onLogin: (state, { payload }) => {
      state.loginState = payload;
      state.loading = false;
    },
  },
});

export const { onLoading, onLogin } = AuthReducer.actions;

export default AuthReducer.reducer;
