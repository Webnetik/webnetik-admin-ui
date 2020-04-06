import { post } from 'axios';
import { CHANGE_ROLE_CAPABILITIES_URL, CREATE_ROLE_URL } from './urls';
import { CHANGE_ROLE_CAPABILITIES, LOAD_NEW_ROLE } from "./types";

export function changeRoleCapability(roleId, capabilities) {
    return async dispatch => {
        const data = {
            roleId: roleId,
            capabilities: capabilities
        };

        return post(CHANGE_ROLE_CAPABILITIES_URL, data).then(response => {
            dispatch(changeRoleCapabilities(response.data.result));
        }).catch(error => {
            return error;
        });
    }
}

function changeRoleCapabilities(roleWithCapabilities) {
    return {
        type: CHANGE_ROLE_CAPABILITIES,
        payload: roleWithCapabilities
    }
}

export function createRole(roleName) {
    return async dispatch => {
        const data = {
            roleName
        };

        return post(CREATE_ROLE_URL, data).then(response => {
            dispatch(loadNewRole(response.data.result));
        }).catch(error => {
            return error;
        });
    }
}

function loadNewRole(role) {
    return {
        type: LOAD_NEW_ROLE,
        payload: role
    }
}
