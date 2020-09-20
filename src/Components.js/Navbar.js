import React, { Component } from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
class navbar extends Component {
  state = {};
  render() {
    return (
      <Navbar bg="secondary" variant="dark" sticky="top">
        <Navbar.Brand href="#home">Moin</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end ">
          <Navbar.Text>
            Signed in as: <a>Mark Ottokmxkms</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default navbar;
