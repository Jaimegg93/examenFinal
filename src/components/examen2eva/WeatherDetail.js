// filepath: /c:/Users/jaime/Desktop/clase/Interfaces/my-app/src/components/routers/Redes.js
import React, { useContext } from "react";
import { useParams, Link } from "react-router";
import { useState, useEffect } from "react";
import { Card, CardHeader, Container, Button, CardTitle, CardText, CardBody, Col, Row, Table } from "react-bootstrap";
import { WeatherContext } from "./WeatherProvider";

function WeatherDetail() {
  const weather = useContext(WeatherContext);
  const [ciudadSeleccionada, setCiudadSeleccionada] = useState(weather.ciudades[0]);
  const { nombre } = useParams();

  useEffect(() => {
    if (weather && weather.ciudades) {
      buscarCiudad();
    }
  }, [nombre]); // Añadir dependencias

  const buscarCiudad = () => {
    weather.ciudades.map((ciudad) => ciudad.nombre === nombre && setCiudadSeleccionada(ciudad));
  };

  return (
    <Container>
      <h2 className="mt-3">Datos de: {ciudadSeleccionada.nombre}</h2>

      <Table striped bordered hover className="mt-3">
        <thead>
          <tr>
            <th>#</th>
            {ciudadSeleccionada.fechas.map((fecha, index) => (
              <th>{fecha.fecha}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Temperatura maxima</td>
            {ciudadSeleccionada.fechas.map((fecha, index) => (
              <td>{fecha.temperatura.maxima}</td>
            ))}
          </tr>
          <tr>
            <td>Temperatura minima</td>
            {ciudadSeleccionada.fechas.map((fecha, index) => (
              <td>{fecha.temperatura.minima}</td>
            ))}
          </tr>
          <tr>
            <td>Direccion del viento</td>
            {ciudadSeleccionada.fechas.map((fecha, index) => (
              <td>{fecha.viento.direccion}</td>
            ))}
          </tr>
          <tr>
            <td>Velocidad del viento</td>
            {ciudadSeleccionada.fechas.map((fecha, index) => (
              <td>{fecha.viento.velocidad}</td>
            ))}
          </tr>
          <tr>
            <td>LLuvia</td>
            {ciudadSeleccionada.fechas.map((fecha, index) => (
              <td>{fecha.lluvia}</td>
            ))}
          </tr>
          <tr>
            <td>Puesta del sol</td>
            {ciudadSeleccionada.fechas.map((fecha, index) => (
              <td>{fecha.sol.puesta}</td>
            ))}
          </tr>
          <tr>
            <td>Salida del sol</td>
            {ciudadSeleccionada.fechas.map((fecha, index) => (
              <td>{fecha.sol.salida}</td>
            ))}
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}
export default WeatherDetail;
