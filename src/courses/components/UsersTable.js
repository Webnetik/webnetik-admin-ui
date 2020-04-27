import React, {PureComponent} from 'react';
import { connect } from 'react-redux';
import {Table, Spin, Col, Tag} from 'antd';

import { getUsers } from '../actions/index';
import { setUserDetailsForEdit } from '../actions/userForm';

class UsersTable extends PureComponent {

    constructor(props) {
        super(props);

        this.columns = [
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
                title: 'Password',
                dataIndex: 'password',
                key: 'password',
            },
            {
                title: 'Roles',
                key: 'roles',
                dataIndex: 'roles',
                render: roles => (
                    <span>
                        {roles.map(role => {
                            let color = 'green';
                            if (role.name === 'admin') {
                                color = 'volcano';
                            }
                            return (
                                <Tag color={color} key={role.name}>
                                    {role.name}
                                </Tag>
                            );
                        })}
                    </span>
                ),
            },
            {
                title: 'Action',
                key: 'action',
                render: (text, record) => (
                    <span>
                        <a onClick={() => this.editUser(record)}>Edit</a>
                    </span>
                ),
            },
        ];
    }

    editUser(record) {
        this.props.setUserDetailsForEdit(record);
        this.props.onEditUser();
    }

    componentDidMount() {
        this.props.getUsers();
    }

    render() {
        if(this.props.users) {
            return (
                <Col>
                    <Table dataSource={this.props.users} columns={this.columns} rowKey='id'  />
                </Col>
            )
        } else {
            return (
                <Col md={{span: 12, offset: 6}}>
                    <Spin />
                </Col>
            )
        }
    }
}

function mapStateToProps(state) {
    return {
        users: state.users.users
    }
}

export default connect(mapStateToProps, { getUsers, setUserDetailsForEdit })(UsersTable);
