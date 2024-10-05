import React from "react";
import img1 from "./img/profile-pic.png";

const TeamMember = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-4 align-items-center">
          <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="team-item bg-light">
              <div className="overflow-hidden text-center pt-5">
                <img
                  className="img-fluid"
                  src={img1}
                  alt="Abhishek Kumar Rai"
                  style={{ height: "500px", width: "800px" }}
                />
              </div>
              <div
                className="position-relative d-flex justify-content-center"
                style={{ marginTop: "-23px" }}
              >
                <div className="bg-light d-flex justify-content-center pt-2 px-1">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm-square btn-primary mx-1"
                    href="https://www.linkedin.com/in/abhishek-kumar-rai-77140924b/"
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm-square btn-primary mx-1"
                    href="mailto:abhishekkumarrai010@gmail.com"
                  >
                    <i className="fa fa-envelope"></i>
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm-square btn-primary mx-1"
                    href="https://github.com/Abhishekrai01"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
              <div className="text-center p-4">
                <h5 className="mb-0">Abhishek Kumar Rai</h5>
                <small>Founder</small>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="bg-light p-4">
              <h4>Professional Summary</h4>
              <p>
                Disciplined and committed National Cadet Corps Cadet with a
                strong foundation in web development and proficiency in various
                programming languages. Currently pursuing a Bachelor's degree in
                Computer Applications with a focus on Data Science and AI.
                Skilled in utilizing cutting-edge technologies to develop
                innovative solutions, demonstrating strong leadership and
                teamwork abilities.
              </p>
              <h4>Education</h4>
              <p>
               <b> Bachelor of Computer Applications in Data Science & Artificial
                Intelligence</b>
                <br />
                Babu Banarasi Das University, Lucknow
                <br />
                Expected Graduation: 2025
              </p>
              <h4>Proffesional Experience</h4>
              <p>
                <b>Web Development Intern Balaji Infotech  Pvt Ltd</b> <br />
                [March, 2024] - [June, 2024] (4 months) <br />
                <i class="bi bi-arrow-right-circle-fill "></i>  Developed and
                maintained websites using HTML, CSS, JavaScript,    neand React.js. <br /> 
                <i class="bi bi-arrow-right-circle-fill  "></i> Collaborated with the design team to implement user-friendly
                interfaces. <br /><i class="bi bi-arrow-right-circle-fill "></i> Debugged and optimized code to enhance website
                performance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
