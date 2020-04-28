import React, { useEffect, useState } from 'react'
import { loadCourses } from '../actions/index';
import CoursesTable from "./CoursesTable";
import {Col, Layout, Row, Button} from "antd";
import PageTitle from "../../common/components/PageTitle";
import CourseForm from "./CourseForm";
import { Link } from "react-router-dom";

function CoursesPage() {
    const { Header, Content } = Layout;
    let [courses, setCourses] = useState(null);
    let [loading, setLoading] = useState(false);

    useEffect(() => {
        const getCourses = async () => {
            //setLoading(true);
            //setCourses(await loadCourses());
            //setLoading(false);
        };
        getCourses();
    }, []);

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
