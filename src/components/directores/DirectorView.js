import React, { useState, useEffect } from 'react'
import { getDirectores} from '../../services/directorService'
import { DirectorCard } from './DirectorCard';
import { DirectorNew } from './DirectorNew';
import Swal from 'sweetalert2';

export const DirectorView = () => {

  const [ directores, setDirectores ] = useState([]);
  const [ openModal, setOpenModal ] = useState(false);

  const listarDirectores = async () => {
    try {
      Swal.fire({
        allowOutsideClick: false,
        text: 'Cargando...'
    });
    Swal.showLoading();
      const { data } = await getDirectores();
      console.log('INGRESA')
      console.log(data);
      setDirectores(data);
      Swal.close();
    } catch (error) {
      console.log(error);
      Swal.close();
    }
  }

   useEffect(() => {
    listarDirectores();
  }, []); 


// <p className="card-text">{prod.generos.nombre}</p>

  const handleOpenModal = () => {
    setOpenModal(!openModal)
  }


   return (
    <div className='container-fluid'>
        <div className="mt-2 mb-2 row row-cols-1 row-cols-md-4 g-4">
            {
              directores.map((director) => {
                return <DirectorCard key={director._id} director={ director } />
              })
            }

        </div>

        {
          openModal ? <DirectorNew 
          handleOpenModal={ handleOpenModal} 
          listarDirectores={ listarDirectores }/> :        
          (<button className="btn btn-primary fab" onClick={ handleOpenModal }>
            <i className="fa-solid fa-plus"></i>
          </button>)

        }


    </div>
  ) 

}

