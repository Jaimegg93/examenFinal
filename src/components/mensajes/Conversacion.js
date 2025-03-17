// filepath: /c:/Users/jaime/Desktop/clase/Interfaces/my-app/src/components/routers/Redes.js
import React, { useContext } from "react";
import { useParams, Link } from "react-router";
import { useState, useEffect } from "react";
import { Card, CardHeader, Container, Button, CardTitle, CardText, CardBody, Col, Row } from "react-bootstrap";
import { MensajesContext } from "./MensajesProvider";

function Conversacion() {
  const mensajes = useContext(MensajesContext);
  const { nombre } = useParams();

  return (
    <Container className="my-5 ">
      <h2 className="mb-5"> Conversacion de {nombre}:</h2>

      {mensajes.chats.map(
        (chat) =>
          chat.contacto == nombre &&
          chat.mensajes.map((mensaje) =>
            mensaje.emisor == nombre ? (
              <Col md={7} className="ms-auto my-4">
                <Card className="bg-warning p-2 text-dark bg-opacity-50 ">
                  <CardBody>
                    <Row>
                      <Col md={9}>
                        <CardTitle>{mensaje.emisor}</CardTitle>
                        <CardText>{mensaje.contenido}</CardText>
                      </Col>
                      <Col md={3}>
                        <CardText className="text-end">{mensaje.timestamp}</CardText>
                        <CardText className="text-end">{mensaje.estado}</CardText>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
            ) : (
              <Col md={7} className=" my-4">
                <Card className=" bg-success p-2 text-dark bg-opacity-50">
                  <CardBody>
                    <Row>
                      <Col md={9}>
                        <CardTitle>{mensaje.emisor}</CardTitle>
                        <CardText>{mensaje.contenido}</CardText>
                      </Col>
                      <Col md={3}>
                        <CardText className="text-end">{mensaje.timestamp}</CardText>
                        <CardText className="text-end">{mensaje.estado}</CardText>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
            )
          )
      )}
    </Container>
  );
}

export default Conversacion;
