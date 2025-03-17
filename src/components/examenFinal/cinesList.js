import {
  Container,
  Row,
  Col,
  Card,
  ListGroup,
  ListGroupItem,
  Carousel,
  CardImg,
  CardBody,
  CardText,
  Button,
  CardTitle,
  CardHeader,
  CarouselItem,
  CarouselCaption,
} from "react-bootstrap";
import React, { useContext, useState } from "react";
import { CinesContext } from "./cinesProvider";
import { Link } from "react-router";

function PaginaPrincipal() {
  const cines = useContext(CinesContext);

  return (
    <Container>
      <Carousel
        className="mt-5 mx-auto"
        style={{ width: "400px", height: "750px" }}
      >
        {cines.cartelera.map((pelicula) => (
          <Carousel.Item>
            <img
              src={pelicula.imagen}
              style={{ width: "400px", height: "500px" }}
            ></img>
            <Carousel.Caption>
              <h3></h3>
            </Carousel.Caption>
            <Card style={{ height: "200px" }}>
              <CardHeader>
                <CardTitle> {pelicula.titulo}</CardTitle>
              </CardHeader>
              <CardBody>
                <CardText>Descripcion: {pelicula.descripcion}</CardText>
                <CardText>
                  Horarios:
                  {cines.salas.map(
                    (sala) =>
                      sala.pelicula === pelicula.codigo &&
                      sala.horarios.map((horario) => <> {horario} </>)
                  )}
                </CardText>
              </CardBody>
            </Card>
          </Carousel.Item>
        ))}
      </Carousel>
      <ListGroup>
        {cines.salas.map((sala) => (
          <ListGroupItem>
            <h2>{sala.nombre}:</h2>
            {cines.cartelera.map(
              (pelicula) =>
                pelicula.codigo === sala.pelicula && <p>{pelicula.titulo}</p>
            )}

            <Button as={Link} to={"/sala/" + sala.id}>
              Seleccionar
            </Button>
          </ListGroupItem>
        ))}
      </ListGroup>
    </Container>
  );
}

export default PaginaPrincipal;
