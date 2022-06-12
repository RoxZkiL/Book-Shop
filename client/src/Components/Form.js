import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ContentForm from "./ContentForm";
import Button from "@mui/material/Button";

const Form = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: "",
    lastname: "",
    email: "",
    phone: "",
    company: "",
  });

  function inputChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  function formSubmit(e) {
    e.preventDefault();
    navigate("/agradecimiento");
  }

  return (
    <>
      <ContentForm />
      <header>
        <h1>Habla con nosotros sobre como impulsar tu negocio</h1>
      </header>
      <form onSubmit={(e) => formSubmit(e)}>
        <label>Nombre</label>
        <input
          onChange={(e) => inputChange(e)}
          type="text"
          name="name"
          value={input.name}
        />
        <label>Apellido</label>
        <input
          onChange={(e) => inputChange(e)}
          type="text"
          name="lastname"
          value={input.lastname}
        />
        <label>Correo electronico</label>
        <input
          onChange={(e) => inputChange(e)}
          type="text"
          name="email"
          value={input.email}
        />
        <label>Numero telefónico</label>
        <input
          onChange={(e) => inputChange(e)}
          type="text"
          name="phone"
          value={input.phone}
        />
        <label>Nombre de la empresa</label>
        <input
          onChange={(e) => inputChange(e)}
          type="text"
          name="company"
          value={input.company}
        />
        <Button variant="outlined">Outlined</Button>
        <button type="submit">Enviar</button>
      </form>
    </>
  );
};

export default Form;
