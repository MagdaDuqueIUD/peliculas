import React, { useState, useEffect } from 'react'
import { getGeneros } from '../../services/generoService';
import { getDirectores } from '../../services/directorService';
import { getProductoras } from '../../services/productoraService';
import { getTipos } from '../../services/tipoService';
import { crearProducciones } from '../../services/produccionService';
import Swal from 'sweetalert2';

export const ProduccionNew = ( { handleOpenModal, listarProducciones }) => {

    const [ generos, setGeneros ] = useState([]);
    const [ directores, setDirectores ] = useState([]);
    const [ productoras, setProductoras ] = useState([]);
    const [ tipos, setTipos ] = useState([]);

    const [ valoresForm, setValoresForm ] = useState({});
    const { titulo = '', serial = '', sinopsis = '', url = '', estreno = '', director, genero, productora, tipo } = valoresForm;

    const listarGeneros = async () => {
        try {
            const { data } = await getGeneros();
            setGeneros(data);
        } catch (error) {
            console.log(error);
        }
    }    
    useEffect( () => {
    listarGeneros();
    }, []);

    const listarDirectores = async () => {
        try {
            const { data } = await getDirectores();
            setDirectores(data);
        } catch (error) {
            console.log(error);
        }
    }    
    useEffect( () => {
    listarDirectores();
    }, []);    

    const listarProductoras = async () => {
        try {
            const { data } = await getProductoras();
            setProductoras(data);
        } catch (error) {
            console.log(error);
        }
    }    
    useEffect( () => {
    listarProductoras();
    }, []); 

    const listarTipos = async () => {
        try {
            const { data } = await getTipos();
            setTipos(data);
        } catch (error) {
            console.log(error);
        }
    }    
    useEffect( () => {
    listarTipos();
    }, []);

    const handleOnChange = ({ target}) => {
        const { name, value } = target;
        setValoresForm({ ...valoresForm, [name]: value }); // spread
    }

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        const produccion = {
            titulo, serial, sinopsis, url, estreno,
            director: { _id: director },
            genero: { _id: genero },
            productora: { _id: productora },
            tipo: { _id: tipo }
        }
        console.log(produccion);
        try {
            Swal.fire({
                allowOutsideClick: false,
                text: 'Cargando...'
            });
            Swal.showLoading();
            const { data } = await crearProducciones(produccion);
            console.log(data);
            Swal.close();
            handleOpenModal();
            listarProducciones();
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
                        <h3>Nueva Produccion</h3>
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
                        <label className="form-label">Titulo</label>
                        <input type="text" name="titulo" 
                        value={titulo}
                        required
                        onChange={ (e) => handleOnChange(e) }
                        className="form-control" />
                    </div>
                </div>
                <div className='col'>
                    <div className="mb-3">
                        <label className="form-label">Serial</label>
                        <input type="text" name="serial" 
                        value={serial}
                        required
                        onChange={ (e) => handleOnChange(e) }
                        className="form-control" />
                    </div>
                </div>
                <div className='col'>
                    <div className="mb-3">
                        <label className="form-label">Sinopsis</label>
                        <input type="text" name="sinopsis" 
                        value={sinopsis}
                        onChange={ (e) => handleOnChange(e) }
                        className="form-control" />
                    </div>
                </div>
                <div className='col'>
                    <div className="mb-3">
                        <label className="form-label">URL</label>
                        <input type="text" name="url" 
                        value={url}
                        onChange={ (e) => handleOnChange(e) }
                        className="form-control" />
                    </div>
                </div>
                <div className='col'>
                    <div className="mb-3">
                        <label className="form-label">Estreno</label>
                        <input type="text" name="estreno" 
                        value={estreno} 
                        onChange={ (e) => handleOnChange(e) }
                        className="form-control" />
                    </div>
                </div> 

                <div className='col'>
                    <div className="mb-3">
                        <label className="form-label">Director</label>
                        <select className="form-select" aria-label="Default select example"
                        required
                        onChange={ (e) => handleOnChange(e) } 
                        name='director'
                        value={director}>
                        
                        <option value="">--SELECCIONE--</option>
                            {
                                directores.map(director => {
                                    return <option key={director._id} value={director._id}>{director.nombre}</option>
                                })
                            }
                        </select>
                    </div>
                </div>
                <div className='col'>
                    <div className="mb-3">
                        <label className="form-label">Genero</label>
                        <select className="form-select" aria-label="Default select example"
                        onChange={ (e) => handleOnChange(e) } 
                        name='genero'
                        value={genero}>
                            <option value="">--SELECCIONE--</option>
                            {
                                generos.map(genero => {
                                    return <option key={genero._id} value={genero._id}>{genero.nombre}</option>
                                })
                            }
                            
                        </select>
                    </div>
                </div>
                <div className='col'>
                    <div className="mb-3">
                        <label className="form-label">Productora</label>
                        <select className="form-select" aria-label="Default select example"
                        onChange={ (e) => handleOnChange(e) } 
                        name='productora'
                        value={productora}>
                        <option value="">--SELECCIONE--</option>
                            {
                                productoras.map(productora => {
                                    return <option key={productora._id} value={productora._id}>{productora.nombre}</option>
                                })
                            }
                        </select>
                    </div>
                </div>
                <div className='col'>
                    <div className="mb-3">
                        <label className="form-label">Tipo</label>
                        <select className="form-select" aria-label="Default select example"
                        onChange={ (e) => handleOnChange(e) } 
                        name='tipo'
                        value={tipo}>
                        <option value="">--SELECCIONE--</option>
                            {
                                tipos.map(tipo => {
                                    return <option key={tipo._id} value={tipo._id}>{tipo.nombre}</option>
                                })
                            }
                        </select>
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
