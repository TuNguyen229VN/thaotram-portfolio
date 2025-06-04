import React, { useEffect } from "react";
import Bio from "./Bio";
import Project from "./Project";
import ContainerFluid from "../../layouts/ContainerFluid";
import About from "./About";
import Slogan from "./Slogan";
import CV from "./CV";
import Skill from "./Skill";
import Brand from "./Brand";
import Contact from "./Contact";

const Home = () => {
  useEffect(() => {
    document.title = "Tram Nguyen Portfolio";
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <ContainerFluid>
        <Bio />
      </ContainerFluid>
      <Project />
      <About />
      <ContainerFluid>
        <Slogan />
      </ContainerFluid>
      <CV />
      <ContainerFluid>
        <Skill />
      </ContainerFluid>
      <Brand />
      <Contact />
    </>
  );
};

export default Home;
