import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/Home/home";
import LoginPage from "../pages/login";
import ErrorPage from "../pages/404";
import RegisterPage from "../pages/register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/sdafklfkl",
    element: <RegisterPage />,
  },
]);
