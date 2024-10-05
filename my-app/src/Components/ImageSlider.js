import React from "react";
import Carousel from "react-bootstrap/Carousel";
import carouselImage1 from "./img/carousel-1.jpg";
import carouselImage2 from "./img/carousel-2.jpg";
import BlackOverlay from "./BlackOverlay";

function UncontrolledExample() {
  return (
    <Carousel className="mb-3">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={carouselImage1}
          alt="Best E-learning platform"
        />
        <BlackOverlay />
        <Carousel.Caption className="text-start">
          <div className="col-sm-10 col-lg-8">
            <h5 className="text-uppercase text-warning fw-bold animated slideInDown">
              Transform Your Future with Online Learning
            </h5>
            <h1 className="display-3 text-white fw-bold animated slideInDown">
              Acquire In-Demand Skills Through Free Courses and Certifications
            </h1>
            <p className="text-white fw-bold pb-2">
              Unlock a diverse array of courses tailored to elevate your
              expertise in technology, business, arts, and beyond. Begin your
              journey to success today!
            </p>
            <div className="d-flex flex-wrap">
              <a
                href="/"
                className="btn btn-warning py-md-3 px-md-5 me-3 animated slideInLeft"
              >
                About Us
              </a>
              <a
                href="/"
                className="btn btn-light py-md-3 px-md-5 animated slideInRight"
              >
                Join Family
              </a>
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={carouselImage2}
          alt="Engaging learning experience"
        />
        <BlackOverlay />
        <Carousel.Caption className="text-start">
          <div className="col-sm-10 col-lg-8">
            <h5 className="text-uppercase text-warning fw-bold animated slideInDown">
              Welcome to EDUTAIN!
            </h5>
            <h1 className="display-3  text-white fw-bold animated slideInDown">
              Discover the Future of Learning, Where Knowledge Meets Adventure
            </h1>
            <p className="text-white fw-bold pb-2">
              Unlock your potential with interactive lessons, engaging quizzes,
              and hands-on projects. Experience an edutainional journey that
              fuels your passion for knowledge and prepares you for success.
            </p>
            <div className="d-flex flex-wrap">
              <a
                href="/"
                className="btn btn-warning py-md-3 px-md-5 me-3 animated slideInLeft"
              >
                About Us
              </a>
              <a
                href="/"
                className="btn btn-light py-md-3 px-md-5 animated slideInRight"
              >
                Join Family
              </a>
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;
