import { SET_OPENED_MENUS } from "../actions/types";

export function setOpenedMenuGroups(menuGroups) {
    return async dispatch => {
        dispatch(setOpenedMenus(menuGroups));
    }
}

function setOpenedMenus(menus) {
    return {
        type: SET_OPENED_MENUS,
        payload: menus
    }
}