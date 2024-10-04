import React from "react";
import about from "./img/free.jpg"; // Ensure to import your image

export default function Fifth() {
  return (
    <div className="container mb-4">
      <div className="row align-items-stretch">
        {/* Column for text */}
        <div className="col-md-6 mb-4 d-flex flex-column">
          <h3 className="section-title bg-white text-start pe-3 fs-3 text-danger fw-bolder mb-3">
            Explore Free Courses
          </h3>

          <p className="mb-5 fw-semibold">
            Embark on your online learning journey at Educat with our free
            short-term courses designed to enhance your skills across various
            in-demand fields. Our programs are crafted to provide foundational
            knowledge and practical insights that will empower you to thrive in
            today’s competitive landscape.
          </p>

          <p className="mb-3 fw-semibold">
            Discover a diverse range of subjects, from technology to business,
            and acquire the expertise needed to stay ahead. Join Educat today
            and unlock a world of learning opportunities that will help you
            reach your full potential!
          </p>

          <a
            className="btn text-light bg-danger py-3 px-5 mt-auto"
            href="about.html"
          >
            Start For Free
          </a>
        </div>

        {/* Column for the image moved to the right */}
        <div className="col-md-6 mb-4">
          <img
            src={about}
            alt="About img"
            className="img-fluid mx-auto d-block" // Center image
          />
        </div>
      </div>
    </div>
  );
}
