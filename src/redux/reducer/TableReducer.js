import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dashboardTable: [],
};

export const TableReducer = createSlice({
  name: "table",
  initialState,
  reducers: {
    setDashboardTableData: (state, { payload }) => {
      state.dashboardTable = payload;
    },
  },
});

export const { setDashboardTableData } = TableReducer.actions;

export default TableReducer.reducer;
