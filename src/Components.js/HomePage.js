import React, { Component } from "react";
import Slider from "./Slider";
import { MDBCardTitle, MDBBtn, MDBIcon } from "mdbreact";
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
              <MDBCardTitle className="text-center ">Planets</MDBCardTitle>
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
        <div className="row">
          <div className="col justify-content-center mt-2 ">
            <MDBBtn color="primary col justify-content-center ">Submit</MDBBtn>
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
