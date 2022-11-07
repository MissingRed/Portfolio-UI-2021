import React from "react";
import "../styles/Sidebar.css";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div className="main-sidebar">
        <NavLink className="main-logo" to="/">
          <img src="Img/Logo.svg" alt="" />
        </NavLink>
        <div className="networks">
          <a
            href="https://www.linkedin.com/in/daniel-rodriguez-33481815b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>In</p>
          </a>
          <a
            href="https://github.com/MissingRed"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>Git</p>
          </a>
          <a
            href="https://twitter.com/MissingRed07"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>Tw</p>
          </a>
          <a
            href="https://www.instagram.com/daniel31168/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>Ins</p>
          </a>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
