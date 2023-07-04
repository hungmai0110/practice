"use client"
 import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  backgroundImage: "",
  songName: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setBackgroundImage: (state, action) => {
      state.backgroundImage = action.payload;
    },
    setSongName: (state, action) => {
      state.backgroundImage = action.payload;
    },
  },
});

const { reducer } = authSlice;

export const { setBackgroundImage, setSongName } = authSlice.actions;
export default reducer;
