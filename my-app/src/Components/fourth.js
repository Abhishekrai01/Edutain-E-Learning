import React from "react";
import about from "./img/about.jpg";

export default function Fourth() {
  return (
    <div className="container mb-5">
      <div className="row align-items-stretch">
        {" "}
        {/* Added align-items-stretch */}
        {/* Column for the image */}
        <div className="col-md-6 mb-4">
          <img
            src={about}
            alt="About img"
            className="img-fluid mx-auto d-block" // Center image
            
          />
        </div>
        <div className="col-md-6 mb-4 d-flex flex-column">
          {" "}
          {/* Added d-flex and flex-column */}
          <h6 className="section-title bg-white text-start pe-3 fs-3 mb-0">
            About Us<i className="bi bi-info-circle ms-2 custom-icon"></i>
          </h6>
          <h1 className="mb-2 text-about">Welcome to Edutain</h1>
          <p className="mb-1 fw-semibold">
            At Edutain, we believe in creating accessible and engaging learning
            experiences that adapt to your unique schedule and preferred
            learning style. Join us in shaping the future of Edutainion and
            unlock your potential with our diverse range of immersive online
            courses designed to inspire and empower.
          </p>
          
          <div className="row gy-2 gx-4 mb-2">
            <div className="col-sm-6">
              <p className="mb-0">
                <i className="fa fa-arrow-right me-2"></i>Expert Instructors
              </p>
            </div>
            <div className="col-sm-6">
              <p className="mb-0">
                <i className="fa fa-arrow-right me-2"></i>Live Interactive
                Sessions
              </p>
            </div>
            <div className="col-sm-6">
              <p className="mb-0">
                <i className="fa fa-arrow-right me-2"></i>Comprehensive Course
                Catalog
              </p>
            </div>
            <div className="col-sm-6">
              <p className="mb-0">
                <i className="fa fa-arrow-right me-2"></i>Community Engagement
              </p>
            </div>
            <div className="col-sm-6">
              <p className="mb-0">
                <i className="fa fa-arrow-right me-2"></i>Personalized Learning
                Paths
              </p>
            </div>
            <div className="col-sm-6">
              <p className="mb-0">
                <i className="fa fa-arrow-right me-2"></i>Certification and
                Recognition
              </p>
            </div>
          </div>
          <a className="btn text-light bg-danger py-3 px-5 mt-auto" href="about.html">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}
