// filepath: /c:/Users/jaime/Desktop/clase/Interfaces/my-app/src/components/routers/formulario.js
import React from "react";
import { Form, Button } from "react-bootstrap";

function Formulario() {
  return (
    <Form className="container mt-5">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Password</Form.Label>
        <Form.Control placeholder="Password" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Mensaje</Form.Label>
        <Form.Control as="textArea" rows={4} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Recordar contraseña" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Formulario;
