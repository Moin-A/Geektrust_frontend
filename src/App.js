import React, { Component } from "react";
import Config from "./Config.json";
import Startup from "./Components.js/Signuppage";
import ConfiguresStore from "./Store/ConfigureStore";
import { Provider } from "react-redux";
import Navbar from "../src/Components.js/Navbar";
import Info from "./Components.js/info";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Homepage from "./Components.js/HomePage";
import "../src/index.css";

import * as actions from "./Store/Slice/Destination";

const store = ConfiguresStore();

class App extends Component {
  componentDidMount() {
    console.log(Config.VehicleApiEndpoint);
    store.dispatch(
      actions.loadApi({
        url: Config.VehicleApiEndpoint,
        name: "vehicle",
      })
    );
    store.dispatch(
      actions.loadApi({
        url: Config.PlanetsEndpoint,
        name: "planets",
      })
    );

    store.dispatch(
      actions.loadApi({
        url: "https://findfalcone.herokuapp.com/token",
        name: "token",
        method: "POST",
        headers: { Accept: "application/json" },
      })
    );
  }
  render() {
    return (
      <Router>
        <Route path="/info" component={Info} />
        <Provider store={store}>
          <Navbar />
          <Route exact path="/" component={Startup} />
          <Route path="/profilepage" component={Homepage} />
          <Route path="/Homepage" component={Homepage} />
        </Provider>
      </Router>
    );
  }
}

export default App;
