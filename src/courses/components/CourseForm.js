import React, {useState} from 'react';
import { Form, Input, Button } from 'antd';
import { saveCourse, loadNewCourse, modifyCourse } from '../actions/index';
import {useDispatch, useSelector} from "react-redux";
import openNotification from "../../common/components/Notification";

const { TextArea } = Input;

function CourseForm({ defaultValues }) {
    const [loading, setLoading] = useState(false);
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
        if(!!defaultValues) {
            const modifiedCourse = await saveModifiedCourse(values);
            openNotification({ title: 'Course modified', message: `Course '${modifiedCourse.title}' modified` });
        } else {
            const newCourse = await saveNewCourse(values);
            openNotification({ title: 'Course created', message: `Course '${newCourse.title}' created` });
        }
        setLoading(false);
    };

    const saveNewCourse = async (values) => {
        const newCourse = await saveCourse(values.title, values.description);
        dispatch(await loadNewCourse(newCourse));
        return newCourse;
    };

    const saveModifiedCourse = async (values) => {
        const courseToModify = {
            ...defaultValues,
            ...values
        };
        return await modifyCourse(courseToModify);
    };

    const onFinishFailed = () => {

    };

    return (
        <Form
            {...layout}
            name="basic"
            className="ant-advanced-search-form"
            initialValues={defaultValues}
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
                <Button type="primary" htmlType="submit" loading={loading}>
                    Save
                </Button>
            </Form.Item>
        </Form>
    );
};

export default CourseForm;
