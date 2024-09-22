import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import Home from "../pages/home";
import QuemSomos from "../pages/QuemSomos";
import Servicos from "../pages/Servicos";
import ScrollToTop from "../componentes/ScrollToTop";
import TrabalheConosco from "../pages/TrabalheConosco";
import FaleConosco from "../pages/FaleConosco";

const AppRouter = () => {
  const location = useLocation();
  const [key, setKey] = useState(0);

  useEffect(() => {
    setKey(prevKey => prevKey + 1); // Incrementa o key para forçar re-render
  }, [location.pathname]);

  return (
    <>
      <ScrollToTop />
      <Routes key={key}>
        <Route path="/" element={<Home />} />
        <Route path="/quem-somos" element={<QuemSomos />} />
        <Route path="/servicos" element={<Servicos />} />
        <Route path="/trabalheConosco" element={<TrabalheConosco />} />
        <Route path="/faleConosco" element={<FaleConosco />} />
      </Routes>
    </>
  );
};

export default AppRouter;
