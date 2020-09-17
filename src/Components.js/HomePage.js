import React, { Component } from "react";
import Slider from "./Slider";
import { MDBCardTitle } from "mdbreact";
import StoreContext from "../Context/storeContext";
import { loadApi } from "../Store/Destination";
import { connect, provider } from "react-redux";
import { Card } from "react-bootstrap";
import Aslider from "./Aweslider";
class HomePage extends Component {
  static contextType = StoreContext;
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-3  ">
            <div className="block-example border border-primary  rounded p-1 ">
              <MDBCardTitle className="text-center">Planets</MDBCardTitle>
              <Slider />
              <Aslider />
            </div>
          </div>
          <div className="col-3  ">
            <div className="block-example border border-primary p-1 rounded ">
              <MDBCardTitle className="text-center">Planets</MDBCardTitle>
              <Slider />
              <Aslider />
            </div>
          </div>
          <div className="col-3  ">
            <div className="block-example border border-primary p-1 rounded ">
              <MDBCardTitle className="text-center">Planets</MDBCardTitle>
              <Slider />
              <Aslider />
            </div>
          </div>
          <div className="col-3  ">
            <div className="block-example border border-primary p-1 rounded">
              <MDBCardTitle className="text-center">Planets</MDBCardTitle>
              <Slider />
              <Aslider />
            </div>
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
