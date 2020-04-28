import React from 'react';
import { Form, Input, Button } from 'antd';
import { saveCourse, loadNewCourse } from '../actions/index';
import {useDispatch, useSelector} from "react-redux";

const { TextArea } = Input;

function CourseForm() {
    const dispatch = useDispatch();

    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };

    const tailLayout = {
        wrapperCol: { offset: 8, span: 16 },
    };

    const onFinish = async (values) => {
        const newCourse = await saveCourse(values.title, values.description);
        dispatch(loadNewCourse(newCourse));
    };

    const onFinishFailed = () => {

    };

    return (
        <Form
            {...layout}
            name="basic"
            className="ant-advanced-search-form"
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
                <TextArea />
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
