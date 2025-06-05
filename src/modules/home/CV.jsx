import React from "react";
import styles from "./styles/CV.module.css";
import { expData, expStudy } from "../../data_av/expData";
import DashComponent from "../../components/dash/DashComponent";

const CV = () => {
  return (
    <div className={styles.cv}>
      <p className={styles.cv__title} data-aos="fade-up">
        Curriculum Vitae
      </p>

      <div className={styles.cv__block} data-aos="fade-up" data-delay="400">
        <div className={styles.cv__exp}>
          <span>01</span>
          <p>Experience</p>
        </div>
        <div className={styles.cv__details}>
          {expData.length > 0 &&
            expData.map((item, index) => (
              <div className={styles.cv__detailsWrap} key={index}>
                <div className={styles.cv__company}>
                  <p className={styles.cv__companyName}>{item.nameCompany}</p>
                  <p className={styles.cv__companyPosition}>{item.position}</p>
                </div>
                <div className={styles.cv__description}>
                  <p className={styles.cv__date}>{item.dateWorked}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
      <div className={styles.cv__block} data-aos="fade-up" data-delay="300">
        <div className={styles.cv__exp}>
          <span>02</span>
          <p>Education</p>
        </div>
        <div className={styles.cv__details}>
          {expStudy.length > 0 &&
            expStudy.map((item, index) => (
              <div className={styles.cv__detailsWrap} key={index}>
                <div className={styles.cv__company}>
                  <p className={styles.cv__companyName}>{item.nameSchool}</p>
                  <p className={styles.cv__companyPosition}>{item.major}</p>
                </div>
                <div className={styles.cv__description}>
                  <p className={styles.cv__date}>{item.dateStudy}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
      <DashComponent />
    </div>
  );
};

export default CV;
