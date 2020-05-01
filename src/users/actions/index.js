import {get} from 'axios';
import { GET_USERS_URL, GET_USER_URL } from './urls';
import { GET_USERS, GET_USER } from './types';

import { authenticatedInstance } from '../../common/actions/axiosInstances';

export async function getUser(id) {
    const data = {
        id: id
    };
    const response = await authenticatedInstance.post(GET_USER_URL, data);

    return response.data.user;
}

export async function getUsers() {
    const users = await authenticatedInstance.get(GET_USERS_URL).then(response => {
        return response.data.users;
    }).catch(error => {
        return error;
    });

    return {
        type: GET_USERS,
        payload: users
    };
}

export async function loadCourses() {
    const { data } = await get("http://localhost:3002/courses/all");
    return Promise.resolve(data.courses);
}
