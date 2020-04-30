import {post} from "axios";
import {VALIDATE_USER_URL} from "../../login/actions/urls";

import { publicInstance } from "./axiosInstances";

function authenticateUser() {
    const token = localStorage.getItem('token');
    if(token === null) {
        return false;
    } else {
        const data = {
            token: token
        };
        return post(VALIDATE_USER_URL, data).then(response => {
            return response.data.result;
        });
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
