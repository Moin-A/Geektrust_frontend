import { Carousel } from "react-bootstrap";
import { connect } from "react-redux";
import React, { useState } from "react";
function ControlledCarousel({ list }) {
  const [index, setIndex] = useState(0);
  const { entities } = list;
  console.log(entities.planets);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return ( // prettier-ignore	

    <Carousel activeIndex={index} onSelect={handleSelect} interval={null}>
      {Object.values(entities.planets).map((item) => (
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={`${item.name}.png`}
            alt="First slide"
          />
          <Carousel.Caption>
          
      <h3>{`${item.name}`}</h3>
      <p>Distance</p>
            <p>{`${item.distance}`}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
      ))
    </Carousel>
  ); // prettier-ignore
}

const mapStateToProps = (state) => ({
  list: state.Destination.planets || { entities: { planets: {} }, result: {} },
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps)(ControlledCarousel);
