import React, {useEffect} from 'react'
import {Col, Layout, Row, Button} from "antd";
import PageTitle from "../../common/components/PageTitle";
import CourseForm from "./CourseForm";
import {Link} from "react-router-dom";

function AddNewCoursePage() {
    const { Header, Content } = Layout;

    useEffect(() => {
    }, []);

    return (
        <>
            <Header className="site-layout-sub-header-background">
                <PageTitle title="Users" />
            </Header>
            <Content>
                <div className="site-layout-background">
                    <Row>
                        <Col span={24} style={{ paddingBottom: '20px' }}>
                            <Button type="secondary"><Link to='/courses'>Back to courses</Link></Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <CourseForm />
                        </Col>
                    </Row>
                </div>
            </Content>
        </>
    );
};

export default AddNewCoursePage;
