import React, { useState } from "react";
import { useParams } from "react-router";
function Productos() {
  const [productos, setProductos] = useState([
    { id: 1, nombre: "Camiseta", precio: 19.99 },
    { id: 2, nombre: "Pantalón", precio: 29.99 },
  ]);
  let prodid = useParams();
  return (
    <div>
      <h1>Nuestros Productos</h1>
      <ul>
        {Object.keys(prodid).length == 0
          ? productos.map((producto) => (
              <li key={producto.id}>
                {producto.nombre} - ${producto.precio}
              </li>
            ))
          : productos
              .filter((producto) => producto.id == parseInt(prodid.prodId))
              .map((producto) => (
                <li key={producto.id}>
                  {producto.nombre} - ${producto.precio}
                </li>
              ))}
      </ul>
    </div>
  );
}

export default Productos;
