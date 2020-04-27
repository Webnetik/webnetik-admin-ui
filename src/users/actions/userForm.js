import {RESET_USER_FORM, SET_USER_FORM} from "./types";

export function resetUserForm() {
    return dispatch => {
        dispatch(resetForm());
    }
}

export function setUserDetailsForEdit(user) {
    return dispatch => {
       dispatch(setUserForm(user));
    }
}

function resetForm() {
    return {
        type: RESET_USER_FORM
    }
}

function setUserForm(user) {
    return {
        type: SET_USER_FORM,
        payload: user
    }
}