import { Carousel } from "react-bootstrap";
import { renderPlanetlist } from "../Store/Slice/Destination";
import { connect } from "react-redux";
import { MDBBtn } from "mdbreact";
import React, { useState } from "react";
function ControlledCarousel(props) {
  const { list, destination, userinput } = props;
  const [index, setIndex] = useState(0);
  const { entities, result } = list;

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} interval={null}>
      {Object.values(entities.planets).map((item, index) => (
        <Carousel.Item key={index}>
          <img
            style={{
              height: "15rem",
              objectFit: "fill",
              backgroundSize: "contain",
            }}
            className="d-block w-100 "
            src={`${item.name}.png`}
            alt="First slide"
          />

          <Carousel.Caption className={"text-shadow m-3"}>
            <h3>{`${item.name}`}</h3>
            <p>
              Distance <span>{`${item.distance}`}</span>
            </p>
          </Carousel.Caption>
          <MDBBtn
            disabled={
              userinput[destination].planetname ||
              userinput[destination].vehicle_max_mileagae < item.distance ||
              !result.includes(item.name)
            }
            onClick={() => props.selectPlanet({ ...item, destination })}
            style={{
              position: "absolute",
              top: "70%",
              left: "35%",
              zIndex: 100,
            }}
            color="info"
          >
            Select
          </MDBBtn>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

const mapStateToProps = (state) => ({
  list: state.Destination.planets || {
    entities: { planets: {} },
    result: [],
  },
  userinput: state.Destination.userinput,
});

const mapDispatchToProps = (dispatch) => ({
  selectPlanet: (item) => dispatch(renderPlanetlist(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ControlledCarousel);
