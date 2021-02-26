import React from "react";
import "../styles/Sidebar.css";

const Sidebar = () => {
  return (
    <>
      <div className="main-sidebar">
        <h1 className="main-logo">Dr</h1>
        <div className="networks">
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
