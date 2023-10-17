import React from "react";
import { v4 as uuidv4 } from "uuid";
import "../App.css";
import { useNavigate } from "react-router-dom";

function Catalogo({ carrito, setCarrito }) {
  const navigate = useNavigate();

  const numerosDeRevista = [
    {
      id: uuidv4(),
      titulo: "N°603",
      imagen: "/CatalogoImages/Nro603.jpg",
    },
    {
      id: uuidv4(),
      titulo: "N°604",
      imagen: "/CatalogoImages/Nro604.jpg",
    },
    {
      id: uuidv4(),
      titulo: "N°605",
      imagen: "/CatalogoImages/Nro605.jpg",
    },
    {
      id: uuidv4(),
      titulo: "N°606",
      imagen: "/CatalogoImages/Nro606.jpg",
    },
    {
      id: uuidv4(),
      titulo: "N°607",
      imagen: "/CatalogoImages/Nro607.jpg",
    },
    {
      id: uuidv4(),
      titulo: "N°608",
      imagen: "/CatalogoImages/Nro608.jpg",
    },
    {
      id: uuidv4(),
      titulo: "N°609",
      imagen: "/CatalogoImages/Nro609.jpg",
    },
    {
      id: uuidv4(),
      titulo: "N°610",
      imagen: "/CatalogoImages/Nro610.jpg",
    },
    {
      id: uuidv4(),
      titulo: "N°611",
      imagen: "/CatalogoImages/Nro611.jpg",
    },
    {
      id: uuidv4(),
      titulo: "N°612",
      imagen: "/CatalogoImages/Nro612.jpg",
    },
  ];

  const mostrarDetalles = (numeroRevista) => {
    navigate(`/revista/${numeroRevista.id}`);
  };

  const agregarAlCarrito = (numeroRevista) => {
    const productoExistente = carrito.find(
      (item) => item.id === numeroRevista.id
    );

    if (productoExistente) {
      const carritoActualizado = carrito.map((item) =>
        item.id === numeroRevista.id
          ? { ...item, cantidad: item.cantidad + 1 }
          : item
      );
      setCarrito(carritoActualizado);
    } else {
      setCarrito([...carrito, { ...numeroRevista, cantidad: 1 }]);
    }
  };

  return (
    <div className="catalogo">
      <h1>Catálogo de Revistas</h1>
      <ul className="catalogo-lista">
        {numerosDeRevista.map((numero) => (
          <li key={numero.id} className="catalogo-item">
            <img src={numero.imagen} alt={numero.titulo} />
            <p className="catalogo-titulo">{numero.titulo}</p>
            <button onClick={() => agregarAlCarrito(numero)}>
              Agregar al Carrito
            </button>
            <button onClick={() => mostrarDetalles(numero)}>
              Detalle de Revista
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Catalogo;
