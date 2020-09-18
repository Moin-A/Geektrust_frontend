import { Carousel } from "react-bootstrap";
import { connect } from "react-redux";
import { MDBBtn, MDBView, MDBMask } from "mdbreact";
import React, { useState } from "react";
function ControlledCarousel({ list }) {
  const [index, setIndex] = useState(0);
  const { entities } = list;
  console.log(entities.planets);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} interval={null}>
      {Object.values(entities.planets).map((item) => (
        <Carousel.Item>
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

          <Carousel.Caption style={{ margin: "3rem" }}>
            <h3>{`${item.name}`}</h3>
            <p>
              Distance <span>{`${item.distance}`}</span>
            </p>
          </Carousel.Caption>
          <MDBBtn
            style={{
              position: "absolute",
              top: "70%",
              left: "35%",
              zIndex: "6776",
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
  list: state.Destination.planets || { entities: { planets: {} }, result: {} },
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps)(ControlledCarousel);
