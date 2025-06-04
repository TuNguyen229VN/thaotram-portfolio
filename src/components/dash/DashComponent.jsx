import React from "react";
import styles from "./styles/DashComponent.module.css";
const DashComponent = ({ color = "rgb(25, 22, 23)" }) => {
  return <div className={styles.dash} style={{ backgroundColor: color }}></div>;
};

export default DashComponent;
