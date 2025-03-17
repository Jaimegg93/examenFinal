// filepath: /c:/Users/jaime/Desktop/clase/Interfaces/my-app/src/components/routers/Redes.js
import React from "react";
import { useParams, Link } from "react-router";

function Redes() {
  const { redid } = useParams();

  return (
    <div>
      <div>
        <h1>Redes Sociales</h1>
        <Link className="btn btn-primary ms-1" to="/redes/instagram">
          Instagram
        </Link>
        <Link className="btn btn-warning mx-2" to="/redes/twitter">
          Twitter
        </Link>
        <Link className="btn btn-primary" to="/redes/facebook">
          Facebook
        </Link>
      </div>
      {redid === "instagram" && <h1>Instagram con los directs abiertos @jaimitada</h1>}
      {redid === "twitter" && <h1>Sígueme en Twitter @jaimitada</h1>}
      {redid === "facebook" && <h1>Encuéntrame en Facebook como Jaimitada</h1>}
    </div>
  );
}

export default Redes;
