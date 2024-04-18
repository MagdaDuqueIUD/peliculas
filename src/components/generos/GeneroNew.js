import React, { useState, useEffect } from 'react'
import { crearGeneros } from '../../services/generoService';
import Swal from 'sweetalert2';

export const GeneroNew = ( { handleOpenModal, listarGeneros } ) => {

    const [ valoresForm, setValoresForm ] = useState({});
    const { nombre = '', estado = '', descripcion = '' } = valoresForm;    


    const handleOnChange = ({ target}) => {
        const { name, value } = target;
        setValoresForm({ ...valoresForm, [name]: value }); // spread
    }

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        const genero = {
            nombre, estado, descripcion
        }
        console.log(genero);
        try {
            Swal.fire({
                allowOutsideClick: false,
                text: 'Cargando...'
            });
            Swal.showLoading();
            const { data } = await crearGeneros(genero);
            console.log(data);
            Swal.close();
            handleOpenModal();
            listarGeneros();
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
                        <h3>Nuevo Genero</h3>
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
                <div className='col'>
                    <div className="mb-3">
                        <label className="form-label">Descripcion</label>
                        <input type="text" name="descripcion" 
                        value={descripcion}
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
