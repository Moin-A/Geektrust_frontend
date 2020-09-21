import { createSlice } from "@reduxjs/toolkit";
import * as actionsApi from "../api";
import _ from "lodash";

const slice = createSlice({
  name: "loadVehicleList",
  initialState: {
    userinput: {
      First: {
        planet_distance: null,
        vehicle_max_mileagae: null,
        planetname: null,
        vehiclename: null,
      },
      Second: {
        planet_distance: null,
        vehicle_max_mileagae: null,
        planetname: null,
        vehiclename: null,
      },
      Third: {
        planet_distance: null,
        vehicle_max_mileagae: null,
        planetname: null,
        vehiclename: null,
      },
      Fourth: {
        planet_distance: null,
        vehicle_max_mileagae: null,
        planetname: null,
        vehiclename: null,
      },
    },
  },
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
        [payload.destination]: {
          ...state.userinput[payload.destination],
          planetname: payload.name,
          planet_distance: payload.distance,
        },
      };
    },

    selectVehicle: (state, { payload }) => {
      --state.vehicle.entities.vehicle[payload.name].total_no;
      state.vehicle.result = state.vehicle.result.filter(
        (item) => item !== payload.name
      );

      state.userinput = {
        ...state.userinput,
        [payload.destination]: {
          ...state.userinput[payload.destination],
          vehiclename: payload.name,
          vehicle_max_mileagae: payload.max_distance,
        },
      };
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
