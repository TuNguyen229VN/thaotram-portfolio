import React from "react";
import styles from "./styles/Button.module.css"; // Assuming
import { HOME_ROUTE } from "../../constants/routesApp";
import ArrowToLeft from "../icons/ArrowToLeft";

const ButtonBack = ({ content = "back" }) => {
  return (
    <a href={`${HOME_ROUTE}#project`} className={styles.buttonBack}>
      <ArrowToLeft className={styles.buttonBack__icon} />
      <p>{content}</p>
    </a>
  );
};

export default ButtonBack;
