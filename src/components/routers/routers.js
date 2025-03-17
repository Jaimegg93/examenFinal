// filepath: /c:/Users/jaime/Desktop/clase/Interfaces/my-app/src/components/routers/routers.js
import { BrowserRouter, Routes, Route } from "react-router";
import Navv from "./nav";
import Formulario from "./formulario";
import Perfil from "./Perfil";
import Bio from "./Bio";
import Mitrabajo from "./MiTrabajo";
import React from "react";
import Tips from "./Tips";
import Clientes from "./Clientes";
import Logros from "./Logros";
import Colaborar from "./Colaborar";
import Redes from "./Redes";
import Mensaje from "./Mensaje";
import LLamame from "./LLamame";

function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navv />}>
          <Route index element={<Formulario />} />
          <Route path="formulario" element={<Formulario />} />
          <Route path="perfil" element={<Perfil />} />
          <Route path="bio" element={<Bio />} />
          <Route path="mitrabajo" element={<Mitrabajo />} />
          <Route path="tips" element={<Tips />} />
          <Route path="Clientes" element={<Clientes />} />
          <Route path="Logros" element={<Logros />} />
          <Route path="Colaborar" element={<Colaborar />} />
          <Route path="redes" element={<Redes />} />
          <Route path="redes/:redid" element={<Redes />} />
          <Route path="Mensaje" element={<Mensaje />} />
          <Route path="LLamame" element={<LLamame />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Routers;
