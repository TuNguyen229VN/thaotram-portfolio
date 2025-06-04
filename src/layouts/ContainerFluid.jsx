import React from "react";
import styles from "./styles/Container.module.css";
import { Outlet } from "react-router";
import Header from "./Header";

const ContainerFluid = ({ children }) => {
  return (
    <>
      <Header />
      <div className={styles.container_fluid}>
        <Outlet />
        {children}
      </div>
    </>
  );
};

export default ContainerFluid;
