import React from 'react';
import ReactDOM from 'react-dom/client';
import BarraNavegacion from './componentes/BarraNavegacion';
import Carrusel from './componentes/Carrusel';

import "./index.css";
import Contenedor from './componentes/Contenedor';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BarraNavegacion/>
    <Carrusel/>
    <Contenedor/>
  </React.StrictMode>
);

