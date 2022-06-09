import React from "react";
import { LoremIpsum } from "react-lorem-ipsum";
import image from "./media/image.png";

const Testimony = () => {
  return (
    <>
      <section>
        <p>Titulo "Testimonio"</p>
        <div>
          <img src={image} alt="not found" />
          <legend>
            <p>
              <LoremIpsum p={1} avgSentencesPerParagraph={18} />
            </p>
          </legend>
          <p>Nombre</p>
          <p>Puesto de trabajo</p>
          <p>Empresa</p>
        </div>
      </section>
    </>
  );
};

export default Testimony;
