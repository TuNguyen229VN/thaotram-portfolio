import React from "react";
import styles from "./styles/About.module.css";
import DashComponent from "../../components/dash/DashComponent";
const About = () => {
  return (
    <div className={styles.about} id="about">
      <div className={styles.about__wrap}>
        <div className={styles.content} data-aos="fade-up" data-delay="300">
          <div className={styles.content__big}>
            I am a Content Createtor and Web Developer based on the Elementor
            platform. My job is to create products with intuitive, attractive
            interfaces and solve problems that users & businesses face.
          </div>
          <div
            className={styles.content__desc}
            data-aos="fade-up"
            data-delay="300"
          >
            <p>About me</p>
            <div className={styles.content__small}>
              An introvert who makes noise through ideas. I’m a creative
              copywriter with a strategic mindset, blending imagination with
              intention. While I write for brands, I always start with the
              audience — their needs, their language, their world. Because great
              copy isn’t just heard — it’s felt.
            </div>
          </div>
        </div>
        <div
          className={styles.content__image}
          data-aos="fade-up"
          data-delay="300"
        >
          <img src="/assets/images/2.jpg" alt="content_image" />
        </div>
      </div>
      <DashComponent />
    </div>
  );
};

export default About;
