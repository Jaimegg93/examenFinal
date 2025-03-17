// filepath: /c:/Users/jaime/Desktop/clase/Interfaces/my-app/src/components/routers/Redes.js
import React, { useContext } from "react";
import { useParams, Link } from "react-router";
import { useState, useEffect } from "react";
import { Card, CardHeader, Container, Button } from "react-bootstrap";
import { NewsContext } from "./NewsContext";

function NewsDetail() {
  const { noticias, setNoticias, addToNewsList, removeFromNewsList } = useContext(NewsContext);
  const { newid } = useParams();

  return (
    <Container className="my-5 ">
      {noticias.map(
        (noticia) =>
          noticia.titulo == newid && (
            <div>
              <Card key={noticia.id} className="mb-3">
                <Card.Body>
                  <h1>{noticia.titulo}</h1>
                  <Card.Subtitle>
                    {noticia.categoria} | {noticia.autor}
                  </Card.Subtitle>
                  <Card.Text>{noticia.fecha}</Card.Text>
                  <Card.Text>{noticia.contenido}</Card.Text>
                </Card.Body>
              </Card>
              <Button
                onClick={() => removeFromNewsList(noticia.titulo)}
                className="btn btn-warning justify-content-center"
                to="/NewList"
              >
                Borrar
              </Button>
              <Link className="btn btn-warning justify-content-center ms-3" to="/NewList">
                Volver
              </Link>
            </div>
          )
      )}
    </Container>
  );
}

export default NewsDetail;
