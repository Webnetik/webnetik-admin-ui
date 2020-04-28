import React, {useEffect} from 'react';
import { Table } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import { loadCourses } from '../actions/index';

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
                    <a style={{ marginRight: 16 }} onClick={() => edit(record)}>Edit</a>
                    <a>Delete</a>
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

    const edit = (record) => {
        console.log(record);
        console.log(courses);
    };

    return <Table dataSource={courses.courses} columns={columns} rowKey='id' />
};

export default CoursesTable;
