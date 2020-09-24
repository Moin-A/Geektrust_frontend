import React from "react";
import ConfirmDialog from "./Dialog";
import "../index.css";
import { connect } from "react-redux";
import Form from "../Utils/Form";
import Joi from "joi-browser";
import { MDBContainer, MDBRow, MDBCol, MDBCardBody, MDBCard } from "mdbreact";
import Loginform from "./LoginPage";
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
      this.setState({ Dialog: false });
    }, 2000);
  };

  doSubmit() {
    localStorage.setItem(this.state.data.Name, JSON.stringify(this.state.data));
    this.setState({ Dialog: true });
    this.doRouyte(this.state.data);
  }

  render() {
    return (
      <div className="bg">
        <MDBContainer>
          <ConfirmDialog
            open={this.state.Dialog}
            title={this.state.title}
            content={this.state.content}
          />
          <MDBRow>
            <MDBCol md="4" className="mt-4 shadow-box-example z-depth-5">
              <MDBCard id="classic-card">
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
              </MDBCard>
            </MDBCol>
            <MDBCol md="4" className="mt-4 shadow-box-example z-depth-5">
              <MDBCard id="classic-card">
                <MDBCardBody className="white-text p-2">
                  <h3 className="text-center">Login</h3>
                  <hr className="hr-light" />
                  <Loginform doRouyte={this.doRouyte} />
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
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
