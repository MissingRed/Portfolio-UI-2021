import React from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="main-navbar">
        <ul>
          <li>Inicio</li>
          <li>Acerca de mi</li>
          <li>Hoja de Vida</li>
          <li>Proyectos</li>
          <li>Contacto</li>
          <li>
            <img src="Img/search.svg" alt="Search" />
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
