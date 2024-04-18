import { axiosInstance } from "../helpers/axios-config";

const getProducciones = () => {
    return axiosInstance.get('api/producciones', {
        headers: {
            'Content-type': 'application/json'
        }
    });
}

const crearProducciones = (data) => {
    return axiosInstance.post('api/producciones', data, {
        headers: {
            'Content-type': 'application/json'
        }
    });
}

const editProducciones = (produccionId, data) => {
    return axiosInstance.put(`api/producciones/${produccionId}`, data, {
        headers: {
            'Content-type': 'application/json'
        }
    });
}

const getProduccionesPorId = (produccionId) => {
    return axiosInstance.get(`api/producciones/${produccionId}`, {
        headers: {
            'Content-type': 'application/json'
        }
    });
}

export {
    getProducciones, crearProducciones, editProducciones, getProduccionesPorId
}