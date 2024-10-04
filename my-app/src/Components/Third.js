import React from "react";
import icon1 from "./img/icon1.jpg";
import icon2 from "./img/icon2.jpg";
import icon3 from "./img/icon3.jpg";
import icon4 from "./img/icon4.jpg";

export default function Third() {
  return (
    <>
      <div className="mb-4">
        <h2 className="text-center d-block p-2 fw-bold text-warning mb-1 fs-1">
          Invest in Your Professional Goals with Educat
        </h2>
        <h3 className="text-center d-block p-2 fw-bold text-dark mb-4 fs-6">
          Get unlimited access to over 90% of courses, projects,
          specializations, and professional certificates on Coursera, taught by
          top instructors.
        </h3>

        <div className="container">
          <div className="row">
            {/* Card 1 */}
            <div className="col-md-3 mb-4">
              <div className="card_box d-block p-2 text-bg-primary">
                <img
                  src={icon1}
                  alt="Card 1"
                  className="img-fluid mx-auto d-block mb-2" // Center image and add margin
                />
                <h5 className="text-dark fw-bold text-center">
                  Learn anything
                </h5>
                <p className="text-dark fw-italian text-center">
                  Explore any interest or trending topic, take prerequisites,
                  and advance your skills
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-md-3 mb-4">
              <div className="card_box d-block p-2 text-bg-primary">
                <img
                  src={icon2} // Use the imported image
                  alt="Card 2"
                  className="img-fluid mx-auto d-block mb-4"
                />
                <h5 className="text-dark fw-bold text-center">Save money</h5>
                <p className="text-dark fw-italian text-center">
                  Spend less money on your learning if you plan to take multiple
                  courses this year
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-md-3 mb-4">
              <div className="card_box d-block p-2 text-bg-primary">
                <img
                  src={icon3} // Use the imported image
                  alt="Card 3"
                  className="img-fluid mx-auto d-block mb-5"
                />
                <h5 className="text-dark fw-bold text-center">
                  Flexible learning
                </h5>
                <p className="text-dark fw-italian text-center">
                  Learn at your own pace, move between multiple courses, or
                  switch to a different course
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="col-md-3 mb-4">
              <div className="card_box d-block p-2 text-bg-primary">
                <img
                  src={icon4} // Use the imported image
                  alt="Card 4"
                  className="img-fluid mx-auto d-block mb-2"
                />
                <h5 className="text-dark fw-bold text-center">
                  Unlimited certificates
                </h5>
                <p className="text-dark fw-italian text-center">
                  Earn a certificate for every learning program that you
                  complete at no additional cost
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
