import React from "react";
import img1 from "./img/cat1.png";
import img2 from "./img/cat2.png";
import img3 from "./img/cat3.png";
import img4 from "./img/cat4.png";
import img5 from "./img/cat5.png";
import img6 from "./img/cat6.png";
import img7 from "./img/cat7.png";
import img8 from "./img/cat8.png";

export default function sixth() {
  return (
    <div className="mb-5">
      <h2 className="text-center text-danger fw-bolder">
        <i class="bi bi-list"></i>CATEGORIES<i class="bi bi-list"></i>
      </h2>
      <div className="card-container">
        <div className="card wallet">
          <div className="overlay"></div>
          <div className="circle">
            <img src={img1} alt="msexcel" />
          </div>
          <p className="fw-bold">Microsoft Excel</p>
        </div>
        <div className="card wallet">
          <div className="overlay"></div>
          <div className="circle">
            <img src={img2} alt="aws" />
          </div>
          <p className="fw-bold">AWS</p>
        </div>
        <div className="card wallet">
          <div className="overlay"></div>
          <div className="circle">
            <img src={img3} alt="python" />
          </div>
          <p className="fw-bold">Python</p>
        </div>
        <div className="card wallet">
          <div className="overlay"></div>
          <div className="circle">
            <img src={img4} alt="java" />
          </div>
          <p className="fw-bold">Java</p>
        </div>
        <div className="card wallet">
          <div className="overlay"></div>
          <div className="circle">
            <img src={img5} alt="web design" />
          </div>
          <p className="fw-bold">Web Design</p>
        </div>
        <div className="card wallet">
          <div className="overlay"></div>
          <div className="circle">
            <img src={img6} alt="web development" />
          </div>
          <p className="fw-bold">Web Development</p>
        </div>
        <div className="card wallet">
          <div className="overlay"></div>
          <div className="circle">
            <img src={img7} alt="my sql" />
          </div>
          <p className="fw-bold">MySql</p>
        </div>
        <div className="card wallet">
          <div className="overlay"></div>
          <div className="circle">
            <img src={img8} alt="ui/ux" />
          </div>
          <p className="fw-bold">UI/UX Design</p>
        </div>
      </div>
      <div className="button-container">
        <a className="btn text-light bg-danger py-3 px-5" href="about.html">
          Explore Courses
        </a>
      </div>
    </div>
  );
}
