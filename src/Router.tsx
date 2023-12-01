import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import LoginPage from "./pages/login/LoginPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      //TODO add homepage
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "search",
        element: <div>find dogs</div>,
      },
      {
        path: "favorites",
        element: <div>favorites page</div>,
      },
      {
        path: "match",
        element: <div>Match!</div>,
      },
      {
        path: "*",
        element: <div>error 404</div>,
      },
    ],
  },
]);

export default router;
