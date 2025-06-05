import React from "react";
import styles from "./styles/SubMenu.module.css"; // Assuming you have a CSS module for styles
import Close from "../icons/Close";
import Menu from "../icons/Menu";
import { HOME_ROUTE } from "../../constants/routesApp";

const SubMenu = ({ open = false, setOpen = () => {} }) => {
  return (
    <div className={styles.subMenu}>
      {/* <div className={styles.subMenu__Action}>
        <Menu onClick={() => setOpen(true)} className={styles.icons} />
      </div> */}
      <div className={`${styles.contentMenu} ${open ? styles.active : ""}`}>
        <Close onClick={() => setOpen(false)} className={styles.icons} />
        <ul className={styles.menuList}>
          <li className={styles.menuItem}>
            <a
              href={`${HOME_ROUTE + "#project"}`}
              className={styles.menuLink}
              onClick={() => setOpen(false)}
            >
              Projects
            </a>
          </li>
          <li className={styles.menuItem}>
            <a
              href={`${HOME_ROUTE + "#about"}`}
              className={styles.menuLink}
              onClick={() => setOpen(false)}
            >
              About
            </a>
          </li>
          <li className={styles.menuItem}>
            <a
              href={`${HOME_ROUTE + "#contact"}`}
              className={styles.menuLink}
              onClick={() => setOpen(false)}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SubMenu;
