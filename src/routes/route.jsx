import ForgotPassword from "../components/Auth/ForgotPassword";
import ResetPassword from "../components/Auth/ResetPassword";
import RegisterPage from "../pages/Auth/RegisterPage";
import Home from "../pages/Home/Home";
import PublicRoute from "./PublicRoute";

const CombineRoutes = () => {
  return [
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
      element: <PublicRoute component={Home} />,
    },
  ];
};

export default CombineRoutes;
