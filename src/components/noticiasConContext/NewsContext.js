import React, { createContext, useState, useEffect } from "react";

export const NewsContext = createContext();

export const NewsProvider = ({ children }) => {
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    fetch("/noticias.json")
      .then((response) => response.json())
      .then((data) => setNoticias(data));
  }, []);

  const addToNewsList = (item) => {
    setNoticias([...noticias, item]);
  };

  const removeFromNewsList = (titulo) => {
    setNoticias(noticias.filter((item) => item.titulo !== titulo));
  };

  return (
    <NewsContext.Provider value={{ noticias, setNoticias, addToNewsList, removeFromNewsList }}>
      {children}
    </NewsContext.Provider>
  );
};
