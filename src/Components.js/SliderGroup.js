import React, { Component } from "react";
import Slider from "./Slider";

class HomePage extends Component {
  static contextType = StoreContext;
  render() {
    return (
      <div className="container-fluid p-3">
        <div className="row">
          <div className="col-sm">
            <Slider />
          </div>
          <div className="col-sm">
            <Slider />
          </div>
          <div className="col-sm">
            <Slider />
          </div>
          <div className="col-sm">
            <Slider />
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
