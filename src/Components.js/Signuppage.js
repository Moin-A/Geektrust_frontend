import React, { Component } from "react";
import "../index.css";
import Form from "../Utils/Form";
import Joi from "joi-browser";
import { MDBContainer, MDBRow, MDBCol, MDBCardBody, MDBCard } from "mdbreact";
import Loginform from "./LoginPage";

class BackgroundImagePage extends Form {
  schema = {
    Username: Joi.string().alphanum().min(6).max(30).required(),
    Password: Joi.string().alphanum().min(6).max(30).required(),
    Email: Joi.string().email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] },
    }),
    Name: Joi.string().required().label("Name").min(6),
  };

  doSubmit() {
    this.setState({ Dialog: true });
    setTimeout(() => {
      this.props.history.push({
        pathname: "/profilepage",
        state: { detail: this.state.data.Name },
      });
      this.setState({ Dialog: false });
    }, 5000);
  }
  render() {
    return (
      <div className="bg">
        <MDBContainer>
          <MDBRow>
            <MDBCol md="4" className="mt-4 shadow-box-example z-depth-5">
              <MDBCard id="classic-card">
                <MDBCardBody className="white-text p-2">
                  <form>
                    <h3 className="text-center">Register</h3>
                    <hr className="hr-light" />
                    {this.renderInput("Name", "Name")}
                    {this.renderInput("Username", "Username")}
                    {this.renderInput("Email", "Email")}
                    {this.renderInput("Password", "Password", "password")}
                    {this.renderButton("Register")}
                  </form>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol md="4" className="mt-4 shadow-box-example z-depth-5">
              <MDBCard id="classic-card">
                <MDBCardBody className="white-text p-2">
                  <h3 className="text-center">Login</h3>
                  <hr className="hr-light" />
                  <Loginform />
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}

export default BackgroundImagePage;

//  <div className="bg">
// <MDBContainer>
//   <MDBRow>
//     <MDBCol md="4" className="mt-4 shadow-box-example z-depth-5">
//       <MDBCard id="classic-card">
//         <MDBCardBody className="white-text">
//           <form>
//             <h3 className="text-center">Register</h3>
//             <hr className="hr-light" />
//             <label
//               htmlFor="defaultFormRegisterNameEx"
//               className="grey-text"
//             >
//               Your name
//             </label>
//             <input
//               type="text"
//               id="defaultFormRegisterNameEx"
//               className="form-control"
//             />
//             {}
//             <br />
//             <label
//               htmlFor="defaultFormRegisterEmailEx"
//               className="grey-text"
//             >
//               Your email
//             </label>
//             <input
//               type="email"
//               id="defaultFormRegisterEmailEx"
//               className="form-control"
//             />
//             <br />
//             <label
//               htmlFor="defaultFormRegisterConfirmEx"
//               className="grey-text"
//             >
//               Confirm your email
//             </label>
//             <input
//               type="email"
//               id="defaultFormRegisterConfirmEx"
//               className="form-control"
//             />
//             <br />
//             <label
//               htmlFor="defaultFormRegisterPasswordEx"
//               className="grey-text"
//             >
//               Your password
//             </label>
//             <input
//               type="password"
//               id="defaultFormRegisterPasswordEx"
//               className="form-control"
//             />
//             <div className="text-center mt-4">
//               <MDBBtn color="secondary" type="submit">
//                 Register
//               </MDBBtn>
//             </div>
//           </form>
//         </MDBCardBody>
//       </MDBCard>
//     </MDBCol>
//   </MDBRow>
// </MDBContainer>
// </div>
// );
// };
//  */}
