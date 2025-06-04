import React from "react";
import styles from "./styles/Bio.module.css"; // Assuming you have a CSS module for styles
import ButtonContact from "../../components/button/ButtonContact";
import { bioData } from "../../data_av/bioData";
import Marquee from "react-fast-marquee";
import StretchComponent from "../../components/stretch/StretchComponent";
const Bio = () => {
  return (
    <div className={styles.bio}>
      <div className={styles.bio__top}>
        <h1 className={styles.bio__topname}>
          Content Marketing <span>&</span> PR Copywriting
        </h1>
        <ButtonContact link="" text="Contact Me"/>
      </div>
      <div className={styles.bio__bottom}>
        <div className={styles.bio__bottom__left}>
          <p className={styles.bio__text}>Bio</p>
          <p className={styles.bio__description}>
            My expertise includes writing blog posts, articles, press releases,
            website copy, and social media content. I have worked with clients
            in various industries, including technology, healthcare, and
            finance.
          </p>
        </div>
        <div className={styles.bio__bottom__right}></div>
      </div>

      <div className={styles.scroll__wrapper}>
        <Marquee
          speed={60}
          gradient={false}
          loop={0}
          className={styles.scroll__track}
        >
          {bioData.map((item, index) => (
            <p className={styles.tag} key={index}>
              {item}
            </p>
          ))}
        </Marquee>
      </div>
      <StretchComponent />
    </div>
  );
};

export default Bio;
