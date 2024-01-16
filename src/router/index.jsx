import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home";
import LoginPage from "../pages/login";
import ErrorPage from "../pages/404";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);
