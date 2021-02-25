import React, { useState, useRef } from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const sidebarMobile = useRef();

  const handleClose = () => {
    sidebarMobile.current.style.animation = "animation_nav_reverse 0.5s";
    sidebarMobile.current.addEventListener("animationend", () =>
      setOpenSidebar(false)
    );
  };

  return (
    <>
      <div className="main-navbar">
        <ul className="main-navbar__list">
          <li>Inicio</li>
          <li>Acerca de mi</li>
          <li>Hoja de Vida</li>
          <li>Proyectos</li>
          <li>Contacto</li>
          <li>
            <img src="Img/search.svg" alt="Search" />
          </li>
        </ul>

        <div className="responsive">
          <h1 className="main-logo__navbar">Dr</h1>
          <img
            src="Img/align-justify_land.svg"
            alt="Op"
            onClick={() => setOpenSidebar(!openSidebar)}
          />
        </div>
        {openSidebar ? (
          <div className="sidebar-menu" ref={sidebarMobile}>
            <div className="sidebar-menu__content">
              <div className="close__item">
                <img src="Img/x.svg" alt="X" onClick={handleClose} />
              </div>
              <div className="info__content">
                <ul className="sidebar-menu__list">
                  <li>
                    <img src="Img/search.svg" alt="Search" />
                  </li>
                  <li>Inicio</li>
                  <li>Acerca de mi</li>
                  <li>Hoja de Vida</li>
                  <li>Proyectos</li>
                  <li>Contacto</li>
                </ul>
                <div className="networks__mobile">
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
                    <p>In</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Navbar;
