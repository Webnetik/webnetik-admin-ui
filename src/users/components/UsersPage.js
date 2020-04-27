import React, { Component } from 'react';
import {Button, Col, Drawer, Layout, Row} from 'antd';
import PageTitle from '../../common/components/PageTitle';
import UsersTable from './UsersTable';
import UserForm from './UserForm';
import FormDrawer from "./FormDrawer";

const { Header, Content } = Layout;

class UsersPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            formDrawerVisible: false
        }
    }

    openFormDrawer() {
        this.setState({
            formDrawerVisible: !this.state.formDrawerVisible
        });
    }

    closeDrawer() {
        this.setState({
            formDrawerVisible: false
        });
    }

    render() {
        return (
            <>
                <Header className="site-layout-sub-header-background">
                    <PageTitle title="Users" />
                </Header>
                <Content>
                    <div className="site-layout-background">
                        <Row>
                            <Col>
                                <UsersTable onEditUser={() => this.openFormDrawer()} />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <FormDrawer title='Edit user'
                                            visible={this.state.formDrawerVisible}
                                            closeDrawer={() => this.closeDrawer()}>
                                    <UserForm onClick={() => this.closeDrawer()} />
                                </FormDrawer>
                            </Col>
                        </Row>
                    </div>
                </Content>
            </>
        );
    }
};

export default UsersPage;
