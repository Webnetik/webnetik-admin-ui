import { post } from 'axios';
import { CHANGE_ROLE_CAPABILITIES_URL } from './urls';
import { CHANGE_ROLE_CAPABILITIES } from "./types";

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