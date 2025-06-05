import React from "react";
import styles from "./styles/Brand.module.css";
import { brandData } from "../../data_av/expData";
import BrandItem from "../../components/brandItem/BrandItem";
import Marquee from "react-fast-marquee";
const Brand = () => {
  return (
    <div className={styles.brand}>
      <div className={styles.brand__title}>
        <h1 className={styles.brand__name} data-aos="fade-up" data-delay="300">Brands who trust me</h1>
        <p className={styles.brand__description} data-aos="fade-up" data-delay="400">
          I work with a diverse range of clients, spanning from globally
          renowned entities with milions of users to innovative startips.
        </p>
      </div>
      <div className={styles.brand__scroll}>
        <Marquee
          speed={60}
          gradient={false}
          direction="right"
          loop={0}
          className={styles.brand__list}
        >
          {brandData.length > 0 &&
            brandData.map((brandItem, index) => (
              <BrandItem index={index} brandItem={brandItem} />
            ))}
        </Marquee>
        <Marquee
          speed={60}
          gradient={false}
          loop={0}
          direction="left"
          className={styles.brand__list}
        >
          {brandData.length > 0 &&
            brandData.map((brandItem, index) => (
              <BrandItem index={index} brandItem={brandItem} />
            ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Brand;
