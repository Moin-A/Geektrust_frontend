import React, { Component } from "react";
import Login from "./Components.js/LoginPage";
import Startup from "./Components.js/Signuppage";
import ConfiguresStore from "./Store/ConfigureStore";
import { Provider } from "react-redux";
import Navbar from "../src/Components.js/Navbar";
import Info from "./Components.js/info";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBNavLink,
  MDBContainer,
  MDBMask,
  MDBView,
} from "mdbreact";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Homepage from "./Components.js/HomePage";
import Aslider from "./Components.js/Aweslider";
import "../src/index.css";

import * as actions from "./Store/Slice/Destination";
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
