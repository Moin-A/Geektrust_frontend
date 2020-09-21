import { Carousel } from "react-bootstrap";
import { renderPlanetlist } from "../Store/Slice/Destination";
import { connect } from "react-redux";
import { MDBBtn, MDBView, MDBMask } from "mdbreact";
import React, { useState } from "react";
function ControlledCarousel(props) {
  const { list, destination } = props;
  const [index, setIndex] = useState(0);
  const { entities, result } = list;
  console.log("resukt", result);

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

          <Carousel.Caption className={"text-shadow m-3"}>
            <h3>{`${item.name}`}</h3>
            <p>
              Distance <span>{`${item.distance}`}</span>
            </p>
          </Carousel.Caption>
          <MDBBtn
            disabled={result.indexOf(item.name) === -1}
            onClick={() => props.selectPlanet(item)}
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

const mapDispatchToProps = (dispatch) => ({
  selectPlanet: (item) => dispatch(renderPlanetlist(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ControlledCarousel);
