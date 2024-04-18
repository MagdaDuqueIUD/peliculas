import React from 'react'
import { Link } from 'react-router-dom'

export const DirectorCard = (props) => {

    const { director } = props;

  return (
    <div className="col">
    <div className="card">
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Datos</h5>
        <hr />
        <p className="card-text">{director.nombre}</p>
        <p className="card-text">{`Estado: ${director.estado}`}</p>
        <p className="card-text">
          <Link to={`directores/edit/${director._id}`}>Ver Más...</Link>
        </p>          
      </div>
    </div>
  </div>  
  )
}
