import { Routes, Route } from "react-router-dom";
import HomePage from "./Home"; 

const Routers = () => {
  return (
    <Routes>
      <Route index element={<HomePage />} /> 
    </Routes>
  );
};

export default Routers;
