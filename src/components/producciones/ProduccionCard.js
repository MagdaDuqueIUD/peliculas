import React from 'react'
import { Link } from 'react-router-dom'

export const ProduccionCard = (props) => {

    const { produccion } = props;

  return (
    <div className="col">
    <div className="card">
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{produccion.titulo}</h5>
        <hr />
        <img src={produccion.url}/>
        <p className="card-text">{produccion.sinopsis}</p>
        <p className="card-text">{produccion.serial}</p>
        <p className="card-text">
          <Link to={`producciones/edit/${produccion._id}`}>Ver Más...</Link>
        </p>
      </div>
    </div>
  </div>  
  )
}
