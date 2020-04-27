import React from 'react';
import {Table, Col} from 'antd';

function CoursesTable({ data }) {
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
                    <a onClick={() => edit(record)}>Edit</a>
                </span>
            ),
        },
    ];

    const edit = (record) => {
        console.log(record);
    };

    return (
        data &&
        <Table dataSource={data} columns={columns} rowKey='id'  />
    );
};

export default CoursesTable;
