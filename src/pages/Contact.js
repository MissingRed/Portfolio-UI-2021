import React from "react";
import background from "../pages/background.jpg";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import "../styles/Contact.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { db } from "../Data/Base";
import ContactForm from "../components/ContactForm";
import Swal from "sweetalert2";

const Contact = () => {
  const position = [3.42158, -76.5205];

  const sendContactMessage = async (linkObject) => {
    try {
      await db.collection("Bandeja de entrada").doc().set(linkObject);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "El Mensaje se envio con exito!",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Error al enviar el mensaje",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <>
      <div className="main-home__grid">
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
                <ContactForm {...{ sendContactMessage }} />
              </div>
            </div>
            <div className="contact-map">
              <MapContainer center={position} zoom={7} scrollWheelZoom={false}>
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
