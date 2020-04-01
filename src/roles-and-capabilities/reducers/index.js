import { GET_ROLES, GET_CAPABILITIES } from "../actions/types";

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
        default:
            return state;
    }
}
