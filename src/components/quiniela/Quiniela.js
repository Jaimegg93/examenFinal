import { useState, useEffect } from "react";
import { Card, CardTitle, Container, Row, Col, Button, Modal } from "react-bootstrap";
import React from "react";

function Quiniela() {
  const [datos, setDatos] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [apuestaEscogida, setApuestaEscogida] = useState([]);
  const [selecciones, setSelecciones] = useState({});

  useEffect(() => {
    fetch("/quinielas.json")
      .then((response) => response.json())
      .then((data) => setDatos(data));
  }, []);

  if (datos.length === 0) {
    return <div>Esperando...</div>;
  }

  const mostrarMensaje = (apuesta) => {
    setShowModal(true);
    setApuestaEscogida(apuesta);

    // Inicializa las selecciones con valores nulos para cada partido
    const inicial = apuesta.partidos.reduce((acc, _, index) => {
      acc[index] = null;
      return acc;
    }, {});
    setSelecciones(inicial);
  };

  // Guardar la selección temporalmente (sin sumar todavía)
  const handleSeleccion = (index, valor) => {
    setSelecciones((prev) => ({
      ...prev,
      [index]: valor,
    }));
  };

  const confirmarApuesta = () => {
    // Validar que todas las selecciones estén hechas
    if (Object.values(selecciones).some((value) => value === null)) {
      alert("Completa todas las selecciones antes de confirmar.");
      return;
    }

    // Sumar +1 a las apuestas seleccionadas al confirmar
    const nuevaData = { ...datos };

    nuevaData.apuestas = nuevaData.apuestas.map((apuesta) => {
      if (apuesta.jornada === apuestaEscogida.jornada) {
        apuesta.partidos.forEach((partido, index) => {
          const seleccion = selecciones[index];
          if (seleccion) {
            partido.apuestas[seleccion] += 1; // Sumar +1 solo al confirmar
          }
        });
      }
      return apuesta;
    });

    setDatos(nuevaData);
    setShowModal(false);
  };

  return (
    <Container>
      {/* Mostrar apuestas disponibles */}
      {datos.apuestas.map((apuesta, index) => (
        <Row key={index}>
          <Card>
            <h2>
              Apuesta: {index + 1} <Button onClick={() => mostrarMensaje(apuesta)}>Añadir apuesta</Button>
            </h2>

            <CardTitle>
              {apuesta.fecha} {" | "} {apuesta.jornada}
            </CardTitle>
            {apuesta.partidos.map((partido, i) => (
              <Row key={i}>
                <Col md={3}>Local: {partido.local}</Col>
                <Col md={3}>Visitante: {partido.visitante}</Col>
                <Col md={3}>
                  Apuestas: 1: {partido.apuestas["1"]} X: {partido.apuestas["X"]} 2: {partido.apuestas["2"]}
                </Col>
              </Row>
            ))}
          </Card>
        </Row>
      ))}

      {/* Modal para confirmar apuesta */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Añadir apuesta: Jornada {apuestaEscogida.jornada}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {apuestaEscogida.partidos?.map((partido, index) => (
            <Row key={index} className="mb-2">
              <Col md={8}>
                {partido.local} vs {partido.visitante}
              </Col>
              <Col md={4}>
                {/* Botón 1 */}
                <Button
                  variant={selecciones[index] === "1" ? "success" : "outline-secondary"}
                  onClick={() => handleSeleccion(index, "1")}
                  className="me-2"
                >
                  1
                </Button>
                {/* Botón X */}
                <Button
                  variant={selecciones[index] === "X" ? "success" : "outline-secondary"}
                  onClick={() => handleSeleccion(index, "X")}
                  className="me-2"
                >
                  X
                </Button>
                {/* Botón 2 */}
                <Button
                  variant={selecciones[index] === "2" ? "success" : "outline-secondary"}
                  onClick={() => handleSeleccion(index, "2")}
                >
                  2
                </Button>
              </Col>
            </Row>
          ))}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={confirmarApuesta}>
            Confirmar apuesta
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default Quiniela;
