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
                  <button className="main-about__button">
                    <img src="Img/arrow.svg" alt="Down" />
                    Hoja de vida
                  </button>
                </div>

                {/* <p>
                  Hola mi nombre es Daniel Rodriguez, tecnólogo en sistemas de
                  información y estudiante de ingeniería de sistemas en la
                  ciudad Santiago de Cali, con buenos conocimientos en diversos
                  lenguajes de programación como Java, JavaScript y SQL. También
                  cuento con habilidades en Html y Css como también Frameworks
                  Frontend de JavaScript como React y Angular.
                </p>
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
        </div>
      </div>
    </>
  );
};

export default About;
