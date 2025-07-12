import React, { useEffect, useState } from "react";
import styles from "./styles/Contact.module.css"; // Assuming you have a CSS module for styles
import Mail from "../../components/icons/Mail";
import Phone from "../../components/icons/Phone";
import ArrowUpRight from "../../components/icons/ArrowUpRight";
const Contact = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile(); // check ban đầu
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);
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
          <span data-aos="fade-up" data-delay="400">
            Phone
          </span>
          <div className={styles.contact__contetnWrapper}>
            <a
              href="tel:0763510552"
              className={styles.contact__link}
              data-aos="fade-up"
              data-delay="400"
            >
              0763510552
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
              href="mailto:tram.nguyenthanhthao@gmail.com"
              className={styles.contact__link}
              data-aos="fade-up"
              data-delay="400"
            >
              <div className={styles.spanSocial}>
                tram.nguyenthanhthao@gmail.com
              </div>
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
              {...(!isMobile
                ? { "data-aos": "fade-up", "data-delay": "400" }
                : {})}
            >
              <div className={styles.spanSocial}>Facebook</div>
              <ArrowUpRight className={styles.contact__icon} />
            </a>
            <a
              href=""
              className={styles.contact__link}
              {...(!isMobile
                ? { "data-aos": "fade-up", "data-delay": "400" }
                : {})}
            >
              <div className={styles.spanSocial}>Behance</div>{" "}
              <ArrowUpRight className={styles.contact__icon} />
            </a>
            <a
              href=""
              className={styles.contact__link}
              {...(!isMobile
                ? { "data-aos": "fade-up", "data-delay": "400" }
                : {})}
            >
              <div className={styles.spanSocial}>LinkedIn</div>{" "}
              <ArrowUpRight className={styles.contact__icon} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
