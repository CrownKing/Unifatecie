import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

// npm i @emailjs/browser

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_kun0z4r",
        "template_c48yp2m",
        form.current,
        "3KTRGr3FH4GxPExUC"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="bgForms">
      <form ref={form} onSubmit={sendEmail}>
        <div className="formsInputs">
          <label>Nome</label>
          <input
            placeholder="Insira seu nome completo"
            type="text"
            name="user_name"
          ></input>
          <label>E-mail</label>
          <input
            placeholder="Insira seu E-mail"
            type="email"
            name="user_email"
          ></input>
          <label>Mensagem</label>
          <textarea
            type="email"
            name="user_email"
            placeholder="Sobre qual curso e qual modalidade você está interessado?"
          ></textarea>
          <button>Enviar</button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
