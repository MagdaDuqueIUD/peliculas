import { axiosInstance } from "../helpers/axios-config";

const getDirectores = () => {
    return axiosInstance.get('api/directores', {
        headers: {
            'Content-type': 'application/json'
        }
    });
}

const getDirectoresPorId = (directorId) => {
    return axiosInstance.get(`api/directores/${directorId}`, {
        headers: {
            'Content-type': 'application/json'
        }
    });
}

const crearDirectores = (data) => {
    return axiosInstance.post('api/directores', data, {
        headers: {
            'Content-type': 'application/json'
        }
    });
}

const editDirectores = (directorId, data) => {
    return axiosInstance.put(`api/director/${directorId}`, data, {
        headers: {
            'Content-type': 'application/json'
        }
    });
}

export {
    getDirectores, crearDirectores, editDirectores, getDirectoresPorId
}