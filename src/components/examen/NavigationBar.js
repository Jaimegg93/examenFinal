import { Navbar, Container, Nav, NavDropdown, NavItem } from "react-bootstrap";
import { Outlet } from "react-router";
import { Link } from "react-router";
import React from "react";

function NavigationBar() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Inicio
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} title="Inicio" to="/">
              Lista contactos
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Outlet />
    </div>
  );
}

export default NavigationBar;
