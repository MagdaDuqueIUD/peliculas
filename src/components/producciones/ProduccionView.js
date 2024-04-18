import React, { useState, useEffect } from 'react'
import { getProducciones} from '../../services/produccionService'
import { ProduccionCard } from './ProduccionCard';
import { ProduccionNew } from './ProduccionNew';
import Swal from 'sweetalert2';

export const ProduccionView = () => {

  const [ producciones, setProducciones ] = useState([]);
  const [ openModal, setOpenModal ] = useState(false);

  const listarProducciones = async () => {
    try {
      Swal.fire({
        allowOutsideClick: false,
        text: 'Cargando...'
    });
    Swal.showLoading();
      const { data } = await getProducciones();
      console.log('INGRESA')
      console.log(data);
      setProducciones(data);
      Swal.close();
    } catch (error) {
      console.log(error);
      Swal.close();
    }
  }

   useEffect(() => {
    listarProducciones();
  }, []); 


// <p className="card-text">{prod.generos.nombre}</p>

  const handleOpenModal = () => {
    setOpenModal(!openModal)
  }


   return (
    <div className='container-fluid'>
        <div className="mt-2 mb-2 row row-cols-1 row-cols-md-4 g-4">
            {
              producciones.map((produccion) => {
                return <ProduccionCard key={produccion._id} produccion={ produccion } />
              })
            }

        </div>

        {
          openModal ? <ProduccionNew 
          handleOpenModal={ handleOpenModal} 
          listarProducciones={ listarProducciones } /> :        
          (<button className="btn btn-primary fab" onClick={ handleOpenModal }>
            <i className="fa-solid fa-plus"></i>
          </button>)

        }


    </div>
  ) 

}


/* 
{
  openModal ? <ProduccionNew /> :        
  (<button className="btn btn-primary fab" onClick={ () => setOpenModal(!openModal)}>
    <i className="fa-solid fa-plus"></i>
  </button>)

} */