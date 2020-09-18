import React, { Component } from "react";
import Planets from "./Components.js/HomePage";

import ConfiguresStore from "./Store/ConfigureStore";
import { Provider } from "react-redux";
import Aslider from "./Components.js/Aweslider";

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
        <Planets />
      </Provider>
    );
  }
}

export default App;
