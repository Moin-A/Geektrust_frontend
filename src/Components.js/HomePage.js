import React, { Component } from "react";
import Slider from "./Slider";
import StoreContext from "../Context/storeContext";
import { loadApi } from "../Store/Destination";
import { connect, provider } from "react-redux";
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
const mapStateToProps = (state) => ({
  state,
});

const mapDispatchToProps = (dispatch) => ({
  loadBugs: () => dispatch(loadApi()),
});
export default connect(mapStateToProps)(HomePage);
