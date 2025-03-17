import { useEffect, useState } from "react";
import {
  CardHeader,
  CardTitle,
  Card,
  CardBody,
  CardText,
  Container,
  Button,
  Form,
  Modal,
  ModalBody,
} from "react-bootstrap";

function ExamenRecu() {
  const [peliculas, setPeliculas] = useState([]);
  const [categorias] = useState(["Comedia", "Thriller", "Drama", "Aventura", "Ciencia Ficción"]);
  const [mostrar, setMostrar] = useState(false);
  const [comentario, setComentario] = useState(0);
  const [peliculaSeleccionada, setPeliculaSeleccionada] = useState(null);
  const [show, setShow] = useState(false);
  const [usuario, setUsuario] = useState("");
  const [puntuacion, setPuntuacion] = useState(0);
  const [comentarioNuevo, setComentarioNuevo] = useState(0);
  const [peliculaModal, setPeliculaModal] = useState(null);

  useEffect(() => {
    fetch("/peliculas.json")
      .then((response) => response.json())
      .then((data) => setPeliculas(data));
  }, []);

  const mostrarComentarios = (pelicula) => {
    if (peliculaSeleccionada != pelicula) {
      setPeliculaSeleccionada(pelicula);
      setMostrar(true);
    } else {
      setMostrar(!mostrar);
    }
  };
  const siguienteComent = (pelicula) => {
    if (pelicula.valoraciones.length <= comentario + 1) {
      setComentario(0);
    } else {
      setComentario(comentario + 1);
    }
  };
  const eliminarComentario = (pelicula) => {
    let valoraciones = [...pelicula.valoraciones];
    valoraciones.splice(comentario, 1);
    pelicula.valoraciones = valoraciones;
    setPeliculas([...peliculas]);
    setComentario(0);
  };

  const handleClose = () => setShow(false);
  const handleShow = (pelicula) => {
    setPeliculaModal(pelicula);
    setShow(true);
  };
  const guardarComentario = () => {
    let nuevoComentario = {
      puntuacion: parseInt(puntuacion),
      usuario: usuario,
      comentario: comentarioNuevo,
    };
    peliculaModal.valoraciones.push(nuevoComentario);
    setPeliculas([...peliculas]);
    handleClose();
  };

  const calcularMedia = (pelicula) => {
    let suma = 0;
    pelicula.valoraciones.map((valoracion) => (suma += valoracion.puntuacion));
    return suma / pelicula.valoraciones.length;
  };
  return (
    <Container>
      {categorias.map((categoria, index) => (
        <Card>
          <CardHeader>
            <CardTitle>{categoria}</CardTitle>
          </CardHeader>
          {peliculas
            .filter((pelicula) => pelicula.categoria.includes(categoria))
            .map(
              (pelicula, index) =>
                index === 0 && ( // solo 1 pelicula por seccion
                  <CardBody>
                    <CardTitle key={pelicula.titulo}>{pelicula.titulo}</CardTitle>
                    <img src={pelicula.foto} />
                    <CardText>Director: {pelicula.director}</CardText>
                    <CardText>Sinopsis: {pelicula.sinopsis}</CardText>
                    <CardText>Año: {pelicula.año}</CardText>
                    <CardText>
                      Categoria/as:
                      {Array.isArray(pelicula.categoria) ? (
                        pelicula.categoria.map((categor) => <>{categor}</>)
                      ) : (
                        <>{pelicula.categoria}</>
                      )}
                    </CardText>
                    <CardText>{calcularMedia(pelicula)}</CardText>

                    <Button onClick={() => mostrarComentarios(pelicula)}>Ver comentarios</Button>
                    <Button onClick={() => handleShow(pelicula)}>Añadir Formulario</Button>

                    <Modal show={show} onHide={handleClose}>
                      <Modal.Header closeButton>
                        <Modal.Title>Añadir comentario a {pelicula.titulo}</Modal.Title>
                      </Modal.Header>

                      <ModalBody>
                        <Form>
                          <Form.Group className="mb-3">
                            <Form.Label>Usuario</Form.Label>
                            <Form.Control
                              type="email"
                              placeholder="Usuario"
                              onChange={(e) => setUsuario(e.target.value)}
                            />
                          </Form.Group>
                          <Form.Group className="mb-3">
                            <Form.Label>Nota</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Nota"
                              onChange={(e) => setPuntuacion(e.target.value)}
                            />
                          </Form.Group>
                          <Form.Group className="mb-3">
                            <Form.Label>Comentario</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Comentario"
                              onChange={(e) => setComentarioNuevo(e.target.value)}
                            />
                          </Form.Group>
                        </Form>
                      </ModalBody>
                      <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                          Close
                        </Button>
                        <Button variant="primary" onClick={() => guardarComentario(pelicula)}>
                          Save Changes
                        </Button>
                      </Modal.Footer>
                    </Modal>
                    {mostrar && peliculaSeleccionada == pelicula && pelicula.valoraciones[comentario] && (
                      <Card>
                        <CardBody>
                          <CardText>
                            {pelicula.valoraciones[comentario].usuario} | {pelicula.valoraciones[comentario].puntuacion}{" "}
                            | {pelicula.valoraciones[comentario].comentario}
                          </CardText>
                          <Button onClick={() => siguienteComent(pelicula)}>Siguiente</Button>
                          <Button onClick={() => eliminarComentario(pelicula)}>Eliminar</Button>
                        </CardBody>
                      </Card>
                    )}
                  </CardBody>
                )
            )}
        </Card>
      ))}
    </Container>
  );
}
export default ExamenRecu;
