import React from "react";
import { Carousel } from "react-bootstrap";
import "./Carousel.css";

const CarouselBS = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://s2.glbimg.com/L0KQWQxCHfBlJUVsLmfKy0Zq3bU=/e.glbimg.com/og/ed/f/original/2018/03/09/inception.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h1 className="title">Inception</h1>
            <h4 className="title">Christopher Nolan</h4>
            <h4 className="title"> Sci-Fi, Action</h4>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL65YywXhi9J9Bs1FcTYyPLyf3jqSnTr-o-7Agbi4NQA&usqp=CAU&ec=48600113"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h1 className="title2">Lucy</h1>
            <h4 className="title2">Morgan Freeman</h4>
            <h4 className="title2">Sci fi</h4>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i0.wp.com/thinkmonsters.com/speakinghuman/media/wp-content/uploads/John-Wick-Posters-Rule.jpg?fit=1280%2C640&ssl=1"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h1>John Wick</h1>
            <h4 className="title3">Keanu Reeves</h4>
            <h4 className="title3">Action</h4>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselBS;
