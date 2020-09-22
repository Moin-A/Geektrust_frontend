import React, { Component } from "react";
import Dialog from "./Dialog";
import { connect } from "react-redux";
import { resetCounter } from "../Store/Slice/Destination";
import { Navbar, Button } from "react-bootstrap";
import { MDBBtn } from "mdbreact";

const Header = (props) => {
  return (
    <Navbar bg="secondary" variant="dark" sticky="top">
      <Navbar.Brand href="#home">Moin</Navbar.Brand>
      <MDBBtn onClick={() => props.resetCounter()} color="info">
        Select
      </MDBBtn>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end ">
        <Navbar.Text>
          Signed in as: <a>Mark Ottokmxkms</a>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
};

// export default Header;
// class Header extends Component {
//   state = {};

//   render() {
//     console.log(this.props);
//     console.log("ssss", this.props.ResetCounter);
//     return (
//       <Navbar bg="secondary" variant="dark" sticky="top">
//         <Navbar.Brand href="#home">Moin</Navbar.Brand>
//         <MDBBtn onClick={() => this.props.resetCounter()} color="info">
//           Select
//         </MDBBtn>
//         <Navbar.Toggle />
//         <Navbar.Collapse className="justify-content-end ">
//           <Navbar.Text>
//             Signed in as: <a>Mark Ottokmxkms</a>
//           </Navbar.Text>
//         </Navbar.Collapse>
//       </Navbar>
//     );
//   }
// }

const mapStateToProps = (state) => ({
  dialog: state.Destination.opendialog,
});

const mapDispatchToProps = (dispatch) => ({
  resetCounter: () => dispatch(resetCounter()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
