import React from "react";
import "../styles/Projects.css";
import background from "../pages/background.jpg";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const Projects = () => {
  const style = {
    backgroundImage: `url(${background})`,
  };
  return (
    <>
      <div className="main-home__grid" style={style}>
        <div className="main-home__sidebar">
          <Sidebar />
        </div>
        <div className="main-projects__content">
          <Navbar />
          <div className="main-projects">
            <h1>Proyectos</h1>
            <div className="filters">
              <p className="selected">Todos </p>
              <p>Laptop </p>
              <p>Smartphone</p>
            </div>
            <div className="main-projects__grid">
              <div className="project__item">
                <img src="Img/Mockup2.png" alt="" />
                <p>Portafolio</p>
              </div>
              <div className="project__item">
                <img src="Img/Mockup3.png" alt="" />
                <p>Utopicos</p>
              </div>
              <div className="project__item">
                <img src="Img/Mockup4.png" alt="" />
                <p>Acreditación USC</p>
              </div>
              <div className="project__item">
                <img src="Img/Mockup5.png" alt="" />
                <p>Bush.gg</p>
              </div>
              <div className="project__item">
                <img src="Img/Mockup6.png" alt="" />
                <p>MasterPC</p>
              </div>
              <div className="project__item">
                <img src="Img/Mockup7.png" alt="" />
                <p>CodeShop</p>
              </div>
              <div className="project__item">
                <img src="Img/Mockup8.png" alt="" />
                <p>EduKids</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
