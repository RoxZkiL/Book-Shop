import React from "react";
import { Header } from "./Header";
import Description from "./Description";
import Materials from "./Materials";
import Testimony from "./Testimony";
import Contract from "./Contract";
import { HashLink as Link } from "react-router-hash-link";

const Home = () => {
  return (
    <>
      <Header />
      <Link to="#description">
        <Description />
      </Link>
      <Link to="#materials">
        <Materials />
      </Link>
      <Link to="#testimony">
        <Testimony />
      </Link>
      <Link to="#contract">
        <Contract />
      </Link>
    </>
  );
};

export default Home;
