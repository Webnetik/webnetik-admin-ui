import {get} from 'axios';
import { GET_USERS_URL } from './urls';
import { GET_USERS } from './types';

import { authenticatedInstance } from '../../common/actions/axiosInstances';

export function getUsers() {
    return async dispatch => {
        const users = await authenticatedInstance.get(GET_USERS_URL).then(response => {
            return response.data.users;
        }).catch(error => {
            return error;
        });

        dispatch({
            type: GET_USERS,
            payload: users
        });
    }
}

export async function loadCourses() {
    const { data } = await get("http://localhost:3002/courses/all");
    return Promise.resolve(data.courses);
}
