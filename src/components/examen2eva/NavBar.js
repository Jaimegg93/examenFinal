// filepath: /c:/Users/jaime/Desktop/clase/Interfaces/my-app/src/components/routers/nav.js
import { Navbar, Container, Nav, NavDropdown, NavItem, DropdownItem } from "react-bootstrap";
import { Outlet } from "react-router";
import { Link } from "react-router";
import React, { useContext, useState } from "react";
import { WeatherContext } from "./WeatherProvider";

function NavigationBar() {
  const weather = useContext(WeatherContext);

  if (weather === null || weather.length === 0) {
    return <p>cargando...</p>;
  }

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Inicio
          </Navbar.Brand>
          <Nav className="me-auto">
            <NavDropdown title="Ciudades">
              {weather.ciudades.map((ciudad, index) => (
                <DropdownItem key={index} as={Link} to={"/ciudad/" + ciudad.nombre}>
                  {ciudad.nombre}
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
