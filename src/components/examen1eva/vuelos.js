import { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardText,
  CardTitle,
  Container,
  Row,
  Col,
  Button,
  CardFooter,
  Toast,
  ToastContainer,
  Modal,
  Form,
  ModalBody,
} from "react-bootstrap";

function Vuelos() {
  const [vuelos, setVuelos] = useState([]);
  const [vueloSeleccionado, setvueloSleccionado] = useState(null);
  const [vuelosEliminados, setVuelosEliminados] = useState([1]);
  const [plazas, setPlazas] = useState(100);
  const [plazasReservadas, setPlazasReservadas] = useState(0);
  const [vueloActual, setVueloActual] = useState(null);
  const [destinoSeleccionado, setDestinoSeleccionado] = useState(null);
  const [mostrar, setMostrar] = useState(false);

  useEffect(() => {
    fetch("/vuelos.json")
      .then((response) => response.json())
      .then((data) => setVuelos(data));
  }, []);

  const seleccionarVuelo = (vuelo, destino) => {
    if (vuelo === vueloSeleccionado) {
      setvueloSleccionado(null);
    } else {
      setPlazas(vuelo.seats);
      setPlazasReservadas(0);
      setvueloSleccionado(vuelo);
      setDestinoSeleccionado(destino);
    }
  };
  const eliminarVuelo = (vuelo) => {
    const nuevosEliminados = [...vuelosEliminados];
    nuevosEliminados.push(vuelo.number); // Añadir al array usando push.
    // se añade eñ numero de vuelo pq el includes no puede comparar objetos, entonces comparamos el num
    setVuelosEliminados(nuevosEliminados); // Actualizar el estado  };
  };

  const reservaAsiento = (vuelo) => {
    if (plazasReservadas != vuelo.seats) {
      setPlazasReservadas(plazasReservadas + 1);
      setPlazas(plazas - 1);
    }
  };

  const liberarAsiento = (vuelo) => {
    if (plazasReservadas != 0) {
      setPlazasReservadas(plazasReservadas - 1);
      setPlazas(plazas + 1);
    }
  };

  const mostrarModal = () => {
    setMostrar(!mostrar);
  };

  const crearVuelo = () => {
    setMostrar(!mostrar);
  };

  return (
    <Container>
      {mostrar && (
        <Modal show={mostrar} onHide={setMostrar}>
          <Modal.Header closeButton>
            <Modal.Title>Añadir vuelo</Modal.Title>
          </Modal.Header>
          <ModalBody>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
            </Form>
          </ModalBody>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setMostrar()}>
              Close
            </Button>
            <Button onClick={() => crearVuelo()} variant="primary">
              Save changes
            </Button>
          </Modal.Footer>
        </Modal>
      )}
      {plazas <= 3 && (
        <ToastContainer position="top" className="p-3" style={{ zIndex: 1 }}>
          <Toast>
            <Toast.Header>
              <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
              <strong className="me-auto">
                Ultimas plazas disponibles para el vuelo {vueloSeleccionado.number} con destino{" "}
                {destinoSeleccionado.destination}
              </strong>
            </Toast.Header>
          </Toast>
        </ToastContainer>
      )}
      <Row>
        {vuelos.map((destino, index) => (
          <Card className="mx-auto" style={{ width: "800px" }}>
            <CardHeader>
              <CardTitle className="text-center">{destino.destination}</CardTitle>
            </CardHeader>
            <Button onClick={() => mostrarModal()}>Añadir Vuelo</Button>

            {destino.flights.map(
              (vuelo) =>
                !vuelosEliminados.includes(vuelo.number) && (
                  <>
                    <CardBody className="text-center">
                      <CardTitle>Numero de vuelo: {vuelo.number}</CardTitle>
                      <CardTitle>Fecha: {vuelo.date}</CardTitle>

                      <Button onClick={() => seleccionarVuelo(vuelo, destino)}>Seleccionar</Button>
                      <Button onClick={() => eliminarVuelo(vuelo, destino, index)}>Eliminar</Button>

                      {vueloSeleccionado === vuelo && (
                        <>
                          <Card className="my-3">
                            <CardText>Tiempo: {vuelo.time}</CardText>
                            <CardText>Number: {vuelo.number}</CardText>
                            <CardText>Asientos: {vuelo.seats}</CardText>
                            <CardText>Asientos Libres: {plazas}</CardText>
                            <CardText>Asientos Reservados: {plazasReservadas}</CardText>
                            <CardFooter>
                              {vuelo.seats != plazasReservadas && (
                                <Button style={{ width: "200px" }} onClick={() => reservaAsiento(vuelo)}>
                                  Reservar
                                </Button>
                              )}
                              {0 != plazasReservadas && (
                                <Button style={{ width: "200px" }} onClick={() => liberarAsiento(vuelo)}>
                                  Liberar
                                </Button>
                              )}
                            </CardFooter>
                          </Card>
                        </>
                      )}
                    </CardBody>
                  </>
                )
            )}
          </Card>
        ))}
      </Row>
    </Container>
  );
}
export default Vuelos;
