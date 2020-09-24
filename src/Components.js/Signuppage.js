import React from "react";

import "../index.css";
import { connect } from "react-redux";
import Form from "../Utils/Form";
import Joi from "joi-browser";
import { MDBCardBody } from "mdbreact";

import { setcred } from "../Store/Slice/Destination";

class BackgroundImagePage extends Form {
  schema = {
    Username: Joi.string().alphanum().min(6).max(30).required(),
    Password: Joi.string().alphanum().min(8).max(30).required(),
    Email: Joi.string().email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] },
    }),
    Name: Joi.string().required().label("Name").min(6),
  };

  doRouyte = (item) => {
    this.props.setcred(item);
    setTimeout(() => {
      this.props.history.push({
        pathname: "/info",
        state: { detail: item },
      });
      this.props.setDialog(false);
    }, 2000);
  };

  doSubmit() {
    localStorage.setItem(
      this.state.data.Username,
      JSON.stringify(this.state.data)
    );
    this.props.setDialog(true);
    this.doRouyte(this.state.data);
  }

  render() {
    return (
      <MDBCardBody className="white-text p-2">
        <form onSubmit={this.handleSubmit}>
          <h3 className="text-center">Register</h3>
          <hr className="hr-light" />
          {this.renderInput("Name", "Name")}
          {this.renderInput("Username", "Username")}
          {this.renderInput("Email", "Email")}
          {this.renderInput("Password", "Password", "Password")}
          {this.renderButton("Register")}
        </form>
      </MDBCardBody>
    );
  }
}

const mapStateToProps = (state) => ({
  userinput: state.Destination.userinput,
});
const mapDispatchToProps = (dispatch) => ({
  setcred: (item) => dispatch(setcred(item)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BackgroundImagePage);
