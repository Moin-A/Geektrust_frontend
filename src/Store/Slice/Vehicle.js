import { createSlice } from "@reduxjs/toolkit";
import * as actionsApi from "../api";

const slice = createSlice({
  name: "select",
  initialState: {},
  reducers: {
    selectPlanet: (state, action) => {
      state.category = [action.payload];
    },
  },
});

export default slice.reducer;

export const renderPlanetlist = (url) => (dispatch, getState) => {
  // if (getState().Destination.vehicle) return;

  dispatch(slice.actions.selectPlanet(url));
};

export const { selectPlanet } = slice.actions;
