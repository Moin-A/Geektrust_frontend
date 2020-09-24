import React from "react";
import Form from "../Utils/Form";
import Joi from "joi-browser";
import ConfirmDialog from "./Dialog";
class Loginform extends Form {
  pattern = /^[a-zA-Z0-9!@#$%&*]{3,25}$/;
  schema = {
    Username: Joi.string().alphanum().min(4).max(30).required(),
    Password: Joi.string().alphanum().min(8).max(30).required(),
  };

  doSubmit() {
    let item = JSON.parse(localStorage.getItem(this.state.data.Username));
    this.setState({ Dialog: true });
    if (item !== null) {
      setTimeout(() => {
        this.setState({ Dialog: false });
      }, 1000);
    }

    this.props.doRouyte(item);
  }

  render() {
    return (
      <React.Fragment>
        <ConfirmDialog title={"Login Success"} open={this.state.Dialog} />
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("Username", "Username")}
          {this.renderInput("Password", "Password", "Password")}
          {this.renderButton("LOGIN")}
        </form>
      </React.Fragment>
    );
  }
}

export default Loginform;

// Username: "", Password: ""
