import React, { createContext, useState, useEffect } from "react";

export const CinesContext = createContext();

export const CinesProvider = ({ children }) => {
  const [cines, setCines] = useState([]);

  useEffect(() => {
    fetch("/cines.json")
      .then((response) => response.json())
      .then((data) => setCines(data));
  }, []);

  if (cines.length === 0) {
    return <div>Cargando...</div>;
  }

  return (
    <CinesContext.Provider value={cines}>{children}</CinesContext.Provider>
  );
};
