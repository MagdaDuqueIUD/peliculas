import { axiosInstance } from "../helpers/axios-config";

const getGeneros = () => {
    return axiosInstance.get('api/generos', {
        headers: {
            'Content-type': 'application/json'
        }
    });
}

const getGenerosPorId = (generoId) => {
    return axiosInstance.get(`api/generos/${generoId}`, {
        headers: {
            'Content-type': 'application/json'
        }
    });
}


const crearGeneros = (data) => {
    return axiosInstance.post('api/generos', data, {
        headers: {
            'Content-type': 'application/json'
        }
    });
}

const editGeneros = (generoId, data) => {
    return axiosInstance.put(`api/generos/${generoId}`, data, {
        headers: {
            'Content-type': 'application/json'
        }
    });
}

export {
    getGeneros, crearGeneros, editGeneros, getGenerosPorId
}