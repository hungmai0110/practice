"use client"
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";

const rootReducer = {
  authReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
