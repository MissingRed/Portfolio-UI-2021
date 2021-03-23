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
            {/* <div className="contact-img">
              <img src="Img/pc-contact.jpg" alt="Contact" />
            </div> */}
            <div className="grid-contact">
              <div className="contact-img">
                <div className="contact-filter">
                  <h1>CONTACTAME</h1>
                </div>
                <div className="abosolute">
                  <div className="content-1">
                    <img src="Img/phone.svg" alt="phone" />
                    <p>Puedes contactarme al numero telefonico</p>
                    <p className="contact-number">+57 305 3907367</p>
                  </div>
                  <div className="content-2">
                    <img src="Img/message.svg" alt="message" />
                    <p>Enviar Mensaje directo</p>
                    <button>Enviar mensaje</button>
                  </div>
                </div>
              </div>
            </div>
            {/* <h1>Contactame!</h1>
            <div className="form-Contact">
              <form>
                <p>Nombre</p>
                <input type="text" />
                <p>Apellido</p>
                <input type="text" />
                <p>Correo</p>
                <input type="text" />
                <p>Comentarios/Preguntas</p>
                <textarea rows="4" cols="50" />
                <button>Enviar Mensaje</button>
              </form>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
