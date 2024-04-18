import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import {} from '../../services/directorService';
import { getDirectoresPorId, editDirectores } from '../../services/directorService';
import Swal from 'sweetalert2';

export const DirectorUpdate = () => {

    const { directorId = '' } = useParams();
    console.log(directorId);
    const [ director, setDirector ] = useState({})

    const [ valoresForm, setValoresForm ] = useState({});   
    const { nombre = '', estado = '' } = valoresForm;
   

    const getDirectores = async () => {
        try {
            const { data } = await getDirectoresPorId(directorId);
            console.log(data);
            setDirector(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getDirectores();
    }, [ directorId ]);

    useEffect(() => {
        if (director) {
            setValoresForm({
                nombre: director.nombre,
                estado: director.estado,

            })
        }
    }, [ director ])

    const handleOnChange = ({ target}) => {
        const { name, value } = target;
        setValoresForm({ ...valoresForm, [name]: value }); // spread
    }

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        const director = {
            nombre, estado
        }

        try {
            Swal.fire({
                allowOutsideClick: false,
                text: 'Cargando...'
            });
            Swal.showLoading();
            const { data } = await editDirectores(directorId, director);
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
