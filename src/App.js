import react from "react";
import "./index.css";
import Home from "./routers/Home";
import Acerca from "./routers/Acerca";
import Contacto from "./routers/Contacto";
import Educacion from "./routers/Educacion";
import Experiencia from "./routers/Experiencia";
import Habilidades from "./routers/Habilidades";
import Proyectos from "./routers/Proyectos";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/acerca" element={<Acerca />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/educacion" element={<Educacion />} />
        <Route path="/experiencia" element={<Experiencia />} />
        <Route path="/habilidades" element={<Habilidades />} />
        <Route path="/proyectos" element={<Proyectos />} />
      </Routes>
    </>
  );
}

export default App;
