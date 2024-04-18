import React from 'react'
import { Link } from 'react-router-dom'

export const GeneroCard = (props) => {

    const { genero } = props;

  return (
    <div className="col">
    <div className="card">
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Datos</h5>
        <hr />
        <p className="card-text">{genero.nombre}</p>
        <p className="card-text">{`Estado: ${genero.estado}`}</p>
        <p className="card-text">{genero.descripcion}</p>
        <p className="card-text">
          <Link to={`generos/edit/${genero._id}`}>Ver Más...</Link>
        </p>        
      </div>
    </div>
  </div>  
  )
}
