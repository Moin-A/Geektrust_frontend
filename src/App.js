import React, { Component } from "react";
import http from "./Service/httpService";
import Config from "./Config.json";
import HomePage from "./Components.js/HomePage";
import Normalize from "./Normalize";

class App extends Component {
  async componentDidMount() {
    const { data: vehicle } = await http.get(Config.VehicleApiEndpoint);
    const { data: planets } = await http.get(Config.PlanetsEndpoint);
    const VehicleData = Normalize(vehicle);
    const PlanetsData = Normalize(planets);
    this.setState({ vehicle, VehicleData, PlanetsData });
  }
  render() {
    return <HomePage />;
  }
}

export default App;
