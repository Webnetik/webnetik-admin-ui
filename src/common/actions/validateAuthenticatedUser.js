import {post} from "axios";
import {VALIDATE_USER_URL} from "../../login/actions/urls";

async function authenticateUser() {
    const token = localStorage.getItem('token');
    if(token === null) {
        return false;
    } else {
        const data = {
            token: token
        };
        return post(VALIDATE_USER_URL, data).then(response => {
            return response.data.result;
        }).catch(error => {
            return 'Token expired';
        });
    }
}

export default authenticateUser;
