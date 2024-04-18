import React, { useState, useEffect } from 'react'
import { getProductoras} from '../../services/productoraService'
import { ProductoraCard } from './ProductoraCard';
import { ProductoraNew } from './ProductoraNew';
import Swal from 'sweetalert2';

export const ProductoraView = () => {

  const [ productoras, setProductoras ] = useState([]);
  const [ openModal, setOpenModal ] = useState(false);

  const listarProductoras = async () => {
    try {
      Swal.fire({
        allowOutsideClick: false,
        text: 'Cargando...'
    });
    Swal.showLoading();
      const { data } = await getProductoras();
      console.log('INGRESA')
      console.log(data);
      setProductoras(data);
      Swal.close();
    } catch (error) {
      console.log(error);
      Swal.close();
    }
  }

   useEffect(() => {
    listarProductoras();
  }, []); 


// <p className="card-text">{prod.generos.nombre}</p>

  const handleOpenModal = () => {
    setOpenModal(!openModal)
  }


   return (
    <div className='container-fluid'>
        <div className="mt-2 mb-2 row row-cols-1 row-cols-md-4 g-4">
            {
              productoras.map((productora) => {
                return <ProductoraCard key={productora._id} productora={ productora } />
              })
            }

        </div>

        {
          openModal ? <ProductoraNew 
          handleOpenModal={ handleOpenModal} 
          listarProductoras={ listarProductoras }/> :        
          (<button className="btn btn-primary fab" onClick={ handleOpenModal }>
            <i className="fa-solid fa-plus"></i>
          </button>)

        }


    </div>
  ) 

}

