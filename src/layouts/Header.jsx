import React from "react";
import styles from "./styles/Header.module.css"; // Assuming you have a CSS module for styles
import { Link } from "react-router";
import { HOME_ROUTE } from "../constants/routesApp";
const Header = () => {
  return (
    <div className={styles.header}>
      <Link to={HOME_ROUTE} className={styles.header__logo}>
        Nguyen Thanh Thao Tram Portfolio
      </Link>
      <ul className={styles.header__nav}>
        <li>
          <a href="#project">Projects</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
