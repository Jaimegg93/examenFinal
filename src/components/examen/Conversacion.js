import React, { useContext, useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import { Link, useParams } from "react-router";
import { MessProvider } from "./MessProvider";
function WeatherDetail() {
  const { mensajes } = useContext(MessContext);
  const { contacto } = useParams();

  return <div></div>;
}
export default WeatherDetail;
