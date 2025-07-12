import React, { Suspense, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import {
  ERROR_ROUTE,
  HOME_ROUTE,
  PROJECT_DETAIL_ROUTE,
} from "./constants/routesApp";
import LoadingComponent from "./components/loading/LoadingComponent";

const HomePage = React.lazy(() => import("./pages/HomePage"));
const ErrorPage = React.lazy(() => import("./pages/ErrorPage"));
const ProjectDetailPage = React.lazy(() => import("./pages/ProjectDetailPage"));

function App() {
  return (
    <BrowserRouter>
      <Suspense>
        <Routes>
          <Route path={ERROR_ROUTE} element={<ErrorPage />} />
          <Route path={HOME_ROUTE} element={<HomePage />} />
          <Route
            path={`${PROJECT_DETAIL_ROUTE}/:slug`}
            element={<ProjectDetailPage />}
          />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
function RoutesWithPageLoading() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;

    if (isMobile) {
      // Bỏ qua loading trên điện thoại
      setLoading(false);
      return;
    }
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  // if (loading)
  //   return (
  //     <LoadingComponent
  //       sentence="Tram Portfolio"
  //       animationDuration={1}
  //       borderColor="gray"
  //     />
  //   );

  return (
    <Suspense>
      <Routes>
        <Route path={ERROR_ROUTE} element={<ErrorPage />} />
        <Route path={HOME_ROUTE} element={<HomePage />} />
        <Route
          path={`${PROJECT_DETAIL_ROUTE}/:slug`}
          element={<ProjectDetailPage />}
        />
      </Routes>
    </Suspense>
  );
}
export default App;
