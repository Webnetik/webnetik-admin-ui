import React, { useState } from 'react';
import {Button, Col, Drawer, Layout, Row} from 'antd';
import PageTitle from '../../common/components/PageTitle';
import UsersTable from './UsersTable';
import UserForm from './UserForm';
import FormDrawer from "./FormDrawer";

const { Header, Content } = Layout;

function UsersPage() {
    const [formDrawerVisible, setFormDrawerVisible] = useState(null);

    const openFormDrawer = () => {
        setFormDrawerVisible(!formDrawerVisible);
    };

    const closeDrawer = () => {
        setFormDrawerVisible(false);
    };

    return (
        <>
            <Header className="site-layout-sub-header-background">
                <PageTitle title="Users" />
            </Header>
            <Content>
                <div className="site-layout-background">
                    <Row>
                        <Col>
                            <UsersTable onEditUser={() => openFormDrawer()} />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <FormDrawer title='Edit user'
                                        visible={formDrawerVisible}
                                        closeDrawer={() => closeDrawer()}>
                                <UserForm onClick={() => closeDrawer()} />
                            </FormDrawer>
                        </Col>
                    </Row>
                </div>
            </Content>
        </>
    );
}

export default UsersPage;
