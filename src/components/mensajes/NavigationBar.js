// filepath: /c:/Users/jaime/Desktop/clase/Interfaces/my-app/src/components/routers/nav.js
import { Navbar, Container, Nav, NavDropdown, NavItem, DropdownItem } from "react-bootstrap";
import { Outlet } from "react-router";
import { Link } from "react-router";
import React, { useContext, useState } from "react";
import { MensajesContext } from "./MensajesProvider";

function NavigationBar() {
  const mensajes = useContext(MensajesContext);

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Inicio
          </Navbar.Brand>
          <Nav className="me-auto">
            <NavDropdown title="Conversaciones">
              {mensajes.chats.map((chat) => (
                <DropdownItem as={Link} to={"/contacto/" + chat.contacto}>
                  {chat.contacto}
                </DropdownItem>
              ))}
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>

      <Outlet />
    </div>
  );
}

export default NavigationBar;
