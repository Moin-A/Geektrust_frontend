import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import { connect } from "react-redux";
import { MDBBtn } from "mdbreact";
import { renderVehiclelist } from "../Store/Slice/Destination";

const CarouselPage = (props) => {
  const { list, destination, userinput } = props;

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  const { entities, result } = list;
  console.log(list, userinput[destination].vehiclename);
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
              margin: "2rem",
            }}
          >
            <h3>{`${item.name}`}</h3>
            <p>{`Count :${item.total_no}`}</p>
            <p>{`Max Dist :${item.max_distance}`}</p>
          </Carousel.Caption>
          <MDBBtn
            disabled={item.total_no == 0 || userinput[destination].vehiclename}
            onClick={() => props.selectVehicle({ ...item, destination })}
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
  list: state.Destination.vehicle || {
    entities: { vehicle: {} },
    result: {},
    userinput: {},
  },
  userinput: state.Destination.userinput || {},
});

const mapDispatchToProps = (dispatch) => ({
  selectVehicle: (item) => dispatch(renderVehiclelist(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CarouselPage);
