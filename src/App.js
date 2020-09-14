import React, { Component } from "react";
import HomePage from "./Components.js/HomePage";
import ConfiguresStore from "./Store/ConfigureStore";
import { Provider } from "react-redux";

import * as actions from "./Store/Destination";

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
        <HomePage />
      </Provider>
    );
  }
}

export default App;
