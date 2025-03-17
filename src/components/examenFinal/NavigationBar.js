// filepath: /c:/Users/jaime/Desktop/clase/Interfaces/my-app/src/components/routers/nav.js
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  NavItem,
  DropdownItem,
} from "react-bootstrap";
import { Outlet } from "react-router";
import { Link } from "react-router";
import React, { useContext, useState } from "react";
import { CinesContext } from "./cinesProvider";

function NavigationBar() {
  const cines = useContext(CinesContext);

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>CinesEuropa</Navbar.Brand>
          <Navbar.Brand as={Link} to="/">
            Home
          </Navbar.Brand>
          <Nav className="me-auto">
            <NavDropdown title="Salas">
              {cines.salas.map((sala, index) => (
                <DropdownItem as={Link} to={"/sala/" + sala.id}>
                  {sala.nombre}
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
