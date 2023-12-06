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
    onLogout: () => initialState,
  },
});

export const { onLoading, onLogin, onLogout } = AuthReducer.actions;

export default AuthReducer.reducer;
