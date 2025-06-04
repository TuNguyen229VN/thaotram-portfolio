import React from "react";
import styles from "./styles/Button.module.css"; // Assuming
import { Link } from "react-router";
import { HOME_ROUTE } from "../../constants/routesApp";
import ArrowToLeft from "../icons/ArrowToLeft";

const ButtonBack = ({ content = "back" }) => {
  return (
    <Link to={`${HOME_ROUTE}#project`} className={styles.buttonBack}>
      <ArrowToLeft className={styles.buttonBack__icon} />
      <p>{content}</p>
    </Link>
  );
};

export default ButtonBack;
