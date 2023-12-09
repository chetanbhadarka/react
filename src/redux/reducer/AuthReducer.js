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
    onLogoutAuthReducer: () => initialState,
  },
});

export const { onLoading, onLogin, onLogoutAuthReducer } = AuthReducer.actions;

export default AuthReducer.reducer;
