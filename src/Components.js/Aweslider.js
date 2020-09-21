import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import { connect } from "react-redux";
import { MDBBtn } from "mdbreact";
import { renderVehiclelist } from "../Store/Slice/Destination";
import { propTypes } from "react-bootstrap/esm/Image";

const CarouselPage = (props) => {
  const { list } = props;
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  const { entities, result } = list;
  console.log("entities", entities);
  return (
    <Carousel
      indicators={false}
      activeIndex={index}
      onSelect={handleSelect}
      className="mt-1 rounded"
      interval={null}
    >
      {Object.values(entities.vehicle).map((item) => (
        <Carousel.Item>
          <img
            style={{
              height: "15rem",
              objectFit: "fill",
              backgroundSize: "contain",
            }}
            className="d-block w-100 "
            src={`${item.name}.png`}
            alt={`${item.name}`}
          />

          <Carousel.Caption
            className="text-shadow"
            style={{
              margin: "3rem",
            }}
          >
            <h3>{`${item.name}`}</h3>
            <p>{`Count :${item.total_no}`}</p>
          </Carousel.Caption>
          <MDBBtn
            disabled={item.total_no == 0}
            onClick={() => props.selectVehicle(item)}
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
};

const mapStateToProps = (state) => ({
  list: state.Destination.vehicle || { entities: { vehicle: {} }, result: {} },
});

const mapDispatchToProps = (dispatch) => ({
  selectVehicle: (item) => dispatch(renderVehiclelist(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CarouselPage);
