import { Carousel } from "react-bootstrap";
import { connect } from "react-redux";
import React, { useState } from "react";
function ControlledCarousel({ list }) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return ( // prettier-ignore	
    <Carousel activeIndex={index} onSelect={handleSelect} interval={null}>
      {Object.values(list.result).map((item) => (
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1598245615049-c86df18526ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
            alt="First slide"
          />
          <Carousel.Caption>
      <h3>{item}</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
      ))
    </Carousel>
  ); // prettier-ignore
}

const mapStateToProps = (state) => ({
  list: state.Destination.planets || { entities: {}, result: {} },
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps)(ControlledCarousel);
