import React from "react";
import styles from "./styles/Contact.module.css"; // Assuming you have a CSS module for styles
import Mail from "../../components/icons/Mail";
import Phone from "../../components/icons/Phone";
import ArrowUpRight from "../../components/icons/ArrowUpRight";
const Contact = () => {
  return (
    <div className={styles.contact} id="contact">
      <p className={styles.contact__title} data-aos="fade-up">
        Contact
      </p>
      <img
        src="/assets/images/background.png"
        alt="bg"
        className={styles.contact__bg}
      />
      <div className={styles.contact__wrapper}>
        <div className={styles.contact__content}>
          <span data-aos="fade-up" data-delay="300">
            Phone
          </span>
          <div className={styles.contact__contetnWrapper}>
            <a
              href="tel:0909901210"
              className={styles.contact__link}
              data-aos="fade-up"
              data-delay="400"
            >
              0909901210
              <Phone className={styles.contact__icon} />
            </a>
          </div>
        </div>
        <div className={styles.contact__content}>
          <span data-aos="fade-up" data-delay="400">
            Email
          </span>
          <div className={styles.contact__contetnWrapper}>
            <a
              href="mailto:abc@gmail.com"
              className={styles.contact__link}
              data-aos="fade-up"
              data-delay="400"
            >
              abc@gmail.com
              <Mail className={styles.contact__icon} />
            </a>
          </div>
        </div>
        <div className={styles.contact__content}>
          <span>Social</span>
          <div className={styles.contact__contetnWrapper}>
            <a
              href=""
              className={styles.contact__link}
              data-aos="fade-up"
              data-delay="400"
            >
              Facebook <ArrowUpRight className={styles.contact__icon} />
            </a>
            <a
              href=""
              className={styles.contact__link}
              data-aos="fade-up"
              data-delay="500"
            >
              Behance{" "}
              <ArrowUpRight
                className={styles.contact__icon}
                data-aos="fade-up"
                data-delay="600"
              />
            </a>
            <a
              href=""
              className={styles.contact__link}
              data-aos="fade-up"
              data-delay="400"
            >
              LinkedIn{" "}
              <ArrowUpRight
                className={styles.contact__icon}
                data-aos="fade-up"
                data-delay="400"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
