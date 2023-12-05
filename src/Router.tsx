import { createBrowserRouter } from "react-router-dom";
import { DefaultLayout } from "./layouts/index";
import * as pages from "./pages/index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      //TODO add homepage
      {
        path: "/login",
        element: <pages.LoginPage />,
      },
      {
        path: "search",
        element: <pages.SearchPage />,
      },
      {
        path: "favorites",
        element: <pages.FavoritesPage />,
      },
      {
        path: "match",
        element: <pages.MatchPage />,
      },
      {
        path: "*",
        element: <div>error 404</div>,
      },
    ],
  },
]);

export default router;
