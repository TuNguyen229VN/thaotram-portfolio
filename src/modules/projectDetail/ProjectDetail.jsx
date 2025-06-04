import React, { useEffect, useState } from "react";
import styles from "./styles/ProjectDetail.module.css"; // Assuming you have a CSS module for styles
import { useParams } from "react-router";
import Header from "../../layouts/Header";
import ContainerFluid from "../../layouts/ContainerFluid";
import projectData from "../../data_av/projectData";
import ButtonContact from "../../components/button/ButtonContact";
import ImageProjectItem from "../../components/imageProjectItem/ImageProjectItem";
import ButtonBack from "../../components/button/ButtonBack";
import DashComponent from "../../components/dash/DashComponent";
import ProjectItem from "../../components/projectItem/ProjectItem";
const ProjectDetail = () => {
  const { slug } = useParams();
  const [projectList, setProjectList] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    document.title = `${slug}`;
    const found = projectData.find((p) => p.title === slug);
    if (found) {
      setProjectList(found);
    }
  }, [slug]);
  console.log(projectList);
  return (
    <ContainerFluid>
      <div className={styles.projectDetail}>
        <div className={styles.pdType}>
          {projectList?.description?.length > 0 &&
            projectList.description.map((item, index) => (
              <span key={index} className={styles.pdTypeItem}>
                {item}
              </span>
            ))}
        </div>
        <div className={styles.pdTitle}>{projectList.title}</div>
        <div className={styles.pdBlock}>
          <ButtonContact link={projectList.link} text="Visit Web" />
        </div>
        <div className={styles.pdBanner}>
          <img src={projectList?.image?.[0]} alt={projectList.title} />
        </div>
        <div className={styles.pdContent}>
          <div className={styles.pdContentWrap}>
            <div className={styles.pdInfo}>
              <p>Client Name</p>
              <span>{projectList.company}</span>
            </div>
            <div className={styles.pdInfo}>
              <p>Date</p>
              <span>{projectList.date}</span>
            </div>
            <div className={styles.pdInfo}>
              <p>Services</p>
              <span>branding</span>
            </div>
          </div>
          <div className={styles.pdDesc}>
            <p>{projectList.content}</p>
          </div>
        </div>
        <div className={styles.pdListImage}>
          {projectList?.image?.length > 0 &&
            projectList.image.map((item, index) => (
              <ImageProjectItem key={index} item={item} />
            ))}
        </div>
        <div className={styles.pdBot__Img}>
          <ButtonBack content="Back to Project" />
        </div>
        <DashComponent color="rgb(122, 122, 122)" />
        <p className={styles.pdAnother}>See other works</p>
        <div className={styles.projectList}>
          {projectData.length > 0 &&
            projectData
              .filter((project) => !slug.includes(project.title))
              .map((project, index) => (
                <ProjectItem key={index} project={project} index={index} />
              ))}
        </div>
      </div>
    </ContainerFluid>
  );
};

export default ProjectDetail;
