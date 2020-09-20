import { createSlice } from "@reduxjs/toolkit";
import * as actionsApi from "../api";

const slice = createSlice({
  name: "selectPlanet",
  initialState: {},
  reducers: {
    selectPlanet: (state, action) => {
      state[action.payload] = action.payload;
    },
  },
});

export default slice.reducer;

export const selectPlanet = (url) => (dispatch, getState) => {
  // if (getState().Destination.vehicle) return;
  console.log("url", url);
  dispatch(actionsApi.selectPlanet(url));
};

export const { loadvehicleApi, CallSuccess } = slice.actions;
