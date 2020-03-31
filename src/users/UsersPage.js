import React, { Component } from 'react';
import {Col, Layout, Row} from 'antd';
import MyMenu from '../content/components/Menu';
import PageTitle from '../content/components/PageTitle';
import UsersTable from './UsersTable';

const { Header, Content } = Layout;

class UsersPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            collapsed: true,
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        return (
            <Layout style={{ height: '100vh' }}>
                <MyMenu />
                <Layout>
                    <Header className="site-layout-sub-header-background" style={{ height: '30px', padding: 0, paddingTop: '13px', paddingBottom: '12px', lineHeight: '18px', paddingLeft: '20px' }}>
                    </Header>
                    <Content style={{ }}>
                        <div className="site-layout-background" style={{ paddingTop: '20px', paddingLeft: "20px", minHeight: 360 }}>
                            <Row>
                                <Col>
                                    <PageTitle title="Users" />
                                </Col>
                            </Row>
                            <Row >
                                <Col>
                                    <UsersTable />
                                </Col>
                            </Row>
                        </div>
                    </Content>
                </Layout>
            </Layout>
        );
    }
};

export default UsersPage;
