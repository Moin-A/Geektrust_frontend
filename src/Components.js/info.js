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
            <div className=" text-shadow col-lg-6 col-md-3  col-sm-6">
              <h2 style={{ fontSize: "2rem" }}>Dependency List</h2>
              <p> Axios</p>
            </div>
            <div className="col-lg-6 col-md-3  col-sm-6 text-shadow">
              <h2 style={{ fontSize: "2rem" }}>Game Interlude</h2>
              <p>This is a simple game of combinations</p>
              <p>
                Our problem is set in the planet of Lengaburu...in the distant
                distant galaxy of Tara B. After the recent war with neighbouring
                planet Falicornia, King Shan has exiled the Queen of Falicornia
                for 15 years.
              </p>
              <p>
                Queen Al Falcone is now in hiding. But if King Shan can find her
                before the years are up, she will be exiled for another 15
                years....
              </p>
              <p>
                King Shan has received intelligence that Al Falcone is in hiding
                in one of these 6 planets - DonLon, Enchai, Jebing, Sapir,
                Lerbin & Pingasor. However he has limited resources at his
                disposal & can send his army to only 4 of these planets.
              </p>
              <h2 style={{ fontSize: "2rem" }}>Game Interlude</h2>
              <p>You will be given a set of 4 Expedetion choices</p>
              <p>
                Start by choosing the vehicle first, the planet will be disabled
                until the vehicle is chosen
              </p>
              <p>
                You have to choose a vehicle and a planet for each of the 4
                expedetion
              </p>
              <p>
                You cannot choose same planet twice, The button will be disabled
                in such cases
              </p>

              <p>
                will have limited set of vehicle , so you have to choose among
                them, the count of each vehicle differs
              </p>
              <p>
                click on reset ro reset your game and click on submit to submit
                your final choices
              </p>
              <p className="text-shadow">
                <Link to="/Homepage">
                  <AwesomeButton variant="primary">Start Game</AwesomeButton>
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
