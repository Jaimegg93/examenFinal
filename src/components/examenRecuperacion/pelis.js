import React from "react";
import { Alert, Button, Card, Container, Form } from "react-bootstrap";
import { useState, useEffect } from "react";

function ExamenRecuperacion() {
  const [peliculas, setPeliculas] = useState([]);

  const [categorias, setCategorias] = useState(["Comedia", "Thriller", "Drama", "Aventura", "Ciencia Ficción"]);

  const [mostrarComentarios, setMostrarComentarios] = useState(false);
  const [peliculaSelecionada, setPeliculaSelecionada] = useState(null);
  const [comentario, setComentario] = useState(0);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [nombre, setNombre] = useState("");
  const [puntuacion, setPuntuacion] = useState(0);
  const [comentarioTexto, setComentarioTexto] = useState("");

  useEffect(() => {
    fetch("/peliculas.json")
      .then((response) => response.json())
      .then((data) => setPeliculas(data));
  }, []);

  const comentariosPeli = (pelicula) => {
    if (peliculaSelecionada === pelicula) {
      setMostrarComentarios(!mostrarComentarios);
    } else {
      setPeliculaSelecionada(pelicula);
      setMostrarComentarios(true);
    }
  };

  const siguienteComentario = (pelicula) => {
    setComentario(comentario + 1);
    if (comentario === pelicula.valoraciones.length - 1) {
      setComentario(0);
    }
  };

  const calcularMedia = (pelicula) => {
    let suma = 0;
    pelicula.valoraciones.map((valoracion) => (suma += valoracion.puntuacion));
    suma = suma / pelicula.valoraciones.length;
    return suma;
  };

  const eliminarComentario = (pelicula, comentarioIndex) => {
    let valoraciones = [...pelicula.valoraciones];
    valoraciones.splice(comentarioIndex, 1);
    pelicula.valoraciones = valoraciones;
    setPeliculas([...peliculas]);
  };

  const añadirComentario = (pelicula) => {
    setMostrarFormulario(true);
    setPeliculaSelecionada(pelicula);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevaValoracion = {
      usuario: nombre,
      puntuacion: parseInt(puntuacion),
      comentario: comentarioTexto,
    };
    peliculaSelecionada.valoraciones.push(nuevaValoracion);
    setPeliculas([...peliculas]);
    setMostrarFormulario(false);
    setNombre("");
    setPuntuacion(0);
    setComentarioTexto("");
  };

  return (
    <Container>
      {categorias.map((categoria) => (
        <div>
          <h1>{categoria}</h1>
          {peliculas.map((pelicula) =>
            Array.isArray(pelicula.categoria)
              ? pelicula.categoria.map(
                  (categoriapeli) =>
                    categoriapeli === categoria && (
                      <Card key={pelicula.titulo} className="my-4">
                        <Card.Header>{pelicula.titulo}</Card.Header>
                        <Card.Body>
                          <Card.Title>{pelicula.director}</Card.Title>
                          <Card.Text>{pelicula.año}</Card.Text>
                          <Card.Text>
                            {pelicula.actoresPrincipales.map((actores) => (
                              <> {actores}</>
                            ))}
                          </Card.Text>
                          <Card.Text>{pelicula.sinopsis}</Card.Text>
                          <Card.Text>{calcularMedia(pelicula)}</Card.Text>
                          {pelicula.valoraciones.length != 0 &&
                            mostrarComentarios &&
                            peliculaSelecionada === pelicula && (
                              <Card.Text>
                                {pelicula.valoraciones[comentario].usuario} -{" "}
                                {pelicula.valoraciones[comentario].comentario} -{" "}
                                {pelicula.valoraciones[comentario].puntuacion}
                              </Card.Text>
                            )}
                          <Button onClick={() => comentariosPeli(pelicula)}> Opiniones</Button>
                          <Button onClick={() => siguienteComentario(pelicula)}> Siguiente</Button>
                          <Button onClick={() => añadirComentario(pelicula)}> Añadir</Button>
                          <Button onClick={() => eliminarComentario(pelicula, comentario)}> Eliminar</Button>
                        </Card.Body>
                      </Card>
                    )
                )
              : pelicula.categoria === categoria && (
                  <Card key={pelicula.titulo}>
                    <Card.Header>{pelicula.titulo}</Card.Header>
                    <Card.Body>
                      <Card.Title>{pelicula.director}</Card.Title>
                      <Card.Text>{pelicula.año}</Card.Text>
                      <Card.Text>
                        {pelicula.actoresPrincipales.map((actores) => (
                          <> {actores}</>
                        ))}
                      </Card.Text>
                      <Card.Text>{pelicula.sinopsis}</Card.Text>
                      <Card.Text>{calcularMedia(pelicula)}</Card.Text>
                      {pelicula.valoraciones.length != 0 && mostrarComentarios && peliculaSelecionada === pelicula && (
                        <Card.Text>
                          {pelicula.valoraciones[comentario].usuario} - {pelicula.valoraciones[comentario].comentario} -{" "}
                          {pelicula.valoraciones[comentario].puntuacion}
                        </Card.Text>
                      )}
                      <Button onClick={() => comentariosPeli(pelicula)}> Opiniones</Button>
                      <Button onClick={() => siguienteComentario(pelicula)}> Siguiente</Button>
                      <Button onClick={() => añadirComentario(pelicula)}> Añadir</Button>
                      <Button onClick={() => eliminarComentario(pelicula, comentario)}> Eliminar</Button>
                    </Card.Body>
                  </Card>
                )
          )}
        </div>
      ))}
      {mostrarFormulario && (
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formNombre">
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
          </Form.Group>
          <Form.Group controlId="formPuntuacion">
            <Form.Label>Puntuación</Form.Label>
            <Form.Control
              type="number"
              value={puntuacion}
              onChange={(e) => setPuntuacion(e.target.value)}
              required
              min="0"
              max="10"
            />
          </Form.Group>
          <Form.Group controlId="formComentario">
            <Form.Label>Comentario</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={comentarioTexto}
              onChange={(e) => setComentarioTexto(e.target.value)}
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Añadir Review
          </Button>
        </Form>
      )}
    </Container>
  );
}
export default ExamenRecuperacion;
