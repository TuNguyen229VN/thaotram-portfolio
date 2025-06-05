import React from "react";
import styles from "./styles/Skill.module.css";
import SkillItem from "../../components/skillItem/SkillItem";
import { skillData } from "../../data_av/expData";
const Skill = () => {
  return (
    <div className={styles.skill}>
      <div className={styles.skill__title}>
        <span data-aos="fade-up" data-delay="300">Skills</span>
        <p className={styles.skill__titleText} data-aos="fade-up" data-delay="400">
          Skilled in crafting and executing effective marketing strategies.
        </p>
        <p className={styles.skill__titleDesc} data-aos="fade-up" data-delay="500">
          I bring a well-rounded marketing skill set, combining strategic
          thinking, creative storytelling, and data-driven execution to build
          impactful campaigns and strong brand engagement.
        </p>
      </div>
      <div className={styles.skill__list}>
        {skillData.length > 0 &&
          skillData.map((item, index) => (
            <SkillItem item={item} index={index} key={index} />
          ))}
      </div>
    </div>
  );
};

export default Skill;
