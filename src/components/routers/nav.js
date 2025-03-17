// filepath: /c:/Users/jaime/Desktop/clase/Interfaces/my-app/src/components/routers/nav.js
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Outlet } from "react-router";
import { Link } from "react-router";
import React from "react";

function Navv() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/formulario">
            CIFP Avilés
          </Navbar.Brand>
          <Nav className="me-auto">
            <NavDropdown title="Inicio" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/formulario">
                Formulario
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/perfil">
                Perfil
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Acerca de mi" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/bio">
                Bio
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Mitrabajo">
                Mi trabajo
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Tips">
                Tips para profesionales
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Casos de exito" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/Clientes">
                Clientes
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Logros">
                Logros
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Colaborar">
                Como colaborar
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Contacto" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/Redes">
                Redes sociales
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Mensaje">
                Deja un mensaje
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/LLamame">
                Llamame
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
      <Outlet />
    </div>
  );
}

export default Navv;
