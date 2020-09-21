import React, { Component } from "react";
import Slider from "./Slider";
import { MDBCardTitle, MDBBtn, MDBIcon } from "mdbreact";
import StoreContext from "../Context/storeContext";
import { loadApi, selectPlanet } from "../Store/Slice/Destination";
import { connect } from "react-redux";
import Aslider from "./Aweslider";
const Maps = ["First", "second", "third", "fourth"];
class HomePage extends Component {
  static contextType = StoreContext;
  render() {
    return (
      <div className="container-fluid">
        <div className="row p-2">
          {Maps.map((item) => (
            <div className="col-lg-3 col-md-6  col-auto-sm-6 ">
              <div className="block-example border border-primary  rounded p-1 mb-2 ">
                <MDBCardTitle className="text-center text-shadow " tag="h1">
                  Planets
                </MDBCardTitle>
                <Slider destination={item} />
                <Aslider index={item} />
              </div>
            </div>
          ))}
        </div>
        <div className="row p-2">
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
