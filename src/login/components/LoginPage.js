import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Col, Layout, Row} from 'antd';
import LoginForm from "./LoginForm";

const { Content } = Layout;

class LoginPage extends Component {
    render() {
        return (
            <>
                <Content>
                    <Row type='flex' align='middle' style={{ minHeight: '100vh' }}>
                        <Col span={12} offset={6}>
                            <LoginForm />
                        </Col>
                    </Row>
                </Content>
            </>
        );
    }
};

export default connect(null, {  })(LoginPage);
