/*import axios from 'axios';
import {authenticateUserToken} from "./validateAuthenticatedUser";

export const publicInstance = axios.create();

publicInstance.interceptors.request.use((config) => {
    console.log('public instance interceptor');
    config.foo = 456;
});

export const authenticatedInstance = axios.create();*/

/*
, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
* */

/*authenticatedInstance.interceptors.request.use(function(config) {
    // const token = await authenticateUserToken();
    // console.log('private instance interceptor: ', token);
    console.log('request => config ====================================');
    console.log(config);
    console.log('request => config ====================================');

    // if u add new Chainable promise or other interceptor
    // You have to return `config` inside of a rquest
    // otherwise u will get a very confusing error
    // and spend sometime to debug it.
    return config;
}, function(error) {
    return Promise.reject(error);
});*/

