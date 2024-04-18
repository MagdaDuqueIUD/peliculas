import React, { useState, useEffect } from 'react'
import { getTipos} from '../../services/tipoService'
import { TipoCard } from './TipoCard';
import { TipoNew } from './TipoNew';
import Swal from 'sweetalert2';

export const TipoView = () => {

  const [ tipos, setTipos ] = useState([]);
  const [ openModal, setOpenModal ] = useState(false);

  const listarTipos = async () => {
    try {
      Swal.fire({
        allowOutsideClick: false,
        text: 'Cargando...'
    });
    Swal.showLoading();
      const { data } = await getTipos();
      console.log('INGRESA')
      console.log(data);
      setTipos(data);
      Swal.close();
    } catch (error) {
      console.log(error);
      Swal.close();
    }
  }

   useEffect(() => {
    listarTipos();
  }, []); 


// <p className="card-text">{prod.generos.nombre}</p>

  const handleOpenModal = () => {
    setOpenModal(!openModal)
  }


   return (
    <div className='container-fluid'>
        <div className="mt-2 mb-2 row row-cols-1 row-cols-md-4 g-4">
            {
              tipos.map((tipo) => {
                return <TipoCard key={tipo._id} tipo={ tipo } />
              })
            }

        </div>

        {
          openModal ? <TipoNew 
          handleOpenModal={ handleOpenModal} 
          listarTipos={ listarTipos }/> :        
          (<button className="btn btn-primary fab" onClick={ handleOpenModal }>
            <i className="fa-solid fa-plus"></i>
          </button>)

        }


    </div>
  ) 

}

