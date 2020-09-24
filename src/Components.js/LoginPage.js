import React from "react";
import Form from "../Utils/Form";
import Joi from "joi-browser";

class Loginform extends Form {
  pattern = /^[a-zA-Z0-9!@#$%&*]{3,25}$/;
  schema = {
    Username: Joi.string().alphanum().min(4).max(30).required(),
    Password: Joi.string().alphanum().min(8).max(30).required(),
  };

  doSubmit() {
    let item = localStorage.getItem(this.state.data.Username);
    if (item) {
      setTimeout(() => {
        this.props.history.push({
          pathname: "/profilepage",
          state: { detail: this.state.data.Username },
        });
      }, 5000);
    } else {
      this.setState({
        title: "User is not registered",
        content: "please head to Signup page",
        Dialog: true,
      });
      setTimeout(() => {
        this.setState({ Dialog: false });
      }, 2000);
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.renderInput("Username", "Username")}
        {this.renderInput("Password", "Password", "password")}
        {this.renderButton("LOGIN")}
      </form>
    );
  }
}

export default Loginform;
