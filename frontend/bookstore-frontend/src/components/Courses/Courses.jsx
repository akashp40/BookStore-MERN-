import React from "react";
import NavBar from "../NavBar";
import Course from "../Course";
import Footer from "../Footer";

function Courses() {
  return (
    <>
      <NavBar />
      <div className="min-h-screen">
        <Course />
      </div>
      <Footer />
    </>
  );
}

export default Courses;
