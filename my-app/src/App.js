import Navbar from "./Components/Navbar";
import ImageSlider from "./Components/ImageSlider";
import Third from "./Components/Third";
import Fourth from "./Components/fourth";
import Fifth from "./Components/fifth";
import Sixth from "./Components/sixth";
import Seventh from "./Components/seventh";
import Eight from "./Components/eight";
import Footer from "./Components/footer";
import CourseCard from "./Components/coursecard";
import AboutUs from "./Components/about";
import Contact from "./Components/contact";
import Team from "./Components/team"

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />

      {/* Define Routes to switch between Home and Course */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <ImageSlider />
              <Third />
              <Fourth />
              <Fifth />
              <Sixth />
              <Seventh />
              <Eight />
            </>
          }
        />
        <Route path="/course" element={<CourseCard />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/team" element={<Team />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
