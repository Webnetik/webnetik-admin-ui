import React, {useEffect} from 'react';
import { Table } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import { loadCourses, deleteCourse } from '../actions/index';
import Confirm from "../../common/components/TableConfirm";
import openNotification from "../../common/components/Notification";

function CoursesTable({ data }) {
    const courses = useSelector(state => state.courses);
    const dispatch = useDispatch();

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <span>
                    <a style={{ marginRight: 16 }} onClick={() => editRow(record)}>Edit</a>
                    <Confirm id={record.id} onConfirm={deleteRow} />
                </span>
            ),
        },
    ];

    useEffect(() => {
        async function getCourses() {
            dispatch(await loadCourses());
        }
        getCourses();
    }, []);

    const editRow = (record) => {
        console.log(record);
        console.log(courses);
    };

    const deleteRow = async (id) => {
        const courseDelete = await deleteCourse(id);
        dispatch(courseDelete);
        openNotification({ title: 'Course deleted', message: `Deleted course with id: '${id}'` });
    };

    return <Table dataSource={courses.courses} columns={columns} rowKey='id' />
};

export default CoursesTable;
