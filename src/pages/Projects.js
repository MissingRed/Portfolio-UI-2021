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
            <div className="first">
              <span></span>
              <img src="Img/Mockup2.png" alt="" className="first__img" />
              <div className="buttonAll">
                <img src="Img/grid.svg" alt="" className="grid__img" />
                <p>VER TODOS</p>
              </div>
            </div>
            <div className="second">
              <div className="content__second">
                <h2>DANIELRF</h2>
                <p>Portafoli web Daniel Rodriguez - 2021</p>
                <div className="description__git">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                  accusamus ipsa asperiores, tempora provident quam aperiam
                  commodi ea corporis, vitae porro est officia nam! Officia
                  blanditiis cupiditate reiciendis cum quae?
                </div>
                <p>Repositorio: </p>
                <p>Contribuyentes: </p>
              </div>
              <div className="buttons__project">
                <div className="ant_next__button">
                  <img src="Img/left.svg" alt="" />
                  PREV
                </div>
                <div className="ant_next__button">
                  NEXT
                  <img src="Img/right.svg" alt="" />
                </div>
              </div>
            </div>
            {/* <h1>Proyectos</h1>
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
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
