import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userDetail: null,
};

export const UserReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserDetail: (state, { payload }) => {
      state.userDetail = payload;
    },
    onLogoutUserReducer: () => initialState,
  },
});

export const { setUserDetail, onLogoutUserReducer } = UserReducer.actions;

export default UserReducer.reducer;
