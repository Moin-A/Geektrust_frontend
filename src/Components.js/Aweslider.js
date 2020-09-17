import React from "react";
import { connect } from "react-redux";
import {
  MDBCarousel,
  MDBCarouselCaption,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBMask,
  MDBBtn,
  MDBCardTitle,
  MDBCardBody,
} from "mdbreact";

const CarouselPage = ({ list }) => {
  const { entities, result } = list;
  console.log("entities", entities);
  return (
    <MDBCarousel
      activeItem={1}
      length={3}
      showControls={true}
      showIndicators={true}
      className="z-depth-1 "
      interval={40000}
      showIndicators={false}
      slide={true}
    >
      <MDBCarouselInner className="mt-2">
        {Object.values(entities.vehicle).map((item, index) => (
          <MDBCarouselItem itemId={index}>
            <MDBView>
              <img
                className="d-block w-100"
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg"
                alt="First slide"
              />
              <MDBMask overlay="black-light" />
            </MDBView>

            <MDBCardBody style={{ margin: 0, padding: 0 }}>
              <MDBCardTitle>{item.name} </MDBCardTitle>
              <MDBBtn color="info">Select</MDBBtn>
            </MDBCardBody>
          </MDBCarouselItem>
        ))}
      </MDBCarouselInner>
    </MDBCarousel>
  );
};

const mapStateToProps = (state) => ({
  list: state.Destination.vehicle || { entities: { vehicle: {} }, result: {} },
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps)(CarouselPage);
