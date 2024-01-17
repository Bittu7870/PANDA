import { useNavigate } from "react-router-dom";

const PublicRoute = ({ component: Component }) => {
  const token = localStorage.getItem("userData");
  const navigate = useNavigate();

  if (!token) {
    return <Component />;
  } else {
    navigate("/home");
    return null; 
  }
};

export default PublicRoute;
