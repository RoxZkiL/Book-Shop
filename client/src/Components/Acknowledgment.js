import React from "react";
import { LoremIpsum } from "react-lorem-ipsum";
import video from "./media/video.mp4";
import image from "./media/image.png";

const Acknowledgment = () => {
  return (
    <>
      <div>
        <img src={image} alt="not found" />
        <p>
          <LoremIpsum p={1} avgSentencesPerParagraph={2} />
        </p>
        <p>
          <LoremIpsum p={1} avgSentencesPerParagraph={16} />
        </p>
        <video width="400" controls>
          <source src={video} type="video/mp4" />
          <source src={video} type="video/ogg" />
          Your browser does not support HTML video.
        </video>
      </div>
      <div>
        Gracias por ponerte en contacto con nosotros. En breve un ejecutivo
        comercial tomara contacto contigo asd
      </div>
    </>
  );
};

export default Acknowledgment;
