import React, { useState } from "react";
import styles from "./styles/Container.module.css";
import { Outlet } from "react-router";
import Header from "./Header";
import SubMenu from "../components/subMenu/SubMenu";

const ContainerFluid = ({ children }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Header setOpen={setOpen} />
      <SubMenu open={open} setOpen={setOpen} />
      <div className={styles.container_fluid}>
        <Outlet />
        {children}
      </div>
    </>
  );
};

export default ContainerFluid;
