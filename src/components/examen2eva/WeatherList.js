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
import { WeatherContext } from "./WeatherProvider";

function MensajesList() {
  const weather = useContext(WeatherContext);

  const [ciudadSeleccionada, setCiudadSeleccionada] = useState(weather.ciudades[0]);

  const seleccionarCiudad = (ciudad) => {
    setCiudadSeleccionada(ciudad);
  };

  return (
    <Container>
      <Carousel className="mt-5 mx-auto" style={{ width: "500px" }}>
        {ciudadSeleccionada.fechas.map((fecha, index) => (
          <CarouselItem>
            <Card>
              <CardImg src={ciudadSeleccionada.nombre + ".jpg"} style={{ width: "500px", height: "400px" }} />
              <CardHeader>
                <CardTitle>
                  {ciudadSeleccionada.nombre} | {fecha.fecha}
                </CardTitle>
              </CardHeader>
              <CardBody>
                <CardText>Temperatura max: {fecha.temperatura.maxima}</CardText>
                <CardText>Temperatura min: {fecha.temperatura.minima}</CardText>
                <CardText>Velocidad del viento: {fecha.viento.velocidad}</CardText>
                <CardText>Direccion del viento: {fecha.viento.direccion}</CardText>
                <CardText>Lluvia: {fecha.lluvia}</CardText>
                <CardText>Salida del sol: {fecha.sol.salida}</CardText>
                <CardText>Puesta del sol: {fecha.sol.puesta}</CardText>
              </CardBody>
            </Card>
          </CarouselItem>
        ))}
      </Carousel>

      <Row>
        {weather.ciudades.map((ciudad, index) => (
          <Col md={4} className="mx-auto my-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-center">{ciudad.nombre}</CardTitle>
              </CardHeader>
              <Button className="bg-warning" onClick={() => seleccionarCiudad(ciudad)}>
                Seleccionar
              </Button>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default MensajesList;
