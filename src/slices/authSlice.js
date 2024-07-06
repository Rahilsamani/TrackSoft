import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null,
  token: localStorage.getItem("token")
    ? JSON.parse(localStorage.getItem("token"))
    : null,
  block: localStorage.getItem("block")
    ? JSON.parse(localStorage.getItem("block"))
    : null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setUser(state, value) {
      state.user = value.payload;
    },
    setToken(state, value) {
      state.token = value.payload;
    },
    setBlock(state, value) {
      state.block = value.payload;
    },
  },
});

export const { setUser, setToken, setBlock } = authSlice.actions;

export default authSlice.reducer;
