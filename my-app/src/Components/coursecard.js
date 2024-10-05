import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  FaStar,
  FaUserGraduate,
  FaUser,
  FaClock,
  FaChevronRight,
} from "react-icons/fa";
import course1 from "./img/course-1.jpg";
import course2 from "./img/course-2.jpg";
import course3 from "./img/course-3.jpg";
import course4 from "./img/course-4.jpg";
import course5 from "./img/course-5.jpg";
import course6 from "./img/course-6.jpg";
import course7 from "./img/course-7.jpg";
import course8 from "./img/course-8.jpg";
import course9 from "./img/course-9.jpg";
import course10 from "./img/course-10.jpg";
import course11 from "./img/course-11.jpg";
import course12 from "./img/course-12.png";

const CourseCard = ({
  title,
  learners,
  duration,
  price,
  rating,
  level,
  imgSrc,
  isFree,
}) => {
  return (
    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
        
      <div className="course-item shadow">
        <div className="position-relative overflow-hidden text-light image">
          <img className="img-fluid" src={imgSrc} alt={title} />
          <div
            style={{
              position: "absolute",
              top: "15px",
              left: "16px",
              fontSize: "10px",
              borderRadius: "3px",
              backgroundColor: isFree ? "#fb873f" : "#0ed44c",
            }}
            className="px-2 py-1 fw-bold text-uppercase"
          >
            {isFree ? "FREE" : "PAID"}
          </div>
        </div>
        <div className="p-2 pb-0">
          <h5 className="mb-1">
            <a href="single.html" className="text-dark">
              {title}
            </a>
          </h5>
        </div>
        <div className="d-flex">
          <small className="flex-fill text-center py-1 px-2">
            <FaStar className="text-warning me-2" />
            {rating}
          </small>
          <small className="flex-fill text-center py-1 px-2">
            <FaUserGraduate className="me-2" />
            {learners}+ Learners
          </small>
          <small className="flex-fill text-center py-1 px-2">
            <FaUser className="me-2" />
            {level}
          </small>
        </div>
        <div className="d-flex">
          <small className="flex-fill text-left p-2 px-2">
            <FaClock className="me-2" />
            {duration} Hrs
          </small>
          <small className="py-1 px-2 fw-bold fs-6 text-center">
            ₹ {price}
          </small>
          <small
            className="text-primary py-1 px-2 fw-bold fs-6"
            style={{ float: "right" }}
          >
            <a href="/">Enroll Now </a>
            <FaChevronRight className="me-2 fs-10" />
          </small>
        </div>
      </div>
    </div>
  );
};

const Courses = () => {
  const courseData = [
    {
      title: "HTML Course for Beginners",
      learners: "5.8L",
      duration: "2.0",
      price: 0,
      rating: 4.55,
      level: "Beginner",
      imgSrc: course1,
      isFree: true,
    },
    {
      title: "Front End Development-CSS",
      learners: "5.2L",
      duration: "4.0",
      price: 199,
      rating: 4.55,
      level: "Beginner",
      imgSrc: course2,
      isFree: false,
    },
    {
      title: "Introduction to JavaScript",
      learners: "76L",
      duration: "2.5",
      price: 0,
      rating: 4.46,
      level: "Beginner",
      imgSrc: course3,
      isFree: true,
    },
    {
      title: "Python Programming",
      learners: "3.3L",
      duration: "4.0",
      price: 199,
      rating: 3.54,
      level: "Beginner",
      imgSrc: course4,
      isFree: false,
    },
    {
      title: "SQL for Data Science",
      learners: "5.8L",
      duration: "2.0",
      price: 0,
      rating: 4.55,
      level: "Beginner",
      imgSrc: course5,
      isFree: true,
    },
    {
      title: "ChatGPT for Beginners",
      learners: "5.8L",
      duration: "2.0",
      price: 0,
      rating: 4.55,
      level: "Beginner",
      imgSrc: course6,
      isFree: true,
    },
    {
      title: "AWS for Beginers",
      learners: "5.8L",
      duration: "2.0",
      price: 0,
      rating: 4.55,
      level: "Beginner",
      imgSrc: course7,
      isFree: true,
    },
    {
      title: "Microsoft Azure Essentals",
      learners: "5.8L",
      duration: "2.0",
      price: 0,
      rating: 4.55,
      level: "Beginner",
      imgSrc: course8,
      isFree: true,
    },
    {
      title: "Introduction to MS Excel",
      learners: "5.8L",
      duration: "2.0",
      price: 0,
      rating: 4.55,
      level: "Beginner",
      imgSrc: course9,
      isFree: true,
    },
    {
      title: "Statistics For Data Science",
      learners: "5.8L",
      duration: "2.0",
      price: 0,
      rating: 4.55,
      level: "Beginner",
      imgSrc: course10,
      isFree: true,
    },
    {
      title: "Java Programming",
      learners: "5.8L",
      duration: "2.0",
      price: 0,
      rating: 4.55,
      level: "Beginner",
      imgSrc: course11,
      isFree: true,
    },
    {
      title: "C for Beginers",
      learners: "5.8L",
      duration: "2.0",
      price: 0,
      rating: 4.55,
      level: "Beginner",
      imgSrc: course12,
      isFree: true,
    },
  ];

  return (
    <div className="container-xxl py-5">
      <div className="container">
        {/* Header Section */}
       
        {/* Courses Section */}
        <div className="row g-5 py-3">
          {courseData.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
