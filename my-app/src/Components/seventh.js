import React from "react";
import background from "./img/background.jpg"; // Background image
import teacher from "./img/teacher.jpg"; // Right side image

export default function Seventh() {
  return (
    <div
      className="background-container mb-5"
      
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mb-4">
        <div className="row align-items-stretch">
          {/* Column for text */}
          <div className="col-md-6 mb-4 d-flex flex-column">
            <h3 className="section-title   text-start pe-3 fs-1 text-danger fw-bolder mb-3">
              Become an Instructor
            </h3>

            <p className="mb-5 fw-bold text-light ">
              Are you passionate about sharing your knowledge and helping others
              grow? Join our community of instructors at Edutain and make an
              impact on learners around the world. Whether you are an expert in
              technology, business, design, or any other field, you can inspire
              and Edutaine thousands of students by creating high-quality,
              engaging courses.
            </p>

            <p className="mb-3 fs-3  fw-bold text-dark" style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)', padding: '10px', borderRadius: '8px' }}>
              Why Become an Instructor at Edutain?
            </p>
            <ul className="fw-semibold fs-6 text-dark" style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)', padding: '10px', borderRadius: '8px' }}>
              <li>
                ➔ <strong>Earn Income</strong>: Turn your expertise into a
                sustainable source of income with flexible earnings based on the
                courses you create.
              </li>
              <li>
                ➔ <strong>Global Reach</strong>: Share your knowledge with a
                global audience, reaching learners from all corners of the
                world.
              </li>
              <li>
                ➔ <strong>Work on Your Terms</strong>: Set your own schedule and
                teach what you are passionate about. Work from anywhere at any
                time.
              </li>
              <li>
                ➔ <strong>Professional Growth</strong>: Enhance your teaching
                and communication skills while staying current in your field.
              </li>
              <li>
                ➔ <strong>Comprehensive Support</strong>: Access tools and
                resources that help you create, market, and grow your courses
                effectively.
              </li>
              <li>
                ➔ <strong>Recognition and Impact</strong>: Build your brand and
                reputation as a thought leader and mentor while making a real
                difference in students' lives.
              </li>
              <li>
                ➔ <strong>Community & Networking</strong>: Join a thriving
                community of Edutainors, exchanging ideas and collaborating on
                projects.
              </li>
              <li>
                ➔ <strong>Creative Freedom</strong>: Develop and design your
                courses the way you want, using innovative methods to engage
                students.
              </li>
              
             
            </ul>

            <a
              className="btn text-light bg-danger py-3 px-5 mt-auto"
              href="about.html"
            >
              Join Us
            </a>
          </div>

          {/* Column for the image moved to the right */}
          <div className="col-md-6 mb-4">
            <img
              src={teacher}
              alt="Teacher"
              className="img-fluid mx-auto d-block" // Center image
            />
          </div>
        </div>
      </div>
    </div>
  );
}
