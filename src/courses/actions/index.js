import {get, post} from 'axios';
import {ADD_COURSE_URL, GET_COURSES_URL, DELETE_COURSE_URL, MODIFY_COURSE_URL} from "./urls";
import {ADD_COURSE, DELETE_COURSE, GET_ALL_COURSES, MODIFY_COURSE} from "./types";

export async function loadCourses() {
    const response = await get(GET_COURSES_URL);
    return {
        type: GET_ALL_COURSES,
        payload: response.data.courses
    };
}

export async function saveCourse(title, description) {
    const data = {
        title: title,
        description: description
    };
    const response = await post(
        ADD_COURSE_URL,
        data
    );
    return response.data.course;
}

export function loadNewCourse(course) {
    return {
        type: ADD_COURSE,
        payload: course
    }
}

export async function deleteCourse(id) {
    const data = {
        id: id
    };
    const response = await post(
        DELETE_COURSE_URL,
        data
    );

    return {
        type: DELETE_COURSE,
        payload: response.data.courseId
    };
}

export async function modifyCourse(course) {
    const data = {
        course
    };
    const response = await post(
        MODIFY_COURSE_URL,
        data
    );

    return response.data.modifiedCourse;
}
