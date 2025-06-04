import React from "react";
import styles from "./styles/BrandItem.module.css"; // Assuming you have a CSS module for styles
const BrandItem = ({ index = 0, brandItem = "" }) => {
  return (
    <div className={styles.brandItem} key={index}>
      <img src={brandItem} alt="item" />
    </div>
  );
};

export default BrandItem;
