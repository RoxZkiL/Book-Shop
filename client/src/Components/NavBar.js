import React from "react";
import image from "./media/image.png";

const NavBar = () => {
  return (
    <>
      <div>
        <img src={image} alt="not found" />
        <a href="#descripcion">Descripción</a>
        <a href="#materiales">Materiales</a>
        <a href="#testimonio">Testimonio</a>
        <a href="#precio">Precio</a>
      </div>
    </>
  );
};

export default NavBar;
