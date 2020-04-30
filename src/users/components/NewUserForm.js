import React, {useState} from 'react';
import {Form, Input, Button, Select} from 'antd';
import {  } from '../actions/index';
import {useDispatch, useSelector} from "react-redux";
import openNotification from "../../common/components/Notification";

const { Option } = Select;

function UserForm({ defaultValues }) {
    const [loading, setLoading] = useState(false);
    const [roles] = useSelector(state => state.roles.roles);
    const dispatch = useDispatch();

    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };

    const tailLayout = {
        wrapperCol: { offset: 8, span: 16 },
    };

    const onFinish = async (values) => {
        setLoading(true);
        /*if(!!defaultValues) {
            const modifiedUser = await Promise.resolve('midify user');
            openNotification({ title: 'User modified', message: `User '${modifiedUser.title}' modified` });
        } else {
            const newUser = await Promise.resolve('new user');
            openNotification({ title: 'User created', message: `User '${newUser.title}' created` });
        }*/
        setLoading(false);
    };

    const getRolesNameSelectItems = () => {
        const items = [];
        const rolesName = roles.map(role => role.name);
        for (let i = 0; i < rolesName.length; i++) {
            items.push(<Option key={rolesName[i]}>{rolesName[i]}</Option>);
        }
        return items;
    };

    const handleRoleChange = () => {
        console.log('on change');
    };

    if(!!children) {
        return (
            <Form
                {...layout}
                name="basic"
                className="ant-advanced-search-form"
                initialValues={defaultValues}
                onFinish={onFinish}
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
                        onChange={() => handleRoleChange()}>
                        {getRolesNameSelectItems()}
                    </Select>
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit" loading={loading}>
                        Save
                    </Button>
                </Form.Item>
            </Form>
        );
    } else {
        return <></>;
    }
};

export default UserForm;
