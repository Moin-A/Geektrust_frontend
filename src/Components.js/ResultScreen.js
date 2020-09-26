import React, { Component } from "react";
import Confetti from "react-confetti";
import { submitfinal } from "../Store/Slice/Destination";
import { connect } from "react-redux";
import http from "../Service/httpService";
import Config from "../Config.json";

class screen extends Component {
  componentDidMount = async () => {
    const body = {
      token: this.props.token.result[0],
      planet_names: Object.values(this.props.userinput).map(
        (x) => x.planetname
      ),
      vehicle_names: Object.values(this.props.userinput).map(
        (x) => x.vehiclename
      ),
    };

    const Totaldistance = Object.values(this.props.userinput).reduce(
      (total, value) => {
        return total + value.vehiclespeed * value.planet_distance;
      },
      0
    );

    const response = await http.request({
      url: Config.findApiEndpoint,
      method: "POST",
      headers: { Accept: "application/json" },
      data: body,
    });

    this.setState({ result: response.data, Totaldistance });
    this.props.submitfinal();
  };
  state = { result: { status: null } };
  renderinput() {
    if (this.state.result.status === null) {
      return (
        <div className="text-center">
          <div className="spinner-border text-primary  center" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      );
    }
    if (this.state.result.status === "false") {
      return (
        <React.Fragment>
          <div className="text-center center text-shadow col">
            <p style={{ fontSize: "4rem" }}>Failed Mission</p>
            <p>Queen was not founD in your expedetion</p>
          </div>
        </React.Fragment>
      );
    }
    if (this.state.result.status === "success") {
      return (
        <React.Fragment>
          <Confetti />
          <div className="text-center center text-shadow col">
            <p style={{ fontSize: "4rem" }}>SUCCESS</p>
            <p>{`Queen was found on the planet ${this.state.result.planet_name}`}</p>
            <p>{`It took the expededion team ${
              this.state.Totaldistance
            } hrs/${Math.round(
              this.state.Totaldistance * 0.0416667
            )} days for the entire journey`}</p>
          </div>
        </React.Fragment>
      );
    }
  }

  render() {
    return <div className="contianer-fluid ">{this.renderinput()}</div>;
  }
}

const mapStateToProps = (state) => ({
  userinput: state.Destination.userinput,
  token: state.Destination.token || { result: { status: null } },
});
const mapDispatchToProps = (dispatch) => ({
  submitfinal: () => {
    dispatch(submitfinal());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(screen);
