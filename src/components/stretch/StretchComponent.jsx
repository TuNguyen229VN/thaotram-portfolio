import React from "react";
import styles from "./styles/Stretch.module.css";
const StretchComponent = () => {
  return (
    <div className={styles.bio__stretch}>
      <div className={styles.bio__streachOne}></div>
      <div className={styles.bio__streachThree}>
        <p></p>
      </div>
      <div className={styles.bio__streachFive}></div>
    </div>
  );
};

export default StretchComponent;
