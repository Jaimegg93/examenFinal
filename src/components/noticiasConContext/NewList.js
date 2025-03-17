import React, { useContext, useEffect, useState } from "react";
import { Card, CardBody, CardHeader, CardText, Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router";
import { NewsContext } from "./NewsContext";

function NewList() {
  const { noticias } = useContext(NewsContext);

  return (
    <Container className="my-5 ">
      <Row>
        {noticias.map((noticia) => (
          <Col md={4}>
            <Card key={noticia.id} className="mb-3">
              <Link to={`/NewsDetail/${noticia.titulo}`} className="btn bg-dark text-white">
                <Card.Header className=" fw-bold">{noticia.titulo}</Card.Header>
              </Link>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
export default NewList;
