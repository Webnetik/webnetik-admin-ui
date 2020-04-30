import axios from 'axios';
import authenticateUser from "./validateAuthenticatedUser";

export const publicInstance = axios.create();

publicInstance.interceptors.request.use((config) => {
    return config;
});

export const authenticatedInstance = axios.create();

authenticatedInstance.interceptors.request.use(async (config) => {
    const token = localStorage.getItem('token');

    const data = {
        token: token
    };

    const result = await authenticateUser();

    if(!!result) {
       config.headers.Authorization = `Bearer ${token}`;
    } else {
        throw new Error('Token expired');
    }

    return config;
});

const errorHandler = (error) => {
    console.log('authenticatedInstance: ', error);
};

const errorHandler2 = (error) => {
    console.log('publicInstance: ', error);
};

authenticatedInstance.interceptors.request.use(
    error => errorHandler(error)
);

publicInstance.interceptors.request.use(
    error => errorHandler2(error)
);
