import React from "react";
import styles from "./styles/Header.module.css"; // Assuming you have a CSS module for styles
import { Link } from "react-router";
import { HOME_ROUTE } from "../constants/routesApp";
import { scrollToTop } from "../utils/ScrollToTop";
const Header = () => {
  return (
    <div className={styles.header}>
      <Link
        to={HOME_ROUTE}
        className={styles.header__logo}
        onClick={() => scrollToTop()}
        data-aos="fade-down-left"
        data-delay="300"
      >
        Nguyen Thanh Thao Tram Portfolio
      </Link>
      <ul className={styles.header__nav}>
        <li data-aos="fade-down-left" data-delay="400">
          <a href={`${HOME_ROUTE + "#project"}`} className={styles.a1}>
            Projects
          </a>
          <a href={`${HOME_ROUTE + "#project"}`} className={styles.a2}>
            Projects
          </a>
        </li>
        <li data-aos="fade-down-left" data-delay="500">
          <a href={`${HOME_ROUTE + "#about"}`} className={styles.a1}>
            About
          </a>
          <a href={`${HOME_ROUTE + "#about"}`} className={styles.a2}>
            About
          </a>
        </li>
        <li data-aos="fade-down-left" data-delay="600">
          <a href={`${HOME_ROUTE + "#contact"}`} className={styles.a1}>
            Contact
          </a>
          <a href={`${HOME_ROUTE + "#contact"}`} className={styles.a2}>
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
