import {ADD_COURSE, GET_ALL_COURSES} from "../actions/types";
import { merge } from 'lodash';

const initialState = {
    courses: null
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_ALL_COURSES: {
            return { ...state, courses: action.payload };
        }
        case ADD_COURSE: {
            let newState = merge({}, state);
            newState.courses.unshift(action.payload);
            return newState;
        }
        default:
            return state;
    }
}
