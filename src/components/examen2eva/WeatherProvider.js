import React, { createContext, useState, useEffect } from "react";

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [weather, setWeather] = useState([]);

  useEffect(() => {
    fetch("/weather.json")
      .then((response) => response.json())
      .then((data) => setWeather(data));
  }, []);

  if (weather.length === 0) {
    return <div>Cargando...</div>;
  }

  return <WeatherContext.Provider value={weather}>{children}</WeatherContext.Provider>;
};
