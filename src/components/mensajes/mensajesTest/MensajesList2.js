import { Container, Row, Col, Card, Carousel, CardImg, CardBody, CardText, Button } from "react-bootstrap";
import React, { useState, useEffect } from "react";

function MensajesList() {
  const [mensajes, setMensajes] = useState({ chats: [] });
  const [contactoSeleccionado, setContactoSeleccionado] = useState(null);

  useEffect(() => {
    fetch("/mensajes.json")
      .then((response) => response.json())
      .then((data) => setMensajes(data[0])); // ✅ Guarda el primer objeto correctamente
  }, []);

  const seleccionarContacto = (chat) => {
    setContactoSeleccionado(chat);
  };

  return (
    <Container>
      <Col md={3} className="mx-auto">
        {!mensajes.chats?.length ? ( // ✅ Validación para evitar errores de undefined
          <p>Cargando...</p>
        ) : (
          <>
            <Carousel className="my-5 mx-auto">
              {contactoSeleccionado == null
                ? mensajes.chats[0]?.mensajes?.map(
                    (
                      mensaje // ✅ Optional chaining para evitar errores
                    ) => (
                      <Carousel.Item key={mensaje.timestamp}>
                        <Card className="mx-auto">
                          <CardBody>
                            <CardText className="mx-auto text-center">{mensaje.emisor}</CardText>
                          </CardBody>
                          <CardImg style={{ height: "350px" }} src={mensaje.emisor + ".jpg"} />
                        </Card>
                        <Carousel.Caption>
                          <h3>{mensaje.emisor}</h3>
                        </Carousel.Caption>
                      </Carousel.Item>
                    )
                  )
                : contactoSeleccionado?.mensajes?.map((mensaje) => (
                    <Carousel.Item key={mensaje.timestamp}>
                      <Card className="mx-auto">
                        <CardBody>
                          <CardText className="mx-auto text-center">{mensaje.emisor}</CardText>
                        </CardBody>
                        <CardImg style={{ height: "350px" }} src={mensaje.emisor + ".jpg"} />
                      </Card>
                      <Carousel.Caption>
                        <h3>{mensaje.emisor}</h3>
                      </Carousel.Caption>
                    </Carousel.Item>
                  ))}
            </Carousel>
            <Row>
              {mensajes.chats.map((chat) => (
                <Col md={3} className="mx-auto" key={chat.contacto}>
                  <Card className="my-1">
                    <CardBody className="text-center">{chat.contacto}</CardBody>
                    <Button onClick={() => seleccionarContacto(chat)}>Seleccionar</Button>
                  </Card>
                </Col>
              ))}
            </Row>
          </>
        )}
      </Col>
    </Container>
  );
}

export default MensajesList;
