import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../slices/authSlice";
import countReducer from "../slices/countSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  count: countReducer,
});

export default rootReducer;
