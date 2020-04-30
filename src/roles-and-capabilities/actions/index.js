import { get } from 'axios';
import { GET_ROLES_URL, GET_CAPABILITIES_URL } from './urls';
import { GET_ROLES, GET_CAPABILITIES } from './types';

import { authenticatedInstance } from '../../common/actions/axiosInstances';

export function getRoles() {
    return async dispatch => {
        const result = await authenticatedInstance.get(GET_ROLES_URL);

        dispatch(loadRoles([...result.data.roles]));
    }
}

export function getCapabilities() {
    return async dispatch => {
        const result = await authenticatedInstance.get(GET_CAPABILITIES_URL);

        dispatch({
            type: GET_CAPABILITIES,
            payload: [...result.data.capabilities]
        });
    }
}

export function loadRoles(roles) {
    return {
        type: GET_ROLES,
        payload: roles
    }
}
