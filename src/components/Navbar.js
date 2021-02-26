import React, { useState, useRef } from "react";
import "../styles/Navbar.css";
import { NavLink } from "react-router-dom";

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
          <NavLink
            activeClassName="selectedNav"
            exact={true}
            className="main-navbar__list_item"
            to="/"
          >
            Inicio
          </NavLink>
          <NavLink
            activeClassName="selectedNav"
            className="main-navbar__list_item"
            to="/About-me"
          >
            Acerca de mi
          </NavLink>
          <NavLink
            activeClassName="selectedNav"
            className="main-navbar__list_item"
            to="/Cv"
          >
            Hoja de Vida
          </NavLink>
          <NavLink
            activeClassName="selectedNav"
            className="main-navbar__list_item"
            to="/Projects"
          >
            Proyectos
          </NavLink>
          <NavLink
            activeClassName="selectedNav"
            className="main-navbar__list_item"
            to="/Contact-me"
          >
            Contacto
          </NavLink>
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
                    <p>Ins</p>
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
