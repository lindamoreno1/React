import React from "react";

function BarraNavegacion(){
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="index.html">La Huellita</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="index.html">Inicio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="index.html">Nosotros</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="index.html">Contacto</a>
        </li>

      </ul>
    </div>
  </div>
</nav>
    );
}
export default BarraNavegacion;