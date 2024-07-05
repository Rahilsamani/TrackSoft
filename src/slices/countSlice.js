import { createSlice } from "@reduxjs/toolkit";

const countInitialState = {
  count: localStorage.getItem("count")
    ? JSON.parse(localStorage.getItem("count"))
    : 0,
};

const countSlice = createSlice({
  name: "count",
  initialState: countInitialState,
  reducers: {
    setCount(state, action) {
      state.count = action.payload;
    },
  },
});

export const { setCount } = countSlice.actions;
export default countSlice.reducer;
