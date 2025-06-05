import React from "react";
import styles from "./styles/ImageProjectItem.module.css";
const ImageProjectItem = ({ index, item }) => {
  return (
    <div className={styles.pdItemImage} data-aos="fade-up">
      <img src={item} alt={`Project Image ${index + 1}`} />
    </div>
  );
};

export default ImageProjectItem;
