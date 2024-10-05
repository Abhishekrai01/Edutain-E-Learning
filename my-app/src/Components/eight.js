import React from "react";

export default function eight() {
  return (
    <>
      <h1 className="mb-1 text-center fw-bold text-dark">Frequently Asked Questions about Edutain</h1>

      <div className="container-xxl py-5 category">
        <div className="container">
          <div className="row g-2">
            <div className="col-12">
              <div className="accordion" id="accordionExample">
                {/* Accordion Item 1 */}
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      What is Edutain?
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Edutain is an innovative platform that offers a diverse
                      range of Edutainional resources, including free online
                      courses across various domains. Our mission is to empower
                      learners by providing high-quality content and fostering a
                      community of engaged students.
                    </div>
                  </div>
                </div>

                {/* Accordion Item 2 */}
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Why should I choose Edutain for my learning journey?
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Edutain stands out for its commitment to quality
                      Edutainion. Our courses are designed by industry experts
                      and are tailored to meet the needs of learners at all
                      levels. We emphasize interactivity and engagement,
                      ensuring that you have the best learning experience
                      possible.
                    </div>
                  </div>
                </div>

                {/* Accordion Item 3 */}
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      How many courses can I enroll in at once?
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      You can enroll in multiple courses simultaneously at
                      Edutain, allowing you to customize your learning path
                      based on your interests and schedule.
                    </div>
                  </div>
                </div>

                {/* Accordion Item 4 */}
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      How do I enroll in courses offered by Edutain?
                    </button>
                  </h2>
                  <div
                    id="collapseFour"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      To enroll in our free online courses, simply click the
                      “Sign Up” button on our website and register using your
                      email address or Google Account.
                    </div>
                  </div>
                </div>

                {/* Accordion Item 5 */}
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFive"
                      aria-expanded="false"
                      aria-controls="collapseFive"
                    >
                      What popular courses does Edutain offer?
                    </button>
                  </h2>
                  <div
                    id="collapseFive"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Edutain focuses on in-demand skills and concepts, offering
                      popular courses in:
                      <ul>
                        <li>Data Science</li>
                        <li>Artificial Intelligence</li>
                        <li>Software Development</li>
                        <li>Cloud Computing</li>
                      </ul>
                      Our courses are designed to help learners build
                      industry-relevant knowledge and achieve their professional
                      goals.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
