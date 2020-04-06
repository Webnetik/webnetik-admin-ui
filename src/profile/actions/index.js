import { get } from 'axios';
import { GET_PROFILE_URL } from './urls';
import { GET_PROFILE } from './types';

export function getProfile() {
    return async (dispatch, state) => {
        const token = state().login.token;

        const result = await get(GET_PROFILE_URL, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        dispatch(loadProfile(result.data.profile));
    }
}

export function loadProfile(profile) {
    return {
        type: GET_PROFILE,
        payload: profile
    }
}