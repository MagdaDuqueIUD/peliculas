import React, { useState, useEffect } from 'react'
import { getGeneros} from '../../services/generoService'
import { GeneroCard } from './GeneroCard';
import { GeneroNew } from './GeneroNew';
import Swal from 'sweetalert2';

export const GeneroView = () => {

  const [ generos, setGeneros ] = useState([]);
  const [ openModal, setOpenModal ] = useState(false);

  const listarGeneros = async () => {
    try {
      Swal.fire({
        allowOutsideClick: false,
        text: 'Cargando...'
    });
    Swal.showLoading();
      const { data } = await getGeneros();
      console.log('INGRESA')
      console.log(data);
      setGeneros(data);
      Swal.close();
    } catch (error) {
      console.log(error);
      Swal.close();
    }
  }

   useEffect(() => {
    listarGeneros();
  }, []); 


// <p className="card-text">{prod.generos.nombre}</p>

  const handleOpenModal = () => {
    setOpenModal(!openModal)
  }


   return (
    <div className='container-fluid'>
        <div className="mt-2 mb-2 row row-cols-1 row-cols-md-4 g-4">
            {
              generos.map((genero) => {
                return <GeneroCard key={genero._id} genero={ genero } />
              })
            }

        </div>

        {
          openModal ? <GeneroNew 
          handleOpenModal={ handleOpenModal} 
          listarGeneros={ listarGeneros }/> :        
          (<button className="btn btn-primary fab" onClick={ handleOpenModal }>
            <i className="fa-solid fa-plus"></i>
          </button>)

        }


    </div>
  ) 

}

