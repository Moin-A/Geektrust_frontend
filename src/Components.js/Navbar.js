import React, { Component } from "react";
import Dialog from "./Dialog";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { connect } from "react-redux";
import { resetCounter } from "../Store/Slice/Destination";
import { Navbar, Button } from "react-bootstrap";
import { MDBBtn } from "mdbreact";

const Header = ({ resetCounter }) => {
  return (
    <Navbar bg="secondary" variant="dark" sticky="top">
      <Navbar.Brand href="#home">Moin</Navbar.Brand>
      <Switch>
        <Route exact path="/Homepage">
          <MDBBtn onClick={() => resetCounter()} color="info">
            Reset
          </MDBBtn>
        </Route>
      </Switch>

      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end ">
        <Navbar.Text>
          Signed in as: <a>Mark Ottokmxkms</a>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
};

const mapStateToProps = (state) => ({
  clone: state.Destination.clone || {},
});

const mapDispatchToProps = (dispatch) => ({
  resetCounter: (clone) => dispatch(resetCounter(clone)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
