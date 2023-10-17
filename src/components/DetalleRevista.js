import React from "react";
import { useParams } from "react-router-dom";

function DetalleRevista() {
  const { id } = useParams();

  return (
    <div>
      <h1>Detalles de la Revista {id}</h1>
      {}
    </div>
  );
}

export default DetalleRevista;
