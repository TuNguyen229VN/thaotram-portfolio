import React from "react";
import styles from "./styles/Project.module.css";
import ProjectItem from "../../components/projectItem/ProjectItem";
import projectData from "../../data_av/projectData";
const Project = () => {
  return (
    <div className={styles.project} id="project">
      <div className={styles.projectBackground}></div>
      <div className={styles.projectContent}>
        <div className={styles.wrapTitle}>
          <p className={styles.projectname} data-aos="fade-up">
            Projects
          </p>
        </div>
        <div className={styles.projectList}>
          {projectData.length > 0 &&
            projectData.map((project, index) => (
              <ProjectItem key={index} project={project} index={index} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
