import { Routes, Route } from "react-router-dom";


import Home from "../pages/home";
import QuemSomos from "../pages/QuemSomos";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quem-somos" element={<QuemSomos />} />
      
    </Routes>
  );
};

export default AppRouter;