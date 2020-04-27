import {GET_USERS, RESET_USER_FORM, SET_USER_FORM} from "../actions/types";

const initialState = {
    users: null,
    userForm: null
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_USERS: {
            return { ...state, users: action.payload };
        }
        case RESET_USER_FORM: {
            return { ...state, userForm: null };
        }
        case SET_USER_FORM: {
            return { ...state, userForm: action.payload };
        }
        default:
            return state;
    }
}
