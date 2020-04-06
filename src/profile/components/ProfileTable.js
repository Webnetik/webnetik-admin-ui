import React, {PureComponent} from 'react';
import { connect } from 'react-redux';
import {Table, Spin, Col, Tag} from 'antd';

class ProfileTable extends PureComponent {

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
            }
        ];
    }

    render() {
        if(this.props.profile && this.props.profile.profile) {
            return (
                <Col>
                    <Table dataSource={[this.props.profile.profile]} columns={this.columns} rowKey='id'  />
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
        profile: state.profile
    }
}

export default connect(mapStateToProps, null)(ProfileTable);
