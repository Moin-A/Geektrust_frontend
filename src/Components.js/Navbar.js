import React, { Component } from "react";
import Dialog from "./Dialog";
import { Navbar, Nav, Container, NavDropdown, Button } from "react-bootstrap";
class navbar extends Component {
  state = {};
  render() {
    return (
      <Navbar bg="secondary" variant="dark" sticky="top">
        <Navbar.Brand href="#home">Moin</Navbar.Brand>
        <Button>Reset</Button>
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
