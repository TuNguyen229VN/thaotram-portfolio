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
import ReactLenis, { useLenis } from "lenis/react";
import gsap from "gsap";
import Aos from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import { useLocation } from "react-router";

const Home = () => {
  const location = useLocation();

  // Lenis ref to manage smooth scrolling
  const lenis = useLenis();

  useEffect(() => {
    if (location.hash && lenis) {
      setTimeout(() => {
        const el = document.querySelector(location.hash);
        console.log(el.id);
        if (el) {
          lenis.scrollTo(el, {
            duration: 1,
          });
        }
      }, 600);
    }
  }, [location, lenis]);

  useEffect(() => {
    function update(time) {
      lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);

    return () => gsap.ticker.remove(update);
  }, []);

  useEffect(() => {
    document.title = "Tram Nguyen Portfolio";
    window.scrollTo(0, 0);
  }, []);

  // AOS initialization for animations
  useEffect(() => {
    Aos.init({
      duration: 800,
      once: false,
    });
  }, []);
  return (
    <ReactLenis root options={{ autoRaf: true }}>
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
    </ReactLenis>
  );
};

export default Home;
