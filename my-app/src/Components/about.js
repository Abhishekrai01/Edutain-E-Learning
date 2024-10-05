import React from "react";
import img1 from "./img/free.jpg";

const AboutUs = () => {
  return (
    <div >
      <div
        className="container-fluid py-2 mb-4 page-header"
        style={{ backgroundImage: `url(${img1})`, backgroundSize: "cover" }}
      >
        <div className="container py-2">
          <div className=" justify-content-center">
            <div className=" text-center">
              <h1 className="display-3 fw-bold text-warning animated slideInDown">
                About Us
              </h1>
              <nav aria-label="breadcrumb">
                {/* Add breadcrumb here if needed */}
              </nav>
            </div>
          </div>
        </div>
      </div>
      {/* Header End */}

      {/* About Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-12 wow fadeInUp" data-wow-delay="0.3s">
             
              <h1 className="mb-4" style={{ color: "#fb873f" }}>
                Welcome to Edutain
              </h1>
              <p className="mb-4">
                At Edutain, we believe in providing engaging and innovative
                learning experiences that fit your lifestyle and learning
                preferences. Join us as we redefine education and unlock your
                potential with our dynamic online courses.
              </p>
              <p className="mb-4">
                Welcome to Edutain, where learning transcends boundaries. Our
                mission is to empower individuals globally through inclusive and
                pioneering education. Here’s what distinguishes us:
              </p>

              <h3 className="mb-4">Our Vision</h3>
              <p className="mb-4">
                At Edutain, we envision a future where education is available to
                all, regardless of location, background, or circumstances. We
                aim to break down barriers and make learning a transformative
                experience for everyone.
              </p>

              <h3 className="mb-4">A Commitment to Excellence</h3>
              <p className="mb-4">
                We are dedicated to delivering high-quality education. Our team
                collaborates with industry experts and educators to develop
                courses that adhere to the highest standards, ensuring our
                learners gain valuable and up-to-date knowledge.
              </p>

              <h3 className="mb-4">Empowering Learners</h3>
              <p className="mb-4">
                We believe in the transformative power of education. Edutain is
                designed to empower individuals to follow their passions,
                advance their careers, and develop new skills in a supportive
                and dynamic environment.
              </p>

              <h3 className="mb-4">Innovation in Learning</h3>
              <p className="mb-4">
                Embracing technology, we provide innovative learning methods and
                resources. From interactive modules to live sessions, we are
                committed to offering a cutting-edge educational experience that
                promotes engagement and knowledge retention.
              </p>

              <h3 className="mb-4">Community-Centric Approach</h3>
              <p className="mb-4">
                Edutain is more than just a platform for courses; it is a
                vibrant community. We promote collaboration, discussions, and
                knowledge sharing among learners, fostering a culture of growth
                and camaraderie.
              </p>

              <h3 className="mb-4">Diverse and Inclusive Education</h3>
              <p className="mb-4">
                We celebrate diversity in perspectives, cultures, and ideas. Our
                wide range of course offerings caters to various interests and
                skill levels, ensuring that everyone finds a learning path that
                resonates with them.
              </p>

              <h3 className="mb-4">Continuous Improvement</h3>
              <p className="mb-4">
                We are committed to continuous evolution. Feedback from our
                learners helps us enhance our platform, ensuring it remains
                dynamic, responsive, and aligned with the changing needs of our
                users.
              </p>

              <p className="mt-5 mb-4">
                Thank you for being a part of Edutain. Together, let's embark on
                a journey of lifelong learning and growth.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* About End */}
    </div>
  );
};

export default AboutUs;
