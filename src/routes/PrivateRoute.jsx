import { useNavigate } from "react-router-dom";

const PrivateRoute = ({ component: Component }) => {
  const token = localStorage.getItem("userData");
  const navigate = useNavigate();

  if (token) {
    return <Component />;
  } else {
    navigate("/");
    return null;
  }
};

export default PrivateRoute;
