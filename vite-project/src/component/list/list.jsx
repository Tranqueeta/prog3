import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cartita from '../tarjeta/tarjeta';
//import { useLocation } from 'react-router-dom';

const Listado = () => {
  ///const location = useLocation();
  const URL = 'http://localhost:3000/productos' //location.pathname; // Corrección: location.pathname contiene la URL actual

  const [Productos, setProductos] = useState([]);

  useEffect(() => {
    const getProductos = async () => {
      try {
        const response = await axios.get(URL);
        setProductos(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    getProductos();
  }, []);

  return (
    <div className="conTarj">
      {Productos.map((producto) => (console.log(producto),
        <div className="tarjhijo" key={producto.id}>
          <Cartita
            nombreProd={producto.marca}
            descripcion={producto.desc}
            imagen={producto.img}
            alt={producto.alt}
            talle={producto.talle}
            precio={producto.precio}
          />
        </div>
      ))}
    </div>
  );
};

export default Listado;