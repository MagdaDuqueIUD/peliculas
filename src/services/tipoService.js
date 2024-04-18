import { axiosInstance } from "../helpers/axios-config";

const getTipos = () => {
    return axiosInstance.get('api/tipos', {
        headers: {
            'Content-type': 'application/json'
        }
    });
}

const getTiposPorId = (tipoId) => {
    return axiosInstance.get(`api/tipos/${tipoId}`, {
        headers: {
            'Content-type': 'application/json'
        }
    });
}

const crearTipos = (data) => {
    return axiosInstance.post('api/tipo', data, {
        headers: {
            'Content-type': 'application/json'
        }
    });
}

const editTipos = (tipoId, data) => {
    return axiosInstance.put(`api/tipo/${tipoId}`, data, {
        headers: {
            'Content-type': 'application/json'
        }
    });
}

export {
    getTipos, crearTipos, editTipos, getTiposPorId
}