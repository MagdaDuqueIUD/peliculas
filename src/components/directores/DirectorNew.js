import React, { useState, useEffect } from 'react'
import { crearDirectores } from '../../services/directorService';
import Swal from 'sweetalert2';

export const DirectorNew = ( { handleOpenModal, listarDirectores } ) => {

    const [ valoresForm, setValoresForm ] = useState({});
    const { nombre = '', estado = '' } = valoresForm;    


    const handleOnChange = ({ target}) => {
        const { name, value } = target;
        setValoresForm({ ...valoresForm, [name]: value }); // spread
    }

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        const director = {
            nombre, estado
        }
        console.log(director);
        try {
            Swal.fire({
                allowOutsideClick: false,
                text: 'Cargando...'
            });
            Swal.showLoading();
            const { data } = await crearDirectores(director);
            console.log(data);
            Swal.close();
            handleOpenModal();
            listarDirectores();
        } catch (error) {
            console.log(error);
            Swal.close();
        }
    }    

  return (
    <div className='sidebar'>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col'>
                    <div className='sidebar-header'>
                        <h3>Nuevo Director</h3>
                        <i className='fa-solid fa-xmark' onClick={ handleOpenModal }></i>
                    </div>
                </div>                
            </div>
            <div className='row'>
                <div className='col'>
                    <hr />
                </div>
            </div>
            <form onSubmit={(e) => handleOnSubmit(e)}>
                <div className='col'>
                    <div className="mb-3">
                        <label className="form-label">Nombre</label>
                        <input type="text" name="nombre" 
                        value={nombre}
                        required
                        onChange={ (e) => handleOnChange(e) }                        
                        className="form-control" />
                    </div>
                </div>
                <div className='col'>
                    <div className="mb-3">
                        <label className="form-label">Estado</label>
                        <input type="text" name="estado" 
                        value={estado}
                        required
                        onChange={ (e) => handleOnChange(e) }                        
                        className="form-control" />
                    </div>
                </div>
                <div className='row'>
                            <div className='col'>
                                <button className='btn btn-primary'>Guardar</button>
                            </div>
                </div>                  

            </form>
        </div>
    </div>
  )
}
