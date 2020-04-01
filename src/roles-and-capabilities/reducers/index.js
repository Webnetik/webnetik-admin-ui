import { GET_ROLES, GET_CAPABILITIES, CHANGE_ROLE_CAPABILITIES } from "../actions/types";

const initialState = {
    roles: null,
    capabilities: null
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_ROLES: {
            return { ...state, roles: action.payload };
        }
        case GET_CAPABILITIES: {
            return { ...state, capabilities: action.payload };
        }
        case CHANGE_ROLE_CAPABILITIES: {
            const { roleId, capabilities } = action.payload;
            const roles = state.roles;
            let role = roles.find(role => role.id === roleId);
            const indexOfRole = roles.indexOf(role);
            roles[indexOfRole].capabilities = capabilities;
            return { ...state };
        }
        default:
            return state;
    }
}
