import React, { createContext, useState, useEffect } from "react";

export const MensajesContext = createContext();

export const MensajesProvider = ({ children }) => {
  const [mensajes, setMensajes] = useState([]);

  useEffect(() => {
    fetch("/mensajes.json")
      .then((response) => response.json())
      .then((data) => setMensajes(data));
  }, []);

  if (mensajes.length === 0) {
    return <div>Cargando...</div>;
  }

  return <MensajesContext.Provider value={mensajes}>{children}</MensajesContext.Provider>;
};
