import React, { Component } from "react";
import Slider from "./Slider";
import { connect, provider } from "react-redux";
class HomePage extends Component {
  state = {};
  render() {
    console.log(this.props);
    return (
      <div className="container-fluid p-3">
        <div class="row">
          <div class="col-sm">
            <Slider />
          </div>
          <div class="col-sm">
            <Slider />
          </div>
          <div class="col-sm">
            <Slider />
          </div>
          <div class="col-sm">
            <Slider />
          </div>
        </div>
      </div>
    );
  }
}
connect()(HomePage);
export default HomePage;
