import React, { Component } from 'react';
import {Col, Row, Select} from 'antd';

const { Option } = Select;

const roles = ['administrator', 'editor', 'supporter'];

const capabilities = ['add new user', 'edit user', 'remove user', 'add new project', 'edit project', 'remove project', 'edit settings'];

const children = [];
for (let i = 0; i < capabilities.length; i++) {
    children.push(<Option key={capabilities[i]}>{capabilities[i]}</Option>);
}

function handleChange(value) {
    console.log(`selected ${value}`);
}

const selectField = () => {
    return(
        <>
            {
                roles.map(role => {
                    return (
                        <Row key={role} gutter={{ xs: 8, sm: 16, md: 24, lg: 38 }} className="pt-4">
                            <Col span={8} lg={3} style={{ color: "#999" }}  className="pt-1">
                                {role}
                            </Col>
                            <Col lg={5}>
                                <Select
                                    mode="multiple"
                                    style={{ minWidth: "200px" }}
                                    placeholder="Please select"
                                    defaultValue={'editor'}
                                    onChange={handleChange}>
                                    {children}
                                </Select>
                            </Col>
                        </Row>
                    )
                })
            }
        </>
    );
};

export default selectField;