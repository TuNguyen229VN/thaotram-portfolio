import React from "react";
import styles from "./styles/SkillItem.module.css";
const SkillItem = ({ index = 0, item = {} }) => {
  return (
    <div className={styles.skillItem} key={index}>
      <div className={styles.skillItem__wrap}>
        <img
          src={item.logo}
          alt={item.name}
          className={styles.skillItem__logo}
        />
        <p className={styles.skillItem__name}>{item.name}</p>
      </div>
      <div className={styles.skillItem__wrap}>
        <p className={styles.skillItem__num}>{item.num}</p>
      </div>
    </div>
  );
};

export default SkillItem;
