import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

function CarouselContainer () {
  return (
    <Carousel>
      <Carousel.Item interval={1500}>
        <img
          className="d-block w-100"
          src={"./images/carouselItem1.jpg"}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <img
          className="d-block w-100"
          src={"./images/carouselItem2.jpg"}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <img
          className="d-block w-100"
          src={"./images/carouselItem3.jpg"}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}
export default CarouselContainer;
