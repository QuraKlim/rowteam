import { createBrowserRouter, type RouteProps } from "react-router-dom";
import MainPage from "pages/MainPage";
import { lazy } from "react";
import { ProjectPage } from "pages/ProjectPage";
import { NotFoundPage } from "pages/NotFoundPage";

/* const AsyncMainPage = lazy(() => import("../../../pages/MainPage")) */

export enum AppRoutes {
  MAIN = "main",
  PROJECT = "project",
  NOT_FOUND = "not_found",
}

export const routePaths: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.PROJECT]: ":id",
  [AppRoutes.NOT_FOUND]: "*",
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: MainPage(),
  },
  {
    path: ":projectId",
    element: ProjectPage(),
  },
  {
    element: NotFoundPage(),
    path: "*",
  },
]);

/* export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    element: MainPage(),
    path: "/",
  },
  [AppRoutes.NOT_FOUND]: {
    element: MainPage(),
    path: "*",
  },
}; */
