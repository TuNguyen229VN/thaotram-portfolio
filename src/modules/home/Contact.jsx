import React from "react";
import styles from "./styles/Contact.module.css"; // Assuming you have a CSS module for styles
import Mail from "../../../public/assets/icons/Mail";
import Phone from "../../../public/assets/icons/Phone";
import ArrowUpRight from "../../components/icons/ArrowUpRight";
const Contact = () => {
  return (
    <div className={styles.contact} id="contact">
      <p className={styles.contact__title}>Contact</p>
      <img
        src="/assets/images/background.png"
        alt="bg"
        className={styles.contact__bg}
      />
      <div className={styles.contact__wrapper}>
        <div className={styles.contact__content}>
          <span>Phone</span>
          <div className={styles.contact__contetnWrapper}>
            <a href="tel:0909901210" className={styles.contact__link}>
              0909901210
              <Phone className={styles.contact__icon} />
            </a>
          </div>
        </div>
        <div className={styles.contact__content}>
          <span>Email</span>
          <div className={styles.contact__contetnWrapper}>
            <a href="mailto:abc@gmail.com" className={styles.contact__link}>
              abc@gmail.com
              <Mail className={styles.contact__icon} />
            </a>
          </div>
        </div>
        <div className={styles.contact__content}>
          <span>Social</span>
          <div className={styles.contact__contetnWrapper}>
            <a href="" className={styles.contact__link}>
              Facebook <ArrowUpRight className={styles.contact__icon} />
            </a>
            <a href="" className={styles.contact__link}>
              Behance <ArrowUpRight className={styles.contact__icon} />
            </a>
            <a href="" className={styles.contact__link}>
              LinkedIn <ArrowUpRight className={styles.contact__icon} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
