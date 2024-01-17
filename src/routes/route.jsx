import ForgotPassword from "../components/Auth/ForgotPassword";
import ResetPassword from "../components/Auth/ResetPassword";
import RegisterPage from "../pages/Auth/RegisterPage";
import Home from "../pages/Home/Home";
import NoPage from "../pages/NoPage/NoPage";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

const CombineRoutes = () => {
  return [
    {
      path: "/*",
      element: <PublicRoute component={NoPage} />,
    },
    {
      path: "/",
      element: <PublicRoute component={RegisterPage} />,
    },
    {
      path: "/forget-password",
      element: <PublicRoute component={ForgotPassword} />,
    },
    {
      path: "/reset-password",
      element: <PublicRoute component={ResetPassword} />,
    },
    {
      path: "/home",
      element: <PrivateRoute component={Home} />,
    },
  ];
};

export default CombineRoutes;
