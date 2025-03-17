import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <div className="App">
      <header>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/productos ">Productos</a>
          </li>
          <li>
            <a href="/About">Home</a>
          </li>
        </ul>
      </header>

      <section className="hero">
        <Container>
          <Row>
            <Col>
              <h1>Because there is no planet B</h1>
              <p> Act Green, Live Green.</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <Outlet />
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};
export default Layout;
