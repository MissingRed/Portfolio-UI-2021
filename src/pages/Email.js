import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import "../styles/About.css";

const Email = () => {
  return (
    <>
      <div className="main-home__grid">
        <div className="main-home__sidebar">
          <Sidebar />
        </div>
        <div className="main-about__content">
          <Navbar />
          <div className="main-about">
            <a
              className="email-danielrf"
              href="mailto: rodriguezdaniel048@gmail.com"
            >
              rodriguezdaniel048@gmail.com
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Email;
