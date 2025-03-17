import {
  Container,
  Row,
  Col,
  Card,
  Button,
  CardTitle,
  CardHeader,
  CardBody,
  CardText,
} from "react-bootstrap";
import React, { useContext, useState, useEffect } from "react";
import { CinesContext } from "./cinesProvider";
import { useParams } from "react-router";

function CinesDetail() {
  const { idsala } = useParams();
  const cines = useContext(CinesContext);
  const [sala, setSala] = useState(null);
  const [filas, setFilas] = useState([]);
  const [columnas, setColumnas] = useState([]);
  const [asientosReservados, setAsientosReservados] = useState([]);

  useEffect(() => {
    const salaSeleccionada = cines.salas.find((sala) => sala.id === idsala);
    if (salaSeleccionada) {
      setSala(salaSeleccionada);
      seleccionarFilasYColumnas(salaSeleccionada);
    }
    setAsientosReservados([...salaSeleccionada.asientosOcupados]);
  }, [idsala, cines.salas]);

  const seleccionarFilasYColumnas = (sala) => {
    setFilas(Array.from({ length: sala.filas }, () => 0));
    setColumnas(Array.from({ length: sala.columnas }, () => 0));
  };

  const calcularAsiento = (fila, columna) => {
    return `${fila + 1}-${columna + 1}`;
  };

  const reservarAsiento = (fila, columna) => {
    let asiento = `${fila + 1}-${columna + 1}`;
    if (!asientosReservados.includes(asiento)) {
      setAsientosReservados([...asientosReservados, asiento]);
    }
  };

  const liberarAsiento = (fila, columna) => {
    let asiento = `${fila + 1}-${columna + 1}`;
    if (asientosReservados.includes(asiento)) {
      setAsientosReservados(
        asientosReservados.filter((asiento2) => asiento2 !== asiento)
      );
    }
  };

  return (
    <Container>
      {sala && (
        <>
          <Card className="my-5">
            <CardHeader>{sala.nombre}</CardHeader>
            <CardBody>
              {cines.cartelera.map((pelicula) =>
                cines.salas.map(
                  (sala) =>
                    sala.pelicula === pelicula.codigo &&
                    sala.id === idsala && (
                      <>
                        <CardText>{pelicula.titulo}</CardText>
                        <CardText>Filas: {sala.filas}</CardText>
                        <CardText>Columnas: {sala.columnas}</CardText>
                        <CardText>
                          Asientos: {sala.columnas * sala.filas}
                        </CardText>
                        <CardText>
                          Asientos ocupados: {sala.asientosOcupados.length}
                        </CardText>
                        <CardText>
                          Asientos Minusvalidos:{" "}
                          {sala.asientosMinusvalidos.length}
                        </CardText>

                        <CardText>
                          Horarios:
                          {sala.horarios.map((horario) => (
                            <> {horario} </>
                          ))}
                        </CardText>
                      </>
                    )
                )
              )}
            </CardBody>
          </Card>
          {filas.map((fila, indexFila) => (
            <Row key={indexFila}>
              {columnas.map((columa, indexColumna) => (
                <Col key={indexColumna}>
                  <Card className="my-2">
                    <CardTitle className="text-center">
                      {indexFila + 1}+{indexColumna + 1}
                    </CardTitle>

                    {asientosReservados.includes(
                      calcularAsiento(indexFila, indexColumna)
                    ) ? (
                      <Button
                        variant="danger"
                        onClick={() => liberarAsiento(indexFila, indexColumna)}
                      >
                        Reservado
                      </Button>
                    ) : sala.asientosMinusvalidos.includes(
                        calcularAsiento(indexFila, indexColumna)
                      ) ? (
                      <Button
                        variant="success"
                        onClick={() => reservarAsiento(indexFila, indexColumna)}
                      >
                        Minusvalidos
                      </Button>
                    ) : (
                      <Button
                        onClick={() => reservarAsiento(indexFila, indexColumna)}
                      >
                        Disponible
                      </Button>
                    )}
                  </Card>
                </Col>
              ))}
            </Row>
          ))}
        </>
      )}
    </Container>
  );
}

export default CinesDetail;
