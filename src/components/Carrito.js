import React from "react";
import "../App.css"; // Importa el archivo de estilos CSS

function Carrito({ carrito, setCarrito }) {
  const aumentarCantidad = (item) => {
    const carritoActualizado = carrito.map((cartItem) =>
      cartItem.id === item.id
        ? { ...cartItem, cantidad: cartItem.cantidad + 1 }
        : cartItem
    );
    setCarrito(carritoActualizado);
  };

  const disminuirCantidad = (item) => {
    const carritoActualizado = carrito.map((cartItem) =>
      cartItem.id === item.id && cartItem.cantidad > 1
        ? { ...cartItem, cantidad: cartItem.cantidad - 1 }
        : cartItem
    );
    setCarrito(carritoActualizado);
  };

  const eliminarItem = (item) => {
    const carritoActualizado = carrito.filter(
      (cartItem) => cartItem.id !== item.id
    );
    setCarrito(carritoActualizado);
  };

  return (
    <div className="carrito-lista">
      <h2>Carrito de Compras</h2>
      <ul>
        {carrito.map((item) => (
          <li key={item.id} className="carrito-item">
            {item.titulo} (Cantidad: {item.cantidad})
            <button className="boton" onClick={() => aumentarCantidad(item)}>
              +
            </button>
            <button className="boton" onClick={() => disminuirCantidad(item)}>
              -
            </button>
            <button className="boton" onClick={() => eliminarItem(item)}>
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Carrito;
