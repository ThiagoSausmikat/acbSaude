import { Routes, Route } from "react-router-dom";



import Home from "../pages/home";
import QuemSomos from "../pages/QuemSomos";
import Servicos from "../pages/Servicos";
import ScrollToTop from "../componentes/ScrollToTop";

const AppRouter = () => {
  return (
    <>
    <ScrollToTop />
    <Routes>
      
      <Route path="/" element={<Home />} />
      <Route path="/quem-somos" element={<QuemSomos />} />
      <Route path="/servicos" element={<Servicos />} />
      <Route path="/trabalheConosco" element={<Servicos />} />
      <Route path="/faleConosco" element={<Servicos />} />
      
    </Routes>
    </>
  );
};

export default AppRouter;