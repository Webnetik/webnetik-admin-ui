import React, { useState } from 'react';
import {Form, Input, Button, Col, Select} from 'antd';
import { saveCourse } from '../actions/index';

function CourseForm() {
    const [title, description] = useState('');

    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };

    const tailLayout = {
        wrapperCol: { offset: 8, span: 16 },
    };

    const onFinish = async (values) => {
        await saveCourse(values.title, values.description);
    };

    const onFinishFailed = () => {

    };

    return (
        <Form
            {...layout}
            name="basic"
            initialValues={{ title: '', description: '' }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <Form.Item
                label="Title"
                name="title"
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Description"
                name="description"
            >
                <Input />
            </Form.Item>

            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                    Save
                </Button>
            </Form.Item>
        </Form>
    );
};

export default CourseForm;
