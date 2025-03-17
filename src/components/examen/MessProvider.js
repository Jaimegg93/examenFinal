import React, { createContext, useState, useEffect } from "react";

export const MessContext = createContext();

export const MessProvider = ({ children }) => {
  const [mensajes, setMensajes] = useState([]);

  useEffect(() => {
    fetch("/mensajes.json")
      .then((response) => response.json())
      .then((data) => setMensajes(data));
  }, []);

  if (mensajes.length === 0) {
    return <div>Cargando...</div>;
  }

  return (
    <MessContext.Provider value={{ mensajes }}>{children}</MessContext.Provider>
  );
};
