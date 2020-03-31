import React from 'react';
import {
    Select,
} from 'antd';

import { Form, Input, Button } from 'antd';
const { Option } = Select;

const FormSizeDemo = () => {

    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };
    const tailLayout = {
        wrapperCol: { offset: 8, span: 16 },
    };

    const onFinish = values => {
        console.log('Success:', values);
    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    const handleChange = ize => {
        console.log('jaja');
    };

    const roles = ['administrator', 'editor', 'user'];

    const children = [];
    for (let i = 0; i < roles.length; i++) {
        children.push(<Option key={roles[i]}>{roles[i]}</Option>);
    }

    return (
            <Form
                {...layout}
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
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
                        onChange={handleChange}>
                        {children}
                    </Select>
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        Add new user
                    </Button>
                </Form.Item>
            </Form>
    );
};

export default FormSizeDemo;
