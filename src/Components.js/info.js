import React, { Component } from "react";

import { Link } from "react-router-dom";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import { Jumbotron } from "react-bootstrap";

class Info extends Component {
  state = {};

  render() {
    return (
      <Jumbotron>
        <div className="container-fluid">
          <div className="row ">
            <div className="col">
              <h3 className="text-shadow">Tech Stack and Dependency</h3>
              <p> Axios</p>
            </div>
            <div className="col">
              <p className="text-shadow">How To Play</p>
              <p className="text-shadow">
                <Link to="/Homepage">
                  <AwesomeButton variant="primary">Learn more</AwesomeButton>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </Jumbotron>
    );
  }
}

export default Info;
