import Joi from "joi-browser";
import React, { Component } from "react";
import INput from "../common/Input";
import { Button } from "react-bootstrap";

class Form extends Component {
  state = {
    title: "Registration successfull",
    content: "Thank you for registering",
    data: { Username: "", Password: "", Name: "", Email: "" },
    errors: {},
    Dialog: false,
  };
  validate = () => {
    const option = { abortEarly: false };
    const { error } = Joi.validate(this.state.data, this.schema, option);
    if (!error) {
      return null;
    }
    const errors = {};
    for (let item of error.details) {
      errors[item.path[0].name] = item.message;
    }
    return errors;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    this.doSubmit();
  };
  handleChange = ({ currentTarget: input }) => {
    const { errors } = this.state;
    errors[input.name] = this.validateProperty(input);
    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data, errors: errors || {} });
  };

  validateProperty = ({ value, name }) => {
    const obj = { [name]: value };
    const schema = {
      [name]: this.schema[name],
    };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  renderButton(label) {
    return (
      <div className="text-center mt-4">
        <Button
          type="submit"
          disabled={this.validate()}
          className="btn btn-primary col"
        >
          {label}
        </Button>
      </div>
    );
  }

  renderInput(name, label, type = "text", formtype) {
    const { errors, data } = this.state;
    return (
      <INput
        type={type}
        name={name}
        label={label}
        onChange={this.handleChange}
        value={data[name]}
        error={errors[name]}
      />
    );
  }
}

export default Form;
