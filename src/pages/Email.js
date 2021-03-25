import React from "react";
import background from "../pages/background.jpg";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import "../styles/About.css";

const Email = () => {
  // const style = {
  //   backgroundImage: `url(${background})`,
  // };
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
              RODRIGUEZDANIEL048@GMAIL.COM
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Email;
