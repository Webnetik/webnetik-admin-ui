import React from 'react'
import CoursesTable from "./CoursesTable";
import {Col, Layout, Row, Button} from "antd";
import PageTitle from "../../common/components/PageTitle";
import { Link } from "react-router-dom";

function CoursesPage() {
    const { Header, Content } = Layout;

    return (
        <>
            <Header className="site-layout-sub-header-background">
                <PageTitle title="Courses" />
            </Header>
            <Content>
                <div className="site-layout-background">
                    <Row>
                        <Col span={24} style={{ paddingBottom: '20px' }}>
                            <Button type="primary"><Link to='/courses/add-course'>Add new course</Link></Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <CoursesTable />
                        </Col>
                    </Row>
                </div>
            </Content>
        </>
    );
};

export default CoursesPage;
