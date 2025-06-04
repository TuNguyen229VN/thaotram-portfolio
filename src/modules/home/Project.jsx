import React from "react";
import styles from "./styles/Project.module.css";
import ProjectItem from "../../components/projectItem/ProjectItem";
import projectData from "../../data_av/projectData";
const Project = () => {
  return (
    <div className={styles.project} id="project">
      <div className={styles.projectBackground}></div>
      <p className={styles.projectname}>Projects</p>
      <div className={styles.projectList}>
        {projectData.length > 0 &&
          projectData.map((project, index) => (
            <ProjectItem key={index} project={project} index={index} />
          ))}
      </div>
    </div>
  );
};

export default Project;
