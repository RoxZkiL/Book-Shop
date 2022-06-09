import React from "react";
import { LoremIpsum } from "react-lorem-ipsum";

const Contract = () => {
  return (
    <>
      <section>
        <div>
          <h2>1 Licencia anual</h2>
          <p>
            <LoremIpsum p={1} avgSentencesPerParagraph={24} />
          </p>
          <h3>##%DCTO</h3>
          <h4>CLP 24.000</h4>
          <h5>Antes 35.000</h5>
          <button>Contratalo</button>
        </div>
      </section>
    </>
  );
};

export default Contract;
