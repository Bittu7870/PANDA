import "./App.css";
import Routing from "./routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <Routing />
      <ToastContainer />
    </>
  );
};

export default App;
