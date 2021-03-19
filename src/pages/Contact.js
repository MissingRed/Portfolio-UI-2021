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
            <h1>Contactame!</h1>
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
