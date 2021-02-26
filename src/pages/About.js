import React from "react";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import background from "../pages/background.jpg";
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
        <div className="main-home__content">
          <Navbar />
          <div className="main-about">
            <div className="main-about__container">
              <img src="Img/user.jpg" alt="Daniel" />
              <div className="main-about__info">
                <h1>Desarrollador, Tester y estudiante</h1>
                <p>
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
                  {/* <div className="facebookicon">
                    <img src="Img/facebookIcon.svg" alt="Facebook" />
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
