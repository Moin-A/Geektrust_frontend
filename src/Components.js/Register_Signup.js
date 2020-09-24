import React, { Component } from "react";
import Signining from "./Signuppage";
import ConfirmDialog from "./Dialog";
import Login from "./LoginPage";
import setcred from "../Store/Slice/Destination";
import { connect } from "react-redux";
import { MDBContainer, MDBRow, MDBCol, MDBCard } from "mdbreact";

class register_signup extends Component {
  state = {
    title: "Register",
    content: "Thank you for Registering",
    Dialog: false,
  };
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
                <Signining
                  history={this.props.history}
                  setDialog={(Dialog) => this.setState({ Dialog })}
                />
              </MDBCard>
            </MDBCol>
            <MDBCol md="4" className="mt-4 shadow-box-example z-depth-5">
              <MDBCard id="classic-card">
                <Login
                  history={this.props.history}
                  setDialog={(Dialog) => this.setState({ Dialog })}
                />
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({
  setcred: (item) => dispatch(setcred(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(register_signup);
