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
import ReactLenis, { useLenis } from "lenis/react";
import ErrorPage from "../../pages/ErrorPage";
import Aos from "aos";
const ProjectDetail = () => {
  const { slug } = useParams();
  const lenis = useLenis();
  const [projectList, setProjectList] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    document.title = `${slug}`;
    const found = projectData.find((p) => p.title === slug);
    if (found) {
      setProjectList(found);
      lenis?.scrollTo(0, 0);
    }
  }, [slug, lenis]);

  // AOS initialization for animations
  useEffect(() => {
    Aos.init({
      duration: 800,
      once: false,
    });
     const handleResize = () => {
      Aos.refresh();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  if (projectList == null || Object.keys(projectList).length === 0) {
    return <ErrorPage></ErrorPage>;
  }
  return (
    <ReactLenis root options={{ autoRaf: true }}>
      <ContainerFluid>
        <div className={styles.projectDetail}>
          <div className={styles.pdType} data-aos="fade-up">
            {projectList?.description?.length > 0 &&
              projectList.description.map((item, index) => (
                <span key={index} className={styles.pdTypeItem}>
                  {item}
                </span>
              ))}
          </div>
          <div className={styles.pdTitle} data-aos="fade-up">
            {projectList.title}
          </div>
          <div className={styles.pdBlock}>
            <ButtonContact
              link={projectList.link}
              text="Visit Web"
            />
          </div>
          <div className={styles.pdBanner} data-aos="fade-up">
            <img src={projectList?.image?.[0]} alt={projectList.title} />
          </div>
          <div className={styles.pdContent} data-aos="fade-up">
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
            <div className={styles.pdDesc} data-aos="fade-up">
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
                .filter((project) => !(slug == project.title))
                .map((project, index) => (
                  <ProjectItem key={index} project={project} index={index} />
                ))}
          </div>
        </div>
      </ContainerFluid>
    </ReactLenis>
  );
};

export default ProjectDetail;
