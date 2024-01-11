import CombineRoutes from "./route";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Routing = () => {
  const allRoutes = CombineRoutes();
  return (
    <BrowserRouter>
      <Routes>
        {allRoutes.map((routes, index) => (
          <Route key={index} path={routes.path} element={routes.element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};
export default Routing;
