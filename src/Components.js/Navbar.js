import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import { connect } from "react-redux";
import { resetCounter } from "../Store/Slice/Destination";
import { Navbar, Button } from "react-bootstrap";
import { MDBBtn } from "mdbreact";

const Header = ({ userinput, resetCounter }) => {
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
      <Switch>
        <Route exact path="/resultpage">
          <Link to="/Homepage">
            <Button color="primary">BACK</Button>
          </Link>
        </Route>
      </Switch>

      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end ">
        <Navbar.Text>
          Signed in as: <span>{userinput.Username}</span>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
};

const mapStateToProps = (state) => ({
  userinput: state.Destination.setcredentials || { Username: null },
});

const mapDispatchToProps = (dispatch) => ({
  resetCounter: () => dispatch(resetCounter()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
