import React from "react";
import NavBar from "./NavBar";
import { Header } from "./Header";
import Description from "./Description";
import Materials from "./Materials";
import Testimony from "./Testimony";
import Contract from "./Contract";

const Home = () => {
  return (
    <>
      <br />
      <NavBar />
      <Header />
      <Description />
      <Materials />
      <Testimony />
      <Contract />
    </>
  );
};

export default Home;
