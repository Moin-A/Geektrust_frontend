import React from "react";
import Form from "../Utils/Form";
import { connect } from "react-redux";
import Joi from "joi-browser";
import ConfirmDialog from "./Dialog";
import { MDBCardBody } from "mdbreact";
import { setcred } from "../Store/Slice/Destination";
class Loginform extends Form {
  pattern = /^[a-zA-Z0-9!@#$%&*]{3,25}$/;
  schema = {
    Username: Joi.string().alphanum().min(4).max(30).required(),
    Password: Joi.string().alphanum().min(8).max(30).required(),
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
    let item = JSON.parse(localStorage.getItem(this.state.data.Username));
    if (item == null) {
      this.setState({
        Dialog: true,
        title: "User not Registered",
        content: "Please Register First",
      });
      setTimeout(() => {
        this.setState({ Dialog: false });
      }, 1000);
      return;
    }
    if (item.Password == this.state.data.Password) {
      this.props.setDialog(true);
      setTimeout(() => {
        this.props.setDialog(false);
      }, 2000);
      this.doRouyte(item);
    } else {
      this.setState({
        Dialog: true,
        title: "try Again",
        content: "wrong password",
      });
      setTimeout(() => {
        this.setState({ Dialog: false });
      }, 2000);
    }
  }

  render() {
    return (
      <React.Fragment>
        <ConfirmDialog
          open={this.state.Dialog}
          title={this.state.title}
          content={this.state.content}
        />
        <MDBCardBody className="white-text p-2">
          <form onSubmit={this.handleSubmit}>
            <h3 className="text-center">Register</h3>
            <hr className="hr-light" />

            {this.renderInput("Username", "Username")}

            {this.renderInput("Password", "Password", "Password")}
            {this.renderButton("Register")}
          </form>
        </MDBCardBody>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  userinput: state.Destination.userinput,
});
const mapDispatchToProps = (dispatch) => ({
  setcred: (item) => dispatch(setcred(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Loginform);
