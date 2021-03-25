import React, { useState, useEffect } from "react";

const ContactForm = ({ sendContactMessage }) => {
  const initStateValue = {
    nombre: "",
    email: "",
    asunto: "",
    mensaje: "",
    validate_num: "",
  };
  const [values, setValues] = useState(initStateValue);
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [total, setTotal] = useState(0);

  const [emailInvalid, setEmailInvalid] = useState(false);
  const [calcInvalid, setCalcInvalid] = useState(false);
  const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMsg();
  };

  const sendMsg = () => {
    if (emailRegex.test(values.email)) {
      if (values.validate_num === total) {
        sendContactMessage({ ...values });
        setEmailInvalid(false);
        setValues({ ...initStateValue });
      } else {
        setCalcInvalid(true);
      }
    } else {
      setEmailInvalid(true);
    }
  };

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

  useEffect(() => {
    validate();
    setValues({ ...initStateValue });
  }, []);

  return (
    <div>
      {emailInvalid ? (
        <p>Por favor digita una dirección de correo valida</p>
      ) : (
        ""
      )}
      {calcInvalid ? <p>Operación incorrecta</p> : ""}
      <form onSubmit={handleSubmit}>
        <div className="flex-box">
          <input
            type="text"
            placeholder="Nombre"
            className="input-name"
            name="nombre"
            onChange={handleInputChange}
            value={values.nombre}
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="input-email"
            name="email"
            onChange={handleInputChange}
            value={values.email}
            type="text"
            required
          />
        </div>
        <input
          type="text"
          placeholder="Asunto"
          className="input-subject"
          name="asunto"
          onChange={handleInputChange}
          value={values.asunto}
          type="text"
          required
        />
        <textarea
          type="text"
          placeholder="Mensaje"
          className="input-message"
          name="mensaje"
          onChange={handleInputChange}
          value={values.mensaje}
          type="text"
          required
        />
        <div className="valid-send">
          <input
            type="text"
            placeholder={num1 + "+" + num2}
            name="validate_num"
            onChange={handleInputChange}
            value={values.validate_num}
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
