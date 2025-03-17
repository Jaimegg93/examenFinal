import { Container, Row, Col, Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { NewsContext } from "./NewsProvider";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router";

function NewsList() {
  const { newsItems, addToNewsList, removeFromNewsList } = useContext(NewsContext);

  return (
    <div>
      <h1>Ultimas noticas</h1>
      <ListGroup>
        {newsItems != undefined &&
          newsItems.map((item) => (
            <ListGroup.Item key={item.id}>
              <Link to={`/news/${item.id}`}>{item.titulo}</Link>
            </ListGroup.Item>
          ))}
      </ListGroup>
    </div>
  );
}

export default NewsList;
