import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const ContactForm = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [total, setTotal] = useState(0);
  const [calcInvalid, setCalcInvalid] = useState(false);

  const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const validate = () => {
    const num1 = random(1, 15);
    const num2 = random(1, 15);
    setNum1(num1);
    setNum2(num2);
    const sum = num1 + num2;
    const change = sum.toString();
    setTotal(change);
  };

  const sendEmail = (event) => {
    event.preventDefault();
    if (event.target[3].value === total) {
      emailjs
        .sendForm(
          "service_jfk81b4",
          "template_rp9dfoo",
          event.target,
          "zXptHa58HK455wkBi"
        )
        .then(
          Swal.fire({
            position: "center",
            icon: "success",
            title: "El Mensaje se envio con exito!",
            showConfirmButton: false,
            timer: 1500,
          }),
          event.target.reset(),
          validate(),
          setCalcInvalid(false)
        )
        .catch(() =>
          Swal.fire({
            position: "center",
            icon: "error",
            title: "Error al enviar el mensaje",
            showConfirmButton: false,
            timer: 1500,
          })
        );
    } else {
      setCalcInvalid(true);
    }
  };

  useEffect(() => {
    validate();
  }, []);

  return (
    <div>
      {calcInvalid ? (
        <p className="input-operator">Operación incorrecta!</p>
      ) : (
        ""
      )}
      <form onSubmit={sendEmail}>
        <div className="flex-box">
          <input
            type="text"
            placeholder="Nombre"
            className="input-name"
            name="user_name"
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="input-email"
            name="user_email"
            required
          />
        </div>
        <textarea
          type="text"
          placeholder="Mensaje"
          className="input-message"
          name="user_message"
          required
        />
        <div className="valid-send">
          <input
            type="text"
            placeholder={num1 + "+" + num2}
            name="validate_num"
            className="input-validate"
            required
          />
          <button className="send-button hvr-sweep-to-right">
            Enviar mensaje
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
