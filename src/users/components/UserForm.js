import React, {Component} from 'react';
import { connect } from 'react-redux';
import {
    Select,
} from 'antd';

import { Form, Input, Button } from 'antd';
import {getRoles} from "../../roles-and-capabilities/actions";
import {resetUserForm} from '../actions/userForm';
const { Option } = Select;

class UserForm extends Component {

    constructor(props) {
        super(props);

        this.layout = {
            labelCol: { span: 8 },
            wrapperCol: { span: 16 },
        };
        this.tailLayout = {
            wrapperCol: { offset: 8, span: 16 },
        };
    }

    componentDidMount() {
        this.props.getRoles();
        console.log(this.props.users.userForm);
    }

    onFinish(values) {
        console.log('Success:', values);
    };

    onFinishFailed(errorInfo) {
        console.log('Failed:', errorInfo);
    };

    getEditUserForm() {
        const children = this.getRolesNameSelectItems();
        const { username, email, password } = this.props.users.userForm;

        return(
                <Form
                    {...this.layout}
                    name="basic"
                    initialValues={{ username, email, password }}
                    onFinish={this.onFinish}
                    onFinishFailed={this.onFinishFailed}
                >
                    <Form.Item
                        label="Username"
                        name="username"
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="E-mail"
                        name="email"
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        label="Roles"
                        name="roles">
                        <Select
                            mode="multiple"
                            style={{ minWidth: "200px" }}
                            placeholder="Please select"
                            defaultValue={'user'}
                            onChange={this.handleChange}>
                            {children}
                        </Select>
                    </Form.Item>

                    <Form.Item {...this.tailLayout}>
                        <Button type="primary" htmlType="submit">
                            Save
                        </Button>
                    </Form.Item>
                </Form>

        );
    }

    getRolesNameSelectItems() {
        const items = [];
        const rolesName = this.props.roles.roles.map(role => role.name);
        for (let i = 0; i < rolesName.length; i++) {
            items.push(<Option key={rolesName[i]}>{rolesName[i]}</Option>);
        }
        return items;
    }

    render() {
        console.log(this.props.users.userForm);
        if(!!this.props.users.userForm) {
            return this.getEditUserForm();
        } else {
            return null;
        }
    }
};

function mapStateToProps(state) {
    return {
        roles: state.roles,
        users: state.users
    };
}

export default connect(mapStateToProps, { getRoles, resetUserForm })(UserForm);
