import { createSlice } from "@reduxjs/toolkit";
import * as actionsApi from "../api";

const slice = createSlice({
  name: "loadVehicleList",
  initialState: {},
  reducers: {
    CallSuccess: (state, action) => {
      state[Object.keys(action.payload.entities).toString()] = action.payload;
    },
  },
});

export default slice.reducer;

export const loadApi = (url, name) => (dispatch, getState) => {
  // if (getState().Destination.vehicle) return;
  dispatch(
    actionsApi.apiCallBegan({
      url,
      name,
    })
  );
};

export const selectPlanet = (url) => (dispatch, getState) => {
  // if (getState().Destination.vehicle) return;
  dispatch(actionsApi.selectPlanet(url));
};

export const { loadvehicleApi, CallSuccess } = slice.actions;
