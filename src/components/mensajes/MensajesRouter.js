// filepath: /c:/Users/jaime/Desktop/clase/Interfaces/my-app/src/components/routers/routers.js
import { BrowserRouter, Routes, Route } from "react-router";
import React from "react";
import { MensajesProvider } from "./MensajesProvider";
import NavigationBar from "./NavigationBar";
import MensajesList from "./MensajesList";
import Conversacion from "./Conversacion";

function MensajesRouter() {
  return (
    <BrowserRouter>
      <MensajesProvider>
        <Routes>
          <Route path="/" element={<NavigationBar />}>
            <Route index element={<MensajesList />} />
            <Route path="contacto/:nombre" element={<Conversacion />} />
          </Route>
        </Routes>
      </MensajesProvider>
    </BrowserRouter>
  );
}
export default MensajesRouter;
