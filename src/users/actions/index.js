import { get } from 'axios';
import { GET_USERS_URL } from './urls';
import { GET_USERS } from './types';

// import { authenticatedInstance } from '../../common/actions/axiosInstances';

export function getUsers() {
    console.log('action');

    return async (dispatch, state) => {
        //const token = state().login.token;

        //const result = await authenticatedInstance.get(GET_USERS_URL);

        dispatch({
            type: GET_USERS,
            payload: []
        });
    }
}

export async function loadCourses() {
    const { data } = await get("http://localhost:3002/courses/all");
    return Promise.resolve(data.courses);
}
