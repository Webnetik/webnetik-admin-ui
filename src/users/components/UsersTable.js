import React, {useEffect} from 'react';
import { Table } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import Confirm from "../../common/components/TableConfirm";
import openNotification from "../../common/components/Notification";
import {useHistory} from "react-router";
import {getUsers} from "../actions";

function UsersTable() {
    const users = useSelector(state => state.users);
    const dispatch = useDispatch();
    let history = useHistory();

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Username',
            dataIndex: 'username',
            key: 'username',
        },
        {
            title: 'password',
            dataIndex: 'password',
            key: 'password',
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
        async function loadUsers() {
            dispatch(await getUsers());
        }
        loadUsers();
    }, []);

    const editRow = (record) => {
        history.push(`/users/edit-user/${record.id}`);
    };

    const deleteRow = async (id) => {
        /*const courseDelete = await deleteCourse(id);
        dispatch(courseDelete);
        openNotification({ title: 'Course deleted', message: `Deleted course with id: '${id}'`, type: 'success' });*/
    };

    return <Table dataSource={users.users} columns={columns} rowKey='id' />
};

export default UsersTable;
