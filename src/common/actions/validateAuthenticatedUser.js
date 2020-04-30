import {post} from "axios";
import {VALIDATE_USER_URL} from "../../login/actions/urls";

import { publicInstance } from "./axiosInstances";

async function authenticateUser() {
    const token = localStorage.getItem('token');
    if(token === null) {
        return false;
    } else {
        const data = {
            token: token
        };
        const result = post(VALIDATE_USER_URL, data).then(response => {
            return response.data.result;
        }).catch(error => {
            return 'Token expired';
        });

        return result;
    }
}

/*export function authenticateUserToken() {
    console.log('authenticateUserToken');
    const token = localStorage.getItem('token');
    if(token === null) {
        return false;
    } else {
        const data = {
            token: token
        };
        return publicInstance.post(VALIDATE_USER_URL, data).then(response => {
            return token;
        });
    }
}*/

export default authenticateUser;
