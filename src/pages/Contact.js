import React from "react";
import background from "../pages/background.jpg";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import "../styles/Contact.css";

const Contact = () => {
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
          <div className="main-contact">
            <div className="contact-form">
              <h1 className="contact-title">Contactame</h1>
              <p className="info-text">
                Si tienes alguna pregunta, inquietud o sugerencia no dudes en
                contactarme!
              </p>
              <div className="contact-form__form">
                <div className="flex-box">
                  <input
                    type="text"
                    placeholder="Nombre"
                    className="input-name"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="input-email"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Asunto"
                  className="input-subject"
                />
                <textarea
                  type="text"
                  placeholder="Mensaje"
                  className="input-message"
                />
                <button className="send-button hvr-sweep-to-right">
                  Enviar mensaje
                </button>
              </div>
            </div>
            <div className="contact-map "></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
