import React, { Component } from "react";
import Config from "../src/Config.json";
import Startup from "./Components.js/Register_Signup";
import ConfiguresStore from "./Store/ConfigureStore";
import { Provider } from "react-redux";
import Navbar from "../src/Components.js/Navbar";
import resultScreen from "./Components.js/ResultScreen";
import Info from "./Components.js/info";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Homepage from "./Components.js/HomePage";
import "../src/index.css";

import * as actions from "./Store/Slice/Destination";

const store = ConfiguresStore();

class App extends Component {
  componentDidMount() {
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
        url: Config.tokenApiEndpoint,
        name: "token",
        method: "POST",
        headers: { Accept: "application/json" },
      })
    );
  }
  render() {
    return (
      <Router>
        <Provider store={store}>
          <Navbar />
          <Route path="/info" component={Info} />
          <Route exact path="/" component={Startup} />
          <Route path="/profilepage" component={Homepage} />
          <Route path="/Homepage" component={Homepage} />
          <Route path="/resultpage" component={resultScreen} />
        </Provider>
      </Router>
    );
  }
}

export default App;
