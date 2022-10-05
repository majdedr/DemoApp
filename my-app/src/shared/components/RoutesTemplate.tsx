import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../../pages/home";
import { Poll } from "../../pages/poll";
import { Profile } from "../../pages/profile";
import { ROUTES } from "../routesData/routes";
import { RouteNotFound } from "./error";

const LazyAbout: any = lazy(() => import("../../pages/about/About"));

const RoutesTemplate = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME.link} element={<Home />} />
      <Route path={ROUTES.POLL.link} element={<Poll />} />
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
      <Route path="*" element={<RouteNotFound />} />
    </Routes>
  );
};
export default RoutesTemplate;
