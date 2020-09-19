import React, { Component } from "react";
import Login from "./Components.js/LoginPage";
import Startup from "./Components.js/Signuppage";
import ConfiguresStore from "./Store/ConfigureStore";
import { Provider } from "react-redux";
import Aslider from "./Components.js/Aweslider";
import "../src/index.css";

import * as actions from "./Store/Destination";
// import Slider from "./Components.js/Slider";

const store = ConfiguresStore();

class App extends Component {
  componentDidMount() {
    store.dispatch(
      actions.loadApi("https://findfalcone.herokuapp.com/vehicles", "vehicle")
    );
    store.dispatch(
      actions.loadApi("https://findfalcone.herokuapp.com/planets", "planets")
    );
  }
  render() {
    return (
      <Provider store={store}>
        <Startup />
      </Provider>
    );
  }
}

export default App;
