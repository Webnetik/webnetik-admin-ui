import React, { Component } from 'react';
import {Col, Layout, Row, Form, Input, Button} from 'antd';
import { login } from '../actions/login';
import {connect} from "react-redux";
import Spin from "antd/es/spin";

const { Content } = Layout;

class LoginForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            error: null
        };

        this.layout = {
            labelCol: { span: 8 },
            wrapperCol: { span: 16 },
        };
        this.tailLayout = {
            wrapperCol: { offset: 8, span: 16 },
        };
    }

    onFinish(values) {
        this.setState({
            isLoading: true,
            error: null,
        });
        this.props.login(values).catch(error => {
            this.setState({
                error
            });
        }).finally(() => {
            this.setState({
                isLoading: false
            })
        });
    };

    render() {
        return (
            <Content>
                {
                    this.state.error &&
                    <Row>
                        <Col span={12} offset={6}>
                            {
                                this.state.isLoading && <Spin />
                            }
                            <h1 style={{ color: 'red', fontWeight: 'normal', textAlign: 'center' }}>{this.state.error}</h1>
                        </Col>
                    </Row>
                }
                <Row>
                    <Col span={12} offset={6}>
                        <Form
                            {...this.layout}
                            name="basic"
                            initialValues={{ remember: true }}
                            onFinish={(values) => this.onFinish(values)}>
                            <Form.Item
                                label="Username"
                                name="username"
                                rules={[{ required: true, message: 'Please input your username!' }]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="Password"
                                name="password"
                                rules={[{ required: true, message: 'Please input your password!' }]}
                            >
                                <Input.Password />
                            </Form.Item>

                            <Form.Item {...this.tailLayout}>
                                <Button type="primary" htmlType="submit">
                                    Log in
                                </Button>
                            </Form.Item>
                        </Form>
                    </Col>
                </Row>
            </Content>
        );
    }
};

export default connect(null, { login })(LoginForm);
