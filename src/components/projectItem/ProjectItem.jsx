import React, { useRef, useState } from "react";
import styles from "./styles/ProjectItem.module.css"; // Assuming you have a CSS module for styles
import Arrow from "../icons/Arrow";
import { Link } from "react-router";
import { PROJECT_DETAIL_ROUTE } from "../../constants/routesApp";
import { motion, useMotionValue, useSpring } from "framer-motion";

const springValues = {
  damping: 30,
  stiffness: 100,
  mass: 2,
};

const ProjectItem = ({
  index = 0,
  project = {},
  scaleOnHover = 1.01,
  rotateAmplitude = 14,
}) => {
  const ref = useRef(null);

  const x = useMotionValue();
  const y = useMotionValue();
  const rotateX = useSpring(useMotionValue(0), springValues);
  const rotateY = useSpring(useMotionValue(0), springValues);
  const scale = useSpring(1, springValues);
  const opacity = useSpring(0);
  const rotateFigcaption = useSpring(0, {
    stiffness: 350,
    damping: 30,
    mass: 1,
  });

  const [lastY, setLastY] = useState(0);

  function handleMouse(e) {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    const rotationX = (offsetY / (rect.height / 2)) * -rotateAmplitude;
    const rotationY = (offsetX / (rect.width / 2)) * rotateAmplitude;

    rotateX.set(rotationX);
    rotateY.set(rotationY);

    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);

    const velocityY = offsetY - lastY;
    rotateFigcaption.set(-velocityY * 0.6);
    setLastY(offsetY);
  }

  function handleMouseEnter() {
    scale.set(scaleOnHover);
    opacity.set(1);
  }

  function handleMouseLeave() {
    opacity.set(0);
    scale.set(1);
    rotateX.set(0);
    rotateY.set(0);
    rotateFigcaption.set(0);
  }
  return (
    <Link
      to={`${PROJECT_DETAIL_ROUTE}/${project.title}`}
      className={styles.projectItem}
      key={index}
      ref={ref}
      onMouseMove={handleMouse}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      data-aos="fade-up"
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          scale,
        }}
        className={styles.projectItemLink}
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
      </motion.div>
    </Link>
  );
};

export default ProjectItem;
