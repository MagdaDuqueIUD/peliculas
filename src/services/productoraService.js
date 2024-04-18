import { axiosInstance } from "../helpers/axios-config";

const getProductoras = () => {
    return axiosInstance.get('api/productoras', {
        headers: {
            'Content-type': 'application/json'
        }
    });
}

const getProductorasPorId = (productoraId) => {
    return axiosInstance.get(`api/productoras/${productoraId}`, {
        headers: {
            'Content-type': 'application/json'
        }
    });
}

const crearProductoras = (data) => {
    return axiosInstance.post('api/productoras', data, {
        headers: {
            'Content-type': 'application/json'
        }
    });
}

const editProductoras = (productoraId, data) => {
    return axiosInstance.put(`api/productora/${productoraId}`, data, {
        headers: {
            'Content-type': 'application/json'
        }
    });
}

export {
    getProductoras, crearProductoras, editProductoras, getProductorasPorId
}