import React from "react";
import background from "../pages/background.jpg";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import "../styles/Contact.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const Contact = () => {
  const style = {
    backgroundImage: `url(${background})`,
  };
  const position = [3.42158, -76.5205];

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
            <div className="contact-map">
              <MapContainer center={position} zoom={7} scrollWheelZoom={true}>
                <TileLayer
                  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.basemaps.cartocdn.com/rastertiles/dark_all/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                  <Popup>
                    <center>🏠</center>
                    <br /> Daniel Rodriguez
                  </Popup>
                </Marker>
              </MapContainer>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
