import axios from 'axios';

const axiosInstance = axios.create({
//    baseURL: 'http://localhost:4000/'
    baseURL: process.env.REACT_APP_BASE_URL
});

export {
    axiosInstance
}