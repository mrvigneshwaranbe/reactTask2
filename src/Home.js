import React from "react";
import { Col, Row } from "react-bootstrap";
import { Carousel } from 'react-bootstrap';


const Home = () => {
  return (
      <Row className="justify-content-center align-items-center">
        <Col lg={12}>
          <Carousel>
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-100"
                src={require("./img/pic1.jpg")}
                alt="First slide"
                height="2050vh"
                fluid
              />
              <Carousel.Caption>
                <h1>THE HOTEL GRAND</h1>
                <h2>Centrally located with connectivity, of Railway station and Coimbatore Airport.</h2>
                <h2>Make your stay.. A grand way</h2>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-100"
                src={require("./img/pic2.jpg")}
                alt="First slide"
                height="2050vh"
                fluid
              />
              <Carousel.Caption>
                <h1>GRAND SWIMMING POOL</h1>
                <h2>We provide high quality food at reasonable price.</h2>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-100"
                src={require("./img/pic3.jpg")}
                alt="Second slide"
                height="2050vh"
                fluid
              />

            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-100"
                src={require("./img/pic4.jpg")}
                alt="Third slide"
                height="2050vh"
                fluid
              />

            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
  );
};

export default Home;