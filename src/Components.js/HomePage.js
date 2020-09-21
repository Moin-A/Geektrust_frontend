import React, { Component } from "react";
import Slider from "./Slider";
import { MDBCardTitle, MDBBtn, MDBIcon } from "mdbreact";
import StoreContext from "../Context/storeContext";
import { loadApi, selectPlanet } from "../Store/Slice/Destination";
import { connect } from "react-redux";
import Aslider from "./Aweslider";
const Maps = ["First", "Second", "Third", "Fourth"];
class HomePage extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row p-2">
          {Maps.map((item) => (
            <div className="col-lg-3 col-md-3  col-sm-6 ">
              <div className="block-example border border-primary  rounded p-1 mb-2 ">
                <h4 className="text-shadow" style={{ fontSize: "1rem" }}>
                  planet :{" "}
                  <span>
                    {this.props.userinput[item]
                      ? this.props.userinput[item].planetname
                      : "--"}
                  </span>
                </h4>
                <h4 className="text-shadow" style={{ fontSize: "1rem" }}>
                  vehicle :{" "}
                  <span>
                    {" "}
                    {this.props.userinput[item]
                      ? this.props.userinput[item].vehiclename
                      : "--"}
                  </span>
                </h4>
                <Slider destination={item} />
                <Aslider destination={item} />
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
  list: state.Destination.planets || {
    entities: { planets: {} },
    result: {},
  },
  userinput: state.Destination.userinput || {},
});

export default connect(mapStateToProps)(HomePage);
