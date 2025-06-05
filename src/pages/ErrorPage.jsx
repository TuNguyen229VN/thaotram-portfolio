import React from "react";
import ErrorModule from "../modules/error/ErrorModule";
import ContainerFluid from "../layouts/ContainerFluid";

const ErrorPage = () => {
  return (
    <ContainerFluid>
      <ErrorModule>404 - Page Not Found</ErrorModule>
    </ContainerFluid>
  );
};

export default ErrorPage;
