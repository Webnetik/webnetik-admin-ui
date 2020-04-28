import {ADD_COURSE, DELETE_COURSE, GET_ALL_COURSES} from "../actions/types";
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
        case DELETE_COURSE: {
            let newState = merge({}, state);
            const id = action.payload;

            newState.courses = newState.courses.filter(course => {
                return course.id !== id;
            });

            return newState;
        }
        default:
            return state;
    }
}
