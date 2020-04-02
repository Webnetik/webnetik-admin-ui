import React, { Component } from 'react';
import {Col, Layout, Row} from 'antd';
import PageTitle from '../../common/components/PageTitle';
import UsersTable from './UsersTable';
import FormSizeDemo from './AddUserForm';

const { Header, Content } = Layout;

class UsersPage extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <Header className="site-layout-sub-header-background">
                    <PageTitle title="Users" />
                </Header>
                <Content>
                    <div className="site-layout-background">
                        <Row >
                            <Col>
                                <UsersTable />
                            </Col>
                        </Row>
                        <Row >
                            <Col>
                                <FormSizeDemo />
                            </Col>
                        </Row>
                    </div>
                </Content>
            </>
        );
    }
};

export default UsersPage;
