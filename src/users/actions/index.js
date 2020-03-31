import { get } from 'axios';
import { GET_USERS_URL } from './urls';
import { GET_USERS } from './types';

export function getUsers() {
    return async dispatch => {
        const result = await get(GET_USERS_URL);

        dispatch({
            type: GET_USERS,
            payload: [...result.data.users]
        });
    }
}