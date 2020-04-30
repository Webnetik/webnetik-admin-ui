import React from 'react';
import {Button, Col, Layout, Row} from 'antd';
import PageTitle from '../../common/components/PageTitle';
import {Link} from "react-router-dom";

function UsersPage() {
    const { Header, Content } = Layout;

    return (
        <>
            <Header className="site-layout-sub-header-background">
                <PageTitle title="Users" />
            </Header>
            <Content>
                <div className="site-layout-background">
                    <Row>
                        <Col span={24} style={{ paddingBottom: '20px' }}>
                            <Button type="primary"><Link to='/users/add-user'>Add user</Link></Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            fsdf
                        </Col>
                    </Row>
                </div>
            </Content>
        </>
    );
}

export default UsersPage;
