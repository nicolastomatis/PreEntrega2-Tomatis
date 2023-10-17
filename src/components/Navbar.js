import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

function Navbar({ carrito }) {
  const [carritoCount, setCarritoCount] = useState(0);

  useEffect(() => {
    const totalCantidad = carrito.reduce(
      (total, item) => total + item.cantidad,
      0
    );
    setCarritoCount(totalCantidad);
  }, [carrito]);

  return (
    <header>
      <h1>
        <strong>FABA</strong>Informa
      </h1>
      <nav className="nav">
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/revista">Revista</Link>
          </li>
          <li>
            <Link to="/catalogo">Catálogo</Link>
          </li>
        </ul>
      </nav>
      <Link className="carrito" to="/Carrito">
        <FaShoppingCart />
        <span
          style={{ fontSize: "16px", fontWeight: "bold", marginLeft: "5px" }}
        >
          {carritoCount}
        </span>
      </Link>
    </header>
  );
}

export default Navbar;
