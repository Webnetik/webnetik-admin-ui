import {get, post} from 'axios';

export async function loadCourses() {
    const { data } = await get("http://localhost:3002/courses/all");
    return Promise.resolve(data.courses);
}

export async function saveCourse(title, description) {
    const url = "http://localhost:3002/courses/add";
    const data = {
        title: title,
        description: description
    };
    const { responseData } = await post(
        url,
        data
    );
    return Promise.resolve(responseData);
}
