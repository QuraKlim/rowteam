import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "shared/configs/routerConfig/routeConfig";
import { PageLoader } from "shared/ui/PageLoader/PageLoader";

export const AppRouter = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <RouterProvider router={router} />
    </Suspense>
  );
};
