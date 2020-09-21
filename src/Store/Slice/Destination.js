import { createSlice } from "@reduxjs/toolkit";
import * as actionsApi from "../api";

const slice = createSlice({
  name: "loadVehicleList",
  initialState: {},
  reducers: {
    CallSuccess: (state, action) => {
      state[Object.keys(action.payload.entities).toString()] = action.payload;
    },
    selectPlanet: (state, action) => {
      state.planets.result = state.planets.result.filter(
        (item) => item !== action.payload.name
      );
    },

    selectVehicle: (state, action) => {
      state.vehicle.entities.vehicle[action.payload.name].total_no =
        action.payload.total_no - 1;
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
export const renderPlanetlist = (url) => (dispatch, getState) => {
  // if (getState().Destination.vehicle) return;
  console.log("sj");
  dispatch(slice.actions.selectPlanet(url));
};

export const renderVehiclelist = (url) => (dispatch, getState) => {
  // if (getState().Destination.vehicle) return;

  dispatch(slice.actions.selectVehicle(url));
};

export const { CallSuccess } = slice.actions;
