import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <section>
        <p>
          Nuestro software es de clase mundial el cual permite la creación y
          gestión de presupuesto y planificacion de ejecucion de manera fácil,
          rápida y segura.
        </p>
        <p>Rentabiliza tu negocio de Proyectos de construccion o ensamblado</p>
        <Link to="/formulario">
          <button>SOLICITAR</button>
        </Link>
      </section>
    </>
  );
};
