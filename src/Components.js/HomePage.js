import React, { Component } from "react";
import Slider from "./Slider";
import { MDBBtn } from "mdbreact";
import { submitfinal } from "../Store/Slice/Destination";
import { connect } from "react-redux";
import Dialog from "./Dialog";
import Aslider from "./Aweslider";
const Maps = ["First", "Second", "Third", "Fourth"];
class HomePage extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Dialog
          open={this.props.opendialog}
          title={"SUBMIT"}
          content={"Please confirm to Submit"}
        >
          <MDBBtn>button</MDBBtn>
        </Dialog>

        <div className="row p-2">
          {Maps.map((item, index) => (
            <div className="col-lg-3 col-md-3  col-sm-6 " key={index}>
              <div className="block-example border border-primary  rounded p-1 mb-2 ">
                <h4 className="text-shadow" style={{ fontSize: "1rem" }}>
                  planet :
                  <span>
                    {this.props.userinput[item]
                      ? this.props.userinput[item].planetname
                      : "--"}
                  </span>
                </h4>
                <h4 className="text-shadow" style={{ fontSize: "1rem" }}>
                  vehicle :{" "}
                  <span>
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
            <MDBBtn
              disabled={this.props.count < 8}
              onClick={this.props.submitfinal}
              color="primary col justify-content-center "
            >
              Submit
            </MDBBtn>
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

  count: state.Destination.count,
  userinput: state.Destination.userinput || {},
  opendialog: state.Destination.opendialog,
});
const mapDispatchToProps = (dispatch) => ({
  submitfinal: () => dispatch(submitfinal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
