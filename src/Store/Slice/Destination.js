import { createSlice } from "@reduxjs/toolkit";
import * as actionsApi from "../api";
import _ from "lodash";

const slice = createSlice({
  name: "loadVehicleList",
  initialState: {},
  reducers: {
    CallSuccess: (state, { payload }) => {
      state[Object.keys(payload.entities).toString()] = payload;
    },
    selectPlanet: (state, { payload }) => {
      state.planets.result = state.planets.result.filter(
        (item) => item !== payload.name
      );
      state.userinput = {
        ...state.userinput,
        [payload.destination]: { planetname: payload.name },
      };
    },

    selectVehicle: (state, { payload }) => {
      --state.vehicle.entities.vehicle[payload.name].total_no;
      let ons = JSON.parse(JSON.stringify(state));
      debugger;
    },
  },
});

export default slice.reducer;

export const loadApi = (url, name) => (dispatch, getState) => {
  dispatch(
    actionsApi.apiCallBegan({
      url,
      name,
    })
  );
};
export const renderPlanetlist = (url) => (dispatch, getState) => {
  dispatch(slice.actions.selectPlanet(url));
};

export const renderVehiclelist = (url) => (dispatch, getState) => {
  dispatch(slice.actions.selectVehicle(url));
};

export const { CallSuccess } = slice.actions;
