import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import {} from '../../services/generoService';
import { getGenerosPorId, editGeneros } from '../../services/generoService';
import Swal from 'sweetalert2';

export const GeneroUpdate = () => {

    const { generoId = '' } = useParams();
    console.log(generoId);
    const [ genero, setGenero ] = useState({})

    const [ valoresForm, setValoresForm ] = useState({});   
    const { nombre = '', estado = '', descripcion = '' } = valoresForm;
   

    const getGeneros = async () => {
        try {
            const { data } = await getGenerosPorId(generoId);
            console.log(data);
            setGenero(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getGeneros();
    }, [ generoId ]);

    useEffect(() => {
        if (genero) {
            setValoresForm({
                nombre: genero.nombre,
                estado: genero.estado,
                descripcion: genero.descripcion,

            })
        }
    }, [ genero ])

    const handleOnChange = ({ target}) => {
        const { name, value } = target;
        setValoresForm({ ...valoresForm, [name]: value }); // spread
    }

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        const genero = {
            nombre, estado, descripcion
        }

        try {
            Swal.fire({
                allowOutsideClick: false,
                text: 'Cargando...'
            });
            Swal.showLoading();
            const { data } = await editGeneros(generoId, genero);
            console.log(data);
            Swal.close();
        } catch (error) {
            console.log(error);
            Swal.close();
            Swal.fire('Error', 'Falló al actualizar','error')
        }        
        

    }    

  return (
    <div className='container-fluid mt-3 mb-2'>
        <div className='card'>
            <div className='card-header'>
                <h5 className='card-title'>Detalle</h5>

            </div>
            <div className='card-body'>
                <div>
                    <div className='col-md-4'>
                        

                    </div>
                    <div className='col-md-8'>
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
            </div>

        </div>


    </div>
  )
}
