import React from "react";
import background from "../pages/background.jpg";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import "../styles/About.css";

const About = () => {
  const style = {
    backgroundImage: `url(${background})`,
  };
  return (
    <>
      <div className="main-home__grid" style={style}>
        <div className="main-home__sidebar">
          <Sidebar />
        </div>
        <div className="main-about__content">
          <Navbar />
          <div className="main-about">
            <div className="main-about__container">
              <img src="Img/daniel2.png" alt="Daniel" className="danielrfimg" />
              <div className="main-about__info">
                <h1>Desarrollador, Tester y estudiante</h1>
                <p>
                  Hola mi nombre es Daniel Rodriguez, tecnólogo en sistemas de
                  información y estudiante de ingeniería en sistemas de la
                  ciudad Santiago de Cali, con buenos conocimientos en diversos
                  lenguajes de programación como Java, JavaScript y SQL. También
                  cuento con habilidades en Html y Css como también Frameworks
                  Frontend de JavaScript como React y Angular.
                </p>
                <div className="main-about__container_button">
                  <button className="main-about__button_contact">
                    Contáctame
                  </button>
                  <a
                    className="main-about__button"
                    href="./Documents/CV_DANIEL_RODRIGUEZ.pdf"
                    download
                  >
                    <img src="Img/arrow.svg" alt="Down" />
                    Hoja de vida
                  </a>
                </div>

                {/*
                <div className="flexbox">
                  <a
                    href="https://github.com/MissingRed"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="gitHubicon">
                      <img src="Img/GitIcon.svg" alt="GitHub" />
                    </div>
                  </a>
                </div> */}
              </div>
            </div>
          </div>
          {/* <div className="main-about__skills">
            <div className="main-about__box">
              <h2>ESPECIALIZADO EN</h2>
              <div className="items">
                <div className="item1">
                  <div className="imgItem">
                    <img src="Img/uxui.png" alt="" />
                  </div>
                  <div className="textIttem">
                    <p>UI/UX</p>
                    <p className="descriptionText">
                      Landing Pages, Wireframing, Prototipos, diseño de
                      aplicaciones móviles.
                    </p>
                  </div>
                </div>
                <div className="item1">
                  <div className="imgItem">
                    <img src="Img/html.png" alt="" />
                  </div>
                  <div className="textIttem">
                    <p>HTML/CSS</p>
                    <p className="descriptionText">
                      Responsive Design, Flexbox, Grid
                    </p>
                  </div>
                </div>
                <div className="item1">
                  <div className="imgItem">
                    <img src="Img/ai.png" alt="" />
                  </div>
                  <div className="textIttem">
                    <p>FIGMA/AI</p>
                    <p className="descriptionText">
                      Character Design. Icon Set. Illustration Guide,
                      Illustration Set.
                    </p>
                  </div>
                </div>
                <div className="item1">
                  <div className="imgItem">
                    <img src="Img/react.png" alt="" />
                  </div>
                  <div className="textIttem">
                    <p className="titletext">REACT/FIREBASE</p>
                    <p className="descriptionText">
                      JavaScript, TypeScript, Hooks, Componentes y propiedades
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default About;
