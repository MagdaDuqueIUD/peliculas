import React from 'react'
import { Link } from 'react-router-dom'

export const TipoCard = (props) => {

    const { tipo } = props;

  return (
    <div className="col">
    <div className="card">
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Datos</h5>
        <hr />
        <p className="card-text">{tipo.nombre}</p>
        <p className="card-text">{tipo.descripcion}</p>
        <p className="card-text">
          <Link to={`tipos/edit/${tipo._id}`}>Ver Más...</Link>
        </p>          
      </div>
    </div>
  </div>  
  )
}
