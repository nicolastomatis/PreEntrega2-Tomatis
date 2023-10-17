// App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Revista from "./components/Revista";
import Catalogo from "./components/Catalogo";
import Carrito from "./components/Carrito";
import DetalleRevista from "./components/DetalleRevista";
import "./App.css";

function App() {
  // Define el estado carrito en el componente App
  const [carrito, setCarrito] = useState([]);

  return (
    <Router>
      <div>
        <Navbar carrito={carrito} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Revista" element={<Revista />} />
          <Route
            path="/Catalogo"
            element={<Catalogo carrito={carrito} setCarrito={setCarrito} />}
          />
          <Route
            path="/Carrito"
            element={<Carrito carrito={carrito} setCarrito={setCarrito} />}
          />
          <Route path="/revista/:id" component={DetalleRevista} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
