import React from 'react'
import { Link } from 'react-router-dom'

export const ProductoraCard = (props) => {

    const { productora } = props;

  return (
    <div className="col">
    <div className="card">
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Datos</h5>
        <hr />
        <p className="card-text">{productora.nombre}</p>
        <p className="card-text">{`Estado: ${productora.estado}`}</p>
        <p className="card-text">{productora.descripcion}</p>
        <p className="card-text">{productora.slogan}</p>
        <p className="card-text">
          <Link to={`productoras/edit/${productora._id}`}>Ver Más...</Link>
        </p>         
      </div>
    </div>
  </div>  
  )
}
