import React, { useEffect, useRef } from "react";
import styles from "./styles/Cursor.module.css";
import gsap from "gsap";
const Cursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    // Căn giữa phần tử
    // gsap.set(cursorRef.current, { xPercent: -50, yPercent: -50 });

    const xTo = gsap.quickTo(cursorRef.current, "x", {
      duration: 0.3,
      ease: "power3",
    });
    const yTo = gsap.quickTo(cursorRef.current, "y", {
      duration: 0.3,
      ease: "power3",
    });

    const handleMouseMove = (e) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return <div ref={cursorRef} className={styles.cursor}></div>;
};

export default Cursor;
