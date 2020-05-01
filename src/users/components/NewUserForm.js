import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Form, Input, Button, Select} from 'antd';
import openNotification from "../../common/components/Notification";
import {loadNewCourse, modifyCourse, saveCourse} from "../../courses/actions";
import {getRoles2} from "../../roles-and-capabilities/actions";

function UserForm({ defaultValues }) {
    const [loading, setLoading] = useState(false);
    const [roles, setRoles] = useState(null);

    useEffect(() => {
        loadAllRoles();
    }, []);

    const loadAllRoles = () => {
        const getRoles = async () => {
            const roles = await getRoles2();
            const roleNames = roles.map(role => role.name);
            setRoles(roleNames);
        };

        getRoles();
    };

    const loadUserRoles = (defaultValues) => {
        if(!!defaultValues.roles) {
            defaultValues.roles = defaultValues.roles.map(role => role.name);
        }
        return defaultValues;
    };

    console.log('all roles: ', roles,  !!roles);

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
            const modifiedCourse = await saveModifiedCourse(values);
            openNotification({ title: 'Course modified', message: `Course '${modifiedCourse.title}' modified`, type: 'success' });
        } else {
            const newCourse = await saveNewCourse(values);
            openNotification({ title: 'Course created', message: `Course '${newCourse.title}' created`, type: 'success' });
        }*/
        setLoading(false);
    };

    const saveNewCourse = async (values) => {
        //const newCourse = await saveCourse(values.title, values.description);
        //dispatch(await loadNewCourse(newCourse));
        //return newCourse;
    };

    const saveModifiedCourse = async (values) => {
        /*const courseToModify = {
            ...defaultValues,
            ...values
        };
        return await modifyCourse(courseToModify);*/
    };

    const onFinishFailed = () => {

    };

    const getRolesNameSelectItems = () => {
        const items = [];
        for (let i = 0; i < roles.length; i++) {
            items.push(<Select.Option key={roles[i]}>{roles[i]}</Select.Option>);
        }
        return items;
    };

    const handleRoleChange = () => {
        console.log('on change');
    };

    if(!!roles) {
        return (
            <Form
                {...layout}
                name="basic"
                className="ant-advanced-search-form"
                initialValues={loadUserRoles(defaultValues)}
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
                        placeholder="Please select">
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
