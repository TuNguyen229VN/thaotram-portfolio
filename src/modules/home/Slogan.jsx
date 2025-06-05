import React from "react";
import styles from "./styles/Slogan.module.css"; // Assuming you have a CSS module for styles
import StretchComponent from "../../components/stretch/StretchComponent";
const Slogan = () => {
  return (
    <div className={styles.slogan}>
      <div className={styles.slogan__title} data-aos="fade-up">
        I am a multi-faceted designer with a love for <span>aesthetics</span> &
        <span> functionality</span>.
      </div>
      <StretchComponent />
    </div>
  );
};

export default Slogan;
