import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import { HOME_ROUTE, PROJECT_DETAIL_ROUTE } from "./constants/routesApp";
import ProjectDetailPage from "./pages/ProjectDetailPage";
const HomePage = React.lazy(() => import("./pages/HomePage"));
function App() {
  return (
    <BrowserRouter>
      <Suspense>
        <Routes>
          <Route path={HOME_ROUTE} element={<HomePage />}></Route>
          <Route
            path={`${PROJECT_DETAIL_ROUTE}/:slug`}
            element={<ProjectDetailPage />}
          ></Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
