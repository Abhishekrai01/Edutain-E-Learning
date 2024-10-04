import React from "react";

export default function footer() {
  return (
    <>
      <div className="container-fluid bg-dark text-light footer pt-5 mt-5">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-4 col-md-6">
              <h4 className="text-white mb-3">Quick Link</h4>
              <p>
                <a className="text-light" href="about.html">
                  About Us
                </a>
              </p>
              <p>
                <a className="text-light" href="contact.html">
                  Contact Us
                </a>
              </p>
              <p>
                <a className="text-light" href="/">
                  Privacy Policy
                </a>
              </p>
              <p>
                <a className="text-light" href="/">
                  Terms & Condition
                </a>
              </p>
              <p>
                <a className="text-light" href="/">
                  FAQs & Help
                </a>
              </p>
            </div>
            <div className="col-lg-4 col-md-6">
              <h4 className="text-white mb-3">Contact</h4>
              <p className="mb-2">
                <i className="fa fa-map-marker-alt me-3"></i>Nilmatha,Lucknow,Uttar Pradesh, India
              </p>
              <p className="mb-2">
                <i className="fa fa-phone-alt me-3"></i>+91 6307038964
              </p>
              <p className="mb-2">
                <i className="fa fa-envelope me-3"></i>abhishekkumarrai010@gmail.com
              </p>
              <div className="d-flex pt-2">
                <a className="btn btn-outline-light btn-social" href="/">
                  <i className="fab fa-twitter"></i>
                </a>
                <a className="btn btn-outline-light btn-social" href="/">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a className="btn btn-outline-light btn-social" href="/">
                  <i className="fab fa-youtube"></i>
                </a>
                <a className="btn btn-outline-light btn-social" href="/">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <h4 className="text-white mb-3">Subscribe to our Newsletter</h4>
              <p>
                Subscribe now and join our growing community of learners
                committed to lifelong education!
              </p>
              <div
                className="position-relative mx-auto"
                style={{ maxWidth: "400px" }}
              >
                <form action="#">
                  <input
                    className="form-control border-0 w-100 py-3 ps-4 pe-5"
                    type="email"
                    placeholder="Your email"
                    required
                  />
                  <button
                    type="submit"
                    className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="copyright"></div>
        </div>
        <div className="col-md-11 text-center  mb-3 mb-md-0">
          &copy;{" "}
          <a className="border-bottom" href="index.html">
            Edutain
          </a>
          , All Right Reserved.
        </div>
      </div>
    </>
  );
}
