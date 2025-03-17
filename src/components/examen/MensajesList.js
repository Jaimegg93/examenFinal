import React, { useContext, useEffect, useState } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardText,
  Container,
  Row,
  Col,
  Button,
  Carousel,
  CardTitle,
  Nav,
  Navbar,
  NavLink,
  NavDropdown,
  CardImg,
} from "react-bootstrap";
import { Link } from "react-router";
import { MessContext } from "./MessProvider";

function MensajesList() {
  const { mensajes } = useContext(MessContext);
  const [contacto, setContacto] = useState(null);

  const selecionarChat = (chat) => {
    setContacto(chat);
  };

  return (
    <div>
      <Container>
        {contacto != null ? (
          <Carousel>
            {contacto.mensajes.map((mensaje) => (
              <Carousel.Item>
                <Card style={{ width: "300px" }}>
                  <CardTitle>{mensaje.emisor}</CardTitle>
                  <Card.Img
                    style={{ width: "200px", height: "200px" }}
                    variant="top"
                    src={mensaje.emisor + ".jpg"}
                  />
                  <CardBody></CardBody>
                </Card>
              </Carousel.Item>
            ))}
          </Carousel>
        ) : (
          <Carousel>
            {mensajes.chats[0].mensajes.map((mensaje) => (
              <Carousel.Item>
                <Card>
                  <CardTitle>{mensaje.emisor}</CardTitle>
                  <Card.Img
                    style={{ width: "200px", height: "200px" }}
                    variant="top"
                    src={mensaje.emisor + ".jpg"}
                  />
                  <CardBody></CardBody>
                </Card>
              </Carousel.Item>
            ))}
          </Carousel>
        )}

        {mensajes.chats.map((chat) => (
          <Card>
            <CardBody>
              <CardTitle>{chat.contacto}</CardTitle>
              <Button onClick={() => selecionarChat(chat)}>Seleccionar</Button>
            </CardBody>
          </Card>
        ))}
      </Container>
    </div>
  );
}
export default MensajesList;
