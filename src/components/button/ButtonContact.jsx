import React from "react";
import styles from "./styles/Button.module.css"; // Assuming you have a CSS module for styles
import Arrow from "../icons/Arrow"
const ButtonContact = ({text="Contact Me",link=""}) => {
  return (
    <a href={link} className={styles.button__contact}>
      <p>{text}</p>
      <div className={styles.button__contact__icon}>
        <Arrow />
      </div>
    </a>
  );
};

export default ButtonContact;
