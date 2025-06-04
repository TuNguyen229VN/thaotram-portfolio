import React from "react";
import styles from "./styles/ProjectItem.module.css"; // Assuming you have a CSS module for styles
import Arrow from "../icons/Arrow";
import { Link } from "react-router";
import { PROJECT_DETAIL_ROUTE } from "../../constants/routesApp";
const ProjectItem = ({ index = 0, project = {} }) => {
  return (
    <Link
      to={`${PROJECT_DETAIL_ROUTE}/${project.title}`}
      className={styles.projectItem}
      key={index}
    >
      <div className={styles.projectItem__top}>
        <div className={styles.projectItem__num}>{project.id}</div>
        <div className={styles.projectItem__line}></div>
        <div className={styles.projectItem__date}>{project.date}</div>
      </div>
      <div className={styles.projectItem__middle}>
        <img src={project.image[0]} alt={project.title} />
      </div>
      <div className={styles.projectItem__bottom}>
        <div className={styles.projectItem__wrapTitle}>
          <h3 className={styles.projectItem__title}>{project.title}</h3>
          <p className={styles.company}>{project.company}</p>
        </div>
        <div className={styles.projectItem__blockDesc}>
          <div className={styles.projectItem__wrapDesc}>
            {project.description?.length > 0 &&
              project.description.map((desc, index) => (
                <p className={styles.projectItem__description} key={index}>
                  {desc}
                </p>
              ))}
          </div>
          <p
            // to={`${PROJECT_DETAIL_ROUTE}/${project.title}`}
            className={styles.projectItem__link}
          >
            View More <Arrow />
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProjectItem;
