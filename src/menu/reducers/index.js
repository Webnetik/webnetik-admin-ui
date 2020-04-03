import { SET_OPENED_MENUS } from '../actions/types';

const initialState = {
    openedMenus: localStorage.getItem('openedMenus') ? JSON.parse(localStorage.getItem('openedMenus')) : []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_OPENED_MENUS:
            let openedMenus = action.payload;
            localStorage.setItem('openedMenus', JSON.stringify(openedMenus));

            return {...state, openedMenus: openedMenus};
        default:
            return state;
    }
}