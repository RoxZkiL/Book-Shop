import React from "react";
import video from "./media/video.mp4";

const Description = () => {
  return (
    <>
      <section>
        <p>Hasta 60% reduccion de mermas</p>
        <p>Mas de 62 años en el mercado</p>
        <p>hasta 65% de ahorro en HH mensuales</p>
        <p>Hazlo Facil</p>
        <p>
          Mas de 16000 usuarios utilizar nuestro software diariamente a nivel
          mundial
        </p>
        <video width="400" controls>
          <source src={video} type="video/mp4" />
          <source src={video} type="video/ogg" />
          Your browser does not support HTML video.
        </video>
      </section>
    </>
  );
};

export default Description;
