import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Gallery from "./pages/Gallery";



const Placeholder = ({ title }) => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#101923] px-5">
      <div className="text-center">
        <div className="text-5xl font-black text-[#f5a623]">
          {title}
        </div>

        <p className="mt-4 text-gray-400">
          This page is under development.
        </p>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route
        path="/about"
        element={<About />}
      />

      <Route
        path="/courses"
        element={<Courses />}
      />

      <Route
        path="/courses/apply"
        element={<Placeholder title="Apply Now" />}
      />

      <Route
        path="/gallery"
        element={<Gallery />}
      />

      <Route
        path="/team"
        element={<Placeholder title="Our Team" />}
      />

      <Route
        path="/contact"
        element={<Placeholder title="Contact Us" />}
      />
    </Routes>
  );
};

export default App;