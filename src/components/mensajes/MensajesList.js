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
} from "react-bootstrap";
import React, { useContext, useState } from "react";
import { MensajesContext } from "./MensajesProvider";

function MensajesList() {
  const mensajes = useContext(MensajesContext);

  const [contactoSeleccionado, setContactoSeleccionado] = useState(null);

  const seleccionarContacto = (chat) => {
    setContactoSeleccionado(chat);
  };

  return (
    <Container>
      <Col md={3} className="mx-auto">
        <Carousel className="my-5 mx-auto">
          {contactoSeleccionado == null
            ? mensajes.chats[0].mensajes.map((mensaje) => (
                <Carousel.Item>
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
              ))
            : contactoSeleccionado.mensajes.map((mensaje) => (
                <Carousel.Item>
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
      </Col>
      <Row>
        {mensajes.chats.map((chat) => (
          <Col md={3} className="mx-auto">
            <Card className="my-1">
              <CardBody className="text-center">{chat.contacto}</CardBody>
              <Button onClick={() => seleccionarContacto(chat)}>Seleccionar</Button>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default MensajesList;
