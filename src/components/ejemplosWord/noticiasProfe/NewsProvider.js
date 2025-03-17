import React, { createContext, useState, useEffect } from "react";

export const NewsContext = createContext();

export const NewsProvider = ({ children }) => {
  const [newsItems, setNewsItems] = useState([]);

  const addToNewsList = (item) => {
    setNewsItems([...newsItems, item]);
  };

  const removeFromNewsList = (titulo) => {
    setNewsItems(newsItems.filter((item) => item.titulo !== titulo));
  };

  const cargarNoticias = (data) => {
    const aux_data = [];
    let i = 0;
    for (i = 0; i < data.length; i++) {
      let aux_element = data[i];
      aux_element["id"] = i;
      aux_data.push(aux_element);
    }
    setNewsItems(aux_data);
  };

  const fetchNews = async () => {
    const response = await fetch("http://localhost:3000/noticias.json");
    const data = await response.json();
    cargarNoticias(data);
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <NewsContext.Provider value={{ newsItems, addToNewsList, removeFromNewsList }}>{children}</NewsContext.Provider>
  );
};
