import { SET_TOKEN } from '../actions/types';

export default function (state = {}, action) {
    switch (action.type) {
        case SET_TOKEN:
            if(action.payload === null) {
                delete state.token;
            } else {
                state.token = action.payload;
            }
            return {...state};
        default:
            return state;
    }
}