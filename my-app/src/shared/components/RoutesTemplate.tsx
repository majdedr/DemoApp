import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../../pages/home";
import { Profile } from "../../pages/profile";
import { ROUTES } from "../routesData/routes";
import RouteError from './error/Error';

const LazyAbout: any = lazy(() => import("../../pages/about/About"));

const RoutesTemplate = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME.link} element={<Home />} />
      <Route
        path={ROUTES.ABOUT.link}
        element={
          <Suspense fallback={"loading ..."}>
            {" "}
            <LazyAbout />{" "}
          </Suspense>
        }
      />
      <Route path={ROUTES.PROFILE.link + ":username"} element={<Profile />} />
      <Route path="*" element={<RouteError />} />
    </Routes>
  );
};
export default RoutesTemplate;
